import { Schema } from "mongoose";

export var hdSchema: Schema = new Schema({
    UNITID: Number,
    InstitutionName: String,
    Address: String,
    City: String,
    State: String,
    Zip: String,
    Latitude: Number,
    Longitude: Number, 
    CreatedAt: Date
})

hdSchema.pre("save", function(next) {
  if (!this.CreatedAt) {
    this.CreatedAt = new Date();
  }
  next();
});