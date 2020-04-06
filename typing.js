$(document).ready(function(){
    let text = $('#text').text(); //Text to be typed
    let index = 0;
    console.log(text);
    $('#inputText').keypress(function(){
        if(String.fromCharCode(event.which) === text[index]){
            $('#errorText').empty();
            index++;
        }
        else{
            $('#errorText').html("<span style='color:tomato'>You mistyped</span>");
        }
        if(index == text.length){
            $('#errorText').html("<span style='color:blue'>Completed</span>");
            $(this).offkeypress();
        }
    });
});