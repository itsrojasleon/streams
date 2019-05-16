# Streams

## Prerequisites
Node 11.13.0
Npm 6.9.0
> If you have problems with the versions... Try to delete package-lock.json files.

## Getting started
Download the repo
```
git clone git@github.com:rojasleon/streams.git
(From scratch? download the zip)
```
Install dependencies
```
npm install
// With yarn
yarn install
```

### Configure your API
Configure an application in [Google Developer Console](https://console.developers.google.com).

Run project
```
// open a tab in your terminal and run:
cd client && npm start
// another tab in /
cd api && npm start
// another tab in /
cd rtmpserver && npm start
```

## Configure [OBS](https://obsproject.com/es/download)

* Create an escene
* Go to settings/Stream
* Service: "Custom"
* Server: "rtmp://localhost/live"
* Stream Key: (_look the example_)

**Example:**
_When you create a new Stream, look at the params.
You are going to see: localhost:3000/streams/:id
:id it's your Stream Key_.

## Author
Juan Luis Rojas León

## License
MIT
