

export function Header()
{
    return(
    <>
        <header className="defaultHeader flex">
           <Logo fileUrl="src/assets/icons/maidsafe.png" cssIconClass="logoDefault"/>
           <MenuIcon fileUrl="src/assets/icons/more.png" cssIconClass="menuDefaultIcon" cssButtonClass="buttonHeader"/>
        </header>
    
    </>);
      

};

interface IconOptions
{
    fileUrl : string,
    cssIconClass? : string
};

interface ButtonOptions extends IconOptions
{
    cssButtonClass : string
}
function Logo({ fileUrl, cssIconClass} : IconOptions)
{
    return(
        <img className={cssIconClass} src={fileUrl}/>

    );
}

function MenuIcon({ fileUrl , cssIconClass, cssButtonClass} : ButtonOptions)
{
    return(
        <>
            <button className={cssButtonClass}> 
                <Logo fileUrl={fileUrl} cssIconClass={cssIconClass}/>
            </button>
        </>
    );
}


