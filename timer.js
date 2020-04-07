$(document).ready(function(){
    let time = 62; //this should always be in seconds
    let timer = $('#timer');
    let setTime = setInterval(decTime,1000);
    function decTime(){
        if(--time===0){
            timer.text(`  Time over !!!`);
            $('#end').click();
        }
        else timer.text(`  ${Math.floor(time/60)}m : ${Math.floor(time%60)}s`);
    }

    //End button
    $('#end').click(function(){
        clearInterval(setTime);
    });
});