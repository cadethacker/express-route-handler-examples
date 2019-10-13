const express = require('express')
const app = express()
const port = 3000

// app variable represents the node server. 
// get | post is the HTTP Verb you want it to listen to
// "/" is the Path you want it to repond to. 
// these three parts together: app.get('/'    are called the route handler.
// literally their job is to handle requests to that verb/route combination. 

// everything past the comma is where you write code. 
// so how do you add your code to the route handler? 


// ignore this :D 
app.get('/', (req, res) => res.send(`
<html>
<body>
<a href="/option1">Option 1 - named function - Java like</a><br />
<a href="/option2">Option 2 - anonymous function - OLD</a><br />
<a href="/option3">Option 3 - anonymous arrow function - Great for simple </a><br />
<a href="/option4">Option 3 - arrow function variable - Great for complex </a><br />

</body>
</html>
`))


/// **************************
/// BOOKMARK THIS PAGE, full of awesome examples. 
// https://www.w3schools.com/js/js_function_definition.asp
// ************************


// JavaScript is awesome, but sometimes it is so flexible that it makes it 
// very difficult to understand which option you should use. 
// I hope this shows the differences and explains the pattern. 

// Here are 4 options


// TL;DR: 
// use option 3 for simple responses
// use option 4 for complex responses. 


// Option 1: Named Function
// see how we create an independent named function using `function helloWorld(req, res)` and then 
// give that function to the route handler
// If you see this code, it was probably written by somebody who did Java for years
// and is now trying to learn node.  True :D Very java like pattern.
// Sorta like talking to a native spanish speaker and then saying in English "You no work today"?
// They are speaking english with spanish patterns. 
// I know exactly what they are saying, but it is not exactly correct :D 
function holaWorld(req, res) {
    res.send('Option 1 - Hello World! using named function - Java like')
}
app.get('/option1', holaWorld)


// Option 2 - Anonyous function
// It is an old pattern and you might see this in older code, but with ES6 (newest javascript)
// there are cleaner ways todo this, See Option 3 and 4. Just saying, be aware of it, 
// but don't use it. 
app.get('/option2', function(req,res) { 
    res.send('Opiton 2 - Hello World! using anonymous function - OLD ');
}.bind(this))


// Option 3: Anonymous Arrow Function
// Arrow functions are fairly new to the javascript language. 
// and honestly don't worry about understanding them yet, but if you are feeling
// overachiving, then google "ES6 Arrow Function" and you might find a good video. 
// but when I read good JS code, I see arrow functions all over the place, so
// I would probably use them :D 
// final note, they are anonymouse because the function has no name.  
// you can see that because the (req, res) doesn't have a name prior to it
// like it does in option one. You can also compare that to Option 4 
// and see the difference. 
// https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/
app.get('/option3', (req, res) => res.send('Opiton 3 - Hello World! using anonymouse arrow function - Great for Simple respones'))



// Option 4 Named Arrow Functions. 
// This is what your teacher wants you todo for your homework. And honestly I think is the
// best pattern going forward. I would say that 99% of the node code, you write going forward
// should either use option 3 for simple responses or option 4 if you need to 
// seperate out your code. 

// you can use var let or const, just depends on what scope you want this to have
// see your notes on this.  

var myHelloArrowFunction = (req, res) => {
    // connect to a database
    // pull some information
    // filter the results
    // send it back to the consumer. 
    res.send('Opiton 4 - Hello World! using named arrow function - great for Complex responses')
}
app.get('/option4', myHelloArrowFunction)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))