#!/bin/bash

# Check if mkcert is installed
if ! command -v mkcert &> /dev/null
then
    echo "mkcert could not be found, please install it first."
    exit
fi

# Create a directory for the certificates if it doesn't exist
CERT_DIR="./ssl"
mkdir -p $CERT_DIR

# Generate the development certificate
mkcert -install
mkcert -key-file $CERT_DIR/localhost-key.pem -cert-file $CERT_DIR/localhost.pem "localhost" 127.0.0.1 ::1

echo "Development certificate generated successfully in $CERT_DIR"