import TextTitle from "./text/TextTitle"
import TextPrimary from "./text/TextPrimary"
import ButtonGroup from "./buttons/ButtonGroup"
import ButtonChoice from "./buttons/ButtonChoice"
import CardQuestion from "./cards/CardQuestion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faThumbsUp,
  faThumbsDown
} from "@fortawesome/free-solid-svg-icons"

const Question: React.FC = props => {
  return (
    <section id="question">
        <TextTitle>Title</TextTitle>
        <CardQuestion content="Hello World"/>
        <ButtonGroup>
        <ButtonChoice color="#bf0413"><FontAwesomeIcon icon={faThumbsDown} style={{width: '24px', height: '24px'}}/></ButtonChoice>
        <ButtonChoice color="#7dc242"><FontAwesomeIcon icon={faThumbsUp} style={{width: '24px', height: '24px'}}/></ButtonChoice>
        </ButtonGroup>
    </section>
  )
}

export default Question;