import CardsComponent from '../../components/CardsComponent/CardsComponent';
import style from './App.module.css';

function App() {
  return (
    <div className={style.App}>
      <h1>Card App</h1>
      <CardsComponent></CardsComponent>
    </div>
  );
}

export default App;
