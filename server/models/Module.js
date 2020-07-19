const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModuleSchema = new Schema({
  School_ID: String,
  Continent: String,
  School_Name: String,
  PU_Module_Code: String,
  PU_Module_Name: String,
  PU_Module_MCs: String,
  NUS_Module_Code: String,
  NUS_Module_Name: String,
  NUS_Module_MCs: String,
  Spec: String,
});

const Module = mongoose.model("Module", ModuleSchema);
module.exports = Module;
