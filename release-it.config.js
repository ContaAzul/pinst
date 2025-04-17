module.exports = {
  git: {
    tagName: 'v${version}',
    commitMessage: 'chore: release v${version}',
    pushRepo: 'https://github.com/ContaAzul/pinst.git',
    tagAnnotation: 'v${version}',
  },
  github: {
    release: true,
    releaseName: 'v${version}',
    tokenRef: 'GH_TOKEN',
  },
  plugins: {
    './.github/workflows/scripts/conventional-changelog.js': {},
  },
}
