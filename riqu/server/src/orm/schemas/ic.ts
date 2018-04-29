import * as Mongoose from "mongoose";
import mappingSet from '../mapping/nameMask';

const preSchema = {
    UNITID: Mongoose.Schema.Types.Number,
    CreatedAt: Mongoose.Schema.Types.Date
};

// add our mapping items to this schema
for (let [key, item] of mappingSet) {
  for (var i = 0; item.len > i; i++) {
    let prop = item.mask.replace(item.schar, i.toString());
    
    preSchema[prop] = Mongoose.Schema.Types.Number;
  }
}

console.log(preSchema) 

var icSchema = new Mongoose.Schema(preSchema);

icSchema.pre("save", function(next) { 
  if (!this.CreatedAt) {
    this.CreatedAt = new Date();
  }
  next();
});

export { icSchema };