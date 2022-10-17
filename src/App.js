import logo from './logo.svg';
import './App.css';
import routes from './routes';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {

  return (
    <>
       <Router>
        <Routes>

               {
                routes.map((i,index)=>{

                  return <Route path={i.path} key={index} element={i.component}/>

                })                                                             
               }

        </Routes>
       </Router>
    </>
  );
}

export default App;
