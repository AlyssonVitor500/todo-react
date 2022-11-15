import style from './App.module.css';
import { Content } from './components/Content';
import { Header } from './components/Header';

function App() {

  return (
    <main className={style.container}>
      <Header />
      <Content />
    </main>
  )
}

export default App
