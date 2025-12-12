import DropdownMenu from "../assignments/easy/dropdownMenu";
import NumberButtons from "../assignments/easy/numberButtons";

export default function AssignmentsPage() {

    return (
        <div style={{ width: "100vw", height: "100vh", padding: 20, gap: 10 }}>
            <h1>Assignments</h1>
               
            <div style={{display: "flex", gap: 20}}>            
                <NumberButtons />
                <DropdownMenu />
            </div>
        </div>
    )
}