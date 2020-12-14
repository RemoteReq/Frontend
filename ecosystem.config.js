module.exports = {
  apps: [{
    name: 'RemoteReq',
    script: './server/server.js',
    watch: '.',
  }],
  deploy: {
    production: {
      key: '/home/ryden/.ssh/Heavy-Storm.pem',
      user: 'ubuntu',
      host: '3.139.245.24',
      ref: 'origin/master',
      repo: 'git@github.com:RemoteReq/Frontend.git',
      path: '/home/ubuntu',
      'pre-deploy-local': "echo 'beginning production deployment'",
      'post-deploy': 'npm install && npm run build:pro && npm run server && pm2 reload ecosystem.config.js --env production',
    },
    staging: {
      key: '/home/ryden/.ssh/Delta-Crow.pem',
      user: 'ubuntu',
      host: '18.217.254.98',
      ref: 'origin/development',
      repo: 'git@github.com:RemoteReq/Frontend.git',
      path: '/home/ubuntu',
      'pre-deploy-local': "echo 'beginning staging deployment'",
      'post-deploy': 'npm install && npm run build:dev && npm run server && pm2 reload ecosystem.config.js',
    },
  },
};
