![plot](https://github.com/Clyng57/neumatter/raw/main/public/neumatter-logo-blackBG-01.svg)

[ View Documentation ](https://neumatter.vercel.app)

## Table of Contents
1. [ Download ](#download) <br />
2. [ Install ](#install) <br />
3. [ Getting Started ](#gettingstarted) <br />
4. [ Generate Config File ](#genconfig) <br />
5. [ Configuration Options ](#config) <br />
6. [ Compile ](#compile) <br />

<a name="download"></a>
### Download
Download the /_downloads directory

<a name="install"></a>
### Install
    
    npm i @neumatter/neumattercss 

<a name="gettingstarted"></a>
### Getting Started
Edit your package.json file and in the scripts write:
    
    "neucss": "./node_modules/.bin/neucss"

<a name="genconfig"></a>
### Generate the neumatter.config file
    
    npm run neucss config

<a name="config"></a>
### Configuration Options
To compile neumatter.css to a certain directory edit the exportPath in neumatter.config.

Edit colors, system margin & padding, system border radius, and exclude css from being compiled.

<a name="compile"></a>
### Compile neumatter.css
    
    npm run neucss compile
