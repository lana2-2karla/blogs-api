require('dotenv').config();
const app = require('./api');
const errorMiddleware = require('./middlewares/error');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(require('./router'));

app.use(errorMiddleware);

//swaggerUI - link que usei de referência: https://www.youtube.com/watch?v=WhFx2heoFrA&t=2277s
//link da documentação - http://localhost:3000/api-docs

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, () => console.log('ouvindo porta', port));
