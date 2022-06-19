let weather = {
    apikey: '3487ba31488dc725541b222be9fdb2a7',
    // apikeyback: '9Km7WzSbuLvTbBTWS8mJoO8Hz5Y8dnu-hrERj-43Ba0',
    
    fetchWeather: function(city){
        fetch(
           "https://api.openweathermap.org/data/2.5/weather?q="
           +city+ 
           "&units=metric&appid="
           +this.apikey
        )
        .then((response)=>{
            if(!response.ok){
                alert("No weather found.");
                throw new Error("no weather found.");

            }
            return response.json();

        })
        .then((data)=> this.displayWeather(data));
    },
    // fetchBackground: function(city){
    //     fetch(
    //         "https://api.unsplash.com/search/photos?page=1&query="
    //         +city+
    //         "&client_id="
    //         +this.apikeyback
    //     )
    //     .then((response)=>{
    //         if(!response.ok){
    //             console.log("No weather found.");
    //         }
    //         return response.json();

    //     })
    //     .then((data)=>this.displayBackground(data));
    // },
    // displayBackground: function(data){
    //     const{raw}=data.results[0].urls.raw;

    //     document.body.style.backgroundImage =raw;
    //     // document.querySelector(".weather").classList.remove("loading");
    // },
    displayWeather: function(data){
        const{name}= data;
        const{icon, description}=data.weather[0];
        const{temp,humidity}=data.main;
        const{speed}=data.wind;
        document.querySelector(".city").innerText="Weather in " +name;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/" +icon+"@2x.png";
        document.querySelector(".temp").innerText=temp + "°C";
        document.querySelector(".humidity").innerText="Humidity:" +humidity+"%";
        document.querySelector(".wind").innerText="Wind speed:"+speed +"km/h";
        document.querySelector(".description").innerText=description;
        
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?" + name + "')";
        document.querySelector(".weather").classList.remove("loading");
    },
    search:function(){
        // this.fetchBackground(document.querySelector(".search-bar").value);
        this.fetchWeather(document.querySelector(".search-bar").value);

    },
};


document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});

weather.fetchWeather("Delhi");












