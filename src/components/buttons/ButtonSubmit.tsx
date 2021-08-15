const ButtonSubmit: React.FC<{content: string}> = ({content}) => {
  return (
    <button className="btn btn-submit">{content}</button>
  )
}

export default ButtonSubmit;