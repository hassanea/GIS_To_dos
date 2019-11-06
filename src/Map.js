import React from 'react';


const urlMapsAPI = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBm3mUKF6xpj3HzgFFALZZet1FW7ZOdqKs&callback=initMap';



class Map extends React.Component {
    
    
componentDidMount(){
    this.renderMap()
    
    // Error handling: For when the Google Maps API key authenication fails.
    window.gm_authFailure = () => { 
      alert(
        "Google Maps error! Check out the JS Console for additional details!");
    }
}
    
/* renderMap function: Loads script with the scriptLoad function as well as it calls initMap. */
    renderMap = () => {
        scriptLoad(urlMapsAPI)
        window.initMap = this.initMap
    }
    
    
        /* initMap function: Initializes the Map including markers, infowindows, and other particular details. */
    initMap = () => {
        // eslint-disable-next-line
        let map = new window.google.maps.Map(document.getElementById('map'), {
          // Sets Map's center.    
          center: {lat: 42.63829635, lng: -83.30672549},
          // Sets Map's zoom level.    
          zoom: 18,   
          draggable: true   
        })
        
        map.setMapTypeId(window.google.maps.MapTypeId.HYBRID);
        
                // Infowindow initialization
        let infowindow = new window.google.maps.InfoWindow({maxWidth: 200})
             
            // Marker's initialization 
            let marker = new window.google.maps.Marker({
    position: {lat: 42.63829635, lng: -83.30672549},
    map: map,
    animation: window.google.maps.Animation.DROP,            
    title: "Reroot Pontiac"            
  })
            
// Initializes Infowindow's content.          
let contentString = `<div> ${marker.title} </div>`        
            
// Marker's click event.            
marker.addListener('click', function() {

        // Change the content
        infowindow.setContent(contentString)

        // Open An InfoWindow
        infowindow.open(map, marker)
    
      })    // Populates the marker's state with the markers.
        
        
        }
    
    
  render() {
      
    return (
        
    <div role="region">   
        <div className="map-Container" role="application" aria-label="Interactive Map" tabIndex="0">
          <div id="map" className="w3-margin-top w3-margin-bottom"></div> 
        </div> 
    </div>     
    );
  }
}


/* 

scriptLoad function: Loads the Google Maps API script asychronously 

References: https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/
    https://www.youtube.com/channel/UCcWSbBe_s-T_gZRnqFbtyIA
*/
const scriptLoad = (url) => {
        let index = window.document.getElementsByTagName('script')[0]
        let script = window.document.createElement('script')
        script.src = url
        script.async = true
        script.defer = true
        index.parentNode.insertBefore(script, index)
        
    }


export default Map;