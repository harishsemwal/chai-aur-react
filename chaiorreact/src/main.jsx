import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function myFunction(){
  return(
    <div>
      <h1>
        Hi This is Harish Here.
      </h1>
    </div>
  )
}

const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit Google'
};

const anotherFunction = (
  <a href="https://google.com" target='_blank'>Click Here </a>
)

const reactType = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click Here to visist google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // myFunction()
    // anotherFunction
    reactType
)
