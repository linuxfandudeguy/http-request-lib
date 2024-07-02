# http-request-lib

[![npm version](https://img.shields.io/npm/v/http-request-lib)](https://www.npmjs.com/package/http-request-lib)



```http-request-lib``` is a NPM package for making http requests and is built on `axios` for handling http requests.




`http-request-lib` currently supports the following methods: 

GET: Retrieve data from a specified resource.

POST: Send data to create a new resource.

PUT: Update an existing resource with new data.

DELETE: Remove a specified resource.


Here is script which demonstrates of these requests with this library:
```javascript
const HttpRequest = require('./index');

const api = new HttpRequest('https://jsonplaceholder.typicode.com');

// Example GET request
api.get('/posts/1')
  .then(data => console.log('GET response:', data))
  .catch(err => console.error('GET error:', err));

// Example POST request
api.post('/posts', { title: 'foo', body: 'bar', userId: 1 })
  .then(data => console.log('POST response:', data))
  .catch(err => console.error('POST error:', err));

// Example PUT request
api.put('/posts/1', { title: 'updated title', body: 'updated body', userId: 1 })
  .then(data => console.log('PUT response:', data))
  .catch(err => console.error('PUT error:', err));

// Example DELETE request
api.delete('/posts/1')
  .then(data => console.log('DELETE response:', data))
  .catch(err => console.error('DELETE error:', err));
```
