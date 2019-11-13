// Refer to these tutorial:  https://www.youtube.com/watch?v=HPIjjFGYSJ4 
// https://www.youtube.com/watch?v=v0t42xBIYIs


const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();


const conn = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: ''    
});

conn.connect(error => {
    if (error) {
        return error;
    }
});

console.log(conn);

app.use(cors());

app.get('/', (request, response) => {
    response.send('Go to /tasks to see tasks data')
});

app.get('/tasks', (request, response) => {
    
});

app.listen(4000, () => {
   console.log(`Tasks server listening on port 4000`) 
});