import { Component } from "react"
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

import TextTitle from "./text/TextTitle"
import ButtonGroup from "./buttons/ButtonGroup"
import ButtonChoice from "./buttons/ButtonChoice"
import CardQuestion from "./cards/CardQuestion"

import { questionAnswered } from "../stateManager/questions"
import { questionSeedBegan } from "../stateManager/questions"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faThumbsUp,
  faThumbsDown
} from "@fortawesome/free-solid-svg-icons"


class Question extends Component<{questions: any, 
                                  questionAnswered: (answer: boolean, counter: number) => void, 
                                  questionSeedBegan: () => void}> {
  state ={
    counter: 0,
  }

  incrementCounter = () => {
    this.setState(prevState => {
      return {
        counter: this.state.counter + 1,
      }
    })
  }

  componentDidMount() {
    this.props.questionSeedBegan()
  }

  render() {
    if(this.state.counter >= 10) {
      return <Redirect to="/score" />
    } else {
      return (
        <section id="question">
            {this.props.questions[this.state.counter]?.category && <TextTitle>{this.props.questions[this.state.counter]?.category}</TextTitle>}
            {this.props.questions[this.state.counter]?.question && <CardQuestion content={this.props.questions[this.state.counter]?.question} current={this.state.counter + 1} top={10}/>}
            {this.props.questions[this.state.counter]?.question && <ButtonGroup>
              <ButtonChoice 
              color="#bf0413" 
              handleChoice={() => {this.props.questionAnswered((this.props.questions[this.state.counter].correct_answer === "False"), this.state.counter); this.incrementCounter();}}>
                <FontAwesomeIcon icon={faThumbsDown} style={{width: '24px', height: '24px'}}/>
              </ButtonChoice>
              <ButtonChoice 
              color="#7dc242" 
              handleChoice={() => {this.props.questionAnswered((this.props.questions[this.state.counter].correct_answer === "True"), this.state.counter); this.incrementCounter();}}>
                <FontAwesomeIcon icon={faThumbsUp} style={{width: '24px', height: '24px'}}/>
              </ButtonChoice>
            </ButtonGroup>}
        </section>
      )
    }
  }
}

const mapStateToProps = (state: any) => ({
  questions: state,
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  questionAnswered: (answered: boolean, counter: number) => dispatch(questionAnswered({...ownProps.questions, answered, counter})),
  questionSeedBegan: () => dispatch(questionSeedBegan({onSuccess: "questionSeed", onError: "questionSeedError", onReset: "questionReset"}))
})

export default connect(mapStateToProps, mapDispatchToProps)(Question)