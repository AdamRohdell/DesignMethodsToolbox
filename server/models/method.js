const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const methodSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        input: {
            type: String,
            required: true,
        },
        output: {
            type: String,
            required: true,
        },
        what: {
            type: String,
            required: true,
        },
        how: {
            type: String,
            required: true,
        },
        experiences: {
            type: String,
            required: true,
        },
        research: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Method", methodSchema);
