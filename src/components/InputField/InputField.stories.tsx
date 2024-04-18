import React from "react";
import InputField from "./InputField";

export default {
  title: "InputField",
  component: InputField,
};

export const Text = () => (
  <InputField type="text" onChange={() => {}} id={"text"} />
);
export const Password = () => (
  <InputField type="password" onChange={() => {}} id={"text"} />
);
export const Color = () => (
  <InputField type="color" onChange={() => {}} id={"text"} />
);
export const Number = () => (
  <InputField type="number" onChange={() => {}} id={"text"} />
);
export const DateTime = () => (
  <InputField type="datetime-local" onChange={() => {}} id={"text"} />
);
export const File = () => (
  <InputField type="file" onChange={() => {}} id={"text"} />
);
