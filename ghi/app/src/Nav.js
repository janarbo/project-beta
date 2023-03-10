import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="dropdown nav-item">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                <li className="dropdown-item nav-link">
                  <NavLink className="active text-black text-decoration-none" to="inventory/manufacturers">
                    Manufacturer List
                  </NavLink>
                </li>
                <li className="dropdown-item nav-link">
                  <NavLink
                    className="active text-black text-decoration-none"
                    to="inventory/manufacturers/new">
                    Create Manufacturer
                  </NavLink>
                </li>
                <li className="dropdown-item nav-link">
                  <NavLink className="active text-black text-decoration-none" to="inventory/models">
                    Model List
                  </NavLink>
                </li>
                <li className="dropdown-item nav-link">
                  <NavLink className="active text-black text-decoration-none" to="inventory/models/new">
                    Create Model
                  </NavLink>
                </li>
                <li className="dropdown-item nav-link">
                  <NavLink className="active text-black text-decoration-none" to="inventory/automobiles">
                    Automobiles List
                  </NavLink>
                </li>
                <li className="dropdown-item nav-link">
                  <NavLink className="active text-black text-decoration-none" to="inventory/automobiles/new">
                    Create Automobile
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="dropdown nav-item">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                <li className="dropdown-item nav-link">
                  <NavLink className="active text-black text-decoration-none" to="services/appointments">
                    Service Appointments List
                  </NavLink>
                </li>
                <li className="dropdown-item nav-link">
                  <NavLink
                    className="active text-black text-decoration-none"
                    to="services/appointments/new">
                    Create an Appointment
                  </NavLink>
                </li>
                <li className="dropdown-item nav-link">
                  <NavLink
                    className="active text-black text-decoration-none"
                    to="services/appointments/search">
                    Search for Appointment
                  </NavLink>
                </li>

                <li className="dropdown-item nav-link">
                  <NavLink
                    className="active text-black text-decoration-none"
                    to="services/technicians/new">
                    Create a Technician
                  </NavLink>
                </li>
              </ul>

            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Sales
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/sales">
                    Sales List
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="sales/new">
                    Create a Sale
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="sales/customer/">
                    Create a customer
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="sales/salesperson/new">
                    Create a Sales Person
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="sales/salesperson/history">
                    Sales Person History
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
