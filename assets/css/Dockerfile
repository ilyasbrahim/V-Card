# Use an official Nginx image as a parent image
FROM nginx:alpine

# Copy the content of the project to the Nginx HTML directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
