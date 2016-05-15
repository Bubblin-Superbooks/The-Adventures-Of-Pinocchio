$(document).ready(function() {
    $('text').text($('input').attr('value'));

    $('input').click(function(event) {
        $('text').text('');
        $(this).val('');
    });

    $('input').keyup(function(event) {
        $('text').text($(this).val());
    });
});
