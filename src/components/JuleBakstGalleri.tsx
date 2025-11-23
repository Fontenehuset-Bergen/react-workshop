function JuleBakstGalleri(){
    // Make a function with the same name as the file name
    // Function will output JSX

    // When making an array- 
    // const nameOfVariable: (type of datagoes here, in this case string)[] - [] tells it the variable will be an array
    // A basic array of just cookie names:
    const cookieTypes: string[] = ['Gingerbread', 'Sugar Cookie', 'Linzer Cookie', 'Checkerboard Sablés','Snowball Cookies', 'Pizzelle'];

    // An array made up objects that have a little more info on each cookie
    const christmasCookies: any[] = [ 
        {name: 'Gingerbread', score: 4, flavor: 'Spices'},
        {name: 'Sugar Cookie', score: 5, flavor: 'Sweet'},
        {name: 'Snowball Cookies', score: 3, flavor: 'Bland'},
        {name: 'Pizzelle', score: 4, flavor: 'Mild Sweet'}
    ];




    return(
        <div>
            <h1>This is a test</h1>
            <p>I don't know what I am doing</p>
            
            {/* I think things you make in the function then get referenced here to make them appear on the website? */}

            <cookieTypes />
        </div>
    );
}

// Export function for use
export default JuleBakstGalleri;