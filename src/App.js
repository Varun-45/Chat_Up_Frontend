import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Chatpage from './components/Chatpage';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={Chatpage} />
      <Route path="/tst" component={Test} />

    </div>
  );
}

export default App;
