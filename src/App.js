
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <HeaderComponent>
    </HeaderComponent>
      <Routes>
      
      <Route path='/' element={<ListEmployeeComponent />}>

      </Route>

      <Route path='/employees' element={<ListEmployeeComponent />}>

      </Route>

      <Route path='/add-employee' element={<AddEmployeeComponent/>}>

      </Route>

      <Route path='/edit-employee/:id' element={<AddEmployeeComponent/>}>

      </Route>

      <Route path='/delete-employee/:id' element={<ListEmployeeComponent/>}>

      </Route>

      
      </Routes>
    
      
    <FooterComponent></FooterComponent>
    </BrowserRouter>
    </>
    
  );
}

export default App;
