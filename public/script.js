const adminform= document.querySelector('#adminform')
const bookname= document.querySelector('#bookname');
const order= document.querySelector('#order');
const retuntime= document.querySelector('#retuntime');
const fee= document.querySelector('#fee');

const table= document.querySelector('#table')

adminform.addEventListener('submit',orderbook);

async function orderbook()
{
    const p={
        bookname:bookname.value,
        order:order.value,
        retuntime:retuntime.value,
        fee:fee.value
    }
    try{

        const insertdata= await axios.post('/orderbook',p)
        console.log(insertdata.data)
    }
    catch(e){
        console.log(e)
    }
    
}

window.addEventListener("DOMContentLoaded",()=>{
 
    fetchorderdata()
    fee.value=0;
   const x= new Date();
   const fulltime= x.getHours()+":"+x.getMinutes()
   order.value=fulltime;
   setminute=x.getMinutes()+5;
   duetime= x.getHours()+":"+setminute;
   retuntime.value=duetime;
   
})

async function fetchorderdata()
{
    try{
        const orderdata= await axios.get('/orderdata');
        datafrombook(orderdata.data)

    }
    catch(e){
        console.log(e)
    }
}

async function datafrombook(dataToprint)
{
    try{
    dataToprint.forEach(item =>{
        const tr= document.createElement('TR');
         const td= document.createElement("TD")
         const para= document.createElement("p")
        // para.innerText=
         const tdtext=document.createTextNode("Name-"+item.bookname +"   "+
         "Booktime-"+item.order+"   "+
         "Return-"+item.retuntime+"   "+
         "Fee-"+item.fee)

         td.appendChild(tdtext);
         tr.appendChild(td)
 
         const delbtntd= document.createElement('TD')
         const delbtn= document.createElement('button');
         const delbtntext = document.createTextNode('Return');
         delbtn.appendChild(delbtntext)
         delbtntd.appendChild(delbtn)
         tr.appendChild(delbtntd);
         delbtn.addEventListener('click',()=>{checking(item)})

         table.appendChild(tr); 

       })
 
 }
 catch(e){
     console.log(e)
 }

}

async function checking(){
    const x= new Date();
    
    setminute=x.getMinutes();
    if(x > item.)
}







