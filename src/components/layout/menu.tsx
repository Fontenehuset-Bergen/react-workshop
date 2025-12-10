export default function DropdownMenu() {
    return (
        <div style={{
            display: "flex", flexDirection: "column",
            width: 200, backgroundColor: "black",
            color: "white", textAlign: "end", borderRadius: 10, 
        }}>
            <div style={{display: "flex", flexDirection: "column", textAlign: "end", padding: 10, gap: 5}}>
                <a>Link One</a>
                <a>Link Two</a>
                <a>Link Three</a>
            </div>
        </div>
    )
}