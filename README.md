# Command to build docker image
docker build -t test .

# Command to run docker container
docker run --rm --name test -d -p 5000:5000 --add-host host.docker.internal:host-gateway test