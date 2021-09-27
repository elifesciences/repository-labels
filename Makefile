PROJECT := $(notdir $(CURDIR))
PORT ?= 8080

# Files that when changed should trigger a rebuild.
TS := $(shell find ./src -type f -name *.ts)
HTML := $(shell find ./public -type f)

# Targets that don't result in output of the same name.
.PHONY: clean \
        distclean \
        format \
        lint \
        test \
				start

# When no target is specified, the default target to run.
.DEFAULT_GOAL := start

# Target that cleans build output and local dependencies.
distclean: clean
	@rm -rf node_modules

# Target that cleans build output
clean:
	@rm -rf out

# Target that checks the code for style/formating issues.
format:
	@echo "Running style checks..."
	@npx prettier --check .

# Target to run static analysis checks against the code.
lint:
	@echo "Running linter..."
	@npx eslint . --ext .js,.ts

# Target to install Node.js dependencies.
node_modules: package.json package-lock.json
	@echo "Installing dependencies..."
	@npm install
	@touch node_modules

# Target to create the output directories.
out/debug out/release out/preview:
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

# Target that bundles the html and code for the label preview page
out/preview/index.html: out/preview out/debug/index.js $(HTML)
	@echo "Creating $@..."
	@cp -f public/* out/debug/labels/*.js out/preview/

# Target that builds and serves the preview pages.
start: out/preview/index.html out/release/index.js
	@echo "Starting '$(PROJECT)' on 'http://localhost:$(PORT)'..."
	@docker run --rm --name $(PROJECT) -p $(PORT):80 -e NGINX_ENTRYPOINT_QUIET_LOGS=1 -v $(CURDIR)/out/preview:/usr/share/nginx/html/:ro nginx:alpine