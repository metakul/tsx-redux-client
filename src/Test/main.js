/* eslint-disable no-undef */
import { execSync } from 'child_process';
// Get command line arguments
const args = process.argv.slice(2);
// Check if any arguments are provided
if (args.length === 0) {
  console.log('Please provide arguments to specify which scripts to run.');
  process.exit(1);
}
// Function to run a script
function runScript(scriptName, folder, arg) {
  let command;
  if (arg) {
    console.log(arg)
    command = `node src/Test/${folder}/${scriptName}.js ${arg}`;
  } else {
    command = `node src/Test/${folder}/${scriptName}.js`;
  }

  try {
    const output = execSync(command);
    console.log(output.toString());
  } catch (error) {
    console.error(`Error executing ${scriptName}: ${error.message}`);
  }
}
// Check provided arguments and run scripts accordingly
switch (args[0]) {
  case 'signUp':
    if (args.length < 1) {
      console.log('Please provide a Brahma ID for signup.js.');
      // eslint-disable-next-line no-undef
      process.exit(1);
    }
    runScript(args[1], args[0], args[2]);
    break;
  case 'Login':
  case 'Dashboard':
  case 'createHospital':
  case 'createPrescription':
    if (args.length < 2) {
      console.log('Please provide a script name and folder.');
      process.exit(1);
    }
    runScript(args[1], args[0]);
    break;
  default:
    console.log(`Unknown argument: ${args[0]}`);
}
