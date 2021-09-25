
# Targets that don't result in output of the same name.
.PHONY: clean \
        distclean \
        lint \
        format \
        test \
        docs \
        debug \
        release \
        version

# When no target is specified, the default target to run.
.DEFAULT_GOAL := out/release/index.js

# Target that cleans build output and local dependencies.
distclean: clean
	@rm -rf node_modules

# Target that cleans build output
clean:
	@rm -rf out

node_modules:
	@npm install
	@touch node_modules

out/debug:
	@mkdir -p ${CURDIR}/out/debug

out/debug/index.js: node_modules out/debug
	@npx tsc

out/release:
	@mkdir -p ${CURDIR}/out/release

out/release/index.js: ./out/debug/index.js out/release
	@npx rollup ${CURDIR}/out/debug/index.js --file $@