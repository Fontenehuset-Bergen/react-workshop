
import { useState, useRef} from "react"
import { TextInput, type InputText} from "./inputs/TextInput"
import { DateInput, type InputDate } from "./inputs/DateInput";
import { type Priority, type InputPriority, PriorityInput } from "./inputs/PriorityInput";


export interface MissonData 
{
    mission : InputText,
    date : InputDate,
    priority : InputPriority
    cssClass? : string,
};

function getTodaysDate() : string 
{
  const today = new Date();
  const offset = today.getTimezoneOffset();
  today.setMinutes(today.getMinutes() - offset);
  return today.toISOString().split("T")[0];
}

export function MissionRegForm()
{
  
    const [textInput, setTextInput] =  useState<string>("");

    const  [dateInput, setDateInput] = useState<string>(getTodaysDate());
    const [priorityInput, setPriorityInput] = useState<Priority>("Medium");
    const [missionList, updateList] = useState<MissonData[]>([]);


    function handleMissionText(event)
    {
        setTextInput(event.target.value);
    }

    function handleMissionDate(event)
    {
        const dateString= event.target.value;

        if(dateString) setDateInput(dateString); 

    }
    
    const handlePriority = (event) => setPriorityInput(event.target.value);
    
    return(
           <>
               <form className={`defaultForm grid`}>
                    <TextInput value={textInput} description="Enter mission description :" handleChange={handleMissionText} placeholder="enter data here"/>
                    <DateInput value={dateInput} description="Enter mission date :" handleChange={handleMissionDate}/>
                    <PriorityInput value={priorityInput} description="Enter mission priority :" handleChange={handlePriority} />
                </form>
                <p>{textInput}</p>
                <p>{dateInput}</p>
                <p>{priorityInput}</p>
            
           </>



    );

}