import 'module-alias/register';
import express from 'express';
import {MainController} from "@server/Controller/MainController";

MainController.foo();

const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
