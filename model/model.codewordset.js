/**
 *  @author Srimai Reddy Yanala <s531384@nwmissouri.edu>
  */

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var codeWordSetSchema = new Schema({

        CodeWordSetName: {
                type: String,
                require: true,
                minlength: 5,
                unique:true
        },

        emailKey: {
                type: [String],
                required: true,
                minlength: 4
        },
        codeWordCreator: {
                type: String,
                required: true,
        }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('CodeWordSet', codeWordSetSchema);

