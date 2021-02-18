const id=document.querySelector('.id');

fetch('https://api.ipify.org/?format=json')
.then(response=> response.json())
.then(data => document.querySelector('.id').value=data.ip);