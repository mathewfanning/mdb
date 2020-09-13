MBD UI
=======================

Table of Contents
-----------------
1. [Getting Started](#getting-started)
1. [Usage](#usage)
1. [Structure](#structure)

Getting Started
---------------

Just clone the repo and install the necessary node modules:

```shell
$ git clone git@github.com:glipinc/react-web-ts.git
$ yarn                   
$ yarn start                  
```

Usage
-----

#### `yarn start`
Runs the webpack build system with webpack-dev-server.

#### `yarn build`
Runs a production build.

#### `yarn test`
Runs unit tests with Jest.

Structure
---------

The folder structure provided is only meant to serve as a guide, it is by no means prescriptive.

```
.
├── src                      # Application source code
│   ├── components           # Generic React Components (generally Dumb components)
│   ├── containers           # Components that provide context (e.g. Redux Providers)
│   ├── layouts              # Components that dictate major page structure
│   ├── store                # Mobx store configuration
│   ├── utils                # Generic utilities
│   ├── GlobalStyles.ts      # Styled components
│   └── index.tsx             # Application bootstrap and rendering
```

### Components vs. Containers vs. Layouts

**TL;DR:** They're all components.

This distinction may not be important for you, but as an explanation: A **Layout** is something that describes an entire page structure, such as a fixed navigation, viewport, sidebar, and footer. Most applications will probably only have one layout, but keeping these components separate makes their intent clear. **Containers** are components that live at routes, and are generally rendered within a **Layout**. What this ends up meaning is that, with this structure, nearly everything inside of **Components** ends up being a dumb component.

Troubleshooting
---------------

Nothing yet. Having an issue? Report it and I'll get to it as soon as possible!