import TextTitle from "./text/TextTitle";
import TextPrimary from "./text/TextPrimary";
import ButtonSubmit from "./buttons/ButtonSubmit"

const Welcome: React.FC = () => {
  return (
    <section id="welcome">
        <TextTitle>Welcome to the Trivia Challange</TextTitle>
        <TextPrimary>You will be presented with 10 True or False questions</TextPrimary>
        <TextPrimary>Can you score 100%?</TextPrimary>
        <ButtonSubmit path="/question">Begin</ButtonSubmit>
    </section>
  )
}

export default Welcome