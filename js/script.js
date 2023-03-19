let btnradio1 = document.getElementById('btn-radio1');
let btnradio2 = document.getElementById('btn-radio2');
let btnradio3 = document.getElementById('btn-radio3');
let btnradio4 = document.getElementById('btn-radio4');
let btnradio5 = document.getElementById('btn-radio5');
let Valider = document.getElementById('Valider');
let Effacer = document.getElementById('Effacer');
let Reinit = document.getElementById('Reinit');
let resultats = document.getElementById('resultats');
let btnH = document.getElementById('btn-radioH');
let btnF = document.getElementById('btn-radioF');
let temp;
let nbHommesFin = 0;
let nbFemmesFin = 0;
let clic = 1;
let varAge1 = 0;
let varAge2 = 0;
let varAge3 = 0;
let varAge4 = 0;
let varAge5 = 0;


Reinit.addEventListener('click', reset);
Effacer.addEventListener('click', effacer);

let nbHommes = document.getElementById('nbHommes');

btnradio1.addEventListener('click', function(){
    btnradio2.setAttribute('disabled', 'true');
    btnradio3.setAttribute('disabled', 'true');
    btnradio4.setAttribute('disabled', 'true');
    btnradio5.setAttribute('disabled', 'true');
    clic++;
    age = 1;
});
btnradio2.addEventListener('click', function(){
    btnradio1.setAttribute('disabled', 'true');
    btnradio3.setAttribute('disabled', 'true');
    btnradio4.setAttribute('disabled', 'true');
    btnradio5.setAttribute('disabled', 'true');
    clic++;
    age = 2;
});
btnradio3.addEventListener('click', function(){
    btnradio1.setAttribute('disabled', 'true');
    btnradio2.setAttribute('disabled', 'true');
    btnradio4.setAttribute('disabled', 'true');
    btnradio5.setAttribute('disabled', 'true');
    clic++;
    age = 3;
});
btnradio4.addEventListener('click', function(){
    btnradio1.setAttribute('disabled', 'true');
    btnradio2.setAttribute('disabled', 'true');
    btnradio3.setAttribute('disabled', 'true');
    btnradio5.setAttribute('disabled', 'true');
    clic++;
    age = 4;
});
btnradio5.addEventListener('click', function(){
    btnradio1.setAttribute('disabled', 'true');
    btnradio2.setAttribute('disabled', 'true');
    btnradio3.setAttribute('disabled', 'true');
    btnradio4.setAttribute('disabled', 'true');
    clic++;
    age = 5;
});


btnH.addEventListener('click', function(){
    btnF.setAttribute('disabled', 'true');
    temp = localStorage.getItem('nbHommes');
    if(temp === undefined){
        temp = 0;
    }
    temp++;
    localStorage.setItem('nbHommes', temp);
});

btnF.addEventListener('click', function(){
    btnH.setAttribute('disabled', 'true');
    temp = localStorage.getItem('nbFemmes');

    if(temp === undefined){
        temp = 0;
    }
    temp++;
    localStorage.setItem('nbFemmes', temp);

})

let radios = document.getElementsByName('btn-radio');

for(let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', function(event) {
        console.log(radios[i].value);
    });
}

Valider.addEventListener('click', function(){
    active();
    setStat();
    resultats.style.visibility = 'visible';
});

function setStat()
{
    let radios = document.getElementsByClassName('bouton');
    
    nbHommes.innerHTML = localStorage.getItem('nbHommes');
    nbFemmes.innerHTML = localStorage.getItem('nbFemmes');

    switch(age)
    {
        case 1 :
            {
                varAge1++;
                localStorage.setItem('age1', varAge1);
                document.getElementById('age1').innerHTML = localStorage.getItem('age1');
                break;
            }
        case 2 : 
            {
                varAge2++;
                localStorage.setItem('age2', varAge2);
                document.getElementById('age2').innerHTML = localStorage.getItem('age2');
                break;
            }
        case 3 : 
            {
                varAge3++;
                localStorage.setItem('age3', varAge3);
                document.getElementById('age3').innerHTML = localStorage.getItem('age3');
                break;
            }
        case 4 : 
            {
                varAge4++;
                localStorage.setItem('age4', varAge4);
                document.getElementById('age4').innerHTML = localStorage.getItem('age4');
                break;
            }
        case 5 : 
            {
                varAge5++;
                localStorage.setItem('age5', varAge5);
                document.getElementById('age5').innerHTML = localStorage.getItem('age5');
                break;
            }
        case -1 : 
            {
                localStorage.setItem('age1', 0);
                localStorage.setItem('age2', 0);
                localStorage.setItem('age3', 0);
                localStorage.setItem('age4', 0);
                localStorage.setItem('age5', 0);
                document.getElementById('age1').innerHTML = localStorage.getItem('age1');
                document.getElementById('age2').innerHTML = localStorage.getItem('age2');
                document.getElementById('age3').innerHTML = localStorage.getItem('age3');
                document.getElementById('age4').innerHTML = localStorage.getItem('age4');
                document.getElementById('age5').innerHTML = localStorage.getItem('age5');
                break;
            }
        case -2 : 
        {
            document.getElementById('age1').innerHTML = localStorage.getItem('age1');
            document.getElementById('age2').innerHTML = localStorage.getItem('age2');
            document.getElementById('age3').innerHTML = localStorage.getItem('age3');
            document.getElementById('age4').innerHTML = localStorage.getItem('age4');
            document.getElementById('age5').innerHTML = localStorage.getItem('age5');
        }
    }
}

function active(){
    var radios2 = document.getElementsByName("btn-radio");
    for(var i=0;i<radios2.length;i++){
        radios2[i].removeAttribute('disabled');
        radios2[i].checked = false;
    }
    
    var radios3 = document.getElementsByName("btn-radio2");
    for(var i=0;i<radios3.length;i++){
        radios3[i].removeAttribute('disabled');
        radios3[i].checked = false;
    }
}

function effacer(){
    var radios2 = document.getElementsByName("btn-radio");
    for(var i=0;i<radios2.length;i++){
        if(radios2[i].checked === true){
            switch(i){
                case 0: 
                {
                    temp = localStorage.getItem('age1');
                    temp--;
                    localStorage.setItem('age1', temp);
                    break;
                }
                case 1:
                {
                    temp = localStorage.getItem('age2');
                    temp--;
                    localStorage.setItem('age2', temp);
                    break;
                }
                case 2 : 
                {
                    temp = localStorage.getItem('age3');
                    temp--;
                    localStorage.setItem('age3', temp);
                    break;
                }
                case 3 : 
                {
                    temp = localStorage.getItem('age4');
                    temp--;
                    localStorage.setItem('age4', temp);
                    break;
                }
                case 4 : 
                {
                    temp = localStorage.getItem('age5');
                    temp--;
                    localStorage.setItem('age5', temp);
                    break;
                }
            }
        }
        age = -2;
    }
    var radios3 = document.getElementsByName("btn-radio2");
    for(var i=0;i<radios3.length;i++){
        if(radios3[i].checked === true){
            if(i === 0){
                alert('Attention, vous retirez une femme');
                temp = localStorage.getItem('nbFemmes');
                temp--;
                localStorage.setItem('nbFemmes', temp);
            }
            if(i === 1){
                alert('Attention, vous retirez une homme');
                temp = localStorage.getItem('nbHommes');
                temp--;
                localStorage.setItem('nbHommes', temp);
            }
        }
    }

    active();
}

function reset(){
    localStorage.setItem('nbFemmes', 0);
    localStorage.setItem('nbHommes', 0);
    localStorage.setItem('age1', 0);
    localStorage.setItem('age2', 0);
    localStorage.setItem('age3', 0);
    localStorage.setItem('age4', 0);
    localStorage.setItem('age5', 0);
    age = -1;
    effacer();
    active();
    setStat();
}



