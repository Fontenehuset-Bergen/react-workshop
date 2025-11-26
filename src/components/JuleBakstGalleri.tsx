// Make a function with the same name as the file name
// Function will output JSX
function JuleBakstGalleri(){

    // When making an array- 
    // const nameOfVariable: (type of datagoes here, in this case string)[] - [] tells it the variable will be an array
    // A basic array of just cookie names:
    // const cookieTypes: string[] = ['Gingerbread', 'Sugar Cookie', 'Linzer Cookie', 'Checkerboard Sablés','Snowball Cookies', 'Pizzelle'];

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
        {name: 'Chocolate Chip', score: 5, flavor: 'Sweet'}
    ];

    // For loop to make array data usable
    for (let cookieIndex = 0; cookieIndex < cookiesData.length; cookieIndex++) {
        const cookiesDisplay = cookiesData[cookieIndex];

        return(
            // do i assign a class name to the div here for styling with css?
            <div>
                <h1>This is a test</h1>
                <p>I don't know what I am doing</p>
                
                {/* I think things you make in the function then get referenced here to make them appear on the website? */}

                {/* Show the cookies in a grid - Do I just code a spot for each cookie? */}
                {/* How would you make it so a new grid appears if a new cookie is added? */}

                {/* Cookie template */}
                <h2>{cookiesDisplay.name}</h2>
                <p>{cookiesDisplay.score}</p>
                <p>{cookiesDisplay.flavor}</p>
            </div>
        );
    }
}

// Export function for use
export default JuleBakstGalleri;