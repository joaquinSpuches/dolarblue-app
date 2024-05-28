# install-playwright-deps.sh
#!/bin/bash

# Ensure the script exits on any errors
set -e

# Install necessary dependencies
apt-get update
apt-get install -y libnss3 libnspr4 libgbm1