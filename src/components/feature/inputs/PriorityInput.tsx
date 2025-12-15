import { type Input } from "./TextInput";

export type Priority = "Low" | "Medium" | "High";

export interface InputPriority extends Input 
{
    value : Priority

}

const defaultStatus : Priority = "Medium";

export function PriorityInput({description, cssClassLabel, cssClassInput, handleChange } : InputPriority)
{
    return(
         <label className={`textLabelDefault ${cssClassLabel}`}> {description}
            <select onChange={handleChange} value={defaultStatus} type="text" name="priorityInput" className={`textInputDefault ${cssClassInput}`} >
                <option value="Low">Low Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="High">High Priority</option>
            </select>
        </label>
    );

}     