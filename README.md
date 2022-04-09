<p align="center">
    <img alt="chaindash-logo" height="70" alt="ChainDash Logo" src="https://i.imgur.com/GfcEFMF.png"/>
</p>

<p align="center">
Make <b>KYC</b> and <b>credit risk analysis</b> pain-free.
<br></br>
ChainDash Next.js Front-End Application
</p>

## 🔭 Looking for Our Back-End Services?

Click [HERE](https://github.com/dcsil/chaindash-api) to be sent to our back-end API repository.

## 🚀 Quick Start

Run our bash script in the project root to get the development enviroment up and running!

```bash
sh script/bootstrap.sh
```

## 🌱 Environemnt Setup

You can find an example of required environment files in `.env.example`. The bootstrap script will copy it over to a `.env` file for you. You must fill the required credentials yourself. Below is a list of required environment variables.

- Your Sentry ingest URL

## 📘 List of Commands

We have a list of commands that we outline in ```service.yml```. Here we have highlighted some important commands and their functions.

### Development Environment
```
npm run dev
```
Start the development client on `localhost:3000`.

### Jest Testing
```
npm test
```
Command to run our Jest testing suite.

### Production Build
```
npm run build
```
Start the build of our application to production. Will output `.next` folder.

### Production Run
```
npm run start
```
Start the production build on `localhost:3000`.

## 🔧 Technical Specifications
This app is built mainly using `Next.js` and `React.js`. Testing framework we are using is `Jest`.
Our monitoring is done through `Sentry`.