const mongoose = require('mongoose');

const directorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Directory' },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Directory' }],
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],
});

directorySchema.methods.toJSON = function () {
    const obj = this.toObject();
    return obj;
}

const Directory = mongoose.model('Directory', directorySchema);

module.exports = Directory;