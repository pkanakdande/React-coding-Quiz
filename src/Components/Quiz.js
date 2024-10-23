import React, { useState } from 'react'
import QuestionList from './QuestionList';

const Quiz = () => {
    const [currentQuestionIndex,setCurrentquestionIndex]=useState(0)
     const questions = [
        {
          question: "What is React?",
          options: ["A JavaScript framework", "A JavaScript library", "A CSS library", "A server-side tool"],
          answer: "A JavaScript library"
        },
        {
          question: "What is JSX?",
          options: ["A CSS preprocessor", "A syntax extension for JavaScript", "A new programming language", "A JavaScript function"],
          answer: "A syntax extension for JavaScript"
        },
        {
          question: "Which method is used to create components in React?",
          options: ["createComponent", "renderComponent", "createElement", "createClass"],
          answer: "createElement"
        },
        {
          question: "What is the purpose of React's useState hook?",
          options: ["To manage side effects", "To create a stateful variable", "To handle component rendering", "To perform asynchronous actions"],
          answer: "To create a stateful variable"
        },
        {
          question: "What does the Virtual DOM do?",
          options: ["Updates the real DOM directly", "Keeps a lightweight copy of the real DOM", "Manages server-side rendering", "None of the above"],
          answer: "Keeps a lightweight copy of the real DOM"
        },
        {
          question: "What is a pure component in React?",
          options: ["A component that always re-renders", "A component that avoids re-renders when props/state don't change", "A stateless component", "A component without any side effects"],
          answer: "A component that avoids re-renders when props/state don't change"
        },
        {
          question: "Which of the following is a correct way to pass props in React?",
          options: ["<Component prop={value} />", "<Component props={value} />", "<Component: value />", "<Component> value </Component>"],
          answer: "<Component prop={value} />"
        },
        {
          question: "How do you lift state up in React?",
          options: ["By moving state from child to parent", "By passing state from parent to child", "By using context", "By using useReducer hook"],
          answer: "By moving state from child to parent"
        },
        {
          question: "What is the purpose of React's useEffect hook?",
          options: ["To manage side effects", "To fetch data", "To handle component rendering", "To create a new component"],
          answer: "To manage side effects"
        },
        {
          question: "How do you handle events in React?",
          options: ["With regular JavaScript event listeners", "By binding events in the constructor", "By using event handlers like onClick", "By using setState"],
          answer: "By using event handlers like onClick"
        },
        {
          question: "What is the use of React's useContext hook?",
          options: ["To share state between unrelated components", "To manage the component lifecycle", "To replace useState", "To create components"],
          answer: "To share state between unrelated components"
        },
        {
          question: "What is React Router used for?",
          options: ["To handle HTTP requests", "To manage component rendering", "To enable navigation between different views", "To handle form submissions"],
          answer: "To enable navigation between different views"
        },
        {
          question: "What does React.memo() do?",
          options: ["Prevents unnecessary re-renders of a component", "Creates a new component", "Manages component state", "Handles side effects"],
          answer: "Prevents unnecessary re-renders of a component"
        },
        {
          question: "Which lifecycle method is called after the first render in class components?",
          options: ["componentDidMount", "componentWillUpdate", "componentDidUpdate", "componentWillUnmount"],
          answer: "componentDidMount"
        },
        {
          question: "What is the significance of the key prop in React?",
          options: ["It helps React identify which items have changed", "It holds the unique ID of the component", "It defines the state of the component", "It triggers re-renders"],
          answer: "It helps React identify which items have changed"
        },
        {
          question: "What is the useRef hook used for?",
          options: ["To manage component state", "To handle forms", "To directly access a DOM element", "To share state between components"],
          answer: "To directly access a DOM element"
        },
        {
          question: "What is PropTypes in React?",
          options: ["A way to validate props", "A way to initialize component state", "A function to handle component updates", "A tool for managing forms"],
          answer: "A way to validate props"
        },
        {
          question: "What is the correct way to conditionally render a component?",
          options: [
            "{isLoggedIn ? <Dashboard /> : <Login />}",
            "{isLoggedIn && <Dashboard />}",
            "{if (isLoggedIn) return <Dashboard />}",
            "Both 1 and 2"
          ],
          answer: "Both 1 and 2"
        },
        {
          question: "Which of the following is true about React.Fragment?",
          options: [
            "It allows you to return multiple elements without a wrapping element",
            "It handles side effects",
            "It manages event listeners",
            "It binds event handlers to components"
          ],
          answer: "It allows you to return multiple elements without a wrapping element"
        },
        {
          question: "What is the main advantage of React's Virtual DOM?",
          options: [
            "Faster UI updates by reducing direct DOM manipulation",
            "Easier state management",
            "Improved CSS performance",
            "Automatic testing of components"
          ],
          answer: "Faster UI updates by reducing direct DOM manipulation"
        }
      ];

      function handleclick(){
        setCurrentquestionIndex(currentQuestionIndex + 1)
        setCurrentAns(null)
      }
 
      const [score,setScore]=useState(0)

      const [currentAns,setCurrentAns]=useState(null)

      function click(option){
      setCurrentAns(option)
      if(option === questions[currentQuestionIndex].answer){
        setScore(score + 1)
    }
  }
      
      
  return (
    <>
    <h1>Question {currentQuestionIndex+1}</h1>
    {
        currentQuestionIndex===0 && <h4 style={{color:"green"}}>You have time limit 20 Minutes</h4>
    }
    <div className='container' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       
        <div className='quiz-container' >

        
        {
            currentQuestionIndex <questions.length ? (<>
            <QuestionList question={questions[currentQuestionIndex].question} click={click}
      options={questions[currentQuestionIndex].options} currentAns={currentAns}/>
      <button onClick={handleclick} disabled={currentAns===null}>Next question</button>
            </>) :(<div>Your score is {score}/questions.length</div>)
        }
      </div>
    
    </div>
    {
  currentQuestionIndex===0 &&  <h1 style={{marginLeft:"45%",marginTop:"5rem" }}>All the best!!!!</h1>
    }
         
    </>
  )
}

export default Quiz