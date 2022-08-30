function pinGenerator() {
    let pinNumber = Math.round(Math.random()*10000);
    let pinNumberString = pinNumber + '';

    if(pinNumberString.length === 4){
        return pinNumber;
    }else{
        return pinGenerator();
    }
}

document.getElementById('pin-btn').addEventListener('click',function(){
    let input_pin = document.getElementById('input-pin');
     input_pin.value = pinGenerator();

})

document.getElementById('body_number_pad').addEventListener('click',function(a){
    // console.log(a.target.value);
    const number = a.target.innerText;

    const input_flied_tag = document.getElementById('form-control-id');
    const input_flied_String_previous = input_flied_tag.value;
    let   input_flied_String_new  = number;
    let   total_New_String = input_flied_String_previous + input_flied_String_new;

    if(isNaN(number)){
        // console.log(number);
        if(number == 'C'){
            input_flied_tag.value = '';

        }else if(number == '<'){
            let a = input_flied_String_previous.split('');
            a.pop();
            a.join('');
            input_flied_tag.value = a;
        }
    }else{

        input_flied_tag.value = total_New_String;
    }   
})

function getValue_From_Element(id){
    const Tag = document.getElementById(id);
    let String = Tag.value;
    let Value = parseInt(String);

    return Value;
}

document.getElementById('submit-id').addEventListener('click',function(){
    let generatePin = getValue_From_Element('input-pin');
    let inputFlied = getValue_From_Element('form-control-id');

    let passNotification = document.getElementById('pass');
    let failNotificat = document.getElementById('fail');

    if(generatePin === inputFlied){
        passNotification.style.display = 'block';
        failNotificat.style.display = 'none';
    }else{
        passNotification.style.display = 'none';
        failNotificat.style.display = 'block';
    }

})