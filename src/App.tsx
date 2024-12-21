import './App.css'

let name:string ="Shekhar";
let age:number=21;
let isGoodBoy:boolean=true;
let hobbies:string[];
let role:[string,number];

function App() {

  return (
    <>
    <h1>{name}</h1>
    <h1>{age}</h1>
    <h1>{isGoodBoy }</h1>
    <h1>{hobbies =["Playinggames " ," Eating ", " Sleeping"]}</h1>
    <h1>{role=["playinggames" , 69]}</h1>
    </>
  )
}

export default App
