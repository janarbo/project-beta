# CarCar

Team:

* Janar Bokeyhan - Service microservice
* Peter Trinh - Sales microservice

## Design

excalidraw file


To tackle this project, our team has decided to break down the application into three distinct microservices - Inventory, Service, and Sales. Each microservice will have its own unique set of data, which can be used by other microservices as value objects within their respective domains.

1. On the back-end, we will be using the Django framework to set up RESTful APIs for each microservice. These APIs can be accessed via specific URLs, which allow us to retrieve data from each microservice.

2. As for the front-end, we will be leveraging the React library to create a fast and responsive user interface. Users can interact with the application via the web page, which can be accessed at http://localhost:3000/.

3. To simplify the deployment process, we will be using Docker containers along with a provided docker-compose.yml file that contains all the necessary dependencies for the entire application. This makes it easier for developers to build and run the application without worrying about any missing dependencies.


To begin collaborating on this project, follow the steps below:

1. One member of the team should fork the repository at https://gitlab.com/sjp19-public-resources/sjp-2022-april/project-beta.
2. The same member should navigate to "Project Information" > "Members" and click "Invite members" to add their teammate as a "Maintainer".
3. Both members should clone the repository to their local computers using the same Git URL.
4. Run the following commands on each computer to create the necessary Docker volumes, build the Docker containers, and start the application:
```
docker volume create beta-data
docker-compose build
docker-compose up
```
5. Note: If you encounter a warning about a missing environment variable named OS on macOS, it can be safely ignored.
6. Take some time to review the existing code and discuss it with your teammate.
Review the requirements for each microservice on the following pages:
- Inventory Front-End
- Service
- Sales
7. Decide which microservice each member will work on.
Open the README.md file and add your name as "Person 1" or "Person 2", along with a brief explanation of your approach to developing your microservice and poller.


## Inventory

Explain here.

## Service microservice

### Overview

This application is designed to help manage and track automobile service appointments.
- Users can create appointments using a user-friendly form, which includes fields for vehicle identification number (VIN), customer name, date/time, reason for appointment, and technician assigned.
- Allows users to view a comprehensive list of scheduled appointments, which includes appointment status (canceled, or finished) and indicate if a customer is VIP based on the vin number provided in the appointment form.
- Includes a search bar functionality that allows users to search for specific appointments by vin number.

**URL and Port**: localhost:8080

### Back_End

#### Service Models:

- **Entities**:

**Appointment**: This model represents an appointment with a unique identity and a life cycle that can be active, canceled, or completed. Each instance of Appointment has properties such as vehicle identification number (VIN), customer name, date/time, reason for appointment, and technician assigned. The Appointment model also includes a property to indicate the status of each appointment instance (i.e., finished or canceled).

**Technician**: The Technician model represents a unique technician with a specific employee number. Each technician is considered an entity and has its own identity.

- **Value Object**:

**AutomobileVO**: This model contains information about a customer's automobile and is considered a value object because it has no identity or life cycle. The data stored within this model is used to determine if the customer qualifies as a VIP and should not be updated or deleted. The properties of the AutomobileInfo model include vin, year, color.

### Restful API:

### Technicians:
| Action             | Method   | URL |
|  ------------------| ----- | --------------------------------------|
| List Technicians      |  GET  |http://localhost:8080/api/technicians/ |
| Create a Technician   |  POST    |http://localhost:8080/api/technicians/ |
| Show Technician Detail|  POST   |http://localhost:8080/api/technicians/:id/ |
| Delete a Technician   |  Delete |http://localhost:8080/api/technicians/:id/ |

<details open>
<summary>List Technicians Output</summary>
<br>

```

    {
        "technicians": [
            {
                "href": "/api/technicians/1/",
                "name": "Lilian Will",
                "employee_number": 2578,
                "id": 1
            },
        ]
    }
```

</details>





### Appointments:

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
