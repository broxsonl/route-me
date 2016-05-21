# route-me

Route-me is a lightweight framework designed for quickly and easily setting up routes for a local server. Using route-me, you can define the behavior of your server by specifying a route using a RESTFUL method (currently only handles GET, POST, PUT, and DELETE), path, and callback function. Route-me will handle the rest!

#### Installation
Open your favorite terminal and install the route-me framework via npm:
```sh
$ npm i route-me
```
#### Basic Use
Simply require route-me as a dependency, which will instantiate a new router to which you can add your own custom routes:

```
const router = require('route-me');
```
Define your custom routes within a separate module.  You will need to export the router at the bottom of the file, after definining the routes.  Then, require this module into your server file.

__file: routes.js__
```
const router = require('route-me');
/// routes defined here
router = module.exports;
```
#### Defining Routes
Create methods on your router by specifying a RESTFUL method (.get, .post, .put, or .delete), URL path, and callback function. This is the general template:

__file: routes.js__
```
const router = require('route-me');

router.get('/testPath', function(req, res) {
    res.write('Your message to the client here');
    res.end();
});

router = module.exports;
```

### Todos

 - Handle other RESTFUL methods beyond GET, POST, PUT, DELETE
 - Handle many types of data
 - Enable responses beyond writing to the client


License
----

MIT
