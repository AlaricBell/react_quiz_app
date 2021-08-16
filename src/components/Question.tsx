import { useState, useEffect } from "react"

import TextTitle from "./text/TextTitle"
import TextPrimary from "./text/TextPrimary"
import ButtonGroup from "./buttons/ButtonGroup"
import ButtonChoice from "./buttons/ButtonChoice"
import CardQuestion from "./cards/CardQuestion"

import { getQuestionAt } from "../lib/QuestionHandler"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faThumbsUp,
  faThumbsDown
} from "@fortawesome/free-solid-svg-icons"

const Question: React.FC = props => {
  const [counter, setCounter] = useState(0)
  const [question, setQuestion] = useState({category: "",
                                            type: "",
                                            difficulty: "",
                                            question: "",
                                            correct_answer: "",
                                            incorrect_answers: [""]})

  const fetchQuestion = () => {
    getQuestionAt(counter).then(result => setQuestion(result!))
  }

  useEffect(() => {
    fetchQuestion()
  }, []);

  return (
    <section id="question">
        <TextTitle>{question.category}</TextTitle>
        <CardQuestion content={question.question} current={counter + 1} top={10}/>
        <ButtonGroup>
        <ButtonChoice 
        color="#bf0413" 
        handleChoice={() => {setCounter(counter + 1); fetchQuestion()}}>
          <FontAwesomeIcon icon={faThumbsDown} style={{width: '24px', height: '24px'}}/>
        </ButtonChoice>
        <ButtonChoice 
        color="#7dc242" 
        handleChoice={() => {setCounter(counter + 1); fetchQuestion(); console.log(question)}}>
          <FontAwesomeIcon icon={faThumbsUp} style={{width: '24px', height: '24px'}}/>
        </ButtonChoice>
        </ButtonGroup>
    </section>
  )
}

export default Question;