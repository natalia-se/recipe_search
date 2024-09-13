# Instructions

## 1. Preparations
- Install Node.js. It provides the runtime environment for JavaScript code execution. Node Package Manager (npm) is bundled with Node.js and used to manage project dependencies.
https://nodejs.org/en/download/package-manager/current

- Create a GitHub account to version control your code and allow for easier deployment.
https://github.com/

- If you haven't got Git installed follow this guide to install it
https://docs.github.com/en/get-started/getting-started-with-git/set-up-git

- Create a Netlify account for easy deployment of the app.
https://app.netlify.com/

- Create a developer account at Edamam to get access to their recipes API. We will create an app there and use the credentials to fetch the recipes to our React app. 
https://developer.edamam.com/edamam-recipe-api


## 2. Clone project from GitHub
### Clone project from GitHub
- Project found here: https://github.com/reactworkshop2024/reactworkshop2024
- Instructions on how to clone a project: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository


## 3. Install packages and start the app
### npm install
This command installs a package and any packages that it depends on. This must be run before trying to start the app.

### npm start
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## 4. Create an Edamam app and use the API
* Create an app find the app-id and key: https://developer.edamam.com/admin/applications
* Create a file called ".env" in the same root directory where you see the .gitignore and package.json. 
* In the .env file add the two following variables on one row each, but with the-app-id and the-app-key switched to your app values. No citation marks.
REACT_APP_ID=the-app-id
REACT_APP_KEY=the-app-key


## 5. Update display of recipes
* Update the recipe Components/Card.jsx card-component to show the data, link to the original recipe and present relevant information
* Update the styling of the app to make it your own in the App.css


## 6. Push your app to GitHub
* Instructions: https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github


## 7. Publish your app with Netlify
* Login to your Netlify account using your GitHub account: https://app.netlify.com/login
* Connect your GitHub account https://app.netlify.com/user/settings
* Press "Add new site" --> "Import an existing project" --> Select GitHub 
* Select either this repository or all allow all your repositories
* Configure by adding your two environment variables REACT_APP_ID, REACT_APP_KEY with the correct values and then deploy
* Congratulations, you have a deployed project!