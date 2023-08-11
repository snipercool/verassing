$(document).ready(function () {
    var dates = "";
    $.getJSON('./data.json', function (data) {
        dates = data;
        $.each(dates, function (key, obj) {
            console.log(key, obj)
            $('<div />', {
                id: key,
                text: obj
            }).appendTo('body')
        });
    })

    $('.card').on('click', function () {
        var letter = $(this).data('letter');
        $('#ideas').data('letter', letter);
        $('#modal').addClass('open');
    })
    $('.close-button').on('click', function () {
        $('#modal').removeClass('open');
    })
});