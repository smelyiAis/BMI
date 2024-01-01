# BMI calculator implementation 
### Student name: Omarbek Aisultan 
### Group: SE-2202
#### How to install and run the application:
You need to create an additional folder inside the calculator folder using the mkdir command in the terminal. Initialize a Node.js Project: "npm init -y" Run the following command to initialize a new Node.js project. This will create a package.json file. In addition, you need to install the following dependencies: npm install express body-parser chalk validator. Then you have to create Project Files: Create the Server File (calculator.mjs), Create the HTML File (calculator.html). Then you can run the application using "node calculator.mjs" in the terminal. After that you can use the application by navigating to http://localhost:3000
 
In the provided code, the following npm packages and dependencies are used:
Express.js: A web application framework for Node.js that simplifies the process of building web applications.
Body-Parser: Middleware for handling HTTP POST requests and extracting the body of the request. It's used to parse incoming request bodies in a middleware before your handlers, available under req.body.
Chalk: A library for styling console.log output with different colors. It's used for console logging with colored output in the server code.
Validator: A library for string validation and sanitization. It's not used correctly in the provided code, and it seems there is an issue with its integration.
These packages are specified in the package.json file under the dependencies section. The express.static middleware is also used to serve static files, such as HTML, CSS, and JavaScript files.
