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
    OR  
* **Code:** 400  
  **Content:** `{ "msg": "Please enter a password with min. 6 chars" }`
    OR
* **Code:** 400  
  **Content:** `{ "msg": "Both passwords must match" }`
```
