
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MUIStyledComponent } from '@mui/styled-engine-sc';
import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import Createbooks from './Components/Createbooks';
import Edit from './Components/Edit';

function App() {
  
    return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/create' element={<Createbooks/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
