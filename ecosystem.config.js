
module.exports = {
    apps: [{
        name: 'aws',
        script: './server/index.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-34-242-150-148.eu-west-1.compute.amazonaws.com',
            key: '~/Work/AWS/keys/Irland/tutorial.pem',
            ref: 'origin/main',
            repo: 'git@github.com:samibarasi/tutorial-pt-2.git',
            path: '/home/ubuntu/tutorial-pt-2',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}