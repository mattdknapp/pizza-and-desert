# Pizza And Desert

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
| Script        | Description |
|---------------|----------------------------------------------------|
| start         | Starts the project in development mode             |
| build         | Builds a production ready bundle from the project  |
| test          | Runs the test suite                                |
| test:coverage | Runs the test suite and reports on coverage levels |
| eject         | Ejects from CRA tools and utilities                |
| release       | Builds and uploads the project to s3               |

NOTE: `release` will only work if your AWS client is logged into the correct
account.

## Getting started
To run this project locally, first clone the repository to your development
machine, then from inside the directory you just created via the git clone run
`yarn`. After yarn completes you can start the project using `yarn start`.

## General Structure
As with all standard CRA apps all runnable code is maintained inside of the
directory `src`. Test files are annotated by ending with `.test.js` and are
located adjacent to the file that they are responsible for testing.

Inside of `src` I've added further directories to organize
concerns.

### src/components/
Contains all React components for the project.

### src/constants/
Contains unchanging variables used by this project.

### src/lib/
Contains logic that is not directly related to rendering dom elements.
Potentially if this project were to grow this directory may need to be
redevided and the code organized differently to prevent it from bloating too
much.

## Public Access
This project is hosted in s3 and can be accessed
[here](http://simple-apps.s3-website-us-east-1.amazonaws.com/).

## Creating A Shareable URL
At any point a user can click the `SHARE` button in the form to generate a URL
that can be used to load the form at the current state by anyone with the URL.
