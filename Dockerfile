FROM node:14-alpine 


ENV PORT 3199 
ENV HOST 0.0.0.0 

# Create app directory 
RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app 

# Install app dependencies 
COPY . .

EXPOSE 3199

CMD [ "yarn", "start" ] 