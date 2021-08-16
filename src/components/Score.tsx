import TextTitle from "./text/TextTitle";
import TextPrimary from "./text/TextPrimary";
import ButtonSubmit from "./buttons/ButtonSubmit"
import ListScore from "./lists/ListScore";

const Score: React.FC = props => {
  return (
    <section id="score">
      <div className="header-score">
        <TextTitle>Your Score</TextTitle>
        <TextTitle>3 / 10</TextTitle>
      </div>
        
        <ListScore data="a"/>
        <ButtonSubmit path="/" handleSubmit={() => console.log("submit")}>Play again?</ButtonSubmit>
    </section>
  )
}

export default Score;