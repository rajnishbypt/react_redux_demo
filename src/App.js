 
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { decNumber, incNumber } from './actions';
function App() {
  const myState = useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch()
  return (
    <div className="App">
       <h2> WELCOME TO REDUX</h2>
       <div>
        <button  onClick={()=>dispatch(decNumber())}> -</button>
        <input type="text" value={myState} />
        <button onClick={()=>dispatch(incNumber())}> +</button>
       </div>
    </div>
  );
}

export default App;
