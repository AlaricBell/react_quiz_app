import TextPrimary from "../text/TextPrimary"

const CardQuestionBody: React.FC<{content: string}> = ({content}) => {
  return (
    <div className="card card-question">
        <TextPrimary>{content}</TextPrimary>
    </div>
  )
}

export default CardQuestionBody;