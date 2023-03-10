import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import InventoryPage from './InventoryPage';
import ModelList from './ModelList';
import ModelForm from './ModelForm';
import AutoForm from './AutoForm';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import AutoList from './AutoList'
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import TechnicianForm from './TechnicianForm';
import SearchAppointment from './SearchAppointment';
import SalesList from './SalesList';
import SalesPersonForm from './SalesPersonForm';
import SalesRecordForm from './SalesRecordForm';
import SalesPersonHistory from './SalesPersonHistory';
import CustomerForm from './CustomerForm';


function App() {

  return (
          <BrowserRouter>
                  <Nav />
                    <div className="container">
                      <Routes>
                        <Route path="/" element={<MainPage />} />
                          <Route path="inventory">
                              <Route path="" element={<InventoryPage />} />
                                <Route path="manufacturers">
                                  <Route path="" element={<ManufacturerList />}/>
                                  <Route path="new"  element={<ManufacturerForm />} />
                                </Route>
                                <Route path="models">
                                  <Route path="" element={<ModelList />}/>
                                  <Route path="new"  element={<ModelForm />} />
                                </Route>
                                <Route path="automobiles">
                                  <Route path="" element={<AutoList />}/>
                                  <Route path="new"  element={<AutoForm />} />
                                </Route>
                          </Route>
                          <Route path="services">
                                <Route path="technicians">
                                  <Route path='new' element={<TechnicianForm />} />
                                </Route>
                                <Route path="appointments">
                                  <Route path="" element={<AppointmentList />}/>
                                  <Route path="new"  element={<AppointmentForm />} />
                                  <Route path='search' element={<SearchAppointment />} />
                                </Route>
                          </Route>
                          <Route path="sales">
                              <Route path="" element={<SalesList/>}/>
                                <Route path="customer" element={<CustomerForm />} />
                                <Route path="new"  element={<SalesRecordForm />} />
                                <Route path="salesperson">
                                    <Route path="new" element={<SalesPersonForm />} />
                                    <Route path="history" element={<SalesPersonHistory/>} />
                              </Route>
                          </Route>
                      </Routes>
                    </div>
          </BrowserRouter>
	);
}


export default App;
