$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    var messageCount = $(".message").length;
    var currentMessageIndex = 0;

    envelope.click(function(event) {
        if (!$(event.target).is("a")) { // Se o alvo do clique não for um link
            open();
        }
    });

    btn_open.click(function() {
        open();
    });

    btn_reset.click(function() {
        close();
    });

    function open() {
        $(".message").removeClass("active");
        $("#message" + (currentMessageIndex + 1)).addClass("active");
        envelope.addClass("open").removeClass("close");
        currentMessageIndex = (currentMessageIndex + 1) % messageCount;
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        $(".message").removeClass("active");
    }

    // Previne a propagação do clique no link para que ele funcione corretamente
    $(".message a").click(function(event) {
        event.stopPropagation();
    });
});