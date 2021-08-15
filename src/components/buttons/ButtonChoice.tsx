const ButtonChoice: React.FC<{content: string}> = ({content}) => {
  return (
    <button className="btn btn-choice">{content}</button>
  )
}

export default ButtonChoice;