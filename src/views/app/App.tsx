import CardsComponent from '../../components/CardsComponent/CardsComponent';
import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <h1 className={style.title}>Card App</h1>
      <CardsComponent></CardsComponent>
    </div>
  );
}

export default App;
