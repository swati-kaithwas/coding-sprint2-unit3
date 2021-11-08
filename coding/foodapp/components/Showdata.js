async function getData(url)
{
    let res=await fetch(url)
    let data=await res.json()

    return data
}
    function append(data,cont,count2){
        let{strMeal,strMealThumb, strArea,strCategory}=data.meals[0];
console.log(data.meals[0]);
        let div =document.createElement("div");
        let img=document.createElement("img");
        img.src=strMealThumb;
        let p=document.createElement("h2");
        let p1=document.createElement("h3");
        let p2=document.createElement("h4");
        p.innerText=strMeal;
        p1.innerText=strArea;
        p.innerText=strCategory;
        div.append(p,p1,p2);
         cont.append(div,img)
      

    }

export { getData ,append }