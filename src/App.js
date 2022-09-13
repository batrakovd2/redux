import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cashReducer.cash)
  const customers = useSelector(state => state.customerReducer.customers)

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  console.log(cash)
  return (
    <div className="App">
      <div style={{display:'flex'}}>
        <div>{cash}</div>
        <button onClick={() => addCash( Number(prompt()) )}>Пополнить счет</button>
        <button onClick={() => getCash( Number(prompt()) )}>Снять со счета</button>
        <button onClick={() =>  addCustomer(prompt()) }>Добавить клиента</button>
      </div>
      {customers.length > 0 ? 
      <div>
        {customers.map(customer => 
          <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
        )}
      </div>
      :
      <div>Клиенты отсутствуют</div>
      }
    </div>
  );
}

export default App;
