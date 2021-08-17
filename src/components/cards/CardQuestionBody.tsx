import TextPrimary from "../text/TextPrimary"

const CardQuestionBody: React.FC<{content: string}> = ({content}) => {
  return (
    <div className="card card-question" dangerouslySetInnerHTML={{ __html: content}}>

    </div>
  )
}

export default CardQuestionBody;