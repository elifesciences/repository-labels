# Repository Labels

A simple program to manage labels in our GitHub issue repositories.

## Prerequisites

* You have a Linux or OSX machine. Windows should be supported via WSL 2 but has not been tested.
* You have installed a recent version of [GNU Make](https://www.gnu.org/software/make/).
* You have installed a recent version of [Node.js](https://nodejs.org/).

## Quick Start

You can build the utility using...

```
make
```

And run it using...

```
node ./out/release/index.js --org <github org name> --repo <github repo name> --token <github auth token>
```

## License

Licensed under [MIT](https://choosealicense.com/licenses/mit/).