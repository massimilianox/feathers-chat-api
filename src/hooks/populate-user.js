// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    const { app, method, result, params } = context

    console.log('___params: ', params)
    console.log('___method: ', method)
    console.log('___result: ', result)
    
    const messages = method === 'find' ? result.data : [ result ]

    await Promise.all(messages.map(async message => {
      message.user = await app.service('users').get(message.userId, params)
      console.log('message id:', message._id)
    }))

    return context;
  };
};
