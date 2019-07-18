module.exports = (Schema, model) => {

  const Recipes = new Schema({
    title: { type: String },
    link: { type: String },
    saved: {
      type: Boolean,
      default: false
    }
  })
  return model('Recipes', Recipe)
}