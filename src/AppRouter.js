import './App.css';
import TaskList from './components/container/taskList';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/404/NotFound';
import React, {useState} from 'react';
import RegisterPage from './pages/RegisterPage';

function App() {

  const [islogged,setIsLogged] = useState(false);

  const loggin = ()=>{
    setIsLogged(true);
  }

  return (  
    <div className="App">
      <Router>
          <h1>TaskList</h1>
          <Routes>
            <Route exact path='/' element={islogged ? (<HomePage/>) : (<LoginPage loggin={loggin}/>) }/>
            <Route path='/task-list' element={islogged ? (<TaskList/>) : (<LoginPage loggin={loggin}/>) }/>
            <Route path='/login' element={islogged ? (<HomePage/>) : (<LoginPage loggin={loggin}/>)}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>
      </Router> 
    </div>
  );
}

export default App;
