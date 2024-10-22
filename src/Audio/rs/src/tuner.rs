use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;
use web_sys::console;
use serde::{Serialize, Deserialize};
use crate::config::static_config::NOTES;

pub enum TunerValue {
    Str(String),
    Bool(bool),
    Int(i8)
}

#[wasm_bindgen]
#[derive(Serialize, Deserialize)]
pub struct Tuner {
    value: f32,
    raising: Option<bool>,
    note: Option<String>,
    degree: Option<i8>
}

#[wasm_bindgen]
impl Tuner {
    pub fn new(value:f32) -> Tuner {
        Tuner {
            value: value,
            raising: None,
            note: None,
            degree: None
        }
    }

    pub fn process(&self) -> JsValue {

        if let Some(notes) = NOTES.get() {
            if let Some(note) = notes.process(self.value) {
                return note.to_js_object();
            } else {
                console::log_1(&JsValue::from_str("No note found, returning new Tuner object"));
                return Tuner::new(0.0).to_js_object();
            }
        } else {
            console::log_1(&JsValue::from_str("NOTES is not initialized! Returning new Tuner object"));
            return Tuner::new(0.0).to_js_object();
        }
    }

    fn to_js_object(&self) -> JsValue {
        let tuner_obj = match serde_wasm_bindgen::to_value(&self) {
            Ok(obj) => obj,
            Err(err) => {
                console::log_1(&JsValue::from_str(&format!("Serialization error: {:?}", err)));
                JsValue::NULL
            }
        };
        
        tuner_obj
    }
    
}

impl Tuner {

    pub fn set(&mut self, value: TunerValue) {
        match value {
            TunerValue::Str(val) => self.note = Some(val),
            TunerValue::Bool(val) => self.raising = Some(val),
            TunerValue::Int(val) => self.degree = Some(val),
        }
    }
    
}

