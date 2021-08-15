import TextPrimary from "../text/TextPrimary"
import ButtonChoice from "./ButtonChoice";

const ButtonGroup: React.FC<{children: any}> = ({children}) => {
  return (
    <div className="container-buttons">
        {children}
    </div>
  )
}

export default ButtonGroup;