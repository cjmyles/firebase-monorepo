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

Within the `functions` and `web` `package.json` files, we supply a reference to our `core` package:

```
"dependencies": {
    "firebase-monorepo-core": "*"
}
```

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

# Issues

In its current state, the `functions` package fails to deploy to firebase:

![Deployment error](docs/images/functions-deployment-error.png)

```
ERR! 404 Not Found - GET https://registry.npmjs.org/firebase-monorepo-core - Not found
ERR! 404 'firebase-monorepo-core@*' is not in the npm registry.
ERR! 404 You should bug the author to publish it (or use the name yourself!)
ERR! 404 It was specified as a dependency of 'functions'
ERR! 404 Note that you can also install from a tarball, folder, http url, or git url.
```

There are no errors when the service is run locally, or built for deployment.

There is also no issues with deployment to the web service, even though it references the `core` package in exactly the same manner.

# Workaround

It's possible to define `firebase-monorepo-core` as a local dependency, using a tarball version of the package generated via `yarn pack` as per https://github.com/firebase/firebase-tools/issues/968#issuecomment-460323113.

The following line would be added to `packages/functions/package.json`:

```
"preinstall": "if [ -d ../core ]; then npm pack ../core; fi"
```

With the dependency changed as follows:

```
"firebase-monorepo-core": "file:./firebase-monorepo-core-1.0.0.tgz"
```

It's then possible to execure `yarn` and then `yarn deploy:functions` successfully (see the `features/yarn-pack` branch).