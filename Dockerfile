# Use Node.js as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire Angular project
COPY . .

# Expose the port used by ng serve
EXPOSE 4200

# Start Angular with external access enabled
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
