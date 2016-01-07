REPORTER=list

test:
	clear
	echo Starting test *********************************************************
	./node_modules/.bin/mocha \
	--reporter $(REPORTER) \
	test/**/*.js

istanbul:
	./node_modules/.bin/istanbul \
	cover --report html \
	./node_modules/.bin/mocha -- -R spec \
	test/index.js

.PHONY: test istanbul