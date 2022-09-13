import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cashReducer.cash)

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  console.log(cash)
  return (
    <div className="App">
      <div style={{display:'flex'}}>
        <div>{cash}</div>
        <button onClick={() => addCash( Number(prompt()) )}>Пополнить счет</button>
        <button onClick={() => getCash( Number(prompt()) )}>Снять со счета</button>
      </div>
    </div>
  );
}

export default App;
