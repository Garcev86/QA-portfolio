This document contains ezamples of HTTPS request fo Swagger Pet Stor created using Postman. Link to the Postman kolection is here.

### API Documentation in Markdown

```markdown
# Swagger API Documentation

## Base URL
`https://petstore.swagger.io/v2`

---

### 1. **Find by ID**

- **Method:** `GET`
- **Endpoint:** `/pet/:petId1`

#### Description
Fetches the details of a pet using its ID.

#### Parameters
- `petId1`: The ID of the pet (path parameter).

#### Example Request
```bash
GET https://petstore.swagger.io/v2/pet/{petId1}
```

---

### 2. **Add New Pet**

- **Method:** `POST`
- **Endpoint:** `/pet`
- **Headers:** `Content-Type: application/json`

#### Description
Adds a new pet to the store.

#### Request Body
```json
{
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "rex",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

#### Example Request
```bash
POST https://petstore.swagger.io/v2/pet
```

---

### 3. **Update Existing Pet**

- **Method:** `PUT`
- **Endpoint:** `/pet`
- **Headers:** `Content-Type: application/json`

#### Description
Updates an existing pet in the store.

#### Request Body
```json
{
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "donna",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

#### Example Request
```bash
PUT https://petstore.swagger.io/v2/pet
```

---

### 4. **Delete User**

- **Method:** `DELETE`
- **Endpoint:** `/user/:username`

#### Description
Deletes a user by their username.

#### Parameters
- `username`: The username of the user (path parameter).

#### Example Request
```bash
DELETE https://petstore.swagger.io/v2/user/{username}
```

---

### 5. **Create User**

- **Method:** `POST`
- **Endpoint:** `/user`
- **Headers:** `Content-Type: application/json`

#### Description
Creates a new user in the system.

#### Request Body
```json
{
  "id": 123456,
  "username": "John",
  "firstName": "Doe",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "phone": "string",
  "userStatus": 15
}
```

#### Example Request
```bash
POST https://petstore.swagger.io/v2/user
```

#### Test Scripts
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than 300ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(300);
});
```

---

### 6. **Dynamic Values Example**

- **Method:** `POST`
- **Endpoint:** `/pet`
- **Headers:** `Content-Type: application/json`

#### Description
Creates a new pet with dynamically generated values.

#### Request Body
```json
{
  "id": "{{petId}}",
  "name": "{{petName}}",
  "category": {
    "id": 1,
    "name": "Dogs"
  },
  "photoUrls": [
    "http://example.com/photo.jpg"
  ],
  "tags": [
    {
      "id": 1,
      "name": "tag1"
    }
  ],
  "status": "available"
}
```

#### Example Request
```bash
POST https://petstore.swagger.io/v2/pet
```

#### Pre-request Script
```javascript
// Generate a random ID
const randomId = Math.floor(Math.random() * 1000000);

// Generate a random name
const randomName = 'Pet' + Math.floor(Math.random() * 10000);

// Store the values in environment variables
pm.environment.set('petId', randomId);
pm.environment.set('petName', randomName);
```

#### Test Scripts
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has pet ID", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("id", parseInt(pm.environment.get("petId")));
});

pm.test("Response has pet name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("name", pm.environment.get("petName"));
});

pm.test("Response has category", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("category");
    pm.expect(jsonData.category).to.have.property("name", "Dogs");
});

pm.test("Pet status is available", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("status", "available");
});
```

---

## Authentication
- **Type:** `API Key`
- **Key Name:** `api_key`
- **Location:** `Header`
- **Value:** `special-key`
```

