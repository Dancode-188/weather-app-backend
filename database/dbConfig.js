module.exports = {
  postgres: {
    url:
      process.env.POSTGRES_URL ||
      'postgresql://user:password@localhost:5432/weatherdb',
    options: {
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    },
    logging: process.env.POSTGRES_LOGGING === 'true',
  },
  mongodb: {
    url: process.env.MONGODB_URL || 'mongodb://localhost:27017/weatherdb',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    logging: process.env.MONGODB_LOGGING === 'true',
  },
};
