const quoteOfTheDay : string = "\"With components as its heart, and state its guiding hand" +
"React weaves the digital tapestry, across the web's vast land. From virtual DOM's swift grace to props that gently flow," +
" A declarative dance, where interfaces brightly glow.\"";


export function Footer()
{
    return(
        <>
        <footer className="defaultFooter grid">
            <p className="quoteText"> {quoteOfTheDay} </p>
            <div className="linksDiv flex">
                <a href="https://react.dev/learn" target="_blank">Learn React</a>
                <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started"
                    target="_blank">MSN Docs on React</a>
                <a href="https://github.com/Lazy-CSharp-Coder" target="_blank">My Github Account</a>

            </div>
              
        </footer>   
             
        </>

    );

}