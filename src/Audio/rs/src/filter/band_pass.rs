use wasm_bindgen::prelude::*;
use web_sys::console;
use wasm_bindgen::JsValue;


#[wasm_bindgen]
pub(crate) struct BandPassFilter {
    sample_rate: f32,
    low_cut_freq: f32,
    high_cut_freq: f32,
    gain: f32,
    prev_in: [f32; 2],
    prev_out: [f32; 2]
}

#[wasm_bindgen]
impl BandPassFilter {

    pub fn new(sample_rate: f32, low_cut_freq: f32, high_cut_freq: f32, gain: f32) -> Self {
        Self {
            sample_rate,
            low_cut_freq,
            high_cut_freq,
            gain,
            prev_in: [0.0; 2],
            prev_out: [0.0; 2],
        }
    }

    pub fn set_parameters(&mut self, low_cut_freq: f32, high_cut_freq: f32, gain: f32) {
        self.low_cut_freq = low_cut_freq;
        self.high_cut_freq = high_cut_freq;
        self.gain = gain;
    }

    pub fn process(&mut self, input: f32) -> f32 {
        // Angular frequencies
        let omega_low = 2.0 * std::f32::consts::PI * self.low_cut_freq / self.sample_rate;
        let omega_high = 2.0 * std::f32::consts::PI * self.high_cut_freq / self.sample_rate;

        // Filter coefficients for second-order band-pass
        let q_factor = (omega_high - omega_low) / (omega_high + omega_low);
        let alpha = q_factor / (1.0 + q_factor);
        let a0 = 1.0 + alpha;
        let a1 = -2.0 * alpha;
        let a2 = alpha;
        let b0 = alpha * self.gain;
        let b1 = 0.0;
        let b2 = -alpha * self.gain;

        // Apply difference equation for the filter
        let output = (b0 * input + b1 * self.prev_in[0] + b2 * self.prev_in[1]
            - a1 * self.prev_out[0] - a2 * self.prev_out[1])
            / a0;

        // Shift previous inputs and outputs
        self.prev_in[1] = self.prev_in[0];
        self.prev_in[0] = input;
        self.prev_out[1] = self.prev_out[0];
        self.prev_out[0] = output;

        output
    }
}
