## Express TypeScript Server

Services that the server uses:

- Auth0: Authentication
- Postgres: Database
- Redis: Cache
- Mailgun: Email

### For Postgres

#### Pull Image

`Docker pull postgres`

#### Run container

`docker container run -d --name=pg -p 5432:5432 -e POSTGRES_PASSWORD={Password} postgres:13`
replace {Password} with your password
