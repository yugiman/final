let namez = $('#display');
let comment = $('#comment');
let addComment = $('.chat-box');

let output = $('.missing');
let missing = '';
$('#submit1').on('click', function(){
    if($(namez).val() === ''){
        missing = 'Display Name';
        $(output).text(`${missing} is missing!`);
    }
    else if($(comment).val() === ''){
        missing = 'Comment';
        $(output).text(`${missing} is missing!`);
    }
    else{
        missing = '';
        $(output).text(`${missing}`);
        $(addComment).prepend(`<div class="chat">
                                <div class="image-div">
                                <img class="image" src="images/profile.png"/>
                                </div>
                                <div class="inpot">
                                <div class="username">
                                    <h6>${namez.val()}</h6>
                                </div>
                                <div class="comment">
                                    <h3>${comment.val()}</h3>
                                </div>
                                </div>
                                <div class="sector-del-edit">
                                <div class="edit btn-color">Edit</div>
                                <div class="delete btn-color">Delete</div> 
                                </div>
                                <div class="toggle-display hide">
                                    <form>
                                        <input type="text" id="t-edit" value="${comment.val()}">
                                    </form>
                                    <div class="submit2 btn-color">
                                        <p>submit</p>
                                    </div>
                                </div>
                            </div>`);
    }
});

$('.chat-box').on('click', '.edit', function(){
    let butt1 = $(this).parents()[0];
    butt1=$(butt1).next();
    $(butt1).toggleClass('toggle-display');

});
$('.chat-box').on('click', '.submit2', function(){
    let upVal = $(this).prev().children()[0];
    let button_submit = $(this).parents()[0];
    let toggleB = $(this).parents()[0];
    button_submit = $(button_submit).prev().prev().children()[1];
    button_submit = $(button_submit).children()[0];
    if ($(upVal).val() === ""){
        alert("edit can't be blank!");
    }
    else{    
        $(button_submit).text(`${$(upVal).val()}`);
        $(toggleB).toggleClass('toggle-display');
    }
});
$('.chat-box').on('click', '.delete', function(){
    let deloroto = $(this).parents()[1];
    $(deloroto).remove();
})