const fetchPromise = fetch("https://www.google.com/");

console.log(fetchPromise);

fetchPromise.then((response)=>{
        if (!response.ok){
            throw new Error(response.status);
        }
        return response.json;
    })
    .then((data)=>{
        console.log(data);
    });

console.log("started request");