
import { useState, useRef} from "react"
import { TextInput, type InputText} from "./inputs/TextInput"
import { DateInput, type InputDate } from "./inputs/DateInput";
import { type Priority, type InputPriority, PriorityInput } from "./inputs/PriorityInput";
import { getColor } from "./inputs/PriorityInput";
import { Header} from "./Header"
// export interface MissonData 
// {
//     mission : InputText,
//     date : InputDate,
//     priority : InputPriority
//     cssClass? : string,
// };

interface MissionData 
{
    id : number,
    mission : string,
    date : string,
    priority : Priority
    iconUrl? : string,
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
    const [missionList, updateList] = useState<MissionData[]>([]);
    const [errorMessage, setErrorMessage] = useState<String>("");

    function handleMissionText(event)  {   setTextInput(event.target.value);  }

    function handleMissionDate(event)
    {
        const dateString= event.target.value;

        
        if(dateString) setDateInput(dateString); 
  
    }

    function handlePriority(event) { setPriorityInput(event.target.value); }

    function handleAddMission() : MissionData[]
    {
        // do conditionals her hvis nødvendig
        updateList((prevList) =>  [...prevList, { id : (missionList.length+1), mission : textInput, date : dateInput, priority : priorityInput }]);
     
        
    }
   
    return(
           <>
              
                <section className="missionListSection flex">
                  <div className="regButtonWrapper flex">
                      <form className={`defaultForm grid`}>
                    <TextInput value={textInput} description="Enter mission description :" handleChange={handleMissionText} placeholder="enter data here"/>
                    <DateInput value={dateInput} description="Enter mission date :" handleChange={handleMissionDate}/>
                    <PriorityInput value={priorityInput} description="Enter mission priority :" handleChange={handlePriority} />
            
                     </form>
                    <button onClick={handleAddMission} className="addMissionButton">Add Mission</button>
               
                  </div>

                {/* <div style={{display:"grid", gridTemplateColumns: "repeat(3, 25rem)"}}>
                    <p>{textInput}</p>
                    <p>{dateInput}</p>
                    <p>{priorityInput}</p>
                </div>
                <div>{errorMessage};
                </div> */}
                <article className="missionListArticle">
                    <ul className="missionList flex">
                    {missionList.length > 0 ?
                        missionList.map((currentItem) => 
                            (
                                <li key={currentItem.id}  className="missionListItem grid"><span> {currentItem.date} </span><span>{currentItem.mission}</span>  <span style={{color: getColor(currentItem.priority) }}> {currentItem.priority}</span></li>

                            )) : <p>No entries found</p> 
                        
                    }
                   </ul></article>
               </section>
             
                
           </>



    );

}