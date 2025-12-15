
import { useState, useRef} from "react"
import { TextInput, type InputText} from "./inputs/TextInput"
import { DateInput, type InputDate } from "./inputs/DateInput";
import { type Priority, type InputPriority } from "./inputs/PriorityInput";


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
    const  [dateInput, setDateInput] = useState<Date | null>(new Date());
    const [priorityInput, setPriorityInput] = useState<Priority>("Medium");
    const [missionList, updateList] = useState<MissonData[]>([]);


    function handleMissionText(event)
    {
        setTextInput(event.target.value);
    }

    function handleMissionDate(event)
    {
        const dateString= event.target.value;

        dateString ? setDateInput(new Date(dateString)) : setDateInput(null);
        console.log(dateInput?.getDate().toString());
    }
    
    
    return(
           <>
               <form className={`defaultForm grid`}>
                    <TextInput value={textInput} description="Enter mission desScription :" handleChange={handleMissionText} placeholder="enter data here"/>
                    <DateInput value={dateInput} description="Enter mission date :" handleChange={handleMissionDate} placeholder="not set"/>
                    <PriorityInput description="Enter mission priority :" handleChange={handleMissionDate}  value="Medium"/>
                </form>
            
           </>



    );

}