let widget_index_tab = document.getElementById("widget-tab_index")
let widget_open_button = document.getElementById("widget-open_button")

let widget_openTab = false
let widgetTabs = document.getElementById("widget-tabs")

let widget_warning_message = document.getElementById("widget-warning_message")

function open_button() {
    let orientation = window.matchMedia("(orientation: landscape)").matches

    if (window.innerHeight <= 570 && orientation) {
        widget_warning_message.style.display = "flex"
        scrollController("hidden")
        return
    }

    if (widget_openTab) {
        widget_open_button.style.display = "flex"
        widgetTabs.style.display = "none"
        widget_openTab = false

        scrollController("auto")
    } else {
        widget_open_button.style.display = "none"
        widgetTabs.style.display = "flex"
        widget_openTab = true
        
        scrollController("hidden")
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


$online_chat_form = document.getElementById("widget-online_chat-form")

$online_chat_form.addEventListener("submit", function (e) {
    e.preventDefault();

    let message = this.querySelector("#message").value
    if (message) {
        let url = this.action
        let method = this.method

        let request = new XMLHttpRequest()
        request.open(method, url)
        request.send();

        this.querySelector("#message").value = ""
    }

})


widgetTabs.addEventListener("mouseenter", function() {
    scrollController("hidden")
})

widgetTabs.addEventListener("mouseleave", function() {
    scrollController("auto")
})

// ------------------------------

let widget_warning_close_button = document.getElementById("widget-warning_close-button")

widget_warning_close_button.addEventListener("click", function() {
    widget_warning_message.style.display = "none"
    scrollController("auto")
})

setInterval(function(){

    let orientation = window.matchMedia("(orientation: landscape)").matches

    if (widget_openTab && window.innerHeight <= 570 && orientation) {
        widget_warning_message.style.display = "flex"
        widget_openTab = false

        widgetTabs.style.display = "none"
        widget_open_button.style.display = "flex"
        scrollController("hidden")
    }

}, 1000)


function scrollController(action) {
    if (window.innerWidth >= 500) {
        return
    }
    if (action == "hidden") {
        document.body.classList.add('scroll_hidden')
        document.body.style.overflow = "hidden"
    } else {
        document.body.classList.remove('scroll_hidden')
        document.body.style.overflow = "auto"
    }
}