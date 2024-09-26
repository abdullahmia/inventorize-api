import "dotenv/config";

const {
  NODE_ENV,
  PORT,
  REMOTE_DATABASE_URL,
  LOCAL_DATABASE_URL,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASS,
} = process.env;

const config = {
  nodeEnv: NODE_ENV,
  port: PORT,
  databaseUrl:
    NODE_ENV === "development" ? LOCAL_DATABASE_URL : REMOTE_DATABASE_URL,
  databaseName: DATABASE_NAME,
  databaseUser: DATABASE_USER,
  databasePass: DATABASE_PASS,
};

export default config;
