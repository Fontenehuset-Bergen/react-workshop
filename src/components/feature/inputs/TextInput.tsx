import type { ChangeEventHandler } from "react";

export interface Input {
    description? : string, 
    placeholder? : string, 
    cssClassLabel? :  string,
    cssClassInput? : string, 
    handleChange : (event : ChangeEventHandler<HTMLInputElement>) => void

    // iconUrl: string
}

export interface InputText extends Input
{
      value : string
}


export function TextInput({description, placeholder, cssClassLabel, cssClassInput , value, handleChange} : InputText)
{
        
    return(
         <label className={`textLabelText ${cssClassLabel}`}> {description}
            <input value={value} onChange={handleChange} type="text" name="textInput" className={`inputText ${cssClassInput}`} placeholder={placeholder}/>
        </label>
    );

}