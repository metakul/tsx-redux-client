import { execSync } from 'child_process';

// Get command line arguments
// eslint-disable-next-line no-undef
const args= process.argv.slice(2);

// Check if any arguments are provided
if (args.length === 0) {
  console.log('Please provide arguments to specify which scripts to run.');
  // eslint-disable-next-line no-undef
  process.exit(1);
}

// Function to run a script
function runScript(scriptName, arg1) {
  let command;
  console.log(scriptName)
  if (arg1) {
    command = `node src/Test/signUp/${scriptName}.js ${arg1}`;
  } else {
    command = `node src/Test/Login/${scriptName}.js`;
  }

  try {
    const output= execSync(command);
    console.log(output.toString());
  } catch (error) {
    console.error(`Error executing ${scriptName}: ${error.message}`);
  }
}

// Check provided arguments and run scripts accordingly
const scriptArgs = args.slice(1);
switch (args[0]) {
  case 'signup':
    if (scriptArgs.length < 1) {
      console.log('Please provide a Brahma ID for signup.js.');
      // eslint-disable-next-line no-undef
      process.exit(1);
    }
    runScript('signup', scriptArgs[0]);
    break;
  case 'login':
    runScript('login');
    break;
  default:
    console.log(`Unknown argument: ${args[0]}`);
}