module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "viaduct.proxy.rlwy.net"),
      port: env.int("DATABASE_PORT", 39346),
      database: env("DATABASE_NAME", "railway"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "CaGDef6DfgddGFc6feAeb32BD4g4CcCD"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", "127.0.0.1"),
//       port: env.int("DATABASE_PORT", 39346),
//       database: env("DATABASE_NAME", "alfajr"),
//       user: env("DATABASE_USERNAME", "postgres"),
//       password: env("DATABASE_PASSWORD", "postgres"),
//       ssl: env.bool("DATABASE_SSL", false),
//     },
//   },
// });
//postgresql://postgres:CaGDef6DfgddGFc6feAeb32BD4g4CcCD@viaduct.proxy.rlwy.net:39346/railway
//  host: env("DATABASE_HOST", "containers-us-west-77.railway.app"),
// port: env.int("DATABASE_PORT", 7644),
// database: env("DATABASE_NAME", "railway"),
// user: env("DATABASE_USERNAME", "postgres"),
// password: env("DATABASE_PASSWORD", "ATtg8wBonTC38Q71Za5d"),
// ssl: env.bool("DATABASE_SSL", false),
