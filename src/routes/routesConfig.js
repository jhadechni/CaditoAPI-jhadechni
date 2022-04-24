const userRouters = require('./user_routes')
const postRouters = require('./post_routes')

const routes = (app) => {
    app.use("/users", userRouters)
    app.use("/posts", postRouters)
};


module.exports = routes