module.exports = {
  apps : [{
    script: 'npm start',
    watch: '.',
    ignore_watch: ['node_modules', 'logs'],
    merge_logs: true,
    max_restarts: 20,
    max_memory_restart: "200M",
    instances: 1,
    env_test: {
      NODE_ENV: "test"
    },
    env_production: {
      NODE_ENV: "production"
    },
    env: {
      NODE_ENV: "development"
    },
  }]
};
