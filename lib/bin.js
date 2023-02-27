#!/usr/bin/env node
const { enableAndSave, disableAndSave, getPackageVersion } = require('./index')

const usage = `Usage
  $ ca-pinst

Options
  --enable, -e   Enable preinstall and postinstall hooks
  --disable, -d  Disable preinstall and postinstall hooks
  --silent, -s

Examples
  $ ca-pinst --enable`

function run(args) {
  // Silent
  const silent = args.includes('--silent') || args.includes('-s')

  // Enable
  if (args.includes('--enable') || args.includes('-e')) {
    if (!silent) console.log('ca-pinst enable')
    return enableAndSave()
  }

  // Disable
  if (args.includes('--disable') || args.includes('-d')) {
    if (!silent) console.log('ca-pinst disable')
    return disableAndSave()
  }

  // Version
  if (args.includes('--version') || args.includes('-v')) {
    return console.log(getPackageVersion())
  }

  // No known flag provided
  console.log(usage)
  process.exit(1)
}

const [, , ...args] = process.argv
run(args)
