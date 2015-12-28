var assert = require('chai').assert,
	jsonWriteCss = require('../index.js');

describe('function jsonWriteCss.test', function() {

  it('- Teste de calculo', function() {
    assert.strictEqual(jsonWriteCss.test(1), 2, 'Este valor deve ser estritamente igual ao resultado esperado.');
  });

});