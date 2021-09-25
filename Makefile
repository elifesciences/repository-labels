# Files that when changed should trigger a rebuild.
TS := $(shell find ./src -type f -name *.ts)

# Targets that don't result in output of the same name.
.PHONY: clean \
        distclean \
        test

# When no target is specified, the default target to run.
.DEFAULT_GOAL := out/release/index.js

# Target that cleans build output and local dependencies.
distclean: clean
	@rm -rf node_modules

# Target that cleans build output
clean:
	@rm -rf out

# Target to install Node.js dependencies.
node_modules: package.json package-lock.json
	@echo "Installing dependencies..."
	@npm install
	@touch node_modules

# Target to create the output directories.
out/debug out/release:
	@echo "Creating $@..."
	@mkdir -p $(CURDIR)/$@

# Target that builds a development version of the utility
out/debug/index.js: node_modules out/debug $(TS)
	@echo "Creating $@..."
	@npx tsc

# Target that builds a release version of the utility
out/release/index.js: ./out/debug/index.js out/release
	@echo "Creating $@..."
	@npx rollup $(CURDIR)/out/debug/index.js --file $@