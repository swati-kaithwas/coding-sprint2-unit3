async function getData(url)
{
    let res=await fetch(url)
    let data=await res.json()

    return data
    function append(data,cont,count2){
        let{strMeal,strMealThumb,}

        let div =document.createElement("div");
        let img=document.createElement("img");
        img.src=strMealThumb;
        let p=document.createElement("h2");
        p.innerText=strMeal;
        div.append(p);
        cont.append(div.img)
        // count2.append()

    }
}
export { getData ,append }