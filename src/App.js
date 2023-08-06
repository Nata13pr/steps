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
  <StepMessage step={1}>
    <p>Pass in content</p>
    <p>😎</p>
  </StepMessage>
  <StepMessage ste={2}> <p>Read children props</p>
    <p>😘</p></StepMessage>
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

      <StepMessage step={step}> 
      {messages[step-1]}
     <div className="buttons">
      <Button bgColor='blue' textColor='white'  onClick={()=>alert(`Learn how to ${messages[step-1]}`)}>Learn now</Button>
      </div> 
      </StepMessage>
 

      <div className="buttons">
       <Button 
       bgColor='#7950f2' 
       textColor={'#fff'} 
       onClick={handlePrevious}
       >
        <span>👈</span> Previous
        </Button>
       <Button 
       bgColor='#7950f2' 
       textColor={'#fff'}  
       onClick={handleNext}>
        Next <span>👉</span>
        </Button>     
      </div>
    </div>)}
</>
   
  );
}

function StepMessage({step,children}){
  console.log(children);
  return (
      <div className="message">
  <h3>Step {step}</h3>  
  {/* {messages[step-1]} */}
  {children}
  {/* {test.name} */}
   </div>
  )}


function  Button ({textColor,bgColor,onClick,children}){
  return (
    <button style={{backgroundColor:bgColor,color:textColor}}
    onClick={onClick}>
   {children}
      </button>
  )
}