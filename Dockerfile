# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the application code
COPY . .

# Make the container’s port 5000 available to the outside
EXPOSE 5000

# Define the command to run your app using npm
CMD ["npm", "start"]
