import { MyUseEffectExample } from "../class/effects";
import { MyEventListener, MyFetch, MyTimer } from "../class/timer";
import { Counter } from "../components/Counter";
import { Dropdown } from "../components/Dropdown";

function CleanHome () {

    return(
        <>
            <Counter />

            <Dropdown />

            <MyUseEffectExample />
    
            <MyTimer />

            <MyEventListener />

            <MyFetch />
        </>
    )
}

export default CleanHome