// Make a function with the same name as the file name
// Function will output JSX

    // When making an array- 
    // const nameOfVariable: (type of data goes here, in this case string)[] - [] tells it the variable will be an array

    type xmasCookies = {
        name: string,
        score: number,
        flavor: "Spices" | "Sweet" | "Bland" | "Mild Sweet";
    }

    // An array made up objects. Each object contains information accoprding to the keys defined in 'type xmasCookies'
    const cookiesData: xmasCookies[] = [ 
        {name: 'Gingerbread', score: 4, flavor: 'Spices'},
        {name: 'Sugar Cookie', score: 5, flavor: 'Sweet'},
        {name: 'Snowball Cookies', score: 3, flavor: 'Bland'},
        {name: 'Pizzelle', score: 4, flavor: 'Mild Sweet'},
        {name: 'Chocolate Chip', score: 5, flavor: 'Sweet'},
    ];

// Export function for use
export default function JuleBakstGalleri() {
    return(
            // do i assign a class name to the div here for styling with css?
        <div className="juleBakst">

            {/* Cookie template */}
            {cookiesData.map((cookie) => (

                <section>
                    <h2>{cookie.name}</h2>
                    <p>{cookie.score}</p>
                    <p>{cookie.flavor}</p>
                </section>

            ))}

        </div>
    );
}