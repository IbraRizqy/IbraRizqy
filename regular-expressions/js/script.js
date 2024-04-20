email.addEventListener('input', function(){
    let regex = /^.+@[\w!#$%&'*+-/=?^`{|}~\.]+\.[a-z]{2,4}$/;
    const email = document.getElementById('email');
    const emailValid = document.getElementById('emailValid');
    let value = email.value;
    if(regex.test(value)){
        emailValid.classList.add('hidden')
        email.classList.add('border-green-500');
        email.classList.remove('border-red-500');
    }
    else{
        emailValid.classList.remove('hidden');
        email.classList.add('border-red-500');
        email.classList.remove('border-green-500');
    }
});

username.addEventListener('input', function(){
    let regex = /^[a-zA-Z0-9-]+$/;
    const username = document.getElementById('username');
    const usernameValid = document.getElementById('usernameValid');
    let value = username.value;
    if(regex.test(value)){
        usernameValid.classList.add('hidden');
        username.classList.add('border-green-500');
        username.classList.remove('border-red-500');
    }
    else{
        usernameValid.classList.remove('hidden');
        username.classList.add('border-red-500');
        username.classList.remove('border-green-500');
    }
});

number.addEventListener('input', function(){
    let regex = /^\+62[0-9]{9,13}$/;
    const number = document.getElementById('number');
    const numberValid = document.getElementById('numberValid');
    let value = number.value;
    if(regex.test(value)){
        numberValid.classList.add('hidden');
        number.classList.add('border-green-500');
        number.classList.remove('border-red-500');
    }
    else{
        numberValid.classList.remove('hidden');
        number.classList.add('border-red-500');
        number.classList.remove('border-green-500');
    }
});

link.addEventListener('input', function(){
    let regex = /^https:\/\/([a-zA-Z0-9-]+)\.github\.io\/\1\/$/;
    const link = document.getElementById('link');
    const linkValid = document.getElementById('linkValid');
    let value = link.value;
    if(regex.test(value)){
        linkValid.classList.add('hidden');
        link.classList.add('border-green-500');
        link.classList.remove('border-red-500');
    }
    else{
        linkValid.classList.remove('hidden');
        link.classList.add('border-red-500');
        link.classList.remove('border-green-500');
    }
});

plat.addEventListener('input', function(){
    let regex = /^[A-Z]{1,2}\s[0-9]{1,4}\s[A-Z]{1,3}$/;
    const plat = document.getElementById('plat');
    const platValid = document.getElementById('platValid');
    let value = plat.value;
    if(regex.test(value)){
        platValid.classList.add('hidden');
        plat.classList.add('border-green-500');
        plat.classList.remove('border-red-500');
    }
    else{
        platValid.classList.remove('hidden');
        plat.classList.add('border-red-500');
        plat.classList.remove('border-green-500');
    }
});

