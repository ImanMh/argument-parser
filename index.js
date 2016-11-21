var parsedArgs = {};
var strippedArgs = process.argv.slice(2);

strippedArgs.forEach(function (argument) {
  var key = argument.split('=')[0];
  var value = argument.split('=')[1];
  
  var index = 0;
  while (key[index] === '-')
    index++;
  key = key.slice(index);
  parsedArgs[key] = parsedArgs[key] ? value : true;
});

module.exports = parsedArgs;
