
type MenuProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
};


export default function Menu({setCurrentPage}: MenuProps) {

    return (
        <div style={{
            display: "flex", flexDirection: "column",
            width: 200, backgroundColor: "black",
            color: "white", textAlign: "end", borderRadius: 10,
        }}>
            <div style={{ display: "flex", flexDirection: "column", textAlign: "end", padding: 10, gap: 5 }}>
                <button onClick={() => setCurrentPage("Home")}>Home</button>
                <button onClick={() => setCurrentPage("Assignments")}>Assignments</button>
                <button onClick={() => setCurrentPage("Readme")}>Readme</button>

            </div>
        </div>
    )
}