import React from "react";

const Greet = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Hello {props.name} aka {props.hero}</h1>
      {props.children}
    </div>
  )
}

// 推荐使用这个export default, 这样在import的时候可以选用不同的关键词，不一定非得是Greet
export default Greet;