REPORTER=list

test:
	clear
	echo Starting test *********************************************************
	./node_modules/.bin/mocha \
	--reporter $(REPORTER) \
	test/**/*.js

.PHONY: test