const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Folder',index: true },
  type: { type: String, enum: ['folder', 'file'], default: 'folder' },
  path: { type: String, required: true },
  file: { type: mongoose.Schema.Types.ObjectId, ref: 'File' },
});

folderSchema.methods.toJSON = function () {
    const obj = this.toObject();
    return obj;
}

const Folder = mongoose.model('Folder', folderSchema);

module.exports = Folder;