var assert = require('chai').assert,
	expect = require('chai').expect,
  settings = {
    files: {
      'example/out/scene1.css': ['./example/src/exampleA', './example/src/exampleB'],
      'example/out/scene2.css': ['./example/src/exampleB']
    }
  },
	jsonWriteCss = require('../index.js').init(settings);

describe('Estancia jsonWriteCss -', function() {
	
	it('Formato esperado', function() {
    
    expect(jsonWriteCss).to.be.an('object');

  });
	
  it('Verifica se objeto de escopo privado foi exposto para testes. Verifica formato esperado', function() {
    
    expect(jsonWriteCss).to.contains.keys('__testonly__');
    expect(jsonWriteCss.__testonly__).to.be.an('object');
    
  });

	// it('Verifica se objeto de escopo privado foi exposto para testes e se esta no formato esperado', function() {
    
 //    expect(jsonWriteCss).to.include.keys('__testsonly__');
 //    expect(jsonWriteCss).to.include.keys('test');

 //    // assert.strictEqual(jsonWriteCss.test(1), 2, 'O valor deve ser estritamente igual ao resultado esperado.');
 //  });

});