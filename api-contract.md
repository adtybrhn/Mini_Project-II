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
**GET /merchant**
----
  Returns all users in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
