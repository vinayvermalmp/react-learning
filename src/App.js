import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreetting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import styles from './components/appStyles.module.css'
import './components/appStyle.css'

function App() {
  return (
    <div className="App">

      <h1 class="error"> Error</h1>
      <h1 className={styles.success}> Sucess</h1>
      
      <Inline />
      {/* <Stylesheet primary={true} /> */}

      {/* <NameList /> */}

      {/* <Counter />
      <Message /> */}
      {/* <Greet name="Arun" heroName="Salman khan" /> */}
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

      {/* <Welcome name="Ram" heroName="Mithun da" /> */}

        {/* <FunctionClick />   

        <ClassClick /> */}

        {/* <EventBinding /> */}

        {/* <ParentComponent /> */}

        {/* <UserGreeting /> */}
    </div>
  );
}

export default App;
