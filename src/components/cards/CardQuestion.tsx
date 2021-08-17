import PaginationCounter from "../Pagination/PaginationCounter";
import CardQuestionBody from "./CardQuestionBody";

const CardQuestion: React.FC<{content: string, current: number, top: number}> = ({content, current, top}) => {
  return (
    <div className="container-card">
      <div>
        <CardQuestionBody content={content}/>
      </div>
      <PaginationCounter current={current} top={top}/>
    </div>
  )
}

export default CardQuestion;