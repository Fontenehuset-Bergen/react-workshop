import { useRef, useState } from "react";

interface MyButtonProps {
  label: string;
  className?: "";
}

export function MyButton({ label, className }: MyButtonProps) {
  const [value, setValue] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const ref = useRef(1)

  return (
    <>
      <button
        className={`flex ${className ? className : ""}`}
        onClick={() => setValue(value + 1)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {label} {value}
      </button>
      {showTooltip && <p>Click me to increase the value</p>}
    </>
  );
}
