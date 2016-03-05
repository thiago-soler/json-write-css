REPORTER=list

test:
	./node_modules/.bin/istanbul \
	cover --report html \
	./node_modules/mocha/bin/_mocha -- -R spec \
	test/index.js

.PHONY: test