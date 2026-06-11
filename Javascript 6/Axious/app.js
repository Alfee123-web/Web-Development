// let btn = document.querySelector("button");

// btn.addEventListener("click", async() => {
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;

// });



// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         // console.log(res);
//         return res.data.fact;
        
//     } catch (e) {
//         console.log(e);
//         return "NO FACT FOUND";
//     }
// }

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try{
//         const config = {headers:{Accept : "application/json"}}

//         let res =  await axios.get(url, config);
//         console.log(res.data);
//     }catch(err){
//         console.log(err);
//     }
// }

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getColleges(country);
    console.log(colleges);
});
function show(colleges){
    let list = document.querySelector("#list");
    list.innerText ="";
    for(col of colleges){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try{
        let res = await axios.get(url + country);
        return res.data;
    }catch(e){
        console.log("error : ", e);
        return [];
    }
}

