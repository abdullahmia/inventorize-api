import "dotenv/config";

const {
  NODE_ENV,
  PORT,
  REMOTE_DATABASE_URL,
  LOCAL_DATABASE_URL,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASS,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN,
} = process.env;

const config = {
  nodeEnv: NODE_ENV,
  port: PORT,
  databaseUrl:
    NODE_ENV === "development" ? LOCAL_DATABASE_URL : REMOTE_DATABASE_URL,
  databaseName: DATABASE_NAME,
  databaseUser: DATABASE_USER,
  databasePass: DATABASE_PASS,
  accessTokenSecret: ACCESS_TOKEN_SECRET,
  refreshTokenSecret: REFRESH_TOKEN_SECRET,
  accessTokenExpiresIn: ACCESS_TOKEN_EXPIRES_IN || "1d",
  refreshTokenExpiresIn: REFRESH_TOKEN_EXPIRES_IN || "7d",
};

export default config;
