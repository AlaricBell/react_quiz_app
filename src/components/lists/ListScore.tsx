import ListItem from "./ListItem"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons"

const ListScore: React.FC<{data: any}> = ({data}) => {
  return (
        <ul className="container list-items">
          {data.map((question: any) => {
            return (
              <ListItem dangerousData={question.question}>
                {question.answered ? <FontAwesomeIcon icon={faPlus} style={{width: '16px', height: '16px'}}/>
                : <FontAwesomeIcon icon={faMinus} style={{width: '16px', height: '16px'}}/>}
              </ListItem>
            )
          })}

        </ul>
  )
}

export default ListScore;