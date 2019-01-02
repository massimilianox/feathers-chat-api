// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { data } = context

    if (!data.text) throw new Error('A message must have a text')

    // The authenticate user
    const user = context.params.user

    // message
    console.log(context.data.text)
    const text = context.data.text.substring(0, 400)

    // Override the original data
    context.data = {
      text,
      userId: user._id,
      createdAt: new Date().getTime()
    }

    return context;
  };
};
