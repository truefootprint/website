+SHELL := /bin/bash

.PHONY: server deploy

server:
	npx next

deploy:
	rm -rf out .next                                                    && \
		npx next build                                                    && \
		npx next export                                                   && \
		cd out                                                            && \
		touch .nojekyll                                                   && \
		rm -rf index                                                      && \
		echo www.truefootprint.com > CNAME                                && \
		git init                                                          && \
		git add -A                                                        && \
		git commit -m 'Deploy changes'                                    && \
		git remote add origin git@github.com:truefootprint/website        && \
		git push -f origin head:gh-pages                                  && \
		cd ..                                                             && \
		rm -rf out
