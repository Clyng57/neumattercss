# @neumatter/neumattercss

## Table of Contents
1. [ Install ](#install) <br />
2. [ Getting Started ](#gettingstarted) <br />
3. [ Generate Config File ](#genconfig) <br />
4. [ Configuration Options ](#config) <br />
5. [ Compile ](#compile) <br />

<a name="install"></a>
### Install
Run:
    
    npm i @neumatter/neumattercss 

<a name="gettingstarted"></a>
### Getting Started
Edit your package.json file and in the scripts write:
    
    "neucss": "./node_modules/.bin/neucss"

<a name="genconfig"></a>
### Generate the neumatter.config file
Run: 
    
    npm run neucss config

<a name="config"></a>
### Configuration Options
To compile neumatter.css to a certain directory edit the exportPath in neumatter.config.

Edit colors, system margin & padding, system border radius, and exclude css from being compiled.

<a name="compile"></a>
### Compile neumatter.css
Run: 
    
    npm run neucss compile
