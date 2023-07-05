# Add user to docker group

sudo usermod -aG docker $USER

# Restart docker service

sudo service docker restart

# Launch docker-compose

sudo docker-compose up --build -d 