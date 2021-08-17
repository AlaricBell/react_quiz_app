import TextPrimary from "../text/TextPrimary"

const CardQuestionBody: React.FC<{content: string}> = ({content}) => {
  return (
    <div className="card card-question">
      <span dangerouslySetInnerHTML={{ __html: content}}></span>
    </div>
  )
}

export default CardQuestionBody;