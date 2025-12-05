

export function Header()
{
    return(
    <>
        <header className="defaultHeader flex">
           <Logo fileUrl="src/assets/icons/maidsafe.png" cssClass="logoDefault"/>
            <MenuIcon fileUrl="src/assets/icons/more.png" cssClass="menuDefaultIcon"/>
        </header>
    
    </>);
      

};

interface IconOptions
{
    fileUrl : string,
    cssClass? : string
};

function Logo({ fileUrl, cssClass} : IconOptions)
{
    return(
        <img className="cssClass" src={fileUrl}/>

    );
}

function MenuIcon({ fileUrl , cssClass} : IconOptions)
{
    return(
        <>
            <button className={cssClass}> 
                <Logo fileUrl={fileUrl}/>
            </button>
        </>
    );
}


