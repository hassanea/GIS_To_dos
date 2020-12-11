

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
var path = require('path');



const app = express();
require('dotenv').config();
const creds = require('./.env');



const selectAllTasks = 'SELECT * FROM TASKS';
const selectAllTasksByID = 'SELECT * FROM TASKS WHERE TASK_ID=?';
const selectAllProperties = 'SELECT * FROM PROPERTIES';
const selectAllPropsByID = 'SELECT * FROM PROPERTIES WHERE PROP_ID=?';
const insertTasks = 'INSERT INTO TASKS SET ?';
const delTasks = 'DELETE FROM TASKS WHERE TASK_ID=?';
const updateTasks = 'UPDATE TASKS SET TASK_NAME=?, TASK_DESC=?, TASK_LOCATION=?, ASSIGNED_TO=? WHERE TASK_ID=?';


const conn = mysql.createConnection({
   connectionLimit: 3,    
   host: creds.HOST,
   user: creds.USERNAME,
   password: creds.PASSWD,
   database: creds.DB,
   port: 3306    
});

conn.connect(error => {
    if (error) throw error;
    
    console.log(`Connected!`);
    console.log('Connection as ID ' + conn.threadId);
    
});

console.log(conn);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static('public'))
app.use(express.static('css'))
app.use(express.static('js'))
app.use(express.static(path.join(__dirname, 'public','css', 'js')));
const nodemailer = require('nodemailer');


// Get tasks data
app.get('https://reroot-task-scheduler-db-api.herokuapp.com/tasks', (request, response) => {
  conn.query(selectAllTasks, (error, results) => {
    if (error) {
        return response.send(error);
    }

    else {
        return response.json({
          data: results
        })
        console.log(results);
    }
  });
});

// Get properties data
app.get('https://reroot-task-scheduler-db-api.herokuapp.com/properties', (request, response) => {
  conn.query(selectAllProperties, (error, results) => {
    if (error) {
      return response.send(error);
    }

    else {
        return response.json({
          data: results
        })
        console.log(results);
    }
  });
});

// E-Mail reminder functionality
var transport = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: true,
  requireTLS: true,    
  auth: {
    user: creds.USER,
    pass: creds.PASS
  },
  tls: {
    // Do not fail on invalid certs!
    rejectUnauthorized: false
  }    
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Mailer listening on port 4000');
  }
});

app.post('https://reroot-task-scheduler-db-api.herokuapp.com/sendEmail', (req, res, next) => {
    
    
  const recipName = req.body.recipName;
  const recipEmail = req.body.recipEmail;
  const recipSubject = req.body.recipSubject;    
  const recipMessage = req.body.recipMessage;
  

  var mail = {
    from: recipName,
    to: recipEmail, 
    subject: recipSubject,
    attachments: [{
        filename: 'logo.png',
        path: __dirname + '/public/images/logo.png',
        cid: 'unique@reroot-task-scheduler.com'
    }],    
    html: `<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Reroot Pontiac GI</title>
    <style>
        /* -------------------------------------
          GLOBAL RESETS
      ------------------------------------- */

        /*All the styling goes here*/

        img {
            border: none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%;
        }

        body {
            background-color: #f6f6f6;
            font-family: sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }
        
        p {
            text-align: center;
        }

        table {
            border-collapse: separate;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            width: 100%;
        }

        table td {
            font-family: sans-serif;
            font-size: 14px;
            vertical-align: top;
        }

        /* -------------------------------------
          BODY & CONTAINER
      ------------------------------------- */

        .body {
            background-color: #f6f6f6;
            width: 100%;
        }

        /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
        .container {
            display: block;
            margin: 0 auto !important;
            /* makes it centered */
            max-width: 580px;
            padding: 10px;
            width: 580px;
        }

        /* This should also be a block element, so that it will fill 100% of the .container */
        .content {
            box-sizing: border-box;
            display: block;
            margin: 0 auto;
            max-width: 580px;
            padding: 10px;
        }

        /* -------------------------------------
          HEADER, FOOTER, MAIN
      ------------------------------------- */
        .main {
            background: #ffffff;
            border-radius: 3px;
            width: 100%;
        }

        .wrapper {
            box-sizing: border-box;
            padding: 20px;
        }

        .content-block {
            padding-bottom: 10px;
            padding-top: 10px;
        }

        .footer {
            clear: both;
            margin-top: 10px;
            text-align: center;
            width: 100%;
        }

        .footer td,
        .footer p,
        .footer span,
        .footer a {
            color: #999999;
            font-size: 12px;
            text-align: center;
        }

        /* -------------------------------------
          TYPOGRAPHY
      ------------------------------------- */
        h1,
        h2,
        h3,
        h4 {
            color: #000000;
            font-family: sans-serif;
            font-weight: 400;
            line-height: 1.4;
            margin: 0;
            margin-bottom: 30px;
        }

        h1 {
            font-size: 35px;
            font-weight: 300;
            text-align: center;
            text-transform: capitalize;
        }

        p,
        ul,
        ol {
            font-family: sans-serif;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
            margin-bottom: 15px;
        }

        p li,
        ul li,
        ol li {
            list-style-position: inside;
            margin-left: 5px;
        }

        a {
            color: #3498db;
            text-decoration: underline;
        }

        /* -------------------------------------
          BUTTONS
      ------------------------------------- */
        .btn {
            box-sizing: border-box;
            width: 100%;
        }

        .btn>tbody>tr>td {
            padding-bottom: 15px;
        }

        .btn table {
            width: auto;
        }

        .btn table td {
            background-color: #ffffff;
            border-radius: 5px;
            text-align: center;
        }

        .btn a {
            background-color: #ffffff;
            border: solid 1px #3498db;
            border-radius: 5px;
            box-sizing: border-box;
            color: #3498db;
            cursor: pointer;
            display: inline-block;
            font-size: 14px;
            font-weight: bold;
            margin: 0;
            padding: 12px 25px;
            text-decoration: none;
            text-transform: capitalize;
        }

        .btn-primary table td {
            background-color: #3498db;
        }

        .btn-primary a {
            background-color: #3498db;
            border-color: #3498db;
            color: #ffffff;
        }

        /* -------------------------------------
          OTHER STYLES THAT MIGHT BE USEFUL
      ------------------------------------- */
        .last {
            margin-bottom: 0;
        }

        .first {
            margin-top: 0;
        }

        .align-center {
            text-align: center;
        }

        .align-right {
            text-align: right;
        }

        .align-left {
            text-align: left;
        }

        .clear {
            clear: both;
        }

        .mt0 {
            margin-top: 0;
        }

        .mb0 {
            margin-bottom: 0;
        }

        .preheader {
            color: transparent;
            display: none;
            height: 0;
            max-height: 0;
            max-width: 0;
            opacity: 0;
            overflow: hidden;
            mso-hide: all;
            visibility: hidden;
            width: 0;
        }

        .powered-by a {
            text-decoration: none;
        }

        hr {
            border: 0;
            border-bottom: 1px solid #f6f6f6;
            margin: 20px 0;
        }

        /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
      ------------------------------------- */
        @media only screen and (max-width: 620px) {
            table[class=body] h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important;
            }

            table[class=body] p,
            table[class=body] ul,
            table[class=body] ol,
            table[class=body] td,
            table[class=body] span,
            table[class=body] a {
                font-size: 16px !important;
            }

            table[class=body] .wrapper,
            table[class=body] .article {
                padding: 10px !important;
            }

            table[class=body] .content {
                padding: 0 !important;
            }

            table[class=body] .container {
                padding: 0 !important;
                width: 100% !important;
            }

            table[class=body] .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important;
            }

            table[class=body] .btn table {
                width: 100% !important;
            }

            table[class=body] .btn a {
                width: 100% !important;
            }

            table[class=body] .img-responsive {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important;
            }
        }

        /* -------------------------------------
          PRESERVE THESE STYLES IN THE HEAD
      ------------------------------------- */
        @media all {
            .ExternalClass {
                width: 100%;
            }

            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height: 100%;
            }

            .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important;
            }

            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
                line-height: inherit;
            }

            .btn-primary table td:hover {
                background-color: #34495e !important;
            }

            .btn-primary a:hover {
                background-color: #34495e !important;
                border-color: #34495e !important;
            }
        }
    </style>
</head>

<body>
    <span class="preheader">This is preheader text. Some clients will show this text as a preview.</span>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
            <td>&nbsp;</td>
            <td class="container">
                <div class="content">

                    <!-- START CENTERED WHITE CONTAINER -->
                    <table role="presentation" class="main">

                        <!-- START MAIN CONTENT AREA -->
                        <tr>
                            <td class="wrapper">
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td>                                           
                                        <img src="cid:unique@reroot-task-scheduler.com" alt="Reroot Pontiac's logo"/>
                                            <hr/>
                                            <p>${recipMessage}</p>
                                            <p>Sincerely, <br> The Reroot Pontiac Team</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- END MAIN CONTENT AREA -->
                    </table>
                    <!-- END CENTERED WHITE CONTAINER -->

                    <!-- START FOOTER -->
                    <div class="footer">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="content-block">
                                    <span class="apple-link">Reroot Pontiac, 76 Henderson Street, Pontiac, MI 48341</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="content-block powered-by">
                                    Powered by <a href="http://htmlemail.io">HTMLemail</a>.
                                </td>
                            </tr>
                        </table>
                    </div>
                    <!-- END FOOTER -->

                </div>
            </td>
            <td>&nbsp;</td>
        </tr>
    </table>
</body>
</html>`    
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'Fail!!!'
      })
    } else {
      res.json({
        msg: 'Success!'
      })
    }
  })
})

// Create task functionality
app.post('https://reroot-task-scheduler-db-api.herokuapp.com/tasks/create', (request, response) => {

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
        console.log(results); 
        console.log(result.insertId);
        console.log('Created: ' + results.affectedRows + ' rows');  
      }

    });
});

// Update task by TASK ID #
app.put('https://reroot-task-scheduler-db-api.herokuapp.com/tasks/update/:TASK_ID', (request, response) => {
    
const TASK_NAME = request.body.Name;    
const TASK_DESC = request.body.Desc;
const TASK_LOCATION = request.body.Location;
const ASSIGNED_TO = request.body.Assign;    
const id  = request.params.TASK_ID;    
    
    conn.query(updateTasks, [TASK_NAME, TASK_DESC, TASK_LOCATION, ASSIGNED_TO, id], (error, results) => {
      if (error) {
        return response.send(error);
      }


      else {
        response.send(JSON.stringify(results));
        console.log(results);
        console.log('Updated: ' + results.affectedRows + ' rows');
        console.log('Changed: ' + results.changedRows + ' rows');  
        }
      

    });    
    

});

// Get task by Task ID #
app.get('https://reroot-task-scheduler-db-api.herokuapp.com/tasks/:TASK_ID', (request, response) => {
    
const id = request.params.TASK_ID;   
    
  conn.query(selectAllTasksByID, [id], (error, results) => {
  if (error) {
    return response.send(error);
  }
  else {
    	  response.send(JSON.stringify(results));
          console.log(results);
  }
  });
});

// Get property by Property ID #
app.get('https://reroot-task-scheduler-db-api.herokuapp.com/properties/:PROP_ID', (request, response) => {
    
const id = request.params.PROP_ID;  
    
  conn.query(selectAllPropsByID, [id], (error, results) => {
  if (error) {
    return response.send(error);   
  }
  else {
    	  response.send(JSON.stringify(results));
          console.log(results);
  }
  });
});

// Delete task by Task ID #
app.delete('https://reroot-task-scheduler-db-api.herokuapp.com/tasks/delete/:TASK_ID', (request, response) => {

const id  = request.params.TASK_ID;

    conn.query(delTasks, [id], (error, results) => {
      if (error) {
        return response.send(error); 
      }


      else {
        response.send(JSON.stringify(results));
        console.log(results);
        console.log('Deleted: ' + results.affectedRows + ' rows');   
        }
      

    });
});

app.use(function (request, response) {
  response.status(404).send("400 Not Found! Page does not exist...");
});

app.use(function (request, response, error) {
  console.log(error.stack);
  response.status(500).send("500 Something is broken!");
});

app.listen(process.env.PORT || 4000, () => {
   console.log(`Server listening on port 4000`)
});
