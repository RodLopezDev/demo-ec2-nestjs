# Create image name

docker build -t image-name .

# Run image

docker run --name container-name image-name

# Launch docker-compose

docker-compose up --build -d 

# Add tag to image

docker tag demo-ec2-nestjs:v1 rodlopez/demo-ec2-nestjs:v1

# Send to dockerhub

docker push rodlopez/demo-ec2-nestjs:v1