FROM node:0.12

COPY ./ /app

RUN cd /app \
	&& npm install

WORKDIR /app

CMD ["npm", "start"]