const myObject: MyObject = {
    name: "Kristoffer",
    age: 30
}



interface MyObject {
    name: string
    age: number
}

type MyAltObject = {
    name: string
    age: number
}

console.log(myObject)



const myName: MyName = "Kristoffer"

type MyName = string