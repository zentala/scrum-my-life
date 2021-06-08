require('dotenv').config()

const config = {
  PORT: process.env.port || 4000,
  APP_SECRET: process.env.secret || 'secret',
}

export default config
