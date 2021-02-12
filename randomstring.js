function randomStr(length,arr)
{
    let ans='';
    for(let i=length;i>0;i--)
    {
        ans+=arr[Math.floor(Math.random()*arr.length)];
    }
    return ans;
}

function getSelectedCheckBoxes(name){
    const checkboxes=document.querySelectorAll(`input[name="${name}"]:checked`);
    let str='';

    checkboxes.forEach((checkbox) => {
        str=str+''+checkbox.value;
    });
    return str;
}
const inputStrings=document.querySelector('.count');
const inputLength=document.querySelector('.length');
const numbers=document.querySelector('.numbers');
const lowercase=document.querySelector('.smallAlphabets');
const uppercase=document.querySelector('.capitalAlphabets');
const button=document.querySelector('.generate');
const output=document.querySelector('.text-area-output');
const copy=document.querySelector('.copy');
let str='';


button.addEventListener('click',() =>{

    let str=getSelectedCheckBoxes('option');

    if(str=='')alert('check atleast one checkbox');
    else
    output.value=randomStr(inputLength.value,str);
});

copy.addEventListener('click',()=>{
    const cop=document.querySelector('.text-area-output');
    console.log("clicked",cop);
    cop.focus();
    cop.select();
    document.execCommand('copy');
    try{
        const successful=document.execCommand('copy');
        const msg=successful?'successful':'unseccessful';
        console.log(`msg`);
    }
    catch(err) {
        console.log('oops');
    }
});

