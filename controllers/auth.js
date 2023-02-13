const login = function(req,res){

    res.status(200).send("Login Success")
}

const register = function(req,res){

    res.status(200).send("Register Success")
}


module.exports = {
    login,
    register
}