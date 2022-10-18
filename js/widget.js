let widget_index_tab = document.getElementById("widget-tab_index")
let widget_open_button = document.getElementById("widget-open_button")

let widget_openTab = false
let widget_warning_message_open = false
let widgetTabs = document.getElementById("widget-tabs")

let widget_warning_message = document.getElementById("widget-warning_message")

function open_button() {
    let orientation = window.matchMedia("(orientation: landscape)").matches

    if (window.innerHeight <= 570 && orientation && !widget_openTab) {
        widget_warning_message.style.display = "flex"
        widget_openTab = true
        widget_warning_message_open = true
        scrollController("hidden")
        return
    }

    if (widget_openTab) {
        widget_open_button.style.display = "flex"
        widgetTabs.style.display = "none"
        widget_openTab = false

        if (window.innerWidth <= 500) {
            scrollController("auto")
        }
    } else {
        widget_open_button.style.display = "none"
        widgetTabs.style.display = "flex"
        widget_openTab = true

        if (window.innerWidth <= 500) {
            scrollController("hidden")
        }
    }
}


function back_button() {
    widget_index_tab.style.display = "block"
    widgetTab_order_apply_button.style.display = "none"
    widgetTab_online_chat_button.style.display = "none"
    widgetTab_online_chat_button.style.display = "none"
    widgetTab_yandex_map_button.style.display = "none"
}


// ------------------------------


var widgetButton_order_apply_button = document.getElementById("tab-order_apply")
var widgetTab_order_apply_button = document.getElementById("widget-tab_oreder_apply")

widgetButton_order_apply_button.addEventListener("click", function () {
    widget_index_tab.style.display = "none"
    widgetTab_order_apply_button.style.display = "block"
})

let widget_tab_oreder_apply_body_form = document.getElementById("widget-tab_oreder_apply-body_form")
let widget_tab_oreder_apply_body_status = document.getElementById("widget-tab_oreder_apply-body_status")


// ------------------------------


let oreder_apply_name = document.getElementById("oreder_apply_name")
let oreder_apply_email = document.getElementById("oreder_apply_email")
let oreder_apply_phone = document.getElementById("oreder_apply_phone")
let oreder_apply_message = document.getElementById("oreder_apply_message")


oreder_apply_name.addEventListener("change", function () {
    if (!this.value) {
        this.parentElement.style.borderColor = "#ff4848";
    } else {
        this.parentElement.style.borderColor = "#39E960";
    }
})

oreder_apply_email.addEventListener("change", function () {
    if (!this.value) {
        this.parentElement.style.borderColor = "#ff4848";
    } else {
        this.parentElement.style.borderColor = "#39E960";
    }
})

oreder_apply_phone.addEventListener("change", function () {
    if (!this.value) {
        this.parentElement.style.borderColor = "#ff4848";
    } else {
        this.parentElement.style.borderColor = "#39E960";
    }
})

oreder_apply_message.addEventListener("change", function () {
    if (!this.value) {
        this.style.borderColor = "#ff4848";
    } else {
        this.style.borderColor = "#39E960";
    }
})


function oreder_apply() {
    if (!oreder_apply_name.value) {
        document.getElementById("oreder_apply_name").parentElement.style.borderColor = "#ff4848";
    } else {
        document.getElementById("oreder_apply_name").parentElement.style.borderColor = "#39E960";
    }

    if(!oreder_apply_email.value) {
        document.getElementById("oreder_apply_email").parentElement.style.borderColor = "#ff4848";
    } else {
        document.getElementById("oreder_apply_email").parentElement.style.borderColor = "#39E960";
    }

    if(!oreder_apply_phone.value) {
        document.getElementById("oreder_apply_phone").parentElement.style.borderColor = "#ff4848";
    } else {
        document.getElementById("oreder_apply_phone").parentElement.style.borderColor = "#39E960";
    }

    if(!oreder_apply_message.value) {
        document.getElementById("oreder_apply_message").style.borderColor = "#ff4848";
    }  else {
        document.getElementById("oreder_apply_message").parentElement.style.borderColor = "#39E960";
    }
    
    if (oreder_apply_name.value && oreder_apply_email.value 
        && oreder_apply_phone.value && oreder_apply_message.value) {
        widget_tab_oreder_apply_body_form.style.display = "none"
        widget_tab_oreder_apply_body_status.style.display = "block"
    }
}


// ------------------------------


var widgetButton_online_chat_button = document.getElementById("tab-online_chat")
var widgetTab_online_chat_button = document.getElementById("widget-tab_online_chat")

widgetButton_online_chat_button.addEventListener("click", function () {
    widget_index_tab.style.display = "none"
    widgetTab_online_chat_button.style.display = "block"
})


// ------------------------------


var widgetButton_yandex_map_button = document.getElementById("tab-yandex_map")
var widgetTab_yandex_map_button = document.getElementById("widget-tab_yandex-map")

widgetButton_yandex_map_button.addEventListener("click", function () {
    widget_index_tab.style.display = "none"
    widgetTab_yandex_map_button.style.display = "block"
})


// ------------------------------


let online_chat_form = document.getElementById("widget-online_chat-form")

online_chat_form.addEventListener("submit", function (e) {
    e.preventDefault();

    let message = this.elements["message"]
    if (message.value) {
        let url = this.action
        let method = this.method
        let sendMessage = message.value

        let request = new XMLHttpRequest()
        request.open(method, url)

        request.setRequestHeader('Content-Type', 'application/json');
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                // выводим в консоль то что ответил сервер
                console.log(request.responseText);
            }
        });

        request.send(sendMessage);

        message.value = ""
        message.style.height = "1.1rem"
    }

})


// ------------------------------


// let widget_warning_close_button = document.getElementById("widget-warning_close-button")
//
// widget_warning_close_button.addEventListener("click", function() {
//     widget_warning_message.style.display = "none"
//     widget_warning_message_open = false
//     scrollController("auto")
// })

setInterval(function(){

    if (!widget_openTab) {
        return
    }

    let orientation = window.matchMedia("(orientation: landscape)").matches

    if (orientation && window.innerHeight <= 570 && widgetTabs.offsetWidth != window.innerWidth) {
        widget_warning_message.style.display = "flex"
        widget_warning_message_open = true

        widgetTabs.style.display = "none"
        widget_open_button.style.display = "flex"
    } else {
        widget_warning_message.style.display = "none"
        widget_warning_message_open = false

        widgetTabs.style.display = "flex"
        widget_open_button.style.display = "none"
    }

    if (window.innerWidth <= 500 || widget_warning_message_open) {
        scrollController("hidden")
    } else {
        scrollController("auto")
    }

}, 1000)

function scrollController(action) {
    if (action == "hidden") {
        document.body.classList.add('scroll_hidden')
    } else {
        document.body.classList.remove('scroll_hidden')
    }
}


// ------------------------------


let widget_tab_online_chat_message_input = document.getElementById("widget-tab_online_chat-message-input")
let widget_tab_online_chat_send_form_action_smile = document.getElementById("widget-tab_online_chat-send-form_action-smile")

widget_tab_online_chat_message_input.addEventListener("input", function () {
    if (this.value && this.scrollHeight >= 34) {
        this.style.height = "auto"
    } else {
        this.style.height = "1.1rem"
    }
})

if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test (navigator.userAgent) ) {
    widget_tab_online_chat_send_form_action_smile.style.display = "none"
    widget_tab_online_chat_message_input.parentElement.style.width = "100%"
}

