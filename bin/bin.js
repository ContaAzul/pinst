#!/usr/bin/env node
/* eslint-disable node/shebang */
const pkg = require('../package.json')
const { enableAndSave, disableAndSave } = require('../src/index')

const usage = `Usage
  $ pinst

Options
  --enable, -e   Enable preinstall and postinstall hooks
  --disable, -d  Disable preinstall and postinstall hooks
  --silent, -s

Examples
  $ pinst --enable`

function run(args) {
  // Silent
  const silent = args.includes('--silent') || args.includes('-s')

  // Enable
  if (args.includes('--enable') || args.includes('-e')) {
    if (!silent) console.log('pinst enable')
    return enableAndSave()
  }

  // Disable
  if (args.includes('--disable') || args.includes('-d')) {
    if (!silent) console.log('pinst disable')
    return disableAndSave()
  }

  // Version
  if (args.includes('--version') || args.includes('-v')) {
    return console.log(pkg.version)
  }

  // No known flag provided
  console.log(usage)
  process.exit(1)
}

const [, , ...args] = process.argv
run(args)
