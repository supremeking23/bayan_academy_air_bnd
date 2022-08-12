$(document).ready(function(){
    const myModal = new bootstrap.Modal('#sign_in_sign_up_modal', {
        keyboard: false
    });

    $("body")
        .on("click", "#sign_in_sign_up_modal_trigger", function(){
            myModal.show();
        })
        .on("click", ".tab_menu button", function(){
            let trigger = $(this).attr("data-trigger");

            if(trigger === "sign_in"){
                $("#sign_in_container").removeClass("hidden");
                $("#sign_up_container").addClass("hidden");
            }
            else{
                $("#sign_up_container").removeClass("hidden");
                $("#sign_in_container").addClass("hidden");
            }
        })
        ;

})