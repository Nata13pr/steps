import { useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App (){
  return (
    <div>
      <Steps/>
      <Steps/>
    </div>
  )
}

function Steps() {
  const [step,setStep]=useState(1);
const [isOpen,setIsOpen] = useState(true);

  // const [test,setTest] =useState({name:'Jonas'});

  function handlePrevious(){
   if(step>1)  setStep((currentStep)=>currentStep - 1)

   //BAD PRACTICE-MUTATION
  //  test.name='Hanna'
  // setTest({name:'Fred'})
  }

  function handleNext(){
    if(step<3)   
    setStep((previousStep)=>previousStep + 1)
 
  // setTest({name:'Hanna'})
  }

  return (
<>
<button className="close" onClick={()=>setIsOpen(s=>!s)}>&times;</button>
 {/* <button onClick={handleClose}>❌</button> */}

{isOpen && (<div className="steps">
      <div className="numbers">
        <div className={step>=1 ? 'active' : ''}>1</div>
        <div className={step>=2 ? 'active' : ''}>2</div>
        <div className={step>=3 ? 'active' : ''}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step-1]}
       {/* {test.name} */}
        </p>
      <div className="buttons">
        <button style={{backgroundColor:'#7950f2',color:'#fff'}}
        onClick={handlePrevious}>
          Previous
          </button>
          <button style={{backgroundColor:'#7950f2',color:'#fff'}}
          onClick={handleNext}>
            Next
          </button>
         
      </div>
    </div>)}
</>
   
  );
}
