const { version, repository } = require('../package.json')
const sh = require('../src')

const {
  TRAVIS_BRANCH,
  TRAVIS_MATRIX,
  TRAVIS_PULL_REQUEST_BRANCH,
  GH_TOKEN,
  NPM_TOKEN,
} = process.env

const tokenRepo = repository.replace(/(github.com)/, `${GH_TOKEN}@$1`)
const tag = `v${version}`

console.log({ TRAVIS_BRANCH, TRAVIS_MATRIX, TRAVIS_PULL_REQUEST_BRANCH })

if (TRAVIS_MATRIX === 'test') {
  sh`curl -s https://codecov.io/bash | bash`
}

if (TRAVIS_BRANCH === 'master') {
  sh`
    git config --global user.email "auto_deploy@travis-ci.org"
    git config --global user.name "TravisCI"
  `

  if (TRAVIS_MATRIX === 'build') {
    // Publish to NPM
    sh`
      echo //registry.npmjs.org/:_authToken=${NPM_TOKEN} > ~/.npmrc
      npm publish ./out --access=public
    `

    // Add GH Tag
    sh`
      git tag ${tag}
      git push ${tokenRepo} ${tag}
    `

    // Publish to gh-pages
    sh`
      cd out
      git init
      git add .
      git commit -anm "${version}"
      git push ${tokenRepo} master:latest -f
      git push ${tokenRepo} master:${version}
    `
  }
}
