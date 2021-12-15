#! /usr/bin/env node

const { program } = require('commander')
const compile = require('./lib/compile')
const config = require('./lib/config')

program
  .command('compile')
  .description('Compile neumatter css based on config file')
  .action(compile)

program
  .command('config')
  .description('Create config file')
  .action(config)

program.parse()