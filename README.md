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

### 1.Motivation 

This application was built to help new graduates from Cognizant organize themselves better when following the graduate programme's learning path. It is possible to check the courses and the assessments in the system to keep track of the assessment's scores and access Cognizant news. 
The application also allows an administrator to register the employees to the platform and update the learning path. 

### 2. The basics

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

### 3. Mocked API


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
In the helper folder you will find the authentication helpers, there it is used JWT and bycript.  

>There are 2 options to start the server:
-without an authentication process **npm run start-server**
-with an authentication process **npm run start-auth**

### 4. Assets

- Logos, svgs and other images are in `/assets`
- The favicon is in `/static`

## 5. Component Hierarchy
<p>The components are reserved for smaller / less complex functionalities and elements that can or will be reutilized for other components or pages. 
The pages have a more complex structure; it holds multiple components and serves as endpoints for the routing architecture. 
The naming follow the guideline from VUE</p>
<ul>
<li>The unique components, such as NavBar or Footer, are named with a THE  as a prefix. 
**TheNav** 
**TheFooter**</li>
<li>The components which are base for other components and pages, such as, buttons and inputs are named with  Base as a prefix.
**BaseButton**
**BaseInput**</li>
<li>The forms or components which has a functionality are named with a verb as a prefix. The forms end with the form word.
**RegisterNewEmployeeForm**
**AddNewScoreForm**</li>
<ul>
  
  >Everything that has to be reutilized has to become a component. The component folder is separated by: 
<ul>
<li>Courses: Here, you place the components which are used to administrate the courses. It can be a course table, a course form or a common page to display courses</li>
<li>Footer</li>
<li>Nav</li>
<li>Register: Here, you place the components related to registering new employees(grads). It is related to the page page/adm/RegisterEmployee.vue </li>
<li>Scores: Here, you place the components which are related to the  assessment's scores. This information is shared between adm and grads.</li>
<li>Style: Here you place the components which became a component only for style propose. The component must not have any special functionally besides make a common and shared style through other components or pages</li>
<li>The components which have no folder are shared for different functionalities </li>
</ul>

>The pages folder is separated by administrator and graduate. 

## 6. Middleware



There are two middlewares in this application. One to handle the authentication and create guards to the page and the other to handle the data that has to be fetched before the component mounts.

`/auth.js`
This file is a middleware that assures users logged as adm will not have access to pages related to the graduates. The contrary also happens. 

```bash
export default function (context) {
    const { store, redirect, route } = context;
    const isLoggedIn = store.getters['auth/isLoggedIn'];
    let isAdm = store.getters['auth/isAdm'];

    if (isLoggedIn && route.name === "index" && !isAdm) {

        return redirect('graduate/dashboard');
    }
(...)
```

This function shows how it happens. The middleware gets the data from the VUEX store through the context parameter. This context gives us the store, the route and the redirect function. From the store, we have access to the getters, which retrieve two properties, isAdm and isLoggedIn. Both are functions that return a boolean value. 

>isAdm()=>!!state.adm<
>isLoggedIn()=!!state.token<

With this information, the middleware redirects the user to the right page. This middleware is connected to all the pages in your application.

`/cousers.js`

This middleware is essential to assure that the data from courses db will be loaded before the component mounts. It is used in pages where the data is displayed in tables. 

```bash
export default async function ({ store }) {
    const token = await store.state.auth.token;
    const id = await store.state.auth.user_id;
    await store.dispatch('courses/fetchCourses', { token });
    await store.dispatch('courses/fetchScores', { id, token });

}
```

The process is more straightforward. The middleware get the data from the store and dispatch an action once the router is connected to the page. To have access to this data on the page, it is essential to set a middleware. 

```bash
export default {
   middleware: "courses",}
```
