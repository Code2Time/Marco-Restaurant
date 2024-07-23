import React from "react"

interface Icontainer {
    children : React.ReactNode
}

function Container({children}:Icontainer) {
  return (
    <div className="w-11/12 max-w[1000px] mx-auto h-auto">
      {children}
    </div>
  )
}

export default Container
