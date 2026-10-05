async function fetchP(){
    try{
        const res=await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);
        if (!res.ok){
            throw new Error(`HTTP error: ${res.status}`);
        }
        const data=res.json();
        console.log(data[0].name);
    }
    catch(error){
        console.log(`Could not get products: ${error}`);
    }
}

fetchP();