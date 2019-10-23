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

GET a llist of all tests `https://testify-backend.herokuapp.com/api/tests/`
GET a test by test id `https://testify-backend.herokuapp.com/api/tests/1`

POST New Test `https://testify-backend.herokuapp.com/api/tests/`

Requires a request body with the following shape:
```
{
	"title": "Math Quiz",
	"score": 10,
	"user_id": 1
}
```

Will return a response with the following shape:
```
{
    "newTest": {
        "id": 1,
        "title": "Math Quiz",
        "score": 10,
        "created_at": "2019-10-23 20:30:19",
        "user_id": 1
    }
}
```

PUT (Edit) a test `https://testify-backend.herokuapp.com/api/tests/:id`

(:id = the test's id)

Requires a request body with the following shape:
```
{
	"title": "Algebra Quiz",
	"score": 10,
	"user_id": 1
}
```

Will return the edited item: 
```
{
    "id": 1,
    "title": "Algebra Quiz!",
    "score": 10,
    "created_at": "2019-10-23 20:30:19",
    "user_id": 1
}
```

DELETE a test `https://testify-backend.herokuapp.com/api/tests/:id`

(:id = the test's id)

Will return a success message
```
{
    "message": "Test deleted."
}
```