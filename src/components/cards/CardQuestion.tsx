import PaginationCounter from "../Pagination/PaginationCounter";
import CardQuestionBody from "./CardQuestionBody";

const CardQuestion: React.FC<{content: string}> = ({content}) => {
  return (
    <div className="container-card">
      <CardQuestionBody content={content}/>
      <PaginationCounter current="1" end="10"/>
    </div>
  )
}

export default CardQuestion;