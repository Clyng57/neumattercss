#! /usr/bin/env node
const fs   = require('fs')
const path = require('path')

const rtnConfigPath = ()=> {
  let pathToConfigTest = path.resolve(__dirname + './neucss/');
  let pathToConfig = pathToConfigTest.includes('node_modules') 
    ? '../../../../neumatter.config' 
    : '../neumatter.config';
  return pathToConfig;
}

const isNaS = checkStr => {
  let rtnResult = 
    checkStr === undefined || 
    checkStr === null || 
    checkStr === ''
      ? true : false;
      return rtnResult
}

const rtnVal = (custom, def)=> {
  let rtnValues = isNaS(custom) ? def + ';' : custom + ';';
  return rtnValues;
}

const rtnOpaqueColor = (custom, customOpaque, def, opacity)=> {
  let rtnResult = isNaS(custom) && isNaS(customOpaque)
      ? def + ';' 
      : isNaS(customOpaque) && custom.includes('var')
        ? custom.replace(')', opacity) + ';'
        : customOpaque + ';';
  return rtnResult;
}

const rtnCss = (custom, css)=> {
  let cssRtn = custom === undefined || custom === null || custom === false ? '' : css;
  return cssRtn
}

const rtnPath = (custom, def)=> {
  if (custom === undefined) 
    return def;
  else 
    return custom;
}

const getFile = (customConfig, fileName)=> {
  const fC = fs.readFileSync(fileName, 'utf-8');
  let fContent = rtnCss(customConfig, fC);
  return fContent;
}

module.exports.rtnConfigPath = rtnConfigPath;
module.exports.isNaS = isNaS;
module.exports.rtnVal = rtnVal;
module.exports.rtnOpaqueColor = rtnOpaqueColor;
module.exports.rtnCss = rtnCss;
module.exports.rtnPath = rtnPath;
module.exports.getFile = getFile;