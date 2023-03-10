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

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

#### Model
* Sales person
* Customer
* Sales record
* AutomobileVO

#### Integration with Inventory Microservice

The sales microservice will poll data from the automobile model in inventory and put the data into AutomobileVO model.

#### Sales Person:

| Action                | Method | URL                                    |
| ----------------------| ------ | -------------------------------------- |
| List Sales Person     |  GET   | http://localhost:8090/api/salesperson/ |
| Create a Sales Person |  Post  | http://localhost:8090/api/salesperson/ |

<details>
<summary><strong>List of Sales Person</strong></summary>
<br>

```
{
			"href": "/api/salesperson/2/",
			"name": "Mario",
			"number": "5374120",
			"id": 2
}
```

</details>

<details>
<summary><strong>Create A Sales Person</strong></summary>
<br>

#### Input:
```
{
	"name": "Luigi",
	"number": "6412373"
}
```
#### Ouput:
```
{
	"href": "/api/salesperson/4/",
	"name": "Luigi",
	"number": "6412373",
	"id": 4
}
```

</details>

#### Customer:
| Action                | Method | URL                                    |
| ----------------------| ------ | -------------------------------------- |
| List of Customer    |  GET   | http://localhost:8090/api/salesperson/ |
| Create a Customer |  Post  | http://localhost:8090/api/salesperson/ |

<details>
<summary><strong>List of Customer</strong></summary>
<br>

```
{
			"href": "/api/customer/1/",
			"name": "Ash Ketchum",
			"address": "Pallet Town",
			"phone": "123456789",
			"id": 1
}
```

</details>

<details>
<summary><strong>Create a Customer</strong></summary>
<br>

#### Input:
```
{
	"name": "Yoshi",
	"address": "Town",
	"phone": "546387902"
}
```
#### Output:
```
{
	"href": "/api/customer/4/",
	"name": "Yoshi",
	"address": "Town",
	"phone": "546387902",
	"id": 4
}
```

</details>

#### Sales:
| Action                | Method | URL                                    |
| ----------------------| ------ | -------------------------------------- |
| List of Sales   |  GET   | http://localhost:8090/api/sales/ |
| Create a Sale |  Post  | http://localhost:8090/api/sales/ |

<details>
<summary><strong>List of Sales</strong></summary>
<br>

```
{
			"sales_person": {
				"href": "/api/salesperson/2/",
				"name": "Mario",
				"number": "5374120",
				"id": 2
			},
			"customer": {
				"href": "/api/customer/3/",
				"name": "Brock",
				"address": "Pewter City",
				"phone": "123789456",
				"id": 3
			},
			"price": "50000",
			"automobile": {
				"import_href": "/api/automobiles/ZYX987WUT654RSQ32/",
				"vin": "ZYX987WUT654RSQ32",
				"sold": true
			}
}
```

</details>

<details>
<summary><strong>Create a Sale</strong></summary>
<br>

#### Input:
```
{
	"price": "45000",
	"automobile": "567ERT1123PLCMD94",
	"customer": 2,
	"sales_person": 4
}
```
#### Output:
```
{
	"sales_person": {
		"href": "/api/salesperson/4/",
		"name": "Luigi",
		"number": "6412373",
		"id": 4
	},
	"customer": {
		"href": "/api/customer/2/",
		"name": "Misty",
		"address": "Cerulean City",
		"phone": "987654321",
		"id": 2
	},
	"price": "45000",
	"automobile": {
		"import_href": "/api/automobiles/567ERT1123PLCMD94/",
		"vin": "567ERT1123PLCMD94",
		"sold": false
	}
}
```

</details>

#### Poller
* A poller to poll the Inventory API for Automobile model

#### React
* Have a list detail of sales
* Sales person downdrop to show case all of their sales history
* Have a create Sales Person Form
* Have a create Customer Form
* Have a create Sales Record Form
