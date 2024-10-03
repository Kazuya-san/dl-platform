# oneshot-webapp

OneShot.gg Web App

# Environment Variables

## Local Development
For local development, a `.env` file will need to be created with the following keys. Reach out to @destructionMikey for the appropriate values:

## Deployment
Any environment variables will need to be explicitly declared in `amplify.yml` file. This file is used by amplify to write a new `.env` on the deployed next.js server. If a new environment variable is used, we need to:
  1. add it in amplify console (hosting > environment variables), and
  2. update `amplify.yml` to echo the new value in next.js server .env

## Auth0

AUTH0_SECRET=
AUTH0_ISSUER_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
NEXT_PUBLIC_AUTH0_CLIENT_ID=
NEXT_PUBLIC_AUTH0_DOMAIN=
AUTH0_DOMAIN=
AUTH0_AUDIENCE=
AUTH0_BASE_URL=
AUTH0_REDIRECT_URI=

## Connection to backend
NEXT_PUBLIC_BACKEND_DOMAIN="localhost:5005"
NEXT_PUBLIC_BACKEND_PROTOCOL="http://"


