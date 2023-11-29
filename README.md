
# Basic API - Hotel Edition

A simple Node.js API for managing hotel data. This API uses Express.js to retrieve hotel information. To get started, follow these steps:

1.  Install the required packages:

```bash
npm install
```

1.  Run the application:

```bash
node index.js
```

By default, the server will run on port 5000. You can change the port number by adjusting the code accordingly.

## API Endpoints

1.  Get all hotels:

```bash
GET http://localhost:5000/api/all
```

1.  Get a hotel by ID:
```bash
GET http://localhost:5000/api/id/:id
```
Replace  `:id`  with the desired hotel ID.

1.  Get hotels by name (using query parameter):

```bash
GET http://localhost:5000/api/hotel/query?name= [ENTER NAME]
```
Replace  `[ENTER NAME]`  with the desired hotel name.

1.  Get hotels with price under a certain value and with a specific number of beds:

```bash
GET http://localhost:5000/api/priceunder/:price/bed/:bed
```

Replace  `:price`  with the desired maximum price and  `:bed`  with the desired number of beds.

## Usage

You can use your own database, just follow the data.js.
To test the API, you can use tools like Postman or CURL. 

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch:  `git checkout -b feature/your-feature-name`
3.  Make your changes and commit them:  `git commit -am 'Add your feature'`
4.  Push to the branch:  `git push origin feature/your-feature-name`
5.  Submit a pull request.

## License

This project is licensed under the MIT License.
