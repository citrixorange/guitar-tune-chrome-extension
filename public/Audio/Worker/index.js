import init, { WasmPitchDetector } from "../../wasm-audio/rs.js"

class AudioWorker extends AudioWorkletProcessor {
  constructor() {
    super();

    this.samples = [];
    this.totalSamples = 0;
    this.port.onmessage = (event) => this.onmessage(event.data);
    this.detector = null;

  }

  onmessage(event) {
    if (event.type === "send-wasm-module") {

      init(WebAssembly.compile(event.wasmBytes)).then(() => {
        this.port.postMessage({ type: 'wasm-module-loaded' });
      });
    } else if (event.type === 'init-detector') {
      const { sampleRate, numAudioSamplesPerAnalysis } = event;
      this.numAudioSamplesPerAnalysis = numAudioSamplesPerAnalysis;
      this.detector = WasmPitchDetector.new(sampleRate, numAudioSamplesPerAnalysis);
      this.samples = new Array(numAudioSamplesPerAnalysis).fill(0);
      this.totalSamples = 0;
    }
  };

  process(inputs, outputs) {

    const inputChannels = inputs[0];
    const inputSamples = inputChannels[0];


    if (this.totalSamples < this.numAudioSamplesPerAnalysis) {
      for (const sampleValue of inputSamples) {
        this.samples[this.totalSamples++] = sampleValue;
      }
    } else {
      const numNewSamples = inputSamples.length;
      const numExistingSamples = this.samples.length - numNewSamples;
      for (let i = 0; i < numExistingSamples; i++) {
        this.samples[i] = this.samples[i + numNewSamples];
      }
      // Add the new samples onto the end, into the 128-wide slot vacated by
      // the previous copy.
      for (let i = 0; i < numNewSamples; i++) {
        this.samples[numExistingSamples + i] = inputSamples[i];
      }
      this.totalSamples += inputSamples.length;
    }

    // Once our buffer has enough samples, pass them to the Wasm pitch detector.
    if (this.totalSamples >= this.numAudioSamplesPerAnalysis && this.detector) {
      const result = this.detector.detect_pitch(this.samples);

      if (result !== 0) {
        this.port.postMessage({ type: "pitch", pitch: result });
      }
    }

    // Returning true tells the Audio system to keep going.
    return true;
  }
}

registerProcessor("AudioWorker", AudioWorker);