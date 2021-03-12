<p align="center">
  <a href="https://github.com/gilmarxd/clock-in-records-web" target="blank"><img src="resources/logo.svg" width="320" alt="Nest Logo" /></a>
</p>

  <p align="center">The client-side of a system for management of the clock in records of the collaborators of a company</p>
    <p align="center">
<a href="#" target="_blank"><img src="https://img.shields.io/github/package-json/v/gilmarxd/clock-in-records-web" alt="Project Version" /></a>
<a href="#" target="_blank"><img src="https://img.shields.io/github/license/gilmarxd/clock-in-records-web" alt="Package License" /></a>
<a href="#" target="_blank"><img src="https://img.shields.io/github/repo-size/gilmarxd/clock-in-records-web" alt="Repo Size" /></a>
<a href="#" target="_blank"><img src="https://img.shields.io/github/last-commit/gilmarxd/clock-in-records-web" alt="Last Commmit"/></a>
</p>

## Intent

Instigate the candidate to solve a challenge in a while determined, in order to identify categories and technical weaknesses for better internal targeting and onboarding according to the practices and technologies used in the Brainny Smart Solutions.

## Project

The development proposal consists of the implementation of a system for the management of clock-in records of the employees of a company.

### Abstract

### Functional Requirements

- **[FR01]** - Manage time records
- **[FR02]** - Record the collaborator's arrival and departure times
- **[FR03]** - The user with administrator permissions will be able to view in real time the records of collaborators, without need to refresh the page

### Non-functional Requirements

- **[NFR01]** - Only collaborators can record the point
- **[NFR02]** - Only the administrator can view the list with collaborators's records;
- **[NFR03]** - The system will use authentication with JWT
- **[NFR04]** - Node API development;
- **[NFR05]** - Web Client development in React.

# Technologies

- [ReactJS](https://reactjs.org/): A declarative, efficient, and flexible JavaScript library for building user interfaces.
- [MaterialUI](https://material-ui.com/): Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications.
- [Apollo Client](https://www.apollographql.com/docs/react/): A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.
- [React Hook Form](https://react-hook-form.com/): Performant, flexible and extensible forms with easy-to-use validation.
- [Yup](https://www.npmjs.com/package/yup): A JavaScript schema builder for value parsing and validation.

## Installation

```bash
$ yarn
```

## Available Scripts

```bash
# Runs the app in the development mode.
$ yarn start

# Launches the test runner in the interactive watch mode.
$ yarn test

# Builds the app for production to the build folder.
$ yarn build

# This command will remove the single build dependency from your project.
$ yarn eject
```

## Informations

- Author - [Gilmar Custodio](https://github.com/gilmarxd)
- This project is [MIT licensed](LICENSE).
