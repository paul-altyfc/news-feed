# News Articles

News Articles is a front-end React Application designed to offer the capability to serves up news based on a selection of topics. The application makes API calls to the back-end News database. Users of the application can utilise the following functionality within the application:

- Read articles and view a list of the topics available.
- Create new articles.
- Add new comments on articles.
- Vote on articles and comments.
- Delete comments that they have previously added

### **Front-End React App**

#### Github Repo:

https://github.com/paul-altyfc/news-feed

#### Deployed Project:

https://articles-review.netlify.com

### **Back-End API Application**

https://article-reviews.herokuapp.com

#### Github Repo:

https://github.com/paul-altyfc/be-news

#### Deployed Project:

For a full list of end-points please go to the following link:

https://article-reviews.herokuapp.com/api

## Getting Started

To get this running on your local machine, please do the following:

1. Create a new repository on [GitHub](https://github.com/new)
    - do NOT initialise it with a .gitignore or README

1. Create a new directory on your local machine to store the repo

2. cd into the new directory

3. Clone the repo in your terminal using the following command:

```
git clone https://github.com/paul-altyfc/news-feed.git
```
4. cd news-feed

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

- Tom Tickle
- Paul Grump
- Amy Happy
- Peter Messy
- Gemma Bump
- Jess Jelly

## Built With

- [create-react-app](https://github.com/facebook/create-react-app) - React boilerplate
- [axios](https://www.npmjs.com/package/axios) - promise-based http client
- [Reach/Router](https://github.com/reach/router) - Routing for React projects
- [GitHub](https://github.com/) - Version Control

## Authors

- **Paul Dewey** - [paul-altyfc](https://github.com/paul-altyfc)

## Acknowledgments

- Thank you for the support of all the tutors at Northcoders in Manchester.
