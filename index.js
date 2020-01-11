let form =document.getElementById('form1')
let itemList=document.getElementById('list1')
let storeObject=[]
let counter=0



 form.addEventListener('submit',addItem);
 itemList.addEventListener("click", deleteItem)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addItem(e){
     //update array
    e.preventDefault()
    if(document.getElementById('text1').value){
    let jsonobj={'name':document.getElementById('text1').value,'status':false}

    storeObject.push(jsonobj)
     refreshDom(e)
    document.getElementById('text1').value="";}
    else {refreshDom(e)}
    //localStorage.setItem('array',storeObject)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function deleteItem(e){
     //update array
    let position1=e.target.parentNode.attributes.position.value

    if(e.target.classList.contains('buttonelement')&&(storeObject[position1].status==true))
    {
        for(let i=0;i<storeObject.length;i++) {
            if(i==position1){
                console.log(position1)
                storeObject.splice(i,1);
                break;
            }
        }
        refreshDom(e)
    }
    else if(e.target.classList.contains('checkbox') && (e.target.checked==true)){
        storeObject[position1].status=true;
        refreshDom(e)

        // e.target.nextElementSibling.style.textDecoration='line-through';
    }
    else if((e.target.checked==false)&& (e.target.classList.contains('checkbox'))){
        // e.target.nextElementSibling.style.textDecoration='none'
        storeObject[position1].status=false;
        refreshDom(e)
    }
    //localStorage.setItem('array',storeObject)


}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function refreshDom(e){
     counter=0
     while(itemList.hasChildNodes()){
          itemList.removeChild(itemList.firstChild);
      }
      //storeObject=localStorage.getItem('array').slice(0)
     // localStorage.clear();
     for(let i=0;i<storeObject.length;i++){
            let itemName=storeObject[i].name
            let itemStatus=storeObject[i].status


            let div1=document.createElement('div');
            let li=document.createElement('li');


            li.className='list1element';
            div1.className='listelement';
            div1.setAttribute('position', counter)
            counter++
            var checkbox = document.createElement('input');
            checkbox.type="checkbox";
            checkbox.className='checkbox';
            checkbox.checked=itemStatus;

            li.appendChild(document.createTextNode(itemName+" "))
            if(itemStatus){
                li.style.textDecoration='line-through'
            }
            else{
                li.style.textDecoration='none';
            }
            let deleteBtn = document.createElement('button');
            deleteBtn.className = 'buttonelement';
            deleteBtn.appendChild(document.createTextNode('X'));

            // Append button to li
            div1.appendChild(checkbox)
            div1.appendChild(li)
            div1.appendChild(deleteBtn)
           // localStorage.setItem("firsttry",JSON.stringify(""+div1))
            itemList.appendChild(div1)



     }
}

//localStorage.setItem('firstTry',JSON.stringify(jsonobj))
//let item=localStorage.getItem('firstTry')
//item=JSON.parse(item)
//let itemName=item.name
//let itemStatus=item.status
