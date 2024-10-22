import init, { Tuner, initialize_notes } from "../../../../public/wasm-audio/rs.js"

class Dispatcher extends AudioWorkletNode {

    wasm_load = false;
    /**
     * Initialize the Audio processor by sending the fetched WebAssembly module to
     * the processor worklet.
     *
     * @param {ArrayBuffer} wasmBytes Sequence of bytes representing the entire
     * WASM module that will handle pitch detection.
     * @param {number} numAudioSamplesPerAnalysis Number of audio samples used
     * for each analysis. Must be a power of 2.
     */
    init(wasmBytes, tuneDetectionCallback, numAudioSamplesPerAnalysis) {

        this.tuneDetectionCallback = tuneDetectionCallback;
        this.numAudioSamplesPerAnalysis = numAudioSamplesPerAnalysis;

        // Listen to messages sent from the audio processor.
        this.port.onmessage = (event) => this.onmessage(event.data);

        this.wasmBytes = wasmBytes;

        this.port.postMessage({
            type: "send-wasm-module",
            wasmBytes,
        });
    }

    // Handle an uncaught exception thrown in the PitchProcessor.
    onprocessorerror(err) {
        console.log(
        `An error from AudioWorkletProcessor.process() occurred: ${err}`
        );
    };

    onmessage(event) {
        if (event.type === 'wasm-module-loaded') {
            // The Wasm module was successfully sent to the PitchProcessor running on the
            // AudioWorklet thread and compiled. This is our cue to configure the pitch
            // detector.

            this.port.postMessage({
                type: "init-detector",
                sampleRate: this.context.sampleRate,
                numAudioSamplesPerAnalysis: this.numAudioSamplesPerAnalysis
            });

        } else if (event.type === "pitch") {

            if(this.wasm_load == false) {
                init(WebAssembly.compile(this.wasmBytes)).then(() => {
                    fetch('NOTES_TABLE.json')
                    .then((response) => response.json())
                    .then(jsonData => {
                        initialize_notes(JSON.stringify(jsonData));
                        this.wasm_load = true;
                    })
                });
            } else {
                let tuner = Tuner.new(event.pitch);
                let t = tuner.process();
                this.tuneDetectionCallback(t);
            }
        }
    }
}

export {
    Dispatcher
}