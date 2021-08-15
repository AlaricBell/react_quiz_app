import TextPrimary from "../text/TextPrimary"

const PaginationCounter: React.FC<{current: string, end: string}> = ({current, end}) => {
  return (
    <div className="">
        <TextPrimary>{current} of {end}</TextPrimary>
    </div>
  )
}

export default PaginationCounter;