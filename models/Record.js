const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    title: String,
    recordBody: String,
    status: String
}, {
    versionKey: false,
    timestamps: true
});

schema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Record', schema);
