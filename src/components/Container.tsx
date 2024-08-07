interface Icontainer {
    children : React.ReactNode
}

function Container({children}:Icontainer) {
  return (
    <div className="w-10/12 max-w[900px] mx-auto h-auto">
      {children}
    </div>
  )
}

export default Container
