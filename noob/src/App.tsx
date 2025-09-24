import { MyButton } from "./components/buttons";
import { HelloWorld } from "./components/hello";
import { HeaderLayout } from "./components/layout/Headers";


function App() {
  
  return (
      <div>
        <HeaderLayout />
        <HelloWorld />
        <p>blablabla</p>
        <MyButton />
      </div>
  );
}

export default App
