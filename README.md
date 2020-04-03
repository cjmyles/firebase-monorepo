# Introduction

Boilerplate to demonstrate a monorepo that utilises [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and deploys to Firebase. 

## Packages

Our workspaces are hosted in the `packages` directory:

```
packages/           
  core/             // custom core package, shared by functions and web
  functions/        // firebase functions package (node.js express)
  web/              // web package (react)
```

... and configured in `package.json`:

```
"workspaces": {
    "packages": [
        "packages/*"
    ],
    "nohoist": [
        "**/firebase-monorepo-core"
    ]
}
```

In a desperate attempt to enable Yarn workspaces in Firebase (and therefore share our `core` package) we use the `nohoist` feature to create symlinks to the `core` package within the `node_modules` directories of `functions` and `web` (see https://stackoverflow.com/q/55783984/373406 for more information).

# Installation

Clone the repository, `cd` into your local directory and run `yarn`.

# Development

You can now run the functions and web services by running the following commands in separate terminal processes:

```
$ yarn start:functions
$ yarn start:web
```

# Deployment

Similar to development, deployment can be executed by running the following commands:

```
$ yarn deploy:functions
$ yarn deploy:web
```