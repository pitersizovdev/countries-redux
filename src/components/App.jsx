import React from 'react'
import './app.less'
import { useDispatch, useSelector } from 'react-redux'
import { setCount } from '../reducers/reposReducer'

const App = () => {
  const dispath = useDispatch()
  const count = useSelector(state=>state.repos.count)

  function onCountClick(){
    dispath(setCount(5))
  }

  return (
    <div className="app">
        <button onClick={()=>onCountClick()}>Count</button>
        <div>{count}</div>
    </div>
  )
}

export default App