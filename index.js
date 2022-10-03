let movies_div = document.getElementById("movies");

let id;

async function Searchmovies(){

    // https://www.omdbapi.com/?apikey=6a41ddca&s=om_shanti_om;

    let movies_div = document.getElementById("movies")

    try {
        const query = document.getElementById("query").value;

        const res = await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`)

        const data = await res.json();
        console.log("data",data)

        const movies = data.Search;

        appendMovies(movies);

    } 
    catch (err)
    {
        console.log("error")
    }
}


function appendMovies(data)
{
    //optimization #;
    
    //optimization #2;
    movies_div.innerHTML=null;

    data.forEach(function(elem) {

        let poster_div = document.createElement("div");
        poster_div.setAttribute("id","poster-div");
    //  <===============Movie Pop Up Function=======================>
        poster_div.addEventListener("click",function(){
            show_details(elem);
        });

    // <============Movie Pop Up Function==========================>

        let details_div = document.createElement("div");
        details_div.setAttribute("id","detail-div")

        let title = document.createElement("h3");
        title.setAttribute("id","movie_title");

        title.innerText = elem.Title;

        let image = document.createElement("img");
        image.setAttribute("id","output_img")
        image.src = elem.Poster;

        let year = document.createElement("p");
        year.innerText = elem.Year;

        let sub_div = document.createElement("div");
        sub_div.setAttribute("id","sub_div")

        details_div.append(title,year);
        poster_div.append(image);

        sub_div.append(poster_div,details_div)

        movies_div.append(sub_div)

        let movies = document.getElementById("show-details");
        movies.style.display = "none";
        // movies_div.append(image,p);
    });
}

function show_details(elem){

    console.log(elem.Title);
    let movies = document.getElementById("show-details");
    movies.style.display = "block";
    let moviesr = document.getElementById("movies");
    moviesr.innerHTML = null;

    movies.innerHTML = null;

    let search_div = document.createElement("div")
        search_div.setAttribute("id","search_div");

    let poster_div = document.createElement("div");
    poster_div.setAttribute("id","poster_search")

    let poster = document.createElement("img");
    poster.setAttribute("class","poster_img");
    poster.src = elem.Poster;

    poster_div.append(poster);

    let movie_details_div = document.createElement("div");
        movie_details_div.setAttribute("id","info");
    let movie_name = document.createElement("h2")
    movie_name.innerText = elem.Title;

    let year = document.createElement("h3");
    year.innerText = elem.Year;

    movie_details_div.append(movie_name,year);

    search_div.append(poster_div,movie_details_div)

    movies.append(search_div);
   
}


async function main()
{
    let data = await Searchmovies();
    
    if(data === undefined)
    {
        return false;
    }
    
    appendMovies(data);
}


function debounce(func, delay)
{  
    movies_div.style.display = "block";
//    movies_div.innerHTML = null;
    let movies = document.getElementById("show-details");
    movies.style.display = "none";

    if(id)
    {
        clearTimeout(id);
    }

    id = setTimeout(function () {
        func();
    }, delay);
}

// document.body.addEventListener('click',function(){
      
//     let movies = document.getElementById("show-details");
    
// });


// <=============================Slide Show JS code Start============================================>

function slide_fun(a,b,c,d,e)
{
    this.url1 =a;
    this.url2 =b;
    this.url3 =c;
    this.url4 =d;
    this.url5 =e;
}

let slide_img =[];

p1 = new slide_fun("https://assets-in.bmscdn.com/promotions/cms/creatives/1649438999100_kgf5thurs.jpg","https://img.ticketnew.com/tn/offer_banner/fantastic/1920_400.jpg","https://img.ticketnew.com/tn/offer_banner/ghani/1920_400.jpg","https://img.ticketnew.com/tn/offer_banner/rrr/1920_400_4.jpg","https://img.ticketnew.com/tn/offer_banner/beast/1920_400_2.jpg");

slide_img.push(p1);
// console.log(slide_img) \\ code is working fine;

let image_div = document.getElementById("slideshow");

 let img1 = document.createElement("img")

 img1.setAttribute("id","backimg");

 img1.src = slide_img[0].url1;

image_div.append(img1)

slide_img.map(function(elem){

    // console.log(elem.url1) getting input fine

    let i = 0;

    let img_arr =[];

    let time = 2000;

    //Image List

    img_arr[0] = elem.url1;
    img_arr[1] = elem.url2;
    img_arr[2] = elem.url3;
    img_arr[3] = elem.url4;
    img_arr[4] = elem.url5;

    // console.log(img_arr[3]);    //getting all images url fine
    
    let img = document.createElement("img")

    img.setAttribute("id","imageslide")

    setInterval(function () {
        
        if( i == img_arr.length-1)
        {
            i = 0;
        }

        img.src = img_arr[i];
        image_div.innerHTML = null;
        image_div.append(img)

        i++;
    },time)
})


// <====================================SlideShow Js work End Here==============================>


// <===================================Popular Div JS WORK Start================================>


let famous_div = document.getElementById("popular_div");

async function show_populor(){

    try {

        let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=88aeba6d567de71444e7bbe8fe7c84f4&language=en-US&page=1`);

        let data = await response.json();
        let result = data.results;

        show_movie(result)

    }
     catch(err){
         console.log(err)
     }
}

show_populor();

function show_movie(result){


    for(let i=0; i<20; i++)
    {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w500${result[i].poster_path}`;

        img.addEventListener("click",function(){
            movieq_details(result);
        });

        let title = document.createElement("p");
        title.textContent = result[i].title;

        let released = document.createElement("p")
        released.textContent = "RELEASE DATE : "+result[i].release_date

        let imdb = document.createElement("p");
        imdb.textContent = "Rating : "+result[i].vote_average;

        div.append(img,title,released,imdb);
        famous_div.append(div);

    
    }
}


let logindata=JSON.parse(localStorage.getItem("Add_User_Data"));
console.log(logindata)
// console.log(logindata[0].Name);

document.getElementById("loginName").innerHTML = logindata[0].Name;

// function movieq_details(result){

//     console.log(result.title);
//     let movies = document.getElementById("show-details");
//     movies.style.display = "block";
//     let moviesr = document.getElementById("movies");
//     moviesr.innerHTML = null;

//     movies.innerHTML = null;

//     let search_div = document.createElement("div")
//         search_div.setAttribute("id","search_div");

//     let poster_div = document.createElement("div");
//     poster_div.setAttribute("id","poster_search")

//     let poster = document.createElement("img");
//     poster.setAttribute("class","poster_img");
//     poster.src = `https://image.tmdb.org/t/p/w500${result.poster_path}`;;

//     poster_div.append(poster);

//     let movie_details_div = document.createElement("div");
//         movie_details_div.setAttribute("id","info");
//     let movie_name = document.createElement("h2")
//     movie_name.innerText = result.title;

//     let year = document.createElement("h3");
//     year.innerText = result.release_date;

//     movie_details_div.append(movie_name,year);

//     search_div.append(poster_div,movie_details_div)

//     movies.append(search_div);
    
//


// 





