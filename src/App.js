
import './App.css';

function App() {
  return (
    <div className="App">
       <h1 id="title">microverse trials survey</h1>
       <p id="description">this is a survey for microverse trials.</p>
       <form id="survey-form">
         <label>name: </label><input className="mw5" type="text" id="name"/>
         <label>email: </label><input className="mw5" type="email" id="email"/>
       </form>
    </div>
  );
}

export default App;
