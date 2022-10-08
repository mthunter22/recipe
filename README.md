# What Can You Make

## Developer Comment
To reviewer,
This was fun and interesting. I made my way well through the main TODOs. With 45 minutes until 4 hrs, I figured I could knock out some integration tests with puppeteer as a bonus, as I've had experience doing this before. But I failed to figure out the routing idiosyncracies quickly. In the last minutes I figured I could deploy to Heroku, and could not configure webpack properly for production. Alas, I reverted, as I've spent hours debugging each of these things before...Thanks for this opportunity!

## Installation

Run:

    yarn

This will install all packages and get it ready to start.

## Development

To bring up locally run:

    yarn start

This will start the backend, run webpack, and handle request proxying for the front end.

Navigate to [localhost:3000](http://localhost:3000) to see the frontend running!

## working on the frontend

navigate to `/frontend` in your `editor`, all of the code lives in the `src/` folder.

## working on the backend

navigate to `/backend` in your `editor`, all of the code lives in the `src/` folder.

## vs code

if using vs code, [follow this](https://yarnpkg.com/getting-started/editor-sdks/#vscode) to get the dev env _juuuuuust_ **right**.

### debug

head to the `RUN` tab (the play button w/ a bug) and select `debug` and hit play. this will auto attach the node debugger in vsc to the backend for you.

## Bonus (one of)

1. add ci/cd using travis, circleCI, etc...
1. containerize the application
1. add deployments using heroku, digital ocean, etc...
1. add integration tests using puppeteer, webdriver, playwright, etc...
