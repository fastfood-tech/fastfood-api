FROM node 

WORKDIR /usr/src/fastfood

COPY . .

RUN npm i
RUN npx prisma generate
RUN npm run build

CMD [ "npm", "start" ]



