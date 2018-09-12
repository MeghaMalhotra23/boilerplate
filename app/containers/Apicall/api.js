export const fetchData= async ()=>{
try{
    const response=await fetch('https://raw.githubusercontent.com/brainmentorspvtltd/shop/master/users.json');
const data=await response.json();
console.log(data);
return data;
}
catch(e){
    console.log(e);
}
}