import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <Message />
       {/* <Greet name="Arun" heroName="Salman khan" >
        <p> this is props childrean</p>
        </Greet>
       <Greet name="Karan" heroName="Amir khan">
          <button > Action </button>
         </Greet>
       <Greet name="Ram" heroName="Mithun da">
        </Greet>
      
      <Welcome  name="Arun" heroName="Salman khan" >

        </Welcome>
      <Welcome name="Karan" heroName="Amir khan" />
      <Welcome name="Ram" heroName="Mithun da" /> */}
    </div>
  );
}

export default App;
