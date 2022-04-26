const controller = {};

controller.homeRoute = async (req,res) => {
    res.status(200).send("Recuerda: La vida es dura pero más dura la verdura!")
}

controller.grettings = async (req,res) => {
    res.status(200).send("Bep, Bop! i'm an api developed by Jaime Sierra")
}

controller.rambo = async (req,res) => {
    res.status(200).send("Dispara RAMBO prrrrrrrrrr")
}


module.exports = controller