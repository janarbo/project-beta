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

#### Overview
The inventory micorservice allows the user to create/update, list, view details, and delete for Manufactuers, Vehicle models, and Automobiles.

#### Model
* Maufacturers
* Vehicle Model
* Automobile

#### Manufacturer
| Action                | Method | URL                                    |
| ----------------------| ------ | -------------------------------------- |
| List Manufacturer    |  GET   | http://localhost:8100/api/manufacturers/ |
| Create a Maufacturer |  Post  | http://localhost:8100/api/manufacturers/ |
| Show Manufacturer Detail     |  GET   | http://localhost:8100/api/automobiles/:vin/ |
| Update a Manufacturer|  Put  | http://localhost:8100/api/automobiles/:vin/|
| Delete a Maufacturer |  Del | http://localhost:8100/api/automobiles/:vin/|

<details>
<summary><strong>List of Maufacturers</strong></summary>
<br>

```
{
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Toyota"
}
```

</details>

<details>
<summary><strong>Create and Update Maufacturers</strong></summary>
<br>

#### Input:
```
{
  "name": "Audi"
}
```
#### Ouput:
```
{
	"href": "/api/manufacturers/4/",
	"id": 4,
	"name": "Audi"
}
```

</details>

<details>
<summary><strong>Detail of Manufacturer</strong></summary>
<br>

```
{
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Toyota"
}
```

</details>

<details>
<summary><strong>Delete a Manufacturer</strong></summary>
<br>

```
{
			"id": null,
			"name": "Toyota"
}
```

</details>

#### Vehicle Model
| Action                | Method | URL                                    |
| ----------------------| ------ | -------------------------------------- |
| List Vehicle Modle    |  GET   | http://localhost:8100/api/models/ |
| Create a Vehicle Model |  Post  | http://localhost:8100/api/models/ |
| Show Vehicle Model Detail     |  GET   | http://localhost:8100/api/models/:id/ |
| Update a Vehicle Model|  Put  | http://localhost:8100/api/models/:id/|
| Delete a Vehicle Model |  Del | http://localhost:8100/api/models/:id/|

<details>
<summary><strong>List Vehicle Models</strong></summary>
<br>

```
{
			"href": "/api/models/7/",
			"id": 7,
			"name": "RS 3",
			"picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxrt1B-xGMVcXPnXJLv8R94Y4Q1ebaKC3IovoStc0L4TcxnyP",
			"manufacturer": {
				"href": "/api/manufacturers/4/",
				"id": 4,
				"name": "Audi"
			}
}
```

</details>

<details>
<summary><strong>Create and Update a Vehicle Model</strong></summary>
<br>

#### Input:
```
{
  "name": "RS 3",
  "picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxrt1B-xGMVcXPnXJLv8R94Y4Q1ebaKC3IovoStc0L4TcxnyP",
  "manufacturer_id": 4
}
```
#### Output:
```
{
	"href": "/api/models/6/",
	"id": 6,
	"name": "RS 3",
	"picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxrt1B-xGMVcXPnXJLv8R94Y4Q1ebaKC3IovoStc0L4TcxnyP",
	"manufacturer": {
		"href": "/api/manufacturers/4/",
		"id": 4,
		"name": "Audi"
	}
}
```

</details>

<details>
<summary><strong>Detail of Vehicle Model</strong></summary>
<br>

```
{
			"href": "/api/models/5/",
			"id": 5,
			"name": "Model Y",
			"picture_url": "https://www.topgear.com/sites/default/files/2022/03/TopGear%20-%20Tesla%20Model%20Y%20-%20001.jpg?w=892&h=502",
			"manufacturer": {
				"href": "/api/manufacturers/3/",
				"id": 3,
				"name": "Tesla"
			}
}
```

</details>

<details>
<summary><strong>Delete a Vehicle Model</strong></summary>
<br>

```
{
	"id": null,
	"name": "Sebring",
	"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
	"manufacturer": {
		"href": "/api/manufacturers/1/",
		"id": 1,
		"name": "Toyota"
	}
}
```

</details>

#### Automobile
| Action                | Method | URL                                    |
| ----------------------| ------ | -------------------------------------- |
| List Automobiles    |  GET   | http://localhost:8100/api/automobiles/ |
| Create a Automobile |  Post  | http://localhost:8100/api/automobiles/ |
| Show Automobile Detail     |  GET   | http://localhost:8100/api/automobiles/:vin/ |
| Update a Automobile|  Put  | http://localhost:8100/api/automobiles/:vin/|
| Delete a Automobile |  Del | http://localhost:8100/api/automobiles/:vin/|

<details>
<summary><strong>List of Automobile</strong></summary>
<br>

```
{
			"href": "/api/automobiles/12ABC34DEF56GHI78/",
			"id": 1,
			"color": "White",
			"year": 2023,
			"vin": "12ABC34DEF56GHI78",
			"model": {
				"href": "/api/models/2/",
				"id": 2,
				"name": "Camry",
				"picture_url": "https://media.rti.toyota.com/config/pub/3d/toyota/1008125/1000854/Exterior/1/1200_663_PNG/5dd463c2c1de5d759c35e4878342d42a77f3ef314e490e7b1df0b1c363a87cb8.png",
				"manufacturer": {
					"href": "/api/manufacturers/1/",
					"id": 1,
					"name": "Toyota"
				}
			}
}
```

</details>

<details>
<summary><strong>Create and Update Automobile</strong></summary>
<br>

#### Input:
```
{
  "color": "Black",
  "year": 2023,
  "vin": "ZYX987WUT654RSQ32",
  "model_id": 4
}
```
#### Output:
```
{
	"href": "/api/automobiles/ZYX987WUT654RSQ32/",
	"id": 3,
	"color": "Black",
	"year": 2023,
	"vin": "ZYX987WUT654RSQ32",
	"model": {
		"href": "/api/models/4/",
		"id": 4,
		"name": "Model 3",
		"picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKPFeL1Tof_zan6rU8C7ZNHmZcrv_wVmhvg&usqp=CAU",
		"manufacturer": {
			"href": "/api/manufacturers/3/",
			"id": 3,
			"name": "Tesla"
		}
	}
}
```

</details>

<details>
<summary><strong>Detail of Automobile</strong></summary>
<br>

```
{
	"href": "/api/automobiles/ABC123EFG456HIJ78/",
	"id": 2,
	"color": "White",
	"year": 2023,
	"vin": "ABC123EFG456HIJ78",
	"model": {
		"href": "/api/models/3/",
		"id": 3,
		"name": "CR-V",
		"picture_url": "https://www.notebookcheck.net/fileadmin/_processed_/webp/Notebooks/News/_nc3/2024_Honda_Prologue_Styling_Reve-q82-w240-h.webp",
		"manufacturer": {
			"href": "/api/manufacturers/2/",
			"id": 2,
			"name": "Honda"
		}
	}
}
```

</details>

<details>
<summary><strong>Delete a Automobile</strong></summary>
<br>

```
{
	"href": "/api/automobiles/12ABC34DEF56GHI78/",
	"id": null,
	"color": "White",
	"year": 2023,
	"vin": "12ABC34DEF56GHI78",
	"model": {
		"href": "/api/models/2/",
		"id": 2,
		"name": "Camry",
		"picture_url": "https://media.rti.toyota.com/config/pub/3d/toyota/1008125/1000854/Exterior/1/1200_663_PNG/5dd463c2c1de5d759c35e4878342d42a77f3ef314e490e7b1df0b1c363a87cb8.png",
		"manufacturer": {
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Toyota"
		}
	}
}
```

</details>

#### React
* Have a list detail of Maufacturers
* Have a form to create Maufacturers
* Have a list of Vehicle Models
* Have a form to create Vehicle Models
* Have a list of Automobiles
* Have a form to create Automobiles

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

#### Sales Person

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

#### Customer
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

#### Sales
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
