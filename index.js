 let input_value=document.querySelector("input")
 function api_api(value)
{     
  let api=`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
    return new Promise((resolve,reject)=>{
        fetch(`${api}`).then((val)=>val.json()).then((val)=>resolve(val)).catch((val)=>reject(val))
    })
}

document.querySelector("a").addEventListener("click",()=>{ 

    event.preventDefault();
    
    api_api(input_value.value)
    .then((val)=>{
       document.querySelector(".section").innerHTML=""
       document.querySelector(".section_two").innerHTML=""
        val.forEach((element,index) => { 
            let ul=document.createElement("ul")
            let li=document.createElement("li")
           for(let val in element[`meanings`])
            {
               var values=element[`meanings`][val]['synonyms']
               var new_values=element[`meanings`][val]['definitions'];
              
            } 
            finder(values)
            def(new_values)
        });
       
    }).catch((cal)=>new Error(cal)) 
    
}) 
function finder(val)
{   
    if(val.length!=0 && val!=isNaN(val))
    {
    let ul=document.createElement("ul")
    let section=document.querySelector(".section") 
    let h1=document.createElement("h5");
    section.style.display="block"
    h1.innerHTML="meanings"
   for(let i=0;i<val.length;i++)
   {
     let li=document.createElement("li")
     li.innerHTML=val[i]
     ul.appendChild(li) 

   } 
   section.append(h1)
   section.append(ul) 
}
   
} 
function def(val)
{  
    let h1=document.createElement("h1")
    let ul=document.createElement("ul") 
    let section_two=document.querySelector(".section_two")
    val.forEach(element=>{
        let new_val=element['definition'] 
        let new_vari=document.createElement("li")
        new_vari.innerHTML=new_val
        ul.appendChild(new_vari)


    })  
   h1.innerHTML="defanition";
   section_two.append(h1) 
 
 
    section_two.append(ul)
}