const ListItem: React.FC<{children: any}> = ({children}) => {
  return (
    <li className="list-item">
        {children}
    </li>
  )
}

export default ListItem;