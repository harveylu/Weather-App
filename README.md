# Weather-App
It's a simple weather forecast app. <br>
To run this application locally, you need to first install [node.js](http://macdown.uranusjr.com). <br>

* Clone this repo to your local
* run ```npm install```
* run ```npm start```
* This app will run on your local port `3000`

There is an instance of the current version of this app hosted [here](https://frozen-bastion-68224.herokuapp.com ) on heroku.

### App Design
**[Dummy Data]:** There are two sets of dummy data for the weather forecast. One for MountainView only, one for other cities on the list.

**[APIs]:** There are two majors ways to provide data to clients.
```
GET request: /?city=Mountain%20View
```<br>
This will render a web page to display the weather forecast data on the browser.<br>
```
GET request: /Mountain%20View/json
```<br>
This request will return a single JSON object to the client.<br>

**[Default City Choice]:** The default city choice is set to ```Mountain View```. In the future, it could read the location data and/or IP address from users to choose the default city for them. Hitting the root URL of the domain will display the default page, which is ```Mountain View``` if the cookie is empty.

**[Sticky]:** Cookie is utilized to fulfill this feature.

* For a fresh user whose browser doesn't have cookies stored for this server will be directed to default Mountain View display.
* Once the user chose a city, the server will assign this choice to the cookie and return to the user with data from the requested city.
* When users who are with cookies visit the index page, the server will return the data of the city based on the cookie's value, which provides this "sticky" feature.
* Users with cookies can choose to delete the stored cookie and then get redirected to the default Mountain View page.
* When users who have cookies try to retrieve data from another city, the server would give query data higher priority over cookie value, thus the data of the city in the query will be returned. The server also sets query value to the cookie.
* There is a "fancy" page implemented with an online template that will display the data from the same city. While jumping between these two pages, the city choice would persist. (Thus, click another URL link won't make the browser forgets about our previous choices)
* The city choice lives as browser cookies for a month. So even the user closes the browser and opens the web app in 2 weeks, the choice is still remembered.

**[Testing]:** [Mocha](https://mochajs.org/) is used to serve this purpose. There are two majors controller functions that will work to retrieve the right data based on user requests. The following situations are tested in the ```test.js``` file.

* City name returned matches the city name in the JSON data
* Null query and cookie to get default city
* Query information has higher priority than cookie
* Cookie takes place when the query is empty
* City not on the list will return default city
* JSON data request with empty params return an error message (no default choice for JSON data requests)
* Unlisted city JSON request return error message
* Listed city JSON request return data for the requested city

The app passes all these tests.

**[Scaling]:** If more cities are to join, the server is able to handle it with the following design:

*  Client web page takes a list of cities from the server to display in a dropdown input section. So if there are more cities to add on the list, only the city list data stay in the Database needs to change. Everything else will automatically change accordingly.
*  When more and more cities are added to this app, the dropdown input doesn't work that well anymore. It's better to implement an auto-complete text box for users to choose the city they want.
*  More and more cities mainly generate pressures for the database part. Shardings and DFS can help the database to store a large amount of data and improve the request handling speed.

If more users use this app, possible ways to scale are:

* Since Node.js uses a single-thread and an event loop to process requests asynchronously. As an event-based system and with the help of ```callback function``` and some other coding suggestions of js, it already works pretty well to handle lots of concurrent requests.
* In case the users increase enormously to generate thousands of millions of requests per second, there is always a choice to deploy the app on the cloud with node balancer to create a new image of the app to take over parts of the request.


