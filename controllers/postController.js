const Post = require("../models/postModel");

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();

        res.status(200).json({
            status: 'sucess',
            result: posts.length,
            data: {
                posts
            }
        });
    }
    catch(e) {
        res.status(400).json({
            status: 'fail'
        });
    }
};

exports.getOnePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json({
            status: 'sucess',
            data: {
                post
            }
        });
    }
    catch(e) {
        res.status(400).json({
            status: 'fail'
        });
    }
};

exports.createPost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body);

        res.status(200).json({
            status: 'sucess',
            data: {
                post
            }
        });
    }
    catch(e) {
        res.status(400).json({
            status: 'fail'
        });
    }
};

exports.updateOnePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'sucess',
            data: {
                post
            }
        });
    }
    catch(e) {
        res.status(400).json({
            status: 'fail'
        });
    }
};

exports.deleteOnePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'sucess'
        });
    }
    catch(e) {
        res.status(400).json({
            status: 'fail'
        });
    }
};