// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    const { app, data} = context
    const mongoClient = app.get('mongoClient')
    let elem;

    await mongoClient.then(async db => {
      elem = await db.collection('users').findOne({
        email: data.email
      })
    })

    if (elem) {
      throw new Error("An email already exist")
    }

    return context;
  };
};
