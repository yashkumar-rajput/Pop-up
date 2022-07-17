$(document).ready(function()
{
    var t=false;
    $('.clicks').on('click',function(){
        if(t==true)
        {
            t=false;
            $('#box').removeClass('show');
        }
        else if(t==false)
        {
            t=true;
            $('#box').addClass('show');
        }
    })
    $('.su').on('click',function(){
            $('#box').removeClass('show');
    })
    $('#cross').on('click',function(){
        $('#box').removeClass('show');
})
})