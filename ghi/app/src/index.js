import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


async function loadManufaturers() {
  const response = await fetch('http://localhost:8100/api/manufacturers/');
  if (response.ok) {
    const data = await response.json();
    root.render(
      <React.StrictMode>
        <App manufacturers={data.manufacturers} />
      </React.StrictMode>
    );
  } else {
    console.error(response);
  }
}
loadManufaturers();


async function loadAutos() {
  const response = await fetch('http://localhost:8100/api/automobiles/');
  if (response.ok) {
    const data = await response.json();
    root.render(
      <React.StrictMode>
        <App autos={data.autos} />
      </React.StrictMode>
    );
  } else {
    console.error(response);
  }
}
loadAutos();

async function loadModels() {
  const response = await fetch('http://localhost:8100/api/models/');
  if (response.ok) {
    const data = await response.json();
    root.render(
      <React.StrictMode>
        <App models={data.models} />
      </React.StrictMode>
    );
  } else {
    console.error(response);
  }
}
loadModels();

async function loadModels() {
  const response = await fetch('http://localhost:8100/api/models/');

  async function loadManufaturers() {
    const response = await fetch('http://localhost:8100/api/manufacturers/');
    if (response.ok) {
      const data = await response.json();
      root.render(
        <React.StrictMode>
          <App models={data.models} />
          <App manufacturers={data.manufacturers} />
        </React.StrictMode>
      );
    } else {
      console.error(response);
    }
  }
  loadModels();
  loadManufaturers();


  async function loadAutos() {
    const response = await fetch('http://localhost:8100/api/automobiles/');
    if (response.ok) {
      const data = await response.json();
      root.render(
        <React.StrictMode>
          <App autos={data.autos} />
        </React.StrictMode>
      );
    } else {
      console.error(response);
    }
  }
  loadAutos();
