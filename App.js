import  { useState } from 'react'



import './App.css';



function App() {

	 let display="serach a city name";

   const [city,setcity]=useState('');
   const [value,setvalue]=useState(false)
   const [temp,settemp]=useState('');
   const [humidity,sethumidity]=useState('');
   const [condition,setcondition]=useState('')
   const [pressure,setpressure]=useState('')
   const [country,setcountry]=useState('')
   const [region,setregion]=useState('');
   const [sunrise,setsunrise]=useState('');
   const [sunset,setsunset]=useState('');
   
  

   
   const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6f48d369d2mshc5432350cc15a05p1fd931jsn414dc3ffde55',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};



  const getData=async()=>{
	await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		console.log(settemp());
		
		settemp(response.current_observation.condition.temperature)
		sethumidity(response.current_observation.atmosphere.humidity)
		setpressure(response.current_observation.atmosphere.pressure)
		setcondition(response.current_observation.condition.text)
		setcountry(response.location.country)
		setregion(response.location.region)
		setsunrise(response.current_observation.astronomy.sunrise)
		setsunset(response.current_observation.astronomy.sunset)
    setvalue(true)
		

		
		
		

	})
	.catch(err => console.error(err));

	display='';
  }

  const HandleChange=(event)=>{
     setcity(event.target.value);

  }

  const HandleSubmit=()=>{
    getData();

    
	



  }
 

 return (
	<div>
    <div className='img' >
      <h1 className='welcome'>Welcome</h1>
            <div className='input'>
                <input     onChange={HandleChange}   placeholder="Enter city name" />
                 <button   onClick={HandleSubmit} >Search</button>
            </div>
           
            <div className={value? 'display' : 'no_display'  } >
               
                  <div className='glass1' >

    
                         <h1>{temp}°F </h1>
                             <h2 style={{
                                 textAlign:"center",marginTop:"-20px",letterSpacing:"2px"
                           }} >Temperature</h2>

         
                      <div className='container' >

                         <div className='child'>
                            <div className='ch c1' >
                              <h3>{humidity}</h3>
                              <h6>Humidity</h6>
                           </div>

                           <div className='ch c2' >
                              <h3>{condition}</h3>
                              <h6>Condition</h6>
                           </div>

                           <div className='ch c3' >
                              <h3>{pressure}</h3>
                              <h6>pressure</h6>
                           </div>

                          

                        </div>

                        <div className='con2'>
                        <div className='co c4' >
                              <h3>{sunrise}</h3>
                              <h6>sunrise</h6>
                           </div>

                           <div className='co c5' >
                              <h3>{region},</h3>
                              <h6>{country}</h6>
                           </div>
                           <div className='co c6' >
                              <h3>{sunset}</h3>
                              <h6>sunset</h6>
                           </div>

                        </div>

                      </div>

  


                  </div>



   

     </div>                  

    </div>

    
</div>

 );
 
}

export default App;
