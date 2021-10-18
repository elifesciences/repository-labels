# Repository Labels

A simple program to create a consistent set of issues labels in 1 or more GitHub repositories.

## Prerequisites

* You have a Linux or OSX machine. Windows should be supported via WSL 2 but has not been tested.
* You have installed a recent version of [GNU Make](https://www.gnu.org/software/make/).
* You have installed a recent version of [Node.js](https://nodejs.org/).

## Quick Start

You can build the utility using...

```
make
```

Which compiles all the code, and serves a preview page for viewing the labels on http://localhost:8080. This is handy to preview the labels before you create them.

You can then use the utility to create the labels in the repository of your choice using...

```
node ./out/release/index.js --org <github org name> --repo <github repo name> --token <github auth token>
```

## License

Licensed under [MIT](https://choosealicense.com/licenses/mit/).