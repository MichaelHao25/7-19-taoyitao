$('.login').on('click', function (e) {
    e.preventDefault();
    console.log(1);
    var user_name = $('.user-name').val();
    var password = $('.password').val();
    console.log(user_name, password);
    if (user_name == '' || password == '') {
        alert('用户名或者密码不为空')
        return;
    }
    $.ajax({
        url: '/Home/Login/login',
        method: 'post',
        data: "account=" + user_name + "&password=" + password,
        dataType: 'json',
        // timeout:3000,
        success: function(data){
            console.log('success'+data);
        },
        complete:function(jqxhr,status) {
            console.log('complete'+jqxhr,status);
        },
        error:function(jqXHR,textStatus,errorThrown) {
            console.log('error'+jqXHR,textStatus,errorThrown);
            
        }
    })

})