var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var speakSchema = new Schema({
    heId: {
        type: String
    },
    shopName: {
        type: String
    },
    content: {
        type: String
    }
});

mongoose.model("speak", speakSchema, "speak");