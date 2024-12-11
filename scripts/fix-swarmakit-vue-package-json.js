const fs = require('fs');
const path = require('path');

// Define the path to the package.json for @swarmakit/vue
const swarmakitVuePackageJsonPath = path.resolve('node_modules/@swarmakit/vue/package.json');

// Function to modify package.json
const modifyPackageJson = (filePath) => {
  if (fs.existsSync(filePath)) {
    // Read the existing package.json
    const packageJson = require(filePath);

    // Add the "main" field
    packageJson.main = './src/index.js'; // Set the entry point

    // Write the modified package.json back to the file
    fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2));

    console.log(`Modified ${filePath}`);
  } else {
    console.error(`Could not find package.json at ${filePath}`);
  }
};

// Modify the @swarmakit/vue package.json file
modifyPackageJson(swarmakitVuePackageJsonPath);
