const userRouters = require('./user_routes')
const postRouters = require('./post_routes')
const reviewRoutes = require('./review_routes')
const defaultRoutes = require('./default_routes')
const cartRoutes = require('./cart_routes')
const historyRoutes = require('./history_routes')

const routes = (app) => {
    app.use("/",defaultRoutes)
    app.use("/users", userRouters)
    app.use("/posts", postRouters)
    app.use("/reviews", reviewRoutes)
    app.use("/cart", cartRoutes)
    app.use("/history", historyRoutes)
};


module.exports = routes