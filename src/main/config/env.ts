export default {
  'database': {
    database: process.env.DATABASENAME || 'carp',
    username: process.env.DATABASEUSERNAME || 'carp',
    password: process.env.DATABASEPASSWORD || 'carp',
    host: process.env.HOST || '127.0.0.1',
    dialect: 'postgres',
    freezeTableName: true,
    timestamps: true
  },
  'server': {
    port: process.env.PORT || 80
  }
}
