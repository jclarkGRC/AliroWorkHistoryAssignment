## PWA Starter Application

This application is a basic react starter application used by WMT developers for developing progressive web applications

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
You can find more information about getting started with Create React App [here](https://facebook.github.io/create-react-app/docs/getting-started),
and available scripts [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents
- [Quick Start](#markdown-header-quick-start)
- [Built With](#markdown-header-built-with)
- [File Structure](#markdown-header-file-structure)
- [Available Scripts](#markdown-header-available-scripts)
      - [npm start](#markdown-header-npm-start)
      - [npm test](#markdown-header-npm-test)
      - [npm run build](#markdown-header-npm-run-build)
      - [npm run eject](#markdown-header-npm-run-eject)
- [Testing](#markdown-header-testing)
- [License](#markdown-header-license)

## Quick Start
1. git clone git@bitbucket.org:wmtp/pwa-starter-application-npm-ts.git
1. cd into simple-mood-tracker-pwa
1. Run  'npm install'
1. Run 'npm start'

## Built With
- [React](https://facebook.github.io/create-react-app/)
- [Material UI](https://material-ui.com/)
- [Typescript](https://www.typescriptlang.org/)


## File Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Testing
- Tests can be ran with the `npm test` command
- Tests are ran using Jest with enzyme
        - More information about getting started with jest can be found [here](https://jestjs.io/docs/en/getting-started.html)
- Example Render Test
``` javascript 
it('renders without crashing', () => {
    shallow(<Home/>);
});`    
```

## License
This project is licensed under the MIT License.