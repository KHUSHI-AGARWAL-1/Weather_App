const form=document.querySelector('form');
const res=document.getElementById('res');
const sec=document.querySelector('section');
// const body=document.querySelector('body');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inpText=form.elements[0].value;
    getWeather(inpText);
    form.elements[0].value="";
})

function getWeather(searchCity){
   
    const key = 'fd66da4fd797a172389145335e173f51';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchCity+ '&appid=' + key +'&units=metric' )

    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data)
        switch (data.weather[0].main) {
            case 'Clear':
                document.body.style.backgroundImage = "url('clearPicture.jpg')";
                document.getElementById('search').style.color="white";
                break;
                document.getElementById('search').style.color="white";
            case 'Clouds':
                document.body.style.backgroundImage = "url('cloudyPicture.jpg')";
                document.getElementById('search').style.color="black";
                document.getElementById('search').style.textShadow="5px 5px 1px grey";
                break;
    
            case 'Rain':
                document.body.style.backgroundImage = "url('https://images.alphacoders.com/159/159471.jpg')";
                document.getElementById('search').style.color="white";
               
                break;
            case 'Drizzle':
                document.body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.9YWTpA-g4YvROPYgEZWAVQHaFj?w=210&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')";
                document.getElementById('search').style.color="white";
                break;
    
            case 'Mist':
                document.body.style.backgroundImage = "url('mistPic.jpg')";
                document.getElementById('search').style.color="white";
                break;    
            
            case 'Thunderstorm':
                document.body.style.backgroundImage = "url('stormPicture.jpg')";
                document.getElementById('search').style.color="white";
                break;
            
            case 'Snow':
                document.body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.6p4jLqd4dxIp7Q1dWCypFwHaFj?w=246&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7')";
                document.getElementById('search').style.color="white";
                break;
                case 'Haze':
                    document.body.style.backgroundImage = "url('Hazepic.jpg')";
                    document.getElementById('search').style.color="white";
                    document.getElementById('search').style.textShadow="5px 5px 1px #141b41";
                    document.querySelector('button').style.backgroundColor="white";
                    document.querySelector('button').style.color="black";
                    document.querySelector('button').addEventListener('mouseenter',(e)=>{
                    e.target.style.backgroundColor="black";
                    e.target.style.color="white";
                    })
                    document.querySelector('button').addEventListener('mouseleave',(e)=>{
                        e.target.style.backgroundColor="white";
                        e.target.style.color="black";
                        })
                    break;
        
            default:
                document.getElementById('search').style.color="white";
                break;
        }
        // print city name
const city=document.getElementById('city');
city.innerText=`${data.name}, ${data.sys.country}`;

//print date year month..
    const curr = new Date();
    let date1= document.getElementById('date');
    date1.innerText=getDate(curr);

function getDate(date){
    let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day=days[date.getDay()];
    let month=months[date.getMonth()];
    let date2=date.getDate();
    let year= date.getFullYear();

    return `${day}, ${date2} ${month} ,${year}`;
}

// print temp

document.getElementById('temp').innerHTML=`${Math.round(data.main.temp)} &deg;C`;

//description
       const descr= document.getElementById('descr');
        descr.innerHTML=data.weather[0].main;
      
        const image=document.querySelector('img');
       
        switch (data.weather[0].main) {
            case 'Clouds':
                image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwFTkt5z_dxU6w1UnS1PxiZV3HDiPGsAW5Lrsp09MnlCmkQre9GzO8MnGytaaY1eZoqBN6SMJ4U578_uDtiuXswovr1T3o-Kt5KK0mlN_zC0RDodJFaKHQ3Uk-HIZ3vuMvAKNJi8DDFwWA7F6BOxz78Oh-UePwJTuc3PG0ZIZypPE1xlMPl5z46joaEw/s320/Clouds.png";
                break;
            case 'Clear':
                image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7pmzNCftryAfpa1YBSzVeYtjgxDQnw09Ug0HVV47J8GEtHPYTH9hJgZ2M1k0YgE0pcZ1qekr4C14zyPCiVuQAfXLClK8Ww3hYB6v77yElP7Lo5BnUKo4n-w6yB17FAbw51WST6YKS0GMwyA4fYNxOZxEyNL6HhUfFRgVhOW0GyRdBRriMHFQ-qfh4cA/s320/sun.png";
                break;
            case 'Rain':
                image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDW_NdwvxV796rkFf43qmUDiTQePn5dg7PDfn1SijfpjtB0AWJMBcifU6LWyW7iOtjZhfqIJnKEGQ1PwbbXS7NoKMSAmvy7i2ljWXMYLue3EBIBBR2qTFbs6QCe5eoFr2CU9WzCVJ8u0J3z3eAo3Ajv1LXamZASFtbj9sA_gD-Kp3hfgAk17Xh17RoLQ/s320/rainy.png";
                break;
            case 'Mist':
                image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVpL23l0t1U_ibWi01TFcHMF6J_t-9Ada5PavGlwG4M_mKIcx0pV1md9SN9ip1d84NaVowml5Do16XO3nsuttnM2-Ov05d-wCjEYjdzaOYfKvijw8k6Hfj9pOiPyEZTp2W20EPbTeONTgJE2Rdxs4KZUfg6f2PmbMF1094NcqJ7DwSFUQwYiRmVCNvuA/s320/mist.png";
               
                break;
            case 'Snow':
                image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-P3iT_uQK95qFY4h7QGdEtbRc1aVQo9BZy0ZWyPBvCNrP-4wnRStw0xYj9e4xa4ZlYISeNZqVJ33UP4YukR4jBennDD_obIN4QxYNZHdzG_z6_MNL2U08wMXwdFhtfvitW5LGiHgrwMJFC8QJFqbSO3woGSBqOdagGxaEQ20_S31Gc-GYL4vYzPzaPw/s320/snow.png";
                break;
            case 'Haze':
                image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjld66Ia5g_hpBn3Impi3zzOBHqWkjQInGLxTb2uXksuCsrkQU8HjlVyLobEJEGg8fRSIxeFzldGEHUmWcaiZBwAcRy4dGDpFX1BjTSB56qmBjW5tEW3RSC9_mCuLU_a8RuXchxGY7Oc8HLLl-IfaDW19Z0ZJJfNae9tECXRIyEu7rmJ3da08z8cI-phw/s320/haze.png";
                break;
                case 'Thunderstorm':
                    image.src = "https://th.bing.com/th/id/OIP.mnEV-wm0PayfS5K0QwoS0wHaIW?w=191&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7";
                    break;
                case 'Drizzle':
                    image.src = "https://th.bing.com/th/id/OIP.l7_ioETQEsWcXzC44ZL8UQHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7";
                    break;

        }
   
       
    
    
    
      
        })
    .catch((e)=>{
        alert("Please Enter Valid City");
    })

}