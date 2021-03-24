# grad_dashboard

## Initialize 

```bash
# clone the repo
$ git clone

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# start the API
$ npm run start-auth

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## 1.Motivation 

This application was built to help new graduates from Cognizant organize themselves better when following the graduate programme's learning path. It is possible to check the courses and the assessments in the system to keep track of the assessment's scores and access Cognizant news. 
The application also allows an administrator to register the employees to the platform and update the learning path. 

## 2. The basics

<ul>
<li>The codebase is implemented in **Nuxt.js**. </li>
<li>The application uses the dependency "json-server" to mock an API</li>
<li>Unit tests are implemented using Jest and vue-test-utilities. The test folder is separated by  **Pages**, **Components**,**Api**,**Vuex** and helpers</li>
<li>It uses **nuxtjs/tailwindcss** for the style</li>
  </ul>

**Dependencies**
<ul>

<li> axios : to retrieve data from API</li>
<li>vue-toastification: to generate toasts</li>
<li>json-server: to mock an API and database</li>
</ul>

**Dev-Dependencies**
<ul>
<li>jest: to test the application</li>
<li>bycript: to hash the passwords</li>
<li>nodemon: to run the server-side continuously </li>
</ul>

## 3. Mocked API


```bash
mock_server
  >helpers
  >router
  db.json
  server.js
  user.json
```
The API was built using json-server dependency. Using this tool, you can mock and run a database and server-side. This part of the application is separated into routers, database and server. You can have access to the files **db.json**, which mock a table of courses.
> The properties of courses are: 
<ul>
  <li>id:Number</li>
<li>week:Number</li>
<li>course_code:String</li>
<li>course_name:String</li>
<li>assessment:Boolean</li>
<li>source:String</li>
<li>duration:Number</li>
<li>link:String</li>
</ul>

There is another table that represents the user; you can find this data in user.json

> The properties of courses are: 
<ul>
<li>id:Number</li>
<li>empId:Number</li>
<li>password:String</li>
<li>name:String</li>
<li>role:Array</li>
<li>assessments_score:Array</li>
</ul>

The server.js mocks an express node.js server. There is a set of a listener of the server in "localhost/4020". The server runs an authentication process using JWT; it gets the client's token and verifies if the user is authenticated for each route except the login page.  Also, in this file, the routes are called and assigned to a path. 
In the router files, you can find CRUD operations, such as adding a new user, authenticating, getting data from the database, etc... Since the data is mocked the assertions to the db are made with fs dependency to read the file and change the content of it. The same thing occurs when you retrieve data from the db.

```bash
  fs.writeFile("./mock_server/db.json", JSON.stringify(coursesDb), (err, result) => {
            err && res.status(401).json({ message: err });
            res.status(200).json({ message: "Your course was addeded" });
            return;
        });

```

>There are 2 options to start the server:
-without an authentication process **npm run start-server**
-with an authentication process **npm run start-auth**
