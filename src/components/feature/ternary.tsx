import { useState } from "react";

export function ExampleTernary() {
    const [isVisible, setIsVisible] = useState(false);

    const myNumber = 26

    if (isVisible) {
        //do something
    }

const booleanToString = isVisible ? "visible" : "hidden"
const test = `${booleanToString}`

return (
    <div className = {`${isVisible ? "block" : "hidden"}`}>
        <h1 className="text-2xl">some text</h1>
        <p>
            Bla bla bla
        </p>
        {`my age is ${myNumber}`}
        my age is {myNumber}
        <p>this component is {booleanToString} {test}</p>
    </div>
);

}