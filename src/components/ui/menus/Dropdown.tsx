import { useState} from "react"

export function DropdownMenu() {
    const [isVisible, setIsVisible] = useState(false)

    function handleVisibility(){
        setIsVisible(old => !old)
    }

    return (
    <div>
        <button onClick={handleVisibility}>Open menu</button>
        {isVisible && (
          <div>
            <button>Edit profile</button>
            <button>Check notifications</button>
          </div>
            )}
    </div>
    );
}