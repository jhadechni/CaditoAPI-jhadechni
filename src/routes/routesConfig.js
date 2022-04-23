const userRouters = require('./user_routes')

const routes = (app) => {
    app.use("/users", userRouters)
};


module.exports = routes