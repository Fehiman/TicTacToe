var td = document.querySelectorAll('td')

const x = '<i class="fas fa-times fa-3x"></i>'

const o = '<i class="far fa-circle fa-3x"></i>'

var playable = '123456789';

var userHamle = [];

var computerHamle = [];

var playerWin;

var winStr = "123,456,789,159,147,258,369,357";

var winStr2 = "123,456,789,159,147,258,369,357";

var computerWin = winStr2.split(',')

var lengths2 = computerWin.map(function (item) {
    /*Permutasyonların uzunluğunu bul.*/
    return item.length
})

td.forEach(function (item) {
    item.addEventListener('click', function (e) {

        user = e.target;
        var userId = Number(user.getAttribute('id')); /*Tıkladığın hücrenin idsini al.  */

        if (playable.includes(userId)) {
            /*Tıklanan hücre oynanabilir mi?*/
            var j = 0;
            var k = 0;
            playable = playable.replace(userId, '')
            user.innerHTML = x; /*Kullanıcı hamlesini yaptı*/
            userHamle.push(userId); /*Kullanıcın hamlelerini kaydet.*/



            while (j > -1) {
                /*Kazanılan permutasyonlardan oynananları bul ve çıkar. */
                j = winStr.search(userId)
                winStr = winStr.substring(0, j) + winStr.substring(j + 1, winStr.length)
            }

            playerWin = winStr.split(',')

            var lengths = playerWin.map(function (item) {
                /*Permutasyonların uzunluğunu bul.*/
                return item.length
            })

            if (playable.length > 0) {
                /*Oynanabilecek hücre kaldı mı?*/

                var i = playable.charAt(Math.floor(Math.random() * playable.length)); /*Bilgisayar random oyna.*/
                console.log(i)

                for (var z = 0; z < playerWin.length; z++) {
                    if (lengths[z] == 1 && playable.includes(playerWin[z])) {
                        /*Oyuncunun kazanmasını sağlayan hücreyi bul ve hücre hale oynanabilir mi? */
                        i = playerWin[z];
                        console.log('a')
                    }
                }

                for (var z = 0; z < computerWin.length; z++) {
                    if (lengths2[z] == 1 && playable.includes(computerWin[z])) {
                        i = computerWin[z];
                        console.log('b')
                    }
                }

                while (k > -1) {
                    k = winStr2.search(i)
                    winStr2 = winStr2.substring(0, k) + winStr2.substring(k + 1, winStr2.length)
                }

                computerWin = winStr2.split(',')
                
                lengths2 = computerWin.map(function (item) {
                    /*Permutasyonların uzunluğunu bul.*/
                    return item.length
                })

                computer = document.getElementById(i)
                computer.innerHTML = o; /*Bilgisayara hamlesini yaptır. */
                computerHamle.push(i);
                playable = playable.replace(i, '')
            }
        } else {
            alert('Yanlış Hamle') /* Dolu hücreyse uyar. */
        }

        var userMove = userHamle.sort().join('');
        var computerMove = computerHamle.sort().join('');

        if (/123/.test(userMove) || /*Oyuncu kazandı mı?*/
            /456/.test(userMove) ||
            /789/.test(userMove) ||
            /1/.test(userHamle) &&
            /5/.test(userHamle) &&
            /9/.test(userHamle) ||
            /1/.test(userHamle) &&
            /4/.test(userHamle) &&
            /7/.test(userHamle) ||
            /2/.test(userHamle) &&
            /5/.test(userHamle) &&
            /8/.test(userHamle) ||
            /3/.test(userHamle) &&
            /6/.test(userHamle) &&
            /9/.test(userHamle) ||
            /3/.test(userHamle) &&
            /5/.test(userHamle) &&
            /7/.test(userHamle)) {
            alert('Kazandın!')
            document.location.reload();

        } else if (/123/.test(computerMove) || /* Bilgisayar kazandı mı? */
            /456/.test(computerMove) ||
            /789/.test(computerMove) ||
            /1/.test(computerHamle) &&
            /5/.test(computerHamle) &&
            /9/.test(computerHamle) ||
            /1/.test(computerHamle) &&
            /4/.test(computerHamle) &&
            /7/.test(computerHamle) ||
            /2/.test(computerHamle) &&
            /5/.test(computerHamle) &&
            /8/.test(computerHamle) ||
            /3/.test(computerHamle) &&
            /6/.test(computerHamle) &&
            /9/.test(computerHamle) ||
            /3/.test(computerHamle) &&
            /5/.test(computerHamle) &&
            /7/.test(computerHamle)) {
            alert('Kaybettin!')
            document.location.reload();
        } else if (playable.length == 0) {
            alert('Berabere..')
            document.location.reload();
        }
    })
});
