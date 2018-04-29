import * as Mongoose from "mongoose";

export var icSchema: Mongoose.Schema = new Mongoose.Schema({
    UNITID: Mongoose.Schema.Types.Number,
    PublishedInStateTuitionAndFees: Mongoose.Schema.Types.Number,
    PublishedOutOfStateTuitionAndFees: Mongoose.Schema.Types.Number,
    CreatedAt: Mongoose.Schema.Types.Date
});

icSchema.pre("save", function(next) {
  if (!this.CreatedAt) {
    this.CreatedAt = new Date();
  }
  next();
});