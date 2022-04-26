const userRouters = require('./user_routes')
const postRouters = require('./post_routes')
const reviewRoutes = require('./review_routes')
const defaultRoutes = require('./default_routes')

const routes = (app) => {
    app.use("/",defaultRoutes)
    app.use("/users", userRouters)
    app.use("/posts", postRouters)
    app.use("/reviews", reviewRoutes)
};


module.exports = routes