

document.addEventListener("DOMContentLoaded", function() {

    $('.imgBox .passwordDiv .submitBtn').click(function(){
        const password = $('.imgBox .passwordDiv .ipt').val();
        if (password === "943706") {
            $('.passwordDiv').hide();
            $('.imgBox .img').show();
        } else {
            alert("비밀번호가 틀렸습니다. 다시 시도해주세요.");
        }
    })
  
});

