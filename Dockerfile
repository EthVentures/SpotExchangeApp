FROM netizy/ionic-2

COPY . /app
WORKDIR /app
RUN npm install

CMD ionic serve --port 8888 --nobrowser
