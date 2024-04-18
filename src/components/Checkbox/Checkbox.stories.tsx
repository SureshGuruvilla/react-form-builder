import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
};

export const Valid = () => (
  <Checkbox label="label" id="checkbox" checked={true} onChange={() => {}} />
);
export const InValid = () => (
  <Checkbox
    label="label"
    id="invalid-checkbox"
    checked={false}
    onChange={() => {}}
    required
    error="Required fields"
  />
);
