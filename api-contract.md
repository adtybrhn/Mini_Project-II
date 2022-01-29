#Merchant
* merchant object
```
{
  id: integer
  name: varchar(20)
  email: varchar(45)
  password: varchar(100)
  address: varchar(30)
  join_date: date
  phone_number: varchar(15)
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
        "name" : "merchant1",
        "password" : "password1",
        "password_repeat" : "password1"
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
  **Content:** `{  "msg": "Both passwords must match"  }`

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
        "name" : "merchant1",
        "password" : "password1",
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
  name: varchar(50)
  quantity: integer
  price: integer
}
```
