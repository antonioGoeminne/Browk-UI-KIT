"use client";

import { Checkbox, Input, Radio, Toggle } from "@ui/index-client";


export const WrapperClients = () => {
  return (
    <>
      <Toggle id="toggle-test" />
      <Checkbox id="checkbox" label="Test"/>
      <Radio id="radio-test" label="radio"/>
      <Input label="test" id="test-input"/> 
    </>
  );
};
