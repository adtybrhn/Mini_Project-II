#Merchant
* merchant object
```
{
  id: integer
  name: string
  email: string
  password: string
  address: string
  join_date: date
  phone_number: string
  last_login: datetime 
}
```
**POST /minipro/register**
----
  Creates a new merchant {user} and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
    {
        name : varchar(20),
        password : varchar(100),
        password_repeat : varchar(100)
    }
```
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ "msg": "Registered!" }` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ "msg": "Please enter a password with min. 6 chars" }`  
  OR  
  * **Code:** 401  
  **Content:** `{ "msg": "Both passwords must match" }`

**POST /minipro/login**
----
  Login as registered merchant {user} and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
    {
        name : varchar(20),
        password : varchar(100),
    }
```
* **Success Response:**  
* **Code:** 200  
  **Content:**  
  ```
  {       
    "msg": "Logged in!",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJpYXQiOjE2NDM0MjcyMzMsImV4cCI6MTY0NDAzMjAzM30.u_qWwYmo7kLRViA8d34j7X9fw5KXDSeYewnjMP_mtE4",
      
      "user": {
          "id": 15,
          "name": "merchant1",
          "email": null,
          "password": "$2a$10$OZuAtwcinPtyL9eanP9D4eR9mqioM44pM209BfKlt12lPgkdtIxhG",
          "address": null,
          "join_date": "2022-01-28T17:00:00.000Z",
          "phone_number": null,
          "last_login": null
      } 
    }
    ```
* **Error Response:**
* **Code:** 401  
**Content:** `{ "msg": "Username or password is incorrect!" }`
----
#Product
* product object
```
  {
    id: integer
    name: varchar
    quantity: varchar
    price: integer
  }
```
**GET /minipro/product**
----
  Return get all product in the system
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<Bearer Token>`
* **Success Response:**  
* **Code:** 200  
  **Content:**  
  ```
    { 
        product:  [
                    {<product_object>},
                    {<product_object>},
                    {<product_object>}
                  ]
    }
  ``` 
* **Error Response:**
 * **Code:** 401  
  **Content:** `{ "msg": "You must login first!" }`

**GET /minipro/product/:id**
----
  Return to specified product
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<Bearer Token>`
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <user_object> }` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ "message": "Product Not Found" }`  
  OR  
  * **Code:** 401  
  **Content:** `{ "msg": "You must login first!" }`

**POST /minipro/product**
----
  Creates a new product and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<Bearer Token>`
* **Data Params**  
```
    {
      name: varchar(50),
      quantity: integer,
      price: integer
    }
```
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ "message": "Product Created" }` 
* **Error Response:**
* **Code:** 401  
  **Content:** `{ "msg": "You must login first!" }`

**PATCH /users/:id**
----
  Updates fields on the specified product and returns the updated object.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
```
  {
  	name: varchar(50),
    quantity: integer,
    price: integer
  }
```
* **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<Bearer Token>`
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <product_object> }`  
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ "message": "Product Not Found" }`  
  OR  
  * **Code:** 401  
  **Content:** `{ "msg": "You must login first!" }`



