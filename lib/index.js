const fs = require('fs')
const path = require('path')

function getPackageVersion() {
  try {
    const file = path.join(process.cwd(), 'package.json')
    const { version } = JSON.parse(fs.readFileSync(file, 'utf-8'))
    return version
  } catch {
    return ''
  }
}

// Update package.json
function updatePkg(dir, fn) {
  // Pkg path
  const file = path.join(dir, 'package.json')

  // Read pkg
  let data = fs.readFileSync(file, 'utf-8')
  const pkg = JSON.parse(data)

  // Update pkg object
  fn(pkg)

  // Stringify pkg
  const regex = /^\s+|\t+/m
  const res = regex.exec(data)
  const indent = res ? res[0] : null
  data = JSON.stringify(pkg, null, indent)

  // Write pkg
  fs.writeFileSync(file, `${data}\n`)
}

// Update pkg.scripts names
function updateScripts(pkg, fn) {
  pkg.scripts = Object.fromEntries(
    Object.entries(pkg.scripts).map(([key, value]) => [fn(key), value]),
  )
}

function enable(name) {
  if (['ignore_prei', 'ignore_i', 'ignore_posti'].includes(name)) {
    return name.substring(7).replace('i', 'install')
  }

  return name
}

function disable(name) {
  if (['preinstall', 'install', 'postinstall'].includes(name)) {
    return `ignore_${name.replace('install', 'i')}`
  }

  return name
}

function enableAndSave(dir = process.cwd()) {
  updatePkg(dir, (pkg) => updateScripts(pkg, enable))
}

function disableAndSave(dir = process.cwd()) {
  updatePkg(dir, (pkg) => updateScripts(pkg, disable))
}

module.exports = {
  enableAndSave,
  disableAndSave,
  getPackageVersion,
}
