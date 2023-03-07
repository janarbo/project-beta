import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ModelList from './ModelList';
import ModelForm from './ModelForm';
import AutoForm from './AutoForm';

function App(props) {

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="models">
            <Route path="" element={<ModelList models={props.models} />} />
          </Route>
          <Route path="models">
            <Route path="new" element={<ModelForm />} />
          </Route>
          <Route path="auto">
            <Route path="new" element={<AutoForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
