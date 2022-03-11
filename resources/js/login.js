require('./bootstrap');
window.jQuery = require('./panel/jquery/jquery.min');
require('./panel/bootstrap/js/bootstrap.bundle.min');
require('./panel/iCheck/icheck.min');


$(function () {
    $('#remember').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass   : 'iradio_square-blue',
        increaseArea : '20%' // optional
    })
})

