import React, { useState } from 'react'
import "../../src/App.css"

const QuestionList = ({question,options,click,currentAns}) => {

  return (
    <div > 
        
        <h1>{question}</h1>
        {
            options.map((option,index)=>(
                <ul>
                    <li key={index} onClick={()=>click(option)} style={{cursor:"pointer"}}
                         className={currentAns===option ? "selected":''}>{option}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default QuestionList