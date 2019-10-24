# Back-End Documentation for Testify API

The base URL for all axios requests: `https://testify-backend.herokuapp.com/api/`


<details>
<summary><b>POST Request - Register a new user</b></summary>
<br>
<b>METHOD</b> - POST
<br>
<b>Endpoint:</b> <code>/auth/register</code>
<br>
<br>
Requires an object in the request body with the following shape:

```
{
	"username": "sally",
	"password": "1234"
}
```

</details>

<details>
<summary><b>POST Request - Login an existing user</b></summary>
<br>
<b>METHOD</b> - POST
<br>
<b>Endpoint:</b> <code>/auth/login</code>
<br>
<br>
Requires an object in the request body with the following shape:

```
{
	"username": "sally",
	"password": "1234"
}
```

</details>


<details>
<summary><b>GET Request - Get a user by their id</b></summary>
<br>
<b>METHOD</b> - GET
<br>
<b>Endpoint:</b> <code>/users/:id</code>
Example: <i><code>/users/2</code></i>
<br>
<br>
Returns a response object with the following shape:
<br>

```
{
    "user": {
        "id": 1,
        "username": "sally789",
        "password": "$2a$10$2NsVlP/CyRevz4afAGgI6.e7bHCnhrd6pFOtyxtLJ58YbYbBRroXu",
        "name": null,
        "email": null,
        "isTeacher": 0,
        "tests": [
            {
                "id": 2,
                "title": "Alegbra test",
                "score": 10,
                "created_at": "2019-10-23 22:17:13",
                "user_id": 1,
                "questions": [
                    {
                        "id": 1,
                        "text": "what is 2 x 2?",
                        "test_id": 2
                    },
                    {
                        "id": 2,
                        "text": "what is 2 x 3?",
                        "test_id": 2
                    }
                ]
            }
        ]
    }
}
```

</details>

<details>
<summary><b>GET Request - Get a list of all tests</b></summary>
<br>
<b>METHOD</b> - GET
<br>
<b>Endpoint:</b> <code>/tests</code>
<br>
<br>
Returns a response array with the following shape:
<br>

```
[
    {
        "id": 2,
        "title": "Alegbra test",
        "score": 10,
        "created_at": "2019-10-23 22:17:13",
        "user_id": 1,
        "username": "sally789",
        "name": null
    },
     {
        "id": 2,
        "title": "Spelling test",
        "score": 10,
        "created_at": "2019-10-23 22:17:13",
        "user_id": 1,
        "username": "sally789",
        "name": null
    }
]
```

</details>

<details>
<summary><b>GET Request - Get a test by test id</b></summary>
<br>
<b>METHOD</b> - GET
<br>
<b>Endpoint:</b> <code>/tests/:id</code>
Example: <i><code>/tests/2</code></i>
<br>
<br>
Returns a response object with the following shape:
<br>

```
{
    "test": {
        "id": 2,
        "title": "Alegbra test",
        "score": 10,
        "created_at": "2019-10-23 22:17:13",
        "user_id": 1,
        "questions": [
            {
                "id": 1,
                "text": "what is 2 x 2?",
                "test_id": 2,
                "answers": [
                    {
                        "id": 1,
                        "option": "4",
                        "isCorrect": 1,
                        "question_id": 1
                    },
                    {
                        "id": 2,
                        "option": "6",
                        "isCorrect": 0,
                        "question_id": 1
                    },
                    {
                        "id": 3,
                        "option": "8",
                        "isCorrect": 0,
                        "question_id": 1
                    }
                ]
            },
            {
                "id": 2,
                "text": "what is 2 x 3?",
                "test_id": 2,
                "answers": []
            }
        ]
    }
}
```

</details>

<details>
<summary><b>POST Request - Create a new test</b></summary>
<br>
<b>METHOD</b> - POST
<br>
<b>Endpoint:</b> <code>/tests</code>
<br>
<br>
Will allow for all fields (except user_id) to be null and will return a new id. 
Requires a request body with the following shape:
<br>

```
{
    "user_id": 2
}
```
Once successful, will return a response object with the following shape: 
```
{
    "newTest": {
        "id": 1,
        "title": null,
        "score": null,
        "created_at": "2019-10-24 04:37:01",
        "user_id": 1
    }
}
```

</details>

<details>
<summary><b>PUT Request - Edit an existing test</b></summary>
<br>
<b>METHOD</b> - PUT
<br>
<b>Endpoint:</b> <code>/tests/:id</code>
Example: <i><code>/tests/2</code></i>
<br>
<br>
Will allow for title and score fields to be updated
<br>

```
{
    "title": "",
    "score": ""
}
```

Once successful, will return a response object with the following shape: 
```
{
    "id": 1,
    "title": "Math Test",
    "score": 100,
    "created_at": "2019-10-24 04:37:01",
    "user_id": 1
}
```

</details>


<details>
<summary><b>POST Request - Post an array of test question objects</b></summary>
<br>
<b>METHOD</b> - POST
<br>
<b>Endpoint:</b> <code>/questions</code>
<br>
<br>
Will allow for text and test_id fields to be updated
<br>

```
[
{
	"text": "What is 1 + 2",
	"test_id": 1
},
{
	"text": "What is 7 * 4",
	"test_id": 1
},
{
	"text": "What is 18 / 2",
	"test_id": 1
}
]
```

</details>

<details>
<summary><b>POST Request - Post an array of answers to a question</b></summary>
<br>
<b>METHOD</b> - POST
<br>
<b>Endpoint:</b> <code>/answers</code>
<br>
<br>
Will allow for text and test_id fields to be updated
<br>

```
[
{
	"text": "What is 1 + 2",
	"test_id": 1
},
{
	"text": "What is 7 * 4",
	"test_id": 1
},
{
	"text": "What is 18 / 2",
	"test_id": 1
}
]
```

</details>

## Table entities

User 

| attribute | data type | required     |
|-----------|-----------|--------------|
| id        | integer   | auto-assigns |
| username  | string    | Yes          |
| password  | string    | Yes          |
| name      | string    | No           |
| email     | string    | No           |
| isTeacher | boolean   | No           |

Test

| attribute  | data type | required     |
|------------|-----------|--------------|
| id         | integer   | auto-assigns |
| title      | string    | No           |
| score      | integer   | No           |
| created_at | timestamp | auto-assigns |
| user_id    | integer   | Yes          |

Question

| attribute | data type | required     |
|-----------|-----------|--------------|
| id        | integer   | auto-assigns |
| text      | string    | No           |
| test_id   | integer   | Yes          |

Answer

| attribute   | data type | required     |
|-------------|-----------|--------------|
| id          | integer   | auto-assigns |
| isCorrect   | boolean   | No           |
| option      | string    | No           |
| question_id | integer   | Yes          |



