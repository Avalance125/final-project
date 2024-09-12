import express from 'express';
import routes from './routes/routes.js';
import { engine } from 'express-handlebars';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get("/", (req, res) => {
    res.render('home')
});

app.get("/page1", (req, res) => {
    res.render('page1')
});

app.use(express.json());


app.use(routes);

app.listen(3000, () => {
    console.log('Please work')
});