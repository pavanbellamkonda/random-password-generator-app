var ghpages = require('gh-pages');

ghpages.publish(
    'dist',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/pavanbellamkonda/random-password-generator-app.git',
        user: {
            name: 'Pavan Bellamkonda',
            email: 'pavan.bellamkonda.public@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)