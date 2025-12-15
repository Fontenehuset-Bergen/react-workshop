import { type Input } from "./TextInput";

export interface InputDate extends Input {
    value : string
}

export function DateInput({description, placeholder, cssClassLabel, cssClassInput , value, handleChange} : InputDate)
{
        
    return(
         <label className={`textLabelDate ${cssClassLabel}`}> {description}
            <input value={value} onChange={handleChange} type="date" name="dateInput" className={`inputDate ${cssClassInput}`} placeholder={placeholder}/>
        </label>
    );

}