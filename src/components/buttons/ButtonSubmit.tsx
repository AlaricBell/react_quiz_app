import {
  Link
} from "react-router-dom";

const ButtonSubmit: React.FC<{children: any, path: string, handleSubmit?: () => void}> = ({children, path, handleSubmit}) => {
  return (
    <Link to={path}><button className="btn btn-submit" onClick={handleSubmit}>{children}</button></Link>
  )
}

export default ButtonSubmit;