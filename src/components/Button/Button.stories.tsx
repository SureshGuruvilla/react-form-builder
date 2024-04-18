import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const GenericButton = () => (
  <Button
    id="generic-button"
    type="button"
    value="GenericButton"
    onClick={() => {}}
  />
);
export const SubmitButton = () => (
  <Button id="submit-button" type="submit" value="SubmitButton" />
);
