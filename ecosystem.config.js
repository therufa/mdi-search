module.exports = {
  apps: [{
    name: 'api',
    script: './api/server.js',
    instances: 'max',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    env_development: {
      NODE_PORT: 3000
    }
  }]
}
