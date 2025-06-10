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
import Form from './components/Form';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import Hero from './components/Hero';
import ErrorBoundray from './components/ErrorBoundray';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import Counter2 from './components/Counter2';
import ComponentC from './components/context/ComponentC';
import { UserProvider } from './components/context/UserContext';
import PostList from './components/http/PostList';
import PostForm from './components/http/PostForm';

function App() {
  return (
    <div className="App">
      <PostForm></PostForm>

      {/* <PostList /> */}

      {/* <UserProvider value = "Vinay">
         <ComponentC />
      </UserProvider> */}

     

      {/* <Counter2 render={(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} > 

        </ClickCounterTwo>
        )} 
        />

        <Counter2 render={(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} >
          </HoverCounterTwo> 
        )} 
        /> */}

      {/* <ClickCounterTwo />
      <HoverCounterTwo /> */}


      { /* <ClickCounter name='vinay' />
      <HoverCounter /> */ }

      
      {/* <ErrorBoundray>
        <Hero heroname='Batman' />
      </ErrorBoundray>
      <ErrorBoundray>
        <Hero heroname='Superman' />
        </ErrorBoundray>
      <ErrorBoundray>
       <Hero heroname='joker' />
      </ErrorBoundray> */}

      {/* <FocusInput /> */}

      {/* <RefsDemo /> */}

      {/* <ParentComp /> */}


        {/* <Form /> */}


      

      {/* <h1 class="error"> Error</h1>
      <h1 className={styles.success}> Sucess</h1>
      
      <Inline /> */}
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
