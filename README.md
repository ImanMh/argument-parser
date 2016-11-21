# easy-argument-parser
 Simple way read command-line arguments in your project.

## Usage
 In your app: 

```Javascript
//test.js
var args = require('./index.js');
console.log(args);
```

Then you can run your file like this: 
```shell
node test.js --option1 --option2=10
> $ {option1: true, option2: 10}
```
