
// warning type 3 options

type Warning = "success" | "warning" | "info" | "none";


interface Badge {
    label : string,
    warning: Warning
    cssClass? : string

}

export function Badge({ label, warning, cssClass} : Badge)
{
    let color : string = "lightskyblue";   // default badge color
    switch(warning)
    {
        case "success" : color = "green";
                         break;

        case "info"     : color = "blue";
                          break;
        
        case "warning"  : color = "red";
                          break;

        case "none" :      color      = "inherit";
                           break;

        default : break;
    };

    return(
        <span className={`defaultBadge ${cssClass}` } style={{backgroundColor: color}}>{label}</span>
    )
}