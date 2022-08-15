console.log("Hello World!")
document.getElementById("root").innerHTML = 'Merhaba';

/*let i = 1;
/*while (i<10){

    const element = document.createElement("div");//const=Sabit(değiştirilemez)
    element.innerHTML = i;
    document.getElementById("root").append(element);

    console.log(i);
    i = i +1;
}*/
/*const arr =["Ahmet","Mehmet","Can","Ela","Sude"]*/
const arr =[
    {
        id:1,
        name:"Sude Akgün",
        age:19,
    },
    {
        id:2,
        name:"Ahmet Güneş",
        age:25,
    },
    {
        id:3,
        name:"Ömer Dağ",
        age:22,
    }
]
for(let person of arr){
    const element = document.createElement("div");
    element.innerHTML=`${person.id} ${person.name} ${person.age}`;
    document.getElementById("root").append(element);
}