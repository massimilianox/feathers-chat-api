const app = require('../../src/app');

describe('\'testModel\' service', () => {
  it('registered the service', () => {
    const service = app.service('test-model');
    expect(service).toBeTruthy();
  });
});
