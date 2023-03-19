function verifyPasswords(){
    let inputs = document.querySelectorAll('[type=password]');
    if(inputs[0].value==inputs[1].value){
        return true;
    } else {
        let div = document.createElement('div');
        div.textContent = "* Password do not match."
        div.setAttribute('style', 'color: red;')
        inputs.forEach(input =>{
            input.style.outline="1px solid #fd2929";
            input.style.boxShadow="1px solid #fd2929";
        })
        inputs[0].after(div);
        return false;
    }
}