import TextTitle from "./text/TextTitle";
import TextPrimary from "./text/TextPrimary";
import ButtonSubmit from "./buttons/ButtonSubmit"

const Welcome: React.FC = props => {
  return (
    <section id="welcome">
        <TextTitle content="Welcome to the Trivia Challange"/>
        <TextPrimary content="You will be presented with 10 True or False questions"/>
        <TextPrimary content="Can you score 100%?"/>
        <ButtonSubmit content="Begin"/>
    </section>
  )
}

export default Welcome;