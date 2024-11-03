const User = require("../models/userModel");
const bCrypt = require("bcryptjs");

exports.signup = async (req, res) => {
    try {
        const {userName, password} = req.body;
        const hashPassword = bCrypt.hash(password, 12);

        const newUser = await User.create(req.body);

        res.status(201).json({
            status: 'sucess',
            data: {
                user: newUser
            }
        });
    }
    catch(e) {
        console.log(e);
        res.status(400).json({
            status: 'fail'
        });
    }
};

exports.login = async (req, res) => {
    const {userName, password} = req.body;

    try {
        const user = await User.findOne({userName});

        if (!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'User not found'
            });    
        }

        if (password == user.password){
            res.status(200).json({
                status: 'sucess'
            });
        }
        else {
            return res.status(404).json({
                status: 'fail',
                message: 'Incorrect username or password'
            });    
        }
    }
    catch(e) {
        res.status(400).json({
            status: 'fail'
        });
    }
};