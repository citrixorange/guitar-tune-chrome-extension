import init, { WasmPitchDetector, BandPassFilter } from "../../wasm-audio/rs.js"

class AudioWorker extends AudioWorkletProcessor {
  constructor() {
    super();

    this.samples = [];
    this.filteredSamples = [];
    this.totalSamples = 0;
    this.port.onmessage = (event) => this.onmessage(event.data);
    this.detector = null;
    //this.filter = null;
    this.powerThreashold = 5.0;
    this.clarityThreashold = 0.7;
    //this.lowCutOffFreq = 50.0;
    //this.highCutOffFreq = 300.0;
    //this.gain = 1.5;

  }

  onmessage(event) {
    if (event.type === "send-wasm-module") {
      init(WebAssembly.compile(event.wasmBytes)).then(() => {
        this.port.postMessage({ type: 'wasm-module-loaded' });
      });
    } else if (event.type === 'init-detector') {
      const { sampleRate, numAudioSamplesPerAnalysis } = event;
      this.numAudioSamplesPerAnalysis = numAudioSamplesPerAnalysis;
      //this.filter = BandPassFilter.new(sampleRate, this.lowCutOffFreq, this.highCutOffFreq, this.gain);
      this.detector = WasmPitchDetector.new(sampleRate, numAudioSamplesPerAnalysis);
      this.samples = new Array(numAudioSamplesPerAnalysis).fill(0);
      //this.filteredSamples = new Array(numAudioSamplesPerAnalysis).fill(0);
      this.totalSamples = 0;
    } else if (event.type === 'send-wasm-parameters') {
      this.powerThreashold = event.parameters["Power"];
      this.clarityThreashold = event.parameters["Clarity"];
      //this.lowCutOffFreq = event.parameters["LowCutOffFreq"];
      //this.highCutOffFreq = event.parameters["HighCutOffFreq"];
      //this.gain = event.parameters["Gain"];
      //if(this.filter) {
      //  this.filter.set_parameters(this.lowCutOffFreq, this.highCutOffFreq, this.gain);
      //}
    }
  };

  process(inputs) {

    const inputChannels = inputs[0];
    const inputSamples = inputChannels[0];

    //if(this.filter) {
      
    if (this.totalSamples < this.numAudioSamplesPerAnalysis) {
      for (const sampleValue of inputSamples) {
        this.samples[this.totalSamples++] = sampleValue;
        //let a = this.filter.process(sampleValue);
        //this.filteredSamples[this.totalSamples++] = a;
      }
    } else {
      const numNewSamples = inputSamples.length;
      const numExistingSamples = this.samples.length - numNewSamples;
      for (let i = 0; i < numExistingSamples; i++) {
        this.samples[i] = this.samples[i + numNewSamples];
        //this.filteredSamples[i] = this.filteredSamples[i + numNewSamples];
      }
      // Add the new samples onto the end, into the 128-wide slot vacated by
      // the previous copy.
      for (let i = 0; i < numNewSamples; i++) {
        this.samples[numExistingSamples + i] = inputSamples[i];
        //this.filteredSamples[numExistingSamples + i] = this.filter.process(inputSamples[i]);
      }
      this.totalSamples += inputSamples.length;
    }

    // Once our buffer has enough samples, pass them to the Wasm pitch detector.
    if (this.totalSamples >= this.numAudioSamplesPerAnalysis && this.detector) {

      const result = this.detector.detect_pitch(this.samples, this.powerThreashold, this.clarityThreashold);

      if (result !== 0) {
        this.port.postMessage({ type: "pitch", pitch: result });
      }
    }
  
    //}

    // Returning true tells the Audio system to keep going.
    return true;
  }
}

registerProcessor("AudioWorker", AudioWorker);