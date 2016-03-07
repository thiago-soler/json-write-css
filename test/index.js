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
        'example/out/scene1.css': ['./example/src/exampleC/']
      }
    },
    settingsC: {
      files: {
        'example/out/scene1.css': ['./exampleError/']
      }
    }
  },
  jsonWriteCss = {};

describe('jsonWriteCss', function() {

  jsonWriteCss = require('../index.js').init(mock.settingsA);
	
	it('Verifica o funcionamento do plugin caso os arquivos solicitados estejam no formato JSON esperado.', function() {
    
    expect(jsonWriteCss).to.be.an('object');

  });

  jsonWriteCss = require('../index.js').init(mock.settingsB);

  it('Verifica se os arquivos solicitados sao um JSON, caso nao, finaliza o processo sem exceptions.', function() {
    
    expect(jsonWriteCss).to.be.an('object');

  });

  jsonWriteCss = require('../index.js').init(mock.settingsC);

  it('Verifica se os arquivos solicitados existem, caso nao, finaliza o processo sem exceptions.', function() {
    
    expect(jsonWriteCss).to.be.an('object');

  });

});