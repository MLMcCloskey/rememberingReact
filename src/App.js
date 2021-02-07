import './App.css';
import ButtonBox from './Components/ButtonBox';

function App() {

  let buttons = [{id: 1, color:"red"}, {id: 2, color: "green"}, {id: 3, color: "blue"}, {id: 4, color: "yellow"}, {id: 5, color: "purple"}]

  return (
    <div className="App">
      <header className="App-header">

        <ButtonBox buttons={buttons}/>

      </header>
    </div>
  );
}

export default App;