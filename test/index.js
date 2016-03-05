var assert = require('chai').assert,
	expect = require('chai').expect,
  mock = {
    settingsA: {
      files: {
        'example/out/scene1.css': ['./example/src/exampleA/', './example/src/exampleB'],
        'example/out/scene2.css': ['./example/src/exampleB']
      }
    },
    settingsB: {
      files: {
        'example/out/scene1.css': ['./exampleError/']
      }
    }
  },
  jsonWriteCss = {};

describe('jsonWriteCss', function() {

  jsonWriteCss = require('../index.js').init(mock.settingsA);
	
	it('Verifica formato esperado', function() {
    
    expect(jsonWriteCss).to.be.an('object');

  });

  jsonWriteCss = require('../index.js').init(mock.settingsB);

  it('Verifica retorno em caso de nao encontrar o arquivo solicidado', function() {
    
    expect(jsonWriteCss).to.be.an('object');

  });

});