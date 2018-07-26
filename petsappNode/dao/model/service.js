var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = new Schema({
	serviceName: {
		type: String
	},
	serviceType: {
		type: String
    },
    serviceSchedule: {
		type: String
    },
    serviceCanFor: {
		type: String
    },
    serviceDetial: {
		type: String
    },
    serviceTime: {
		type: String
    },
    serviceLevel: {
		type: String
    },
    servicePrice: {
		type: String
    },
	// seats: [{
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'seats'
	// }]
});

mongoose.model("services", ServiceSchema, "services");