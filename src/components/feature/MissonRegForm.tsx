
import { useState, useEffect

} from "react"
import { TextInput, type InputText} from "./inputs/TextInput"
import { DateInput, type InputDate } from "./inputs/DateInput";
import { type Priority, type InputPriority, PriorityInput } from "./inputs/PriorityInput";
import { getColor } from "./inputs/PriorityInput";
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
    priority : Priority,
    animDelay? : string,
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
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const monthstr = month < 10 ? `0${month}` : `${month}`
        return `${day}/${monthstr}/${year}`
    
    }
    return dateString;
}

export type SortMenuOptions = "byDate" | "byPriority" | "unsorted";
export type Transform = "rotateY(0deg)" | "rotateY(90deg)" | "rotateY(-90deg)";

export function MissionRegForm()
{
  
    const [textInput, setTextInput] =  useState<string>("");

    const  [dateInput, setDateInput] = useState<string>(getTodaysDate());
    const [priorityInput, setPriorityInput] = useState<Priority>("Medium");
    const [missionList, updateList] = useState<MissionData[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [fireTransition, setNewTransition] = useState<number>(0);
    const [showSortMenu, setShowSortMenu] = useState<boolean>(false);
    const [transformType, setTransformType] = useState<Transform>("rotateY(90deg)");




    function handleMissionText(event)  {   setTextInput(event.target.value); setErrorMsg(""); }

    function handleMissionDate(event)
    {
        const dateString= event.target.value;
        
        setErrorMsg("");
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
         
            updateList((prevList) => 
            {
               if(prevList.length == 1)  setTransformType("rotateY(0deg)");
               return  [...prevList, { id : (missionList.length+1), mission : textInput, date : getProperDateString(dateInput), priority : priorityInput }];
            });
       
            setTextInput("");
            setPriorityInput("Medium");
        }
        else
        { 
            setErrorMsg("Duplicate.\nPlease retype.");
            setNewTransition((old) => old + 1);
        
        }
        
    }

    function chackForValidInput() : boolean{
        if(textInput.length > 2)
        {
            const enteredDate = new Date(dateInput);
            if(!isNaN(enteredDate.getTime()))
            {
                const today = new Date();
                if(today.getFullYear() < enteredDate.getFullYear()) return true;
                if(today.getDate() <= enteredDate.getDate())
                    {
                       
                         return true; 
                    }
            
            }
        }
        return false;
    }

    

    const [sortOrder, setSortOrder] = useState<SortMenuOptions>("unsorted")

    function getDateObject(dateString : string) : Date
    {
        const stringArray: string[] = dateString.split("/");
        let [day, month, year] = stringArray;
        
        if(month.length < 2) month = `0${month}`
        // console.log(stringArray);
        return new Date(`${year}-${month}-${day}`);

    }

    function getPriorityNumber(priority : Priority)
    {
        let num = 2;
        switch(priority)
        {
            case "High" : num = 1;
                          break;

            case "Medium" : num = 2;
                            break;
                            
            case "Low" : num = 3;
                         break;
                         
            default: break;                         
                        
        }
        return num;

    }

    function setListAnimDelay(start : number, delayInc : number,  newList : MissionData[])
    {
        let delay = start;
        // gå gjennom liste for å gjøre animasjon inn litt senere for hvert item
        console.log(newList);
        newList.forEach((item) => { item.animDelay = `${delay}ms`; delay += delayInc});
        console.log(newList);
        return newList;

    }

    function sortedList()
    {
        let newList : MissionData[];
        if(sortOrder === "byDate")  newList =  [...missionList].sort((a,b) => getDateObject(a.date).getTime() -getDateObject(b.date).getTime());
        else    if(sortOrder === "byPriority")
                {
                    newList = [...missionList].sort((a, b) => 
                    {
                    if(getPriorityNumber(a.priority) == getPriorityNumber(b.priority)) return getDateObject(a.date).getTime() - getDateObject(b.date).getTime();
                    else return getPriorityNumber(a.priority) - getPriorityNumber(b.priority);

                    });
                }
                else newList = [... missionList];

        // let delay = 0;
        // const delayInc = 1200;
        // // gå gjennom liste for å gjøre animasjon inn litt senere for hvert item
        // console.log(newList);
        // newList.forEach((item) => { item.animDelay = `${delay}ms`; delay += delayInc});
        // console.log(newList);

        return newList;
    }



    useEffect( () =>
    {
          const handleMenuToggle = (event) => 
          {
              if(event.ctrlKey && event.key === "m")
              {
                  event.preventDefault();
                  console.log("ctrl + m detected");
                  setTransformType((prev) => prev === "rotateY(0deg)" ? "rotateY(90deg)" : "rotateY(0deg)");
                                  
  
              }
          }                    
          window.addEventListener("keydown",  handleMenuToggle);
                 
          
          return () => { window.removeEventListener("keydown", handleMenuToggle) } ;
  
    }, []);
    


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
                    {errorMsg.length > 0  ? 
                    <div key={fireTransition} className="errorMsgDiv">{errorMsg}</div>:
                     chackForValidInput() ? <button key={fireTransition} className="addMissionButton animateIn" onClick={handleAddMission} style={{transform : "rotateY(0deg)"}} >Add mission</button> :
                     <button key={fireTransition} className="addMissionButton animateOut" onClick={handleAddMission}>Add mission</button> 
                     } 
                 {/* style={chackForValidInput() ? {transform :"rotateY(0deg)" } : { transform: "rotateY(90deg)"} */}
                  </div>  
                <article className="missionListArticle grid">
                    <ul key={sortOrder} className="missionList flex">
                        {missionList.length > 0 ?
                            sortedList().map((currentItem) => 
                            (
                                <li key={currentItem.id}  className="missionListItem grid" style={{animationDelay : currentItem.animDelay ? currentItem.animDelay :"0s"}}><span style={{color:"darkblue"}}> {currentItem.date} </span><span>{currentItem.mission}</span>  <span style={{color: getColor(currentItem.priority) }}> {currentItem.priority}</span></li>

                            )) : <p>No entries found</p>
                    
                        }
                    </ul>
                   
                </article>
            </section>
         
              <SortMenu show={missionList.length > 1 ? true :  false} handleSortMenu={setSortOrder} transformType={transformType}/>
            
          </main>
          {/* <Footer key={errorMsg} errorMsg={errorMsg}/>            */}

    
           </>



    );

}