import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav'
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import AutoList from './AutoList'


  function App() {
    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="manufacturers">
              <Route path="" element={<ManufacturerList  />} />
            </Route>
            <Route path="manufacturers">
              <Route path="new" element={<ManufacturerForm />} />
            </Route>
             <Route path="automobiles">
              <Route path="" element={<AutoList  />} />
            </Route>

          </Routes>
        </div>
      </BrowserRouter>
    );
  }

  export default App;
