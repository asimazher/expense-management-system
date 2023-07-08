import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';

function App() {
  return (
    <div className="">
      <Header />
      <div className='container'>
        <Balance/>
        <IncomeExpenses />
        <AddTransaction />
      </div> 
    </div>
  );
}

export default App;
