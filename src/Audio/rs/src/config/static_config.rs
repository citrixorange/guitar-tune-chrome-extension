use serde::Deserialize;
use serde::de::Deserializer;
use web_sys::console;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;
use crate::tuner::{Tuner, TunerValue};
use once_cell::sync::OnceCell;

#[wasm_bindgen]
pub fn initialize_notes(json_data: &str) {
    let notes: Notes = serde_json::from_str(json_data).expect("Unable to parse static config Json file");
    if NOTES.set(notes).is_err() {
        console::log_1(&JsValue::from_str("NOTES already initialized!"));
    } else {
        console::log_1(&JsValue::from_str("NOTES initialized successfully!"));
    }
}

pub(crate) static NOTES: OnceCell<Notes> = OnceCell::new();

#[derive(Debug, Deserialize)]
pub(crate) struct Notes {
    notes: Vec<Note>
}

impl Notes {
    pub(crate) fn process(&self, freq: f32) -> Option<Tuner> {

        if let Some(note) = self.notes.iter().find(|n| n.range.0 <= freq && freq <= n.range.1) {
            let mut tunner = Tuner::new(freq);
            tunner.set(TunerValue::Bool(true));
            tunner.set(TunerValue::Str(note.note.clone()));
            if freq == note.value {
                tunner.set(TunerValue::Int(0));
            } else {
                let degree: f32 = (freq - note.value)*90.0/(note.range.1 - note.range.0);
                tunner.set(TunerValue::Int(degree as i8));
            }
            
            return Some(tunner);
        } else {
            console::log_1(&JsValue::from_str(&format!("Iter Fails")));
            return None;
        }
    }
}

#[derive(Debug, Deserialize)]
pub(crate) struct Note {
    note: String,
    octave: i8,
    value: f32,
    #[serde(deserialize_with = "deserialize_range")]
    range: (f32,f32)
}

fn deserialize_range<'de, D>(deserializer: D) -> Result<(f32, f32), D::Error>
where
    D: Deserializer<'de>
{
    let vec = Vec::<f32>::deserialize(deserializer)?;

    Ok((vec[0], vec[1]))
}
