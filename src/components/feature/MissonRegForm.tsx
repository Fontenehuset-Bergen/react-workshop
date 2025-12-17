
import { useState, useRef} from "react"
import { TextInput, type InputText} from "./inputs/TextInput"
import { DateInput, type InputDate } from "./inputs/DateInput";
import { type Priority, type InputPriority, PriorityInput } from "./inputs/PriorityInput";
import { getColor } from "./inputs/PriorityInput";
import { Footer } from "./Footer";
import { SortMenu } from "./SortMenu";

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

function getProperDateString(dateString : string) : string
{
    const date = new Date(dateString);
    if(!isNaN(date.getTime()))
    {
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return `${day}/${month}/${year}`
    
    }
    return dateString;
}

export function MissionRegForm()
{
  
    const [textInput, setTextInput] =  useState<string>("");

    const  [dateInput, setDateInput] = useState<string>(getTodaysDate());
    const [priorityInput, setPriorityInput] = useState<Priority>("Medium");
    const [missionList, updateList] = useState<MissionData[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>("");


    function handleMissionText(event)  {   setTextInput(event.target.value); setErrorMsg(""); }

    function handleMissionDate(event)
    {
        const dateString= event.target.value;

        
        if(dateString) setDateInput(dateString); 
  
    }

    function handlePriority(event) { setPriorityInput(event.target.value); }

    function doesEntryExists(mission: string, date: string) : boolean
    {
        let doesExist = false;
        missionList.map((current) =>
        {
            if(current.date == date && current.mission === mission) doesExist = true;
        });
        return doesExist;
   

    }
   
    function handleAddMission()
    {
        // do conditionals her hvis nødvendig

        console.log(doesEntryExists(getProperDateString(dateInput), textInput));
        if(!doesEntryExists( textInput, getProperDateString(dateInput)))
        {
            updateList((prevList) =>  [...prevList, { id : (missionList.length+1), mission : textInput, date : getProperDateString(dateInput), priority : priorityInput }]);
            // setDateInput("");
            // setTextInput("");
            // setPriorityInput("Medium");
        }
        else{ setErrorMsg("Duplicate.\nPlease retype."); }
    }

    function chackForValidInput() : boolean{
        if(textInput.length > 2)
        {
            const enteredDate = new Date(dateInput);
            if(!isNaN(enteredDate.getTime()))
            {
                const today = new Date();
                if(today.getDate() <= enteredDate.getDate()) return true;
            
            
            }
        }
        return false;
    }

    return(
           <>
           <main>
            <section className="missionListSection flex">
                <div className="regButtonWrapper flex">
                    <form className={`defaultForm grid`}>
                <TextInput value={textInput} description="Enter mission description :" handleChange={handleMissionText} placeholder="enter data here"/>
                <DateInput value={dateInput} description="Enter mission date :" handleChange={handleMissionDate}/>
                <PriorityInput value={priorityInput} description="Enter mission priority :" handleChange={handlePriority} />
        
                    </form>
                    
                
                    
                    <button className={`addMissionButton ${errorMsg ? "duplicate" : ""}`} key={errorMsg ? errorMsg : "newkey"} onClick={handleAddMission}  style={chackForValidInput() ? {transform :"rotateY(0deg)"  } : { transform: "rotateY(90deg)"}}>{errorMsg ? errorMsg: "Add mission"}</button> :
                    {/* <button key={errorMsg} className="addMissionButton" style={chackForValidInput() ? {transform :"rotateY(0deg)"  } : { transform: "rotateY(90deg)"}}>{errorMsg}</button>  */}
                                </div>

                <article className="missionListArticle">
                    <ul className="missionList flex">
                    {missionList.length > 0 ?
                        missionList.map((currentItem) => 
                            (
                                <li key={currentItem.id}  className="missionListItem grid"><span> {currentItem.date} </span><span>{currentItem.mission}</span>  <span style={{color: getColor(currentItem.priority) }}> {currentItem.priority}</span></li>

                            )) : <p>No entries found</p> 
                        
                    }
                </ul>
                </article>
            </section>
          </main>
          {/* <Footer key={errorMsg} errorMsg={errorMsg}/>            */}

          <SortMenu/>
           </>



    );

}