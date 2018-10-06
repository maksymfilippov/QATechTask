# CREW APPLICATION

Simple application which represents dashboard with candidates.

### Running locally
`yarn install`

`yarn start`

App will be available on http://localhost:3000


### Running in docker
`docker build -t crew-app .`

`docker run -it --rm -p 5000:5000 --name crew-container crew-app`

App will be available on http://localhost:5000

### Running cypress in docker

`docker-compose run cypress ./node_modules/.bin/cypress run --config baseUrl=http://127.0.0.1:5000`
# QATechTask
