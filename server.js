const express = require('express');
const path = require('path');

const app = express();

// wszystkie linki
app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

// tylko te linki, ktore zaczynaja sie od /user
app.use('/user', (req, res) => {
  res.show('forbidden.html');
});

app.use(express.static(path.join(__dirname, '/public')));



app.get('/', (req, res) => {
  res.show('home.html');
});

app.get('/home', (req, res) => {
  res.show('home.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});



app.use((req, res) => {
  res.status(404).send('404.html');
})



app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
