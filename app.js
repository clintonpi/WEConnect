import express from 'express';
import validator from 'express-validator';
import bodyParser from 'body-parser';
import userRouter from './server/fakeServer/routes/userRoute';
import businessRouter from './server/fakeServer/routes/businessRoute';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());

app.use('/api/v1/auth', userRouter);
app.use('/api/v1', businessRouter);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to WEconnect Mock-data Api');
});

app.get('*', (req, res) => {
  res.status(404).send('Welcome to  WEConnect Mock-data Api, this route does not exist!');
});

const port = process.env.PORT || 4000;

app.listen(port);

export default app;
