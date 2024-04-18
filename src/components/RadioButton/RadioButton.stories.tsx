import React from "react";
import RadioButton from "./RadioButton";

export default {
  title: "RadioButton",
  component: RadioButton,
};

export const Sample = () => (
  <RadioButton
    type={"radio"}
    id={"radiobutton"}
    options={["one", "two"]}
    onChange={() => {}}
  />
);
