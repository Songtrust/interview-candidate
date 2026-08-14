FROM node:22-bookworm

WORKDIR /workspace

# Serve Hello World from the mounted workspace. Runs in the background so the
# container stays alive for shells/VS Code even if the server is killed or
# replaced by the candidate's own processes.
CMD ["bash", "-c", "node server/src/index.js & sleep infinity"]
