import * as Mongoose from "mongoose";

export var hdSchema: Mongoose.Schema = new Mongoose.Schema({
    UNITID: Mongoose.Schema.Types.Number,
    INSTNM: {
      type: Mongoose.Schema.Types.String, 
      alias: 'InstitutionName'
    },
    IALIAS: {
      type: Mongoose.Schema.Types.String,
      alias: 'InstAlias'
    }, 
    ADDR: { 
      type: Mongoose.Schema.Types.String,
      alias: 'Address'
    },
    CITY: {
      type: Mongoose.Schema.Types.String,
      alias: "City"
    }, 
    STABBR: { 
      type: Mongoose.Schema.Types.String, 
      alias: 'State'
    }, 
    ZIP: { 
      type: Mongoose.Schema.Types.String,
      alias: 'Zip'
    },
    LATITUDE: { 
      type: Mongoose.Schema.Types.String,
      alias: 'Latitude'
    },
    LONGITUD: { 
      type: Mongoose.Schema.Types.String,
      alias: 'Longitude'
    }, 
    WebAddr: {
      type: Mongoose.Schema.Types.String,
      alias: 'WebAddress'
    },
    CreatedAt: Mongoose.Schema.Types.Date
})

hdSchema.pre("save", function(next) {
  if (!this.CreatedAt) {
    this.CreatedAt = new Date();
  }
  next();
}); 