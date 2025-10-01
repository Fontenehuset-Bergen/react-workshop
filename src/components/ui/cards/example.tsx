import { useState, type ChangeEvent } from "react"

interface ExampleProps {
    names: string[]
}



export function ExampleUseState({names}:ExampleProps){
  
    const [filteredNames, setFilteredNames] = useState(names)

    function handleChange(event: ChangeEvent<HTMLInputElement>){
    const searchInput= event.currentTarget.value

     const newName = names.filter((name) => name.includes(searchInput) )
     setFilteredNames(newName)
     console.log(searchInput)
   }

    return(
        <div className="flex flex-col ">
            <h2>Available names:</h2>
            <span className="flex">
                {names.map( (name, index)=> <p key={name + index}>{name}</p>)}
            </span>
             <input onChange={handleChange}/>
              <span>
                {filteredNames.map( (name, index)=> <p key={name + index}>{name}</p>)}
            </span>
           
        </div>
    )
}