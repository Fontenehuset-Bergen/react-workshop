import { useState, type ChangeEvent } from "react"

interface ExampleProps {
    names: string[]
}

export function ExampleUseState({names}: ExampleProps) {
    const [filteredNames, setFilteredNames] = useState(names);
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const searchInput = event.currentTarget.value
        const newNames = names.filter((name)=> name.includes(searchInput))
        setFilteredNames(newNames)
    }
    return <div>
        <h2 className="flex flex-col w96">Available names:</h2>
        <span className="flex gap-2">
            {names.map((name, index)=><p key={name + index}>{name}</p>)}
        </span>
        <input className="bg-white text-black" onChange={handleChange} />
        <h2>Filtered Names:</h2>
        <span className="flex gap-2">
            {filteredNames.map((name, index)=><p key={name + index}>{name}</p>)}
        </span>
    </div>
}