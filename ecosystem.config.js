module.exports = {
  apps: [{
    name: 'api',
    script: './api/server.js',
    instances: 'max',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }]
}
