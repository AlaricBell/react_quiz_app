const ButtonChoice: React.FC<{children: any, color: string}> = ({children, color}) => {
  return (
    <button className="btn btn-choice" style={{backgroundColor: color}}>{children}</button>
  )
}

export default ButtonChoice;