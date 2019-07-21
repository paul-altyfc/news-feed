# News Articles

News Articles is a front-end React Application designed to offer the capability to serves up news based on a selection of topics. The application makes API calls to the back-end News database. Users of the application can utilise the following functionality within the application:

- Read articles and view a list of the topics available.
- Create new articles.
- Add new comments on articles.
- Vote on articles and comments.
- Delete comments that they have previously added

### **Front-End React App**

#### Github Repo:

https://github.com/TBC

#### Deployed Project:

https://TBC.netlify.com/

### **Back-End API Application**

#### Github Repo:

https://github.com/TBC

#### Deployed Project:

For a full list of end-points please go to the following link:

https://TBC.herokuapp.com/api

## Getting Started

To get this running on your local machine, please do the following:

1. [Fork this repo]
2. Clone the repo in your terminal using the following command:

```
git clone https://github.com/<your-username>/TBC
```

## Installing and Running in local development environment

### 1.Installing Dependencies

Once you have forked and cloned the repo navigate to the root of the project and run the following command to install the dependencies listed in the package.json:

```bash
npm install
```

This installs the following in dependencies:

```json
  "dependencies": {
    "@reach/router": "^1.2.1",
    "axios": "^0.19.0",
    "react": "^16.8.6",
    "lodash": "^4.17.14",
    "react-dom": "^16.8.6",
    "react-scripts": "3.0.1"
  },

```

The above are the minimum version numbers.

### 2. Starting the React app

Once all the dependencies have been installed, start the React app with the following command:

```bash
npm start
```

The browser should open a window automatically with the application. If it does not, navigate to localhost:3000 in the browser.

### 3. Logging in

The front-end will require a valid username for the application to get past the Auth component. Below is a list of valid usernames that can selected from the dropdown list.

- tickle122
- grumpy19
- happyamy2016
- cooljmessy
- weegembump
- jessjelly

## Deployment

This app has been deployed on Netlify. The link is in the introduction to this README file. To deploy your own version, please follow the below instructions

1. To allow netflify to handle redirects, create a **\_redirects** file in the public folder of your repo and populate it with the following line:

```
/* /index.html 200
```

2. Sign up to Netlify on https://app.netlify.com/signup
3. When prompted to do so, select the option to link with your GitHub account.
4. Once the account has been linked, on the 'Create a new site' page, select the option to continually deploy wuth GitHub.
5. In the 'Repository access' configuration box, select the TBC repository.
6. On the build options tab, verify the default settings, then click 'Deploy Site'

## Built With

- [create-react-app](https://github.com/facebook/create-react-app) - React boilerplate
- [axios](https://www.npmjs.com/package/axios) - promise-based http client
- [Reach/Router](https://github.com/reach/router) - Routing for React projects
- [GitHub](https://github.com/) - Version Control

## Authors

- **Paul Dewey** - [TBC](https://github.com/TBC)

## Acknowledgments

- Thank you for the support of all the tutors at Northcoders in Manchester.
