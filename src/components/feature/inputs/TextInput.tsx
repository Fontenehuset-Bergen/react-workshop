import type { ChangeEventHandler } from "react";

export interface Input {
    description? : string, 
    placeholder? : string, 
    cssClassLabel? :  string,
    cssClassInput? : string, 
    handleChange : (event : ChangeEventHandler<HTMLInputElement>)

    // iconUrl: string
}

export interface InputText extends Input{
      value : string
}


export function TextInput({description, placeholder, cssClassLabel, cssClassInput , value, handleChange} : InputText)
{
        
    return(
         <label className={`textLabelDefault ${cssClassLabel}`}> {description}
            <input value={value} onChange={handleChange} type="text" name="textInput" className={`textInputDefault ${cssClassInput}`} placeholder={placeholder}/>
        </label>
    );

}