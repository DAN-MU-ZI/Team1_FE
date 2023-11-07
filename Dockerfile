FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .

ENV REACT_APP_KAKAO_API_KEY=d92567d27c897634df0c647a27b70e3c
ENV REACT_APP_BASE_URL=http://localhost:3000
ENV REACT_APP_API_URL=http://localhost:8080

RUN npm ci
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "build"]

