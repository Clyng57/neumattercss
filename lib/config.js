#! /usr/bin/env node
function config() {

  const fs = require('fs');
  const chalk = require('chalk');
  
  let neu=`module.exports.config = {
    exportPath: "./public/css/",
    colors: {
      primary: "default",
      secondary: "default",
      success: "default",
      danger: "default",
      warning: "default",
      info: "default",
      primaryLight: "default",
      secondaryLight: "default",
      successLight: "default",
      dangerLight: "default",
      warningLight: "default",
      infoLight: "default",
      primary20: "default",
      secondary20: "default",
      success20: "default",
      danger20: "default",
      warning20: "default",
      info20: "default",
      primary50: "default",
      secondary50: "default",
      success50: "default",
      danger50: "default",
      warning50: "default",
      info50: "default",
      focus: "default",
    },
    systemMargin: "default",
    systemHeight: "default",
    systemBorder: "default",
    darkMode: {},
    reset: {},
    base: {},
    typography: {},
    layout: {},
    components: {},
    forms: {},
    utilities: {},
  //  u_mpNonsystem: {},
    attributes: {},
  }`
  
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  
  fs.writeFile( `./neumatter.config.js`, neu, err => {
    if (err) throw err;
    console.log(
      chalk.magentaBright.bold('neumatter.config______________\n'),
      chalk.greenBright('successful\n'),
      'date:', 
      chalk.cyanBright(`${month}/${date}/${year} ${hours}:${minutes}:${seconds}`),
      );
  });
}
  
module.exports=config