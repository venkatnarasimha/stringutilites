function countWords(s){
    s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    //return s.split(' ').filter(function(str){return str!="";}).length;
    return s.split(' ').filter(String).length; //- this can also be used
}

const inputs=document.querySelector('.text-area-input');
const out1=document.querySelector('.output-1');
const out2=document.querySelector('.output-2');
const out3=document.querySelector('.output-3');
const out4=document.querySelector('.output-4');

inputs.addEventListener('input',()=>{
    out1.value=inputs.value.length;
});

inputs.addEventListener('input',()=>{
    out2.value=countWords(inputs.value);
});

inputs.addEventListener('input',()=>{
    let text = text + " ";
    const count = text.split(". ").length - 1;
    out3.value=count;
});