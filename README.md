# Profile Page Implementation
## Overview
This project is a dynamic profile page built using Vue 3 and Swarmauri's UI component library. The profile page includes features such as:
- A responsive carousel to display images.
- A profile section with an avatar and a form.
- Progress bars indicating profile completion.
- A footer with navigation links.

This project is a demo and demonstrates my ability to integrate third-party UI libraries, style components effectively, and troubleshoot challenges during implementation.

## Challenges Faced
Component Imports

![Error page](public/images/Screenshot%20(1340).png)


-Initially faced issues resolving imports from the Swarmauri UI library due to incomplete module exports.

-Resolved by modifying the library's `package.json` to include proper main and exports fields and updating the `index.js` file.

## Steps i took to resolve import conflicts:
1.I opened the `package.json` file in the root directory of the project.

2.I added the `postinstall` script to automate the setup:

```json
"scripts": {
  "postinstall": "patch-package && node scripts/fix-swarmakit-vue-package-json.js"
}

```
3.Created a file named `fix-swarmakit-vue-package-json.cjs` in the root directory under the `scripts` folder with the following content:

 ```javascript
const fs = require('fs');
const path = require('path');

const swarmakitVuePackageJsonPath = path.resolve('node_modules/@swarmakit/vue/package.json');

const modifyPackageJson = (filePath) => {
  if (fs.existsSync(filePath)) {
    const packageJson = require(filePath);
    packageJson.main = './src/index.js'; 

    fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2));
    console.log(`Modified ${filePath}`);
  } else {
    console.error(`Could not find package.json at ${filePath}`);
  }
};

modifyPackageJson(swarmakitVuePackageJsonPath);

```
4.After cloning the repository, run:

```javascript
npm install

```

This script performs the following:

- Locates the `package.json` file in the `@swarmakit/vue` directory.
- Updates the `main` field in `package.json` to point to `./src/index.js`, ensuring the library's entry point is correctly defined.
- Saves the modified `package.json` file back to the directory.
- Ensures the Swarmauri components are properly exposed for use in the project.







## How to install
1.Clone the repository:

```javascript
git clone https://github.com/eugene4545/swarmakit-vue-demo.git

```
2.Navigate to the project directory:

```javascript
cd swarmakit-vue-demo

```
3.Install dependencies:

```javascript
npm run dev

```
