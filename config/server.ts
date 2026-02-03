export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  url: env('PUBLIC_URL', 'https://api.megatrain.id'),

  admin: {
    url: env('ADMIN_URL', 'https://admin.megatrain.id'),
  },

  app: {
    keys: env.array('APP_KEYS'),
  },
});