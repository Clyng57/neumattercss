![plot](https://github.com/Clyng57/neumatter/raw/main/public/neumatter-logo-blackBG-01.svg)

A light-weight neumorphic css framework to standardize layouts and spacing. 
A moderate utility first approach.

    prefix-property/value:conditional


Add :hover or :active to any attributes class except for a-rounded.

    a-bg/concave:hover


Add :sm, :md, :lg, :xl, :xxl to various classes to create breakpoints. This will cause the width to go from 50% to 100% at the large breakpoint.

    l-column/6:lg

[ View Documentation ](https://neumattercss.com)

## Table of Contents
1. [ Download ](#download) <br />
2. [ Install ](#install) <br />
3. [ Getting Started ](#gettingstarted) <br />
4. [ Generate Config File ](#genconfig) <br />
5. [ Configuration Options ](#config) <br />
6. [ Compile ](#compile) <br />
7. [ Samples ](#samples) <br />

<a name="download"></a>
### Download
Download the /_build directory

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

<a name="samples"></a>
### Samples of neumatter.css in use:

![plot](https://github.com/Clyng57/neumatter/raw/main/public/neumattercssBGColorPage.png)


![plot](https://github.com/Clyng57/neumatter/raw/main/public/neumattercssConcavePage.png)


![plot](https://github.com/Clyng57/neumatter/raw/main/public/neumattercssFormPage.png)

[ View More ](https://neumattercss.com)

