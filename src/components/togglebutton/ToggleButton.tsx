import { useToggle } from "../../hooks/useToggle";

const ToggleButton = () => {
  const { on, toggle } = useToggle(false);
  return (
    <button
      onClick={() => toggle()}
      className={on ? "green toggle-button" : "red toggle-button"}
    >
      Toggle me
    </button>
  );
};

export default ToggleButton;
