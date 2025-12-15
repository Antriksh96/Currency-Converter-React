import { useEffect, useState, useContext } from 'react'
import InputBox from './components/Input'
import { CurrencyContext } from './components/currcontext'

function App() { 

  const [inputcurrency, setinputcurrency] = useState("usd")    // this three state i define in input.jsx file but there is a big problem happening i.e when i click on select for that single component state is chainging and the copy of that compo that i render(means i render two same inputbox compo from app file) so for 1st one state get change and for annother one state become new menas at initial state not chage for second one same problem happen while making tick tack toe because if you render two same compo and  you make state inside there and if if you make change on 1st copy of that compo then state of that get change so that it only render with new state another remain same with initila state if you want state should common for both the make that state in parent from where no of copy of that como are rendering like here app compo/file this called state lifting concept.
  const [convertedcurr, setconvertedcurr] = useState("inr")
   
  const [inputstate, setInputstate] = useState(0)
  const [outputState, setOutputState] = useState(0)           // my 1st mistake i make this all state inside child and trying to handle but you most of the time define state here because of this if state get change then no of copy you set to render they all get render with new value of state but if you make state in child then if you change state by intracting wiht 1st or nth no of copy then that copy of compo get render other will not affect this concept to move state from child to parent called state lifting state is shared among all copy. also if you wan to render specific copy when that state get change then pass that state on to that copy of compo while rendering if you want to render all when state get change then give that state as prop to all copy.

    
  

  let state1 = "usd"
  let state2 = "inr"            // this is wrriten so when browser load user see usd and inr in select1(name of 1st select tag copy same for select2) and slelect 2 by defalut and aslo state also set to used and inr so user cal calculate directly with out choose the currency option when browser loads.
  
  
   return(
      <div  className="w-screen h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat brightness-95"
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/08/26/53/33/360_F_826533334_OVKCYeQ4LJljt3kz4SZkNp322717nB1d.jpg')`,
      }}>
        <h1 className='mb-7 font-bold text-white'>Currency Converter</h1>
         <div className='flex flex-col items-center justify-center border-1 border-gray-700 p-6 rounded-xl bg-transparent backdrop-blur-[2px] brightness-150' style={{boxShadow: "0 0 15px rgba(59, 100, 246, 0.5)",}}>
          <InputBox selectName = "select1" state = {inputstate}  commonState = {state1}  label = "From" currencyoption = {[]} setinputcurrency = {setinputcurrency} inputcurrency = {inputcurrency} convertedcurr = {convertedcurr}  setconvertedcurr = {setconvertedcurr}  setInputstate = {setInputstate} setOutputState = {setOutputState}/>
          <InputBox selectName = "select2" state = {outputState} commonState = {state2}  label = "To"  currencyoption = {[]}  setinputcurrency = {setinputcurrency} inputcurrency = {inputcurrency} convertedcurr = {convertedcurr}  setconvertedcurr = {setconvertedcurr}  setInputstate = {setInputstate} setOutputState = {setOutputState}/> 
          <Rate inputcurrency = {inputcurrency} convertedcurr = {convertedcurr}/>
         </div>
      </div>
   )
}

export default App
 


export function Rate({inputcurrency, convertedcurr}){                   // used to show rate just extra feature.

  const [Rate, setRate] = useState(0)

  let context = useContext(CurrencyContext) 

  useEffect(() => {
    setRate(`1 ${inputcurrency} = ${Number(context.data?.[inputcurrency]?.[convertedcurr]).toFixed(4)} ${convertedcurr}`)
  }, [{convertedcurr}])
 

    return(
        <div className="bg-[#242930] text-white px-6 py-2 font-medium rounded-md ">
        Rate : {Rate}
        </div>
    )
}  







// inputcurrency means => the amount you enter is on that currency if you enter 200 and inputcurrency is set to inr then 200rs.
// convertedcurr => means user want to convert amount he enter in particular currency to the currency set in this curency(convertedcurr).
// inputstate => user entered amount that he want to convert.
// outputState => result converted amount.