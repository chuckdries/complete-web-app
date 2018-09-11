complete-web-app

Go ahead and check out https://github.com/passport/express-4.x-local-example for authentication

to run this project:  

 1. install dependencies: `npm install`
 2. run server: `npm start`


if you'd like to run this project with automatic reloading, so whenever you change a file, it restarts (highly recommended): 
 - use `npm watch` instead of `npm start`

to breakpoint or debug the running server, open `chrome://inspect` in google chrome, click `configure` next to 'discover network targets', then make sure `localhost:9229` and `localhost:9222` are in the list of targets. When you start the server, an entry will appear under 'remote targets.' Press the `inspect` button.
