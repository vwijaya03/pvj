const prompt =  require('prompt');

// Simple usage of callback 
function greeting(name) {
  console.log('Hello ' + name);
}

async function processUserInput(callback) {
  let name = await prompt.get(['Please enter your name.']);
  return greeting(name['Please enter your name.']);
}

processUserInput(greeting);

/* 
  Rewrite using async/await
*/