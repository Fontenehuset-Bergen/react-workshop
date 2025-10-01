import { useState } from "react";

export function DropdownMenu() {
  const [isVisible, setIsVisible] = useState(false);

  function handleVisibility() {
    setIsVisible(old => !old)
  }

  return (
    <div>
      <button onClick={handleVisibility}>Open menu</button>
      {isVisible && (
        <div>
          <button>Edit Profile</button>
          <button>Check Notifications</button>
        </div>
      )}
    </div>
  );
}
