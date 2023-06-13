import Timer from './components/timer';
import Styles from './App.module.scss';
import TodoTitle from './components/todoTitle';
import TodoSearch from './components/todoSearch';

function App() {
  return (
    <div className={Styles.appContainer}>
      <TodoTitle />
      <Timer />
      <TodoSearch />
    </div>
  );
}

export default App;