import React from "react";
import Dropdown from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
};

export const Sample = () => (
  <Dropdown
    onSelect={() => {}}
    type={"dropdown"}
    id={"dropdown"}
    options={["one", "two", "three"]}
  />
);
