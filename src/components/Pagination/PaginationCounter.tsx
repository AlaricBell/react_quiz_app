import TextPrimary from "../text/TextPrimary"

const PaginationCounter: React.FC<{current: number, top: number}> = ({current, top}) => {
  return (
    <div className="pagination-counter">
        <TextPrimary>{current} of {top}</TextPrimary>
    </div>
  )
}

export default PaginationCounter;