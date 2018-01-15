import { Schema } from "mongoose";

export var icSchema: Schema = new Schema({
    UNITID: Number,
    PublishedInStateTuitionAndFees: Number,
    PublishedOutOfStateTuitionAndFees: Number,
    CreatedAt: Date
})

icSchema.pre("save", function(next) {
  if (!this.CreatedAt) {
    this.CreatedAt = new Date();
  }
  next();
});