$(document).ready(function(){
    $('form').on('submit',function(event){
        event.preventDefault();
        message = $('#messageInput').val()

        // ajax
        $.ajax({
            data:{
                message:message
                
            },
            type:'POST',
            url:'/predict',
            success: function(data){
                console.log(data["answer"])
                $('.convo').append(`
                <div class="text-white" style="background-color:green;">
                    You: ${message}
                </div>
                
                `)
                $('.convo').append(`
                <div class="text-white" style="background-color:blue;">
                    Bot : ${data["answer"]}
                </div>
                
                `)
                
            }
        })
    })
})