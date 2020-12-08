import React from 'react';
import Breadcrumb from './Breadcrumb';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {Helmet} from "react-helmet";


const Create = (props) => {
    
    return (


    <div className="w3-container">
      <Helmet>
       <title>Reroot Task Scheduler - Create Task</title> 
       <meta charset="utf-8" />  
       <meta name="viewport" content="width=device-width, initial-scale=1"/>
       <meta name="author" content="Evan H." />  
       <meta name="theme-color" content="#ffffff"/>
       <meta name="description" content="Reroot Pontiac's Task Scheduler"/>
       <meta name="keywords" content="Reroot Pontiac, Etc." /> 
       <meta name="og:title" content="Reroot Task Scheduler"/>
       <meta name="og:type" content="article"/>
       <meta name="og:url" content="https://www.reroot-task-scheduler.com"/>
       <meta name="og:site_name" content="Reroot Task Scheduler"/>
       <meta name="og:description" content=""/>
       <meta name="og:phone_number" content="248-703-0288"/>
       <meta name="og:email" content="info@rerootgi.com"/>
       <meta name="og:street-address" content="76 Henderson Street"/>
       <meta name="og:postal-code" content="48341"/>
       <meta name="og:locality" content="Pontiac"/>
       <meta name="og:region" content="MI"/>
       <meta name="og:country-name" content="USA"/>   
       <link rel="canonical" href="https://www.reroot-task-scheduler.com"/> 
      </Helmet>
      <Breadcrumb/>
      <div className="w3-card-4">
       <div className="w3-container w3-green">
         <h1 className="w3-animate-top"> <AddBoxIcon/> Create Task:</h1>
        </div>

    <form onSubmit={props.submit} className="w3-container w3-margin-bottom">
      <p className="w3-left-align"><label htmlFor="taskName" className="w3-text-purple">Task Name:</label>
      <input type="text" name="Name" className="w3-input w3-border w3-round w3-light-grey w3-wide w3-animate-input" onChange={props.change} id="taskName" placeholder="Enter a task name" value={props.Name} required autoFocus/> </p>

       <p className="w3-left-align"><label htmlFor="taskDesc" className="w3-text-purple"> Task Description:</label> <br/>
      <textarea id="taskDesc" name="Desc" rows="10" cols="50" className="w3-border w3-round w3-light-grey w3-wide" placeholder="Enter a task Description" value={props.Desc} onChange={props.change} required></textarea>
       </p>

<p className="w3-left-align">
 <label htmlFor="taskLocate" className="w3-text-purple">Task Location:</label>  <br/>
  <select name="Location" id="taskLocate" className="w3-border w3-wide w3-round w3-light-grey" value={props.Location} onChange={props.change} required>
    <option value="">Select Task Location</option>
    <option value="Reroot Pontiac HQ">Reroot Pontiac Headquarters</option>
    <option value="Reroot Sustainability Center">Sustainability Center</option>
    <option value="Some place">Some place</option>
    <option value="Other place">Other place</option>
    <option value="Etc.">Etc.</option>
  </select>
  </p>
        
<p className="w3-left-align">
 <label htmlFor="taskAssign" className="w3-text-purple">Task Assigned to:</label>  <br/>
  <select name="Assign" id="taskAssign" className="w3-border w3-wide w3-round w3-light-grey" value={props.Assign} onChange={props.change} required>
    <option value="">Select Task Assignee</option>
    <option value="Unassigned">Unassigned</option>   
    <option value="Bob">Bob</option>
    <option value="Carol">Carol</option>
    <option value="Eva">Eva</option>
    <option value="Karen">Karen</option>
    <option value="Leo">Leo</option>
    <option value="Alexandria">Alexandria</option>
    <option value="Xavier">Xavier</option>
    <option value="Kendra">Kendra</option>
    <option value="Olivia">Olivia</option>
    <option value="Elmer">Elmer</option>
    <option value="Homer">Homer</option>
    <option value="Fred">Fred</option>
    <option value="Darius">Darius</option>
    <option value="Evelyn">Evelyn</option>
    <option value="Ruby">Ruby</option>
    <option value="Tara">Tara</option>
    <option value="Jade">Jade</option>
    <option value="Sal">Sal</option>
    <option value="Lucy">Lucy</option>
    <option value="Dean">Dean</option>
    <option value="Sonjay">Sonjay</option>
    <option value="Jerry">Jerry</option>
    <option value="Jerrold">Jerrold</option>
    <option value="Mohamed">Mohamed</option>
    <option value="Rudy">Rudy</option>
    <option value="Terrence">Terrence</option>
    <option value="Sam">Sam</option>
    <option value="Kerry">Kerry</option>
    <option value="Kara">Kara</option>
    <option value="Mario">Mario</option>
    <option value="Ben">Ben</option>
    <option value="Stuart">Stuart</option>
    <option value="Yavonne">Yavonne</option>
    <option value="Martin">Martin</option>
    <option value="Alfred">Alfred</option>    
    <option value="Drew">Drew</option>    
    <option value="Rick">Rick</option>
    <option value="Kerry">Kerry</option>
    <option value="Julia">Julia</option>
    <option value="Pierre">Pierre</option>
    <option value="Victor">Victor</option>        
    <option value="Vladimir">Vladimir</option>        
    <option value="George">George</option>        
    <option value="Boris">Boris</option>        
    <option value="Jared">Jared</option>        
    <option value="Selim">Selim</option>
    <option value="Kris">Kris</option>    
    <option value="Zoe">Zoe</option>    
    <option value="Harley">Harley</option>    
    <option value="Clint">Clint</option>    
    <option value="Cliff">Cliff</option>
    <option value="Tiffany">Tiffany</option>
    <option value="Lois">Lois</option>    
    <option value="Arthur">Arthur</option>    
    <option value="Geoff">Geoff</option>    
    <option value="Jean">Jean</option>    
    <option value="Annie">Annie</option>
  </select>
  </p>

  <p className="w3-center">
    <input type="submit" value="Submit" className="w3-button w3-cyan w3-round btnSubmit"/>
  </p>
    </form>
  </div>        
</div>
    );
}

export default Create;
