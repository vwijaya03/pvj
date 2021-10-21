import express from 'express';
import staffController from './network/controllers/staff'

const app = express();
const prefix = '/api/v1';

app.use(express.json()); //this is the build in express body-parser 
app.use(                //this mean we don't need to use body-parser anymore
  express.urlencoded({
    extended: true,
  })
);

// routes
app.get(prefix + '/test', function (req, res, next) {
  res.json({response: 'OK', code: 200});
});

app.get(prefix + '/staff', staffController.getStaff);
app.post(prefix + '/staff', staffController.addStaff);
app.delete(prefix + '/staff', staffController.deleteStaff);


app.use(function onError(err, req, res, next) {
    console.error(err);
    res.status(500).send({ code: 500, message: err.message}).end();
});

export default app