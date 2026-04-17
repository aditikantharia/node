const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 5,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        select: false,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
}, {
    timestamps: true
});


// =============================
// JWT Token Generate
// =============================
userSchema.methods.generateJwtToken = function () {
    return jwt.sign(
        { _id: this._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '7d' }
    );
};


// =============================
// Hash Password
// =============================
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};


// =============================
// Compare Password
// =============================
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};


// =============================
// Prevent OverwriteModelError
// =============================
module.exports = mongoose.models.User || mongoose.model('User', userSchema);