import { type Input } from "./TextInput";

export type Priority = "Low" | "Medium" | "High";

export interface InputPriority extends Input 
{
    value : Priority

}

export const getColor = (priority : Priority) : string => 
{
    let returnColor : string = "cyan";
    switch(priority)
    {
        case "Low" : returnColor = "blue";
                     break;
        case "Medium" : returnColor = "green";
                     break;

        case "High" : returnColor = "red";
                     break;
        default : returnColor = "green";
                  break;
    }

    return(returnColor);
}


const defaultStatus : Priority = "Medium";

export function PriorityInput({description, cssClassLabel, cssClassInput, handleChange, value } : InputPriority)
{
    return(
         <label className={`textLabelPriority ${cssClassLabel}`}> {description}
            <select   style={{color : getColor(value)}} onChange={handleChange} value={value} type="text" name="priorityInput" className={`inputPriority ${cssClassInput}`} >
                <option style={{color : "blue"}} value="Low">Low Priority</option>
                <option style={{color : "green"}}value="Medium">Medium Priority</option>
                <option style={{color : "red"}}value="High">High Priority</option>
            </select>
        </label>
    );

}     