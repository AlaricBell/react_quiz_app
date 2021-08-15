const TextPrimary: React.FC<{children: any}> = ({children}) => {
  return (
    <div className="layout">
      {/* Navbar */}
      {children}
      {/* Others */}
      {/* Footer */}
    </div>
  )
}

export default TextPrimary;