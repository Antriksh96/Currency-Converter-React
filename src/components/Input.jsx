import React, { useEffect, useState } from "react"; 
import { CurrencyContext } from "./currcontext";
import { useContext } from "react";


function InputBox({selectName, state, commonState, label, currencyoption = [], setinputcurrency, inputcurrency, convertedcurr, setconvertedcurr, counter, setCounter, setInputstate, setOutputState}) {
  
    let context = useContext(CurrencyContext)          // this is context used to access data that we get from api.
     
    useEffect(() => {  
       context.getdata(inputcurrency)                 // at first it call api for inputcurrency of inputcurrency is usd then it call api for currency for used if inputcurrency state get change lik from usd it set to inr then this used effect call api to get data with currency rate for inr.
    },[inputcurrency]) 
 
    currencyoption = context.keys                    //holds all currency option that we get from api used to render inside select tag by using map fun on this currencyoption.
     

    function handleOption(value, name) {             // used to [set] input currency(user enter amount) and to [set] output currency(user want to convert in that currency).
        // console.log(name)
        if(name == "select1"){                      // before this condition name = "select1" here is counter % 2 == 0 means even/odd condition to handle to set currency because of that user lock he alwasy need to change currency in toggle way like even click(when counter = 2, 4, 6) need to click on 1st select and odd click(counter = 1, 3, 5) need to click on 2nd select tag to solve this problem i used {chatgpt tell => name property inside select} in select tag to trace which select tag is press as there are to copy of this same compo(this file compo inputbox) therefore there are two copy of select{tag inside ui} the select tag in bottom if you want to see. 
            setinputcurrency(value)                 //if 1 copy of select tag clicked/changes then the code inside run means input currency ki state (inputcurrency) get set.
            setCounter(!counter) 
              
            
        }     
        else if(name == "select2"){                 //if 2 copy of select tag clicked/changes then the code inside run means converted currency ki state (convertedcurr) get set. 
            // console.log(name) 
            setconvertedcurr(value)
            setCounter(!counter) 
             
        }
         
    }  
     

    function calculate(invalue) {                                                          // use to calculate result or to convert amount in output currency.
        let result = invalue * Number(context.data[inputcurrency][convertedcurr])             //invlaue means value that user has typed in 1st input bax i.e below from label and after * sign you see is the rate of currency in which we have to calculate ex- if input cuu is usd and converted/output curr is inr the after * you see that will print 88.soemthing that is rate means 1 usd = 88...inr.
         
        setOutputState(result.toFixed(2))                                                  // this setOutputState fun will set the state that is made to show the result inside of input of 2nd copy of inputBox compo.
        // console.log(result)
         

    }  
    
    function setInputstateFun(e){
        console.log(e.target.value)
        let value = Number(e.target.value);
        console.log(value); 

        if(Number.isNaN(value)){                       
            console.log("inside if block")
            return;
        }
        else{
            console.log("Inside else block")
            setInputstate(Number(e.target.value))
            calculate(Number(e.target.value))
        }
         
    }
    

    return(       
        <div className="z-50 h-[120px] w-[400px] border-2 border-none rounded-xl p-4 pb-1 text-white bg-[#242930] mb-3">
            <div className="h-auto m-auto flex items-center justify-between mb-4">
                <label>{label}</label>
                <label >Currency Type</label>
            </div>
            <div className="w-auto flex items-center justify-between">
                <input className="border-1 border-white rounded-md pl-2 p-2 outline-none" onChange={(e) => ( setInputstateFun(e))} type="text" value={state}/>
                <select name= {selectName} onChange={(e) => (handleOption(e.target.value, e.target.name))}  className="bg-[#3e4249] text-white p-1.5 font-medium rounded-md cursor-pointer" > 
                    <option>{commonState}</option>   // this is extra option because when browser loads user can see default setted option of currency. commonstate is a prop having two value for two copy of input box/select box.
                    {currencyoption.map((singleCurrency) => (<option key={singleCurrency} value={singleCurrency}>{singleCurrency}</option>))}
                </select>
            </div>
        </div>
    )
}

export default InputBox

  