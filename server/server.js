// Refer to these tutorial:  https://www.youtube.com/watch?v=HPIjjFGYSJ4
// https://www.youtube.com/watch?v=v0t42xBIYIs


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const selectAllTasks = 'SELECT * FROM TASKS';
const selectAllProperties = 'SELECT * FROM PROPERTIES';
const insertTasks = 'INSERT INTO TASKS SET ?';
const delTasks = 'DELETE FROM TASKS WHERE ?'

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get('/', (request, response) => {
    response.send('Go to /tasks to see tasks data');
});

app.get('/tasks/get', (request, response) => {
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

app.get('/properties/get', (request, response) => {
  conn.query(selectAllProperties, (error, results) => {
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

app.post('/tasks/create', (request, response) => {

let data = {
TASK_NAME: request.body.Name,
TASK_DESC: request.body.Desc,
TASK_LOCATION: request.body.Location,
ASSIGNED_TO: request.body.Assign
};


    conn.query(insertTasks, data, (error, results, fields) => {
      if (error) {
        return response.send(error);
      }

      else {
        response.send(JSON.stringify(results));
      }

    });
});

app.get('/tasks/update', (request, response) => {
    response.send('Tasks update!');
});

app.delete('/tasks/delete', (request, response) => {
    conn.query('DELETE FROM TASKS WHERE TASK_ID ='+request.body.TASK_ID+'', (error) => {
      if (error) {
        return response.send(error);
      }


      else {
        response.send(JSON.stringify(results));
      }

    });
});

app.listen(4000, () => {
   console.log(`Tasks server listening on port 4000`)
});
