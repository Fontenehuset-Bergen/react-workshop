import type { MouseEventHandler } from "react"
import { type SortMenuOptions, type Transform } from "./MissonRegForm";
import { useEffect, useState } from "react";
interface sortOptions 
{
    show: boolean, 
    transformType : Transform
    handleSortMenu : (t:SortMenuOptions) => void,
}


export function SortMenu({show, handleSortMenu, transformType} : sortOptions)
{
   
    return(
    
    <div className="sortMenu flex" style={{transform: transformType} }>
            <p className="sortMenuHeading">Choose how to sort list :</p>
             <p className="toggleText">(<span className="toggleKeys">Ctrl + m</span>) to toggle Sort Menu</p>
           <ul className="sortList">
                <li onClick={() => handleSortMenu("byDate")} className="sortListItem">Sort by Date</li>
                <li onClick={() => handleSortMenu("byPriority")} className="sortListItem">Sort by Priority</li>
                <li onClick={() => handleSortMenu("unsorted")} className="sortListItem">Leave Unsorted</li>
            </ul>
           
         
        </div>

    )

}