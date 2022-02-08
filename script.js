var td=document.querySelectorAll('td')

const x='<i class="fas fa-times fa-3x"></i>'

const o='<i class="far fa-circle fa-3x"></i>'

var playable='123456789';

var userHamle=[];

var computerHamle=[];

td.forEach(function (item) {
    item.addEventListener('click', function (e) {

        user = e.target;
        userId=Number(user.getAttribute('id'));
       
        if(playable.includes(userId)){

            playable=playable.replace(userId,'')
            
            user.innerHTML=x;
            userHamle.push(userId);

            if(playable.length>0){
            var i=playable.charAt(Math.floor(Math.random()*playable.length));           
            computer=document.getElementById(i)
            
            computer.innerHTML=o;
            computerHamle.push(i);
            playable=playable.replace(i,'')
            }          
        }
        else{
            alert('Yanlış Hamle')
        }
        
        var userMove=userHamle.sort().join('');
        var computerMove=computerHamle.sort().join('');
        console.log(userHamle);
        console.log(userHamle.includes(1));

        if(/123/.test(userMove) || 
           /456/.test(userMove) || 
           /789/.test(userMove) ||
           /1/.test(userHamle)  &&
           /5/.test(userHamle)  &&
           /9/.test(userHamle)  ||
           /1/.test(userHamle)  &&
           /4/.test(userHamle)  &&
           /7/.test(userHamle)  ||
           /2/.test(userHamle)  &&
           /5/.test(userHamle)  &&
           /8/.test(userHamle)  ||
           /3/.test(userHamle)  &&
           /6/.test(userHamle)  &&
           /9/.test(userHamle)  ||
           /3/.test(userHamle)  &&
           /5/.test(userHamle)  &&
           /7/.test(userHamle)  )
        {
            alert('Kazandın!')
        } else if(/123/.test(computerMove) || 
                  /456/.test(computerMove) || 
                  /789/.test(computerMove) ||
                  /1/.test(computerHamle)  &&
                  /5/.test(computerHamle)  &&
                  /9/.test(computerHamle)  ||
                  /1/.test(computerHamle)  &&
                  /4/.test(computerHamle)  &&
                  /7/.test(computerHamle)  ||
                  /2/.test(computerHamle)  &&
                  /5/.test(computerHamle)  &&
                  /8/.test(computerHamle)  ||
                  /3/.test(computerHamle)  &&
                  /6/.test(computerHamle)  &&
                  /9/.test(computerHamle)  ||
                  /3/.test(computerHamle)  &&
                  /5/.test(computerHamle)  &&
                  /7/.test(computerHamle))
                {
                  alert('Kaybettin!')
                } else if(playable.length==0){
                    alert('Berabere..')
                }
    })
});

123
456
789
159
147
258
369
357


