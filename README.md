# Back-End Documentation for Testify API

POST Register new user: `https://testify-backend.herokuapp.com/api/auth/register`

POST Login new user: `https://testify-backend.herokuapp.com/api/auth/login`


Requires a request object that has username and password attributes of string data type:
```
{
	"username": "sally",
	"password": "1234"
}
```

GET Users: `https://testify-backend.herokuapp.com/api/users/`

GET User by ID: `https://testify-backend.herokuapp.com/api/users/1`

