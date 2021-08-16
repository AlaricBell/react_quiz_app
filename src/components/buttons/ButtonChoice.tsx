const ButtonChoice: React.FC<{children: any, color: string, handleChoice: () => void}> = ({children, color, handleChoice}) => {
  return (
    <button className="btn btn-choice" style={{backgroundColor: color}} onClick={handleChoice}>{children}</button>
  )
}

export default ButtonChoice;