import { useState } from "react";

export const useLocalStorage = (key: string, initialValue: any) => {
  const [localState, setLocalState] = useState(initialValue);

  const handleSetState = (key: string, value: any) => {
    localStorage.setItem(key, value);
    setLocalState(value);
  };

  return { localState, handleSetState };
};
