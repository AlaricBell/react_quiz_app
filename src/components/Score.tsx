import { Component } from "react"
import { connect } from 'react-redux'

import TextTitle from "./text/TextTitle";
import ButtonSubmit from "./buttons/ButtonSubmit"
import ListScore from "./lists/ListScore";

class Score extends Component<{questions: any}> {
  calculateResult = () => {
    return this.props.questions.reduce((total: number, question: any) => {
      if(question.answered) return total + 1
      else return total
    }, 0)
  }

  render() {
    return (
      <section id="score">
        <div className="header-score">
          <TextTitle>Your Score</TextTitle>
          <TextTitle>{this.calculateResult()} / 10</TextTitle>
        </div>
          
          <ListScore data={this.props.questions}/>
          <ButtonSubmit path="/">Play again?</ButtonSubmit>
      </section>
    )
  }
}

const mapStateToProps = (state: any) => ({
  questions: state,
})

export default connect(mapStateToProps)(Score)