import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ModelList from './ModelList';
import ModelForm from './ModelForm';
import AutoForm from './AutoForm';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import AutoList from './AutoList'
//import CreateAppointment from './CreateAppointment';
//import AppointmentList from './AppointmentList';
import TechnicianForm from './TechnicianForm';

function App(props) {

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="models">
            <Route path="" element={<ModelList />} />
          </Route>
          <Route path="models">
            <Route path="new" element={<ModelForm />} />
          </Route>
          <Route path="manufacturers">
            <Route path="" element={<ManufacturerList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="automobiles">
            <Route path="" element={<AutoList />} />
            <Route path="new" element={<AutoForm />} />
          </Route>
          <Route path="appointment">
            <Route path="" element={<AutoList />} />
            <Route path="new" element={<AutoForm />} />
          </Route>
          <Route path="services">
            {/* <Route path="" element={<AppointmentList />}></Route> */}
            {/* <Route path="new" element={<CreateAppointment />}></Route> */}
            <Route path="technicians/new" element={<TechnicianForm />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
