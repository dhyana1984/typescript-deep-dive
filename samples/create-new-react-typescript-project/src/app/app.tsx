import React from 'react'
import ReactDom from 'react-dom'

const Hello: React.FunctionComponent<{ compiler: string; framework: string }> =
  (props) => {
    return (
      <div>
        <div>{props.compiler}</div>
        <div>{props.framework}</div>
        <div>{'Fuck webpack5'}</div>
      </div>
    )
  }

ReactDom.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('root')
)
