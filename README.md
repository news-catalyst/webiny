# tinynews webiny

This repo is for setting up an installation of the webiny cms, which is serverless (runs on lambdas and the like) and headless. 

## setup

Clone this repo, get yourself setup with a [cluster on mongodb atlas](https://docs.webiny.com/docs/guides/mongodb-atlas/) and then:

### edit your `.env.json`:

```
{
	"default": {
		"AWS_PROFILE": "default",
		"AWS_REGION": "us-east-1",
		"MONGODB_SERVER": "mongodb+srv://<username>:<password>@<mongo cluster name>.mongodb.net",
		"MONGODB_NAME": "<mongodb name>"
	}
}
```

### deploy the api

`yarn webiny deploy api --env=local`

### note the api deployment output

I recommend copying and pasting the very end of the console output, where it prints the graphql, content delivery api urls. You'll need those.

### start the admin

```
cd apps/admin
yarn start
```

### start the built-in site

I'm actually not sure if this should be in the same repo or a totally separate one - the `site` is the public-facing website we'd build on top of the webiny infrastructure.

Anyway, to start it locally:

```
cd apps/site
yarn start
```