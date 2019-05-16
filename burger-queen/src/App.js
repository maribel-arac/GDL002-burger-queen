import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import ShowMenu from './components/menu';
import Combos from './components/combos';
// import Counter from './components/counter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar name="Mariscos Selectos Perico" /> 
        {/* <Route to="/" component={Home}/>*/}
        <Route exact path="/" render={() => <Home title="Platillos" />} />
        <Route path="/menu" render={() => <ShowMenu />} /> 
        <Route path="/combos" render={() => <Combos />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
