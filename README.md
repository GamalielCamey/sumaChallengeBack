<h1 align="center">SUMA CHALLENGE BACKEND</h1>

###

<h2 align="left">GOALS</h2>

###

<h5 align="left">Challenge:  develop an API on Node.js that allows you to create,<br>update, delete and get the data about airports, airlines, and flights <br><br>Must have:<br><br>GET routes<br>POST routes<br>DELETE routes<br>UPDATE routes</h5>

###

<h3 align="left">STACK</h3>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="javascript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" height="40" width="52" alt="babel logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="52" alt="nodejs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" width="52" alt="express logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="40" width="52" alt="postgresql logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" width="52" alt="sequelize logo"  />
</div>

###

<h3 align="left">PROJECT DISTRIBUTION</h3>

###

<div align="center">
  <img height="400" src="https://res.cloudinary.com/dtfz9e5yp/image/upload/v1669307631/SETUP_pylewl.png"  />
</div>

###

<p align="left">To start the conection with the server add the following data to the .env file WITH THE CORRESPONDING DATA OF THE db:<br><br>DB_USER<br>DB_PASSWORD<br>DB_HOST<br>DB_NAME</p>

###

<p align="left">MODEL EXAMPLE</p>

###

<div align="center">
  <img height="200" src="https://res.cloudinary.com/dtfz9e5yp/image/upload/v1669307853/MODEL_pkpzo6.png"  />
</div>

###

<h3 align="left">ROUTES</h3>

###

<div align="center">
  <img height="300" src="https://res.cloudinary.com/dtfz9e5yp/image/upload/v1669308290/ROUTES_dm9spd.png"  />
</div>

###

<p align="left">/flights <br>/airlines<br>/airports<br><br>bring all data from each table in JSON format<br><br>/flights/:flightNum -> flightNum must be pased as param and retrieves all flights with that number from all airlines and dates<br><br>/flights-airline -> Recives code as query and returns the airline with the IATA_CODE that matches<br><br>post Routes can be used for single data or for multiple entries in JSON format (beware of each table model to avoid errors)<br><br>/flight-update -> only takes id and departure as an integer to ad a DELAY_TIME, arrival delay, departure and arrival; time is automaticaly updated</p>

###
