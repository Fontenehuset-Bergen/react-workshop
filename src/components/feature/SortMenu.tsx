import type { MouseEventHandler } from "react"
import { type SortMenuOptions } from "./MissonRegForm";
import React from "react"

interface sortOptions 
{
    show : boolean,    
    handleSortMenu : (t:SortMenuOptions) => void,
}


export function SortMenu({show, handleSortMenu} : sortOptions)
{
    const handleClick = (option: SortMenuOptions )=>
    {
        handleSortMenu(option);

    }

    return(
        <div className="sortMenu flex" style={show ? {transform: "rotateY(0deg)"}: {transform: "rotateY(90deg)" } }>
            <p className="sortMenuHeading">Choose how to sort list :</p>
             <p className="toggleText">(<span className="toggleKeys">Ctrl + m</span>) to toggle Sort Menu</p>
           <ul className="sortList">
                <li onClick={() =>handleSortMenu("byDate")} className="sortListItem">Sort by Date</li>
                <li onClick={() => handleSortMenu("byPriority")} className="sortListItem">Sort by Priority</li>
                   <li onClick={() => handleSortMenu("unsorted")} className="sortListItem">Leave Unsorted</li>
            </ul>
           
         
        </div>

    )

}