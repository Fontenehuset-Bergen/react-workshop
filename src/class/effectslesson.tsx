let name = ""

function doesSomething(argument1: string) {
    return argument1 + ""
}
// This function does not have a side effect. You call it, and it returns a string.

function doesSomething(argument1: string) {
    name = "bla"
    return argument1 + ""
}
// This version has name=bla which an effect outside of its scope.

doesSomething("fff")
// Pure function. Will always give "fff"

function notPure(number: number) {
    const random = Math.random()
    return number + random
}
// Not a pure function because this function will return different results because of the Random math


export function myPureComponent() {
    const [ somestate, setsomestate ] = useState(0)

    return <div>{somestate}</div>
}
// This is pure because it will always return the same??