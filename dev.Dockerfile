FROM node:20.5.1-bookworm-slim
WORKDIR /usr/src/app
COPY . .
RUN npm install
ENV VITE_BACKEND_URL "http://localhost:8080"
CMD ["npm", "run", "dev","--", "--host"]
EXPOSE 5173
