import express from 'express';
import validator from 'express-validator';
import bodyParser from 'body-parser';
import userRouter from './server/fakeServer/routes/userRoute';
import businessRouter from './server/fakeServer/routes/businessRoute';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to WEconnect Mock-data Api');
});

app.use('/api/v1/auth', userRouter);
app.use('/api/v1', businessRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});

export default app;