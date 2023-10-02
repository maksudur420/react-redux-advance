import React, { useState } from 'react'
import './counter.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement,reset,incrementByAmount } from './counterSlice';

const Counter = () => {
    const count = useSelector(state=>state.counter.count);
    const [addCount, setAddCount] = useState(0)
    const dispatch = useDispatch();

    const addValue = Number(addCount) || 0;

    const resetAll =()=>{
        setAddCount(0);
        dispatch(reset())
    }

  return (
    <div className='container'>
      <h1>Counter App</h1>
      <h3>Count : {count}</h3>
      <button className='btn' onClick={()=>dispatch(increment())}>+</button>
      <button className='btn'  onClick={()=>dispatch(decrement())}>-</button><br/>


      <input type="text" value={addCount} onChange={(e)=>setAddCount(e.target.value)}/><br/>
      <button className='btn' onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
      <button className='btn' onClick={resetAll}>Reset</button>
    </div>
  )
}

export default Counter
