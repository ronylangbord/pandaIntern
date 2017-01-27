var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
    {
        id: String,
        name: String,
        company_name: String,
        phone: String,
        profile_image: String,
        icon: String,
        job: String,
        email: String,
        updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);