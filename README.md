# easy-argument-parser
 Simple way read command-line arguments in your project.

##installation
```
npm install easy-argument-parser --save
```

## Usage
 In your app: 

```Javascript
//my-app.js
var args = require('easy-argument-parser');

console.log(args);
```

Then you can run your file like this: 
```shell
node my-app.js --option1 --option2=10
> $ {option1: true, option2: 10}
```
