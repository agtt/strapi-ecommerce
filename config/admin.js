module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '61b8476a3ba641aca0fdb69f5aa9642d'),
  },
});
