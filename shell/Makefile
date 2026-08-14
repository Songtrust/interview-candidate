IMAGE := studio-dev
CONTAINER := studio-dev

.DEFAULT_GOAL := help

.PHONY: help build start stop shell logs clean

help: ## Show this help
	@echo "Usage: make <target>"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}'

build: ## Build the dev container image
	docker build -t $(IMAGE) .

start: ## Start the dev container (mounts ./workspace, publishes ports 3000/5173/8000)
	docker run -d --rm \
		--name $(CONTAINER) \
		-v $(CURDIR)/workspace:/workspace \
		-p 3000:3000 \
		-p 5173:5173 \
		-p 8000:8000 \
		$(IMAGE)
	@sleep 1
	@docker logs $(CONTAINER)

stop: ## Stop the dev container
	-docker stop $(CONTAINER)

shell: ## Open a bash shell inside the running container
	docker exec -it $(CONTAINER) bash

logs: ## Follow container logs
	docker logs -f $(CONTAINER)

clean: stop ## Stop the container and remove the image
	-docker rmi $(IMAGE)
