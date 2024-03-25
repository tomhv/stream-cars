.SILENT:              # don't show command being run
.DEFAULT_GOAL := help # when running just "make", show help menu

## Start all docker containers
start:
	docker compose up -d

up:
	echo "Use \"make start\" instead"

## Stop all docker containers and remove all volumes
stop:
	docker compose down -v --remove-orphans

down:
	echo "Use \"make stop\" instead"

## Restart all containers (stop then start)
restart: stop start

## Check the status of running containers
ps:
	docker compose ps

# Used to provide a nice help menu listing all the available targets
## Help menu
help:
	printf "${COLOR_COMMENT}Usage:${COLOR_RESET}\n"
	printf " make [target]\n\n"
	printf "${COLOR_COMMENT}Available targets:${COLOR_RESET}\n"
	awk '/^[a-zA-Z\-\_0-9\.@]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf " ${COLOR_INFO}%-16s${COLOR_RESET} %s\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)

# Used for the help menu
## Colors
COLOR_RESET   = \033[0m
COLOR_INFO    = \033[32m
COLOR_COMMENT = \033[33m
