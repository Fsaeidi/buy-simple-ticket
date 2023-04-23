let country=document.querySelector('.country');
  let citySelect=document.querySelector('.citySelect');
 let save=document.querySelector('.btn')

let cities={
Iran:['tehran','ardebil'],
Turkey:['istunbol','izmir'],
Germany:['frankfort','berlin']

};

country.addEventListener('change', ()=>{
    

if(country.value==='select country'){
  citySelect.innerHTML=''; 
  citySelect.innerHTML+="<option>Select</option>"

}else{
    let valueCountry=country.value;
    let valueCities=cities[valueCountry];
    citySelect.innerHTML='';   
     valueCities.forEach(function(city)  {
       citySelect.innerHTML+='<option>'+ city+'</option>' ;
       
    });
}

   
});



const click= save.addEventListener('click',function(e){
alert("done:)")

})