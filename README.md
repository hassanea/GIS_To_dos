# 🍃 Reroot's Task Scheduler 🍃
## AKA 'GIS To Do List' 📝
### Project Overview

**Reroot Task Scheduler** is a project I developed during my internship at Reroot Pontiac, a organization dedicated to urban green infrastructure.  The application's primary purpose is to manage employee and volunteer tasks at several of their properties.  The task scheduler is a CRUD application that allows users to create, read, update, and delete tasks.  Additional features include task filtering, completion indicator and e-mail reminder. 

![Reroot Pontiac's Task Scheduler - Homepage](https://github.com/hassanea/GIS_To_dos/blob/master/Documents/Screenshots/RP_Task_Scheduler-homepage.jpg)

![Reroot Pontiac's Task Scheduler - Task Overview page](https://github.com/hassanea/GIS_To_dos/blob/master/Documents/Screenshots/RP_Task_Scheduler-overview.jpg)

![Reroot Pontiac's Task Scheduler - Backend DB API page](https://github.com/hassanea/GIS_To_dos/blob/master/Documents/Screenshots/RP_Task_Scheduler-DB_API.jpg)

## Hosted Project 🕸
  * Visit the project at https://www.reroot-task-scheduler.com 


## Running the Project 🏃

1.  Clone the project from https://github.com/hassanea/GIS_To_dos
      * Use `git clone` https://github.com/hassanea/GIS_To_dos 
2.  Navigate to the directory where GIS_To_dos/ folder is located.
3.  In the terminal, change directory `cd` into the GIS_To_dos folder.
4.  Then, change directory `cd` into client directory and run `npm install`
5.  Do the same with the server folder and run `npm install`.
    * Note: Must create a MySQL database named `task_db` first and import the `task_db.sql file` into your database before running project!
6. Update the `proxy` value within the `package.json` under the client folder to your corresponding API setup  Ex: localhost:4000, api.somedomain.com, etc.
7. Finally, `cd` into the client folder and type `npm start` into terminal and do the same in the server folder.
8. Visit the front-end portion of project at `localhost:3000/` and backend API at `localhost:4000/`.

## How the project was built? ⚙️ (Dependencies)
* React - https://reactjs.org
* Express - http://expressjs.com
* NPM & NodeJS - https://www.npmjs.com  &  https://nodejs.org/en/
* MySQL - https://www.mysql.com/gi
* W3 CSS - https://www.w3schools.com/w3css/default.asp
* Material UI - https://material-ui.com
* Google Maps API - https://cloud.google.com/maps-platform/
* AWS - https://aws.amazon.com