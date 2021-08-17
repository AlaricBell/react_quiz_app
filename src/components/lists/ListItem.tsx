const ListItem: React.FC<{children: any, dangerousData?: string}> = ({children, dangerousData = ""}) => {
  return (
    <li className="list-item">
        {children}
        <span dangerouslySetInnerHTML={{ __html: dangerousData}}></span>
    </li>
  )
}

export default ListItem;