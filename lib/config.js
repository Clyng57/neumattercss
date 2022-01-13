#! /usr/bin/env node
function config() {

  const fs = require('fs');
  const chalk = require('chalk');
  
  let neu=`
module.exports.config = {
  exportPath: "./public/css/",
  variablesBase: 'base',
  colors: {
    primary: '',
    secondary: '',
    success: '',
    danger: '',
    warning: '',
    info: '',
    primaryLight: '',
    secondaryLight: '',
    successLight: '',
    dangerLight: '',
    warningLight: '',
    infoLight: '',
    primary20: '',
    secondary20: '',
    success20: '',
    danger20: '',
    warning20: '',
    info20: '',
    primary50: '',
    secondary50: '',
    success50: '',
    danger50: '',
    warning50: '',
    info50: '',
     focus: '',
  },
  systemMargin: '',
  systemHeight: '',
  systemBorder: '',
  sidebarWidth: '',
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