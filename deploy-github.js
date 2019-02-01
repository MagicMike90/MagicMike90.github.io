const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/MagicMike90/MagicMike90.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)