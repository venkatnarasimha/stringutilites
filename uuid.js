function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

const output=document.querySelector('.text-area-output');

const button=document.querySelector('.but');
const copy=document.querySelector('.copy');

button.addEventListener('click',()=>{
    output.value=create_UUID();
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

