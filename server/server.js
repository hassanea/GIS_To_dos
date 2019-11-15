// Refer to these tutorial:  https://www.youtube.com/watch?v=HPIjjFGYSJ4
// https://www.youtube.com/watch?v=v0t42xBIYIs


const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const selectAllTasks = 'SELECT * FROM TASKS';
const insertTasks = `INSERT INTO TASKS (TASK_ID, TASK_NAME, TASK_DESC, ASSIGNED_TO, TASK_COMPLETE) VALUES ()`;

const conn = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'tuxMan9644!',
   database: 'task_db'
});

conn.connect(error => {
    if (error) throw error;
    console.log(`Connected!`);
});

console.log(conn);

app.use(cors());

app.get('/', (request, response) => {
    response.send('Go to /tasks to see tasks data');
});

app.get('/tasks', (request, response) => {
  conn.query(selectAllTasks, (error, results) => {
    if (error) {
        return response.send(error);
    }

    else {
        return response.json({
          data: results
        })
    }
  });
});

app.get('/tasks/create', (request, response) => {
    response.send('Tasks create!');
});

app.get('/tasks/update', (request, response) => {
    response.send('Tasks update!');
});

app.get('/tasks/delete', (request, response) => {
    response.send('Tasks delete!');
});

app.listen(4000, () => {
   console.log(`Tasks server listening on port 4000`)
});
