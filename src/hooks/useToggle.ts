import { useState } from "react";

export const useToggle = (defaultValue: boolean) => {
  const [on, setToggle] = useState<boolean>(defaultValue);

  const toggle = () => {
    if (on) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const reset = () => {
    setToggle(defaultValue);
  };

  return { on, toggle, reset };
};
