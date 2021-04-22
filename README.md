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

This application was built to help new Cognizant's graduates to organize themselves. It is possible to check the courses and the assessments available in the system, keep track of the assessments' scores and access Cognizant news. 
The application also allows an administrator to register the employees to the platform and update the learning path. 

## 2. The basics

<ul>
<li>The codebase is implemented in <b>Nuxt.js</b>. </li>
<li>The application uses the dependency "json-server" to mock an API</li>
<li>Unit tests are implemented using Jest and vue-test-utilities. The test folder is separated by  <b>Pages </b>,  <b>Components</b>, <b>Api</b>, <b>Vuex</b> and helpers</li>
<li>It uses <b>nuxtjs/tailwindcss</b> for the style</li>
  </ul>

**Dependencies**
<ul>

<li><b>axios</b> : to retrieve data from API</li>
<li><b>vue-toastification</b>: to generate toasts</li>
<li><b>json-server</b>: to mock an API and database</li>
</ul>

**Dev-Dependencies**
<ul>
<li><b>jest</b>: to test the application</li>
<li><b>bycript</b>: to hash the passwords</li>
<li><b>nodemon</b>: to run the server-side continuously </li>
 <li><b>@nuxtjs/tailwindcss</b>: for the style </li>
 <li><b>nuxt-i18n</b>: for the translator </li>

</ul>


## 3. Assets

- Logos, svgs and  images are in `/assets`
- The stylesheets are in `/assets/`
- The favicon is in `/static`

## 4. Component Hierarchy

  >Everything that has to be reutilized has to become a component.  

### The component folder is separated by:
<ul>
<li>Courses: Here, you place the components which are used to administrate the courses. It can be a course table, a course form or a common page to display courses</li>
<li>Footer</li>
<li>Nav</li>
<li>Register: Here, you place the components related to registering new employees(grads). It is related to the page page/adm/RegisterEmployee.vue </li>
<li>Scores: Here, you place the components which are related to the  assessment's scores. This information is shared between adm and grads.</li>
<li>Style: Here you place the components which became a component only for style propose. The component must not have any special functionally besides make a common and shared style through other components or pages</li>
<li>The components which have no folder are shared for different functionalities </li>
</ul>

---The pages folder is separated by administrator and graduate. 

## 5. Middleware

There are two middlewares in this application.

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

This function shows how it happens. The middleware gets the data from the VUEX store through the context parameter. This context gives us the store, the route and the redirect function. From the store, we have access to the **getters**, which retrieve two properties, isAdm and isLoggedIn. Both are functions that return a boolean value. 

```bash
isAdm()=>!!state.adm
isLoggedIn()=>!!state.token
```

With this information, the middleware redirects the user to the right page. This middleware is connected to all the pages in your application.

`/cousers.js`

This middleware is essential to assure that the data from courses database will be loaded before the component mounts. It is used in all the pages with the layout "graduate". 

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
## 6. Layout
There are two layouts in this application, default and dash_layout. The layout holds not just the shared components (Nav and footer) but also important configuration:

**Mixin:** 
The Mixin holds the global variable, and it is assigned to the layout. 

**Toast:** 
The layout wraps and configures the toats to the application.

**middleware:**
The layout assures that the middleware `course.js` is connected to the router. 

To assign the layout to the page, you need to put this piece of code.


```bash
export default {
   layout: "dash_layout",}
```

## 7.VUEX && Localhost
The store consists of 2 modules, auth and courses. 

### auth module

The auth module handles the authentication process. 

#### states
The states holds:

<ul>
  <li>token:String</li>
    <li>user_id:String</li>
        <li>user_name:String</li>
  </ul>


Those properties are stored in the localStorage to certify that the user will be logged in even if the page is refreshed or closed. 

#### getters 

The getters `isLoggedIn`checked if there is a property assigned to the token  and returns a boolean value. The other keys return the state. 

#### actions
The actions are login and logout. Both call the mutations and set or delete data from the localStorage. 

The action login does not fetch data from the API; the component fetches the data and passes it to the action. 

### courses

#### state
<ul>
  <li>courses:Array</li>
    <li>assessments:Arrayy</li>
  <li>scores:Array</li>
  </ul>


#### getters

All the getters return the state.

#### actions

`fetchCourses`

This function calls the fetch function from the API/requests and set the data to the state separating courses from assessments with a mutation. 

`fechScores`

This function call the fetch function to API/request and set the score data to the state with a mutation. 

`handleAddCourses`
This action call the mutations 'ADD_ASSESMENT'/'ADD_COURSE' and according to the assessment property:boolean, it changes the state, adding the new data passed.


## 8.API


The API requests are made with **axios**. I separated the requests based on both API which this application fetches data. 

`mocked database api/requests`


Those requests are made with a service HTTP that settle some default configuration to the API request. 

<p>All the requests are made with a default baseURL assign to 'localhost:4020'. So all the requests will have this endpoint + a route.</p>

<p>There is an interception that reads the status of the response. In case the status is a client error ( status >=400 &&  =< 500), it will throw an error that can be caught. In case it is a server error, the error will log in to the console. </p>
<p>This file exports the HTTP request GET, POST and PUT. To have access to another HTTP request you need to include it in the export default object.</p>

To use those configuration you neet to import http from `../http.services.js` to your file and use it in your function

example: 

```bash
import http from '../http.services';

/**
 * @function getCourses
 * @param {string} token 
 * @returns {Promise}
 */
export const getCourses = async (token) => {
    const response = await http.get("courses", {
        headers: { 'Authorization': `Bearer ${token.token}` }
    });
    return response.data;
};
```

If you don't intend to use those configuration just import axios in your file and make the request normally.

## 9. Test

The application has only unit tests made with `vue-test-utilities` and  `jest`. The test folder is separated in:
<ul>
<li>Api</li>
<li>Pages</li>
<li>Components</li>
<li>Vuex</li>
<li>helpers</li>
</ul>

To test the pages with VUEX, it is necessary to mock the store; there is already a store mocked on ./store/__mocks__. To use this store, you will need to import it to your test and create a Local Vue passing VUEX as parameter. 

**example**

```bash
import Vuex from 'vuex';
import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { __createMocks as createStoreMocks, store } from '../../store/__mocks__';
import Index from '../../pages';
import VueMeta from 'vue-meta';


jest.mock('../../store/__mocks__');

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);

```

Then you can shallow the component using `vue-test-utils` and pass the mocked store and the new localVue created. 


```bash
   wrapper = await shallowMount(Index, {
            store: store,
            localVue
        });
```

## 10. Mixin

In the mixin, there is a file that stores all the global variables. This mixin is connected to the graduate layout, and you can connect to your page or layout using this piece of code. 

```bash
import global from "../mixin/global";

Vue.mixin(global);

```
## 11. Localizer 

The applicatio uses `nuxt-i18n` to apply a translator. The current languages availabe are portuguese and english, but it is possible to add more languages configuring the module on `nuxt.config`. The translator dictionary is on `/plugin/i18n`
