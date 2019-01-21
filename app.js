const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();
const path = require('path');
const rootDir = require('./utils/path');
// app.use((req, res, next) => {
//   console.log('inside');
//   next(); //allows the request to continue to the next middleware inline
// });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});
// const http = require('http');
// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000); // this can be used instead of above three statements
