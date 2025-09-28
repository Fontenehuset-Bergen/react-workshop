import { useState } from "react";

export function DropdownMenu() {
  const [isVisible, setIsVisible] = useState(false);

  function handleVisiblity() {
    setIsVisible((old) => !old);
  }

  return (
    <div>
      <button onClick={handleVisiblity} className="flex-1 red">Open menu</button>
      {isVisible && (
        <div>
          <button>Edit profile</button>
          <button>Check notifications</button>
        </div>
      )}
    </div>
  );
}
