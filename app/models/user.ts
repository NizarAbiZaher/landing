import mongoose, { Schema, models } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true}

);

// either create new user model or use existing one

const User = models.User || mongoose.model('User', userSchema);

export default User;