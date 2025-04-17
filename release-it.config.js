module.exports = {
  git: {
    tagName: 'v${version}',
    commitMessage: 'chore: release v${version}',
    tagAnnotation: 'v${version}',
  },
  github: {
    release: true,
    releaseName: 'v${version}',
    tokenRef: 'GITHUB_TOKEN',
  },
  plugins: {
    './.github/workflows/scripts/conventional-changelog.js': {},
  },
}
