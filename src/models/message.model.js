module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema, ObjectId } = mongooseClient
  const message = new Schema({
    text: { 
      type: String,
      required: true },
    userId: { 
      type: ObjectId,
      required: true },
    createdAt: {
      type: Number,
      required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('message', message)
};
