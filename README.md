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

## Given More Time
### The Backend
If I had more time to work on this project I would probably implement a simple
back end utilizing Apollo (possibly the serverless variant). Apollo provides a
simple way of creating a GQL API and the tooling for GQL is an exceptional
boost to developer productivity.

If I were to host this using serverless I would probaby utilize AWS Lambda as
my familiarity is greatest with it currently, though I do remember Firebase
functions being very simple to use.

### Persistance
For such a simple use case any JSON store should be sufficient and I would
consider using something such as DynamoDB for this. However after introducing
user management I would probably start out with PostgreSQL as it's JSONB
functionality provides a great amount of utility and it's still a relational
DB which is helpful for, well, modeling relationships.

### TypeScript
I didn't use TypeScript for this project mostly because I'm a little rusty at
the time and I'm dealing with time constraints. While I respect TypeScript as
a technology choice it seemed to me that utilizing this time as a refresher
course on TypeScript would probably not serve the purpose of the project very
well, and it _is_ marked as optional ;)

### Formik
I found Formik to be a better utility than I expected it to be. Last time I
looked at it as a solution I was not impressed by the amount of boilerplate
code that was required for some basic use cases, but the flexibility that it
provides while still reduce a large amount of boilerplate has turned out to be
better than I expected.
