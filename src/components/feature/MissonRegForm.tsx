
import { useState, useRef} from "react"
import { TextInput, type InputText} from "./inputs/TextInput"
import { DateInput, type InputDate } from "./inputs/DateInput";
import { PriorityInput, type InputPriority } from "./inputs/PriorityInput";


export interface MissonData 
{
    mission : InputText,
    date : InputDate,
    priority : InputPriority

    cssClass? : string,
};


export function MissionRegForm()
{
    const [textInput, setTextInput] =  useState<string>("");
    const  [dateInput, setDateInput] = useState<Date>(new Date());

    function handleMissionText(event)
    {
        setTextInput(event.target.value);
    }

    function handleMissionDate(event)
    {
        dateInput.setDate(event.target.value);
    }

    
    return(
           <>
               <form className={`defaultForm grid`}>
                    <TextInput value={textInput} description="Enter mission description :" handleChange={handleMissionText} placeholder="enter data here"/>
                    <DateInput value={dateInput} description="Enter mission date :" handleChange={handleMissionDate} placeholder="not set"/>
                    <PriorityInput description="Enter mission priority :" handleChange={handleMissionDate}  value="Medium"/>
                </form>
           </>



    );

}