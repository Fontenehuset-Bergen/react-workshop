export interface FooterOptions 
{
   errorMsg : string
}

export function Footer({errorMsg} : FooterOptions)
{
    return(
        <>
            <footer className="flex">
               <div className="flex">
                 <p>Status : </p>
                <p>{errorMsg}</p>
               </div>
                <p>Made by :</p>
                <p>Harald N.</p>
            </footer>
        
        
        </>

    )


}