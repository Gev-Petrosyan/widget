let widget_index_tab = document.getElementById("widget-tab_index");
let widget_open_button = document.getElementById("widget-open_button");

let widget_openTab = false;
let widget_warning_message_open = false;
let widgetTabs = document.getElementById("widget-tabs");

let widget_tab_online_chat_messager = document.getElementById(
  "widget-tab_online_chat-messager"
);
let widget_warning_message = document.getElementById("widget-warning_message");

function open_button() {
  let orientation = window.matchMedia("(orientation: landscape)").matches;

  if (window.innerHeight <= 570 && orientation && !widget_openTab) {
    widget_warning_message.style.display = "flex";
    widget_openTab = true;
    widget_warning_message_open = true;
    scrollController("hidden");
    return;
  }

  if (widget_openTab) {
    widget_open_button.style.display = "flex";
    widgetTabs.style.display = "none";
    widget_openTab = false;

    if (window.innerWidth <= 500) {
      scrollController("auto");
    }
  } else {
    widget_open_button.style.display = "none";
    widgetTabs.style.display = "flex";
    widget_openTab = true;

    if (window.innerWidth <= 500) {
      scrollController("hidden");
    }
  }
}

function back_button() {
  widget_index_tab.style.display = "block";
  widgetTab_order_apply_button.style.display = "none";
  widgetTab_online_chat_button.style.display = "none";
  widgetTab_online_chat_button.style.display = "none";
  widgetTab_yandex_map_button.style.display = "none";
}

// ------------------------------

var widgetButton_order_apply_button =
  document.getElementById("tab-order_apply");
var widgetTab_order_apply_button = document.getElementById(
  "widget-tab_oreder_apply"
);

widgetButton_order_apply_button.addEventListener("click", function () {
  widget_index_tab.style.display = "none";
  widgetTab_order_apply_button.style.display = "block";
});

let widget_tab_oreder_apply_body_form = document.getElementById(
  "widget-tab_oreder_apply-body_form"
);
let widget_tab_oreder_apply_body_status = document.getElementById(
  "widget-tab_oreder_apply-body_status"
);

// ------------------------------

let oreder_apply_name = document.getElementById("oreder_apply_name");
let oreder_apply_email = document.getElementById("oreder_apply_email");
let oreder_apply_phone = document.getElementById("oreder_apply_phone");
let oreder_apply_message = document.getElementById("oreder_apply_message");

oreder_apply_name.addEventListener("change", function () {
  if (!this.value) {
    this.parentElement.style.borderColor = "#ff4848";
  } else {
    this.parentElement.style.borderColor = "#39E960";
  }
});

oreder_apply_email.addEventListener("change", function () {
  if (!this.value) {
    this.parentElement.style.borderColor = "#ff4848";
  } else {
    this.parentElement.style.borderColor = "#39E960";
  }
});

oreder_apply_phone.addEventListener("change", function () {
  if (!this.value) {
    this.parentElement.style.borderColor = "#ff4848";
  } else {
    this.parentElement.style.borderColor = "#39E960";
  }
});

oreder_apply_message.addEventListener("change", function () {
  if (!this.value) {
    this.style.borderColor = "#ff4848";
  } else {
    this.style.borderColor = "#39E960";
  }
});

function oreder_apply() {
  if (!oreder_apply_name.value) {
    document.getElementById(
      "oreder_apply_name"
    ).parentElement.style.borderColor = "#ff4848";
  } else {
    document.getElementById(
      "oreder_apply_name"
    ).parentElement.style.borderColor = "#39E960";
  }

  if (!oreder_apply_email.value) {
    document.getElementById(
      "oreder_apply_email"
    ).parentElement.style.borderColor = "#ff4848";
  } else {
    document.getElementById(
      "oreder_apply_email"
    ).parentElement.style.borderColor = "#39E960";
  }

  if (!oreder_apply_phone.value) {
    document.getElementById(
      "oreder_apply_phone"
    ).parentElement.style.borderColor = "#ff4848";
  } else {
    document.getElementById(
      "oreder_apply_phone"
    ).parentElement.style.borderColor = "#39E960";
  }

  if (!oreder_apply_message.value) {
    document.getElementById("oreder_apply_message").style.borderColor =
      "#ff4848";
  } else {
    document.getElementById(
      "oreder_apply_message"
    ).parentElement.style.borderColor = "#39E960";
  }

  if (
    oreder_apply_name.value &&
    oreder_apply_email.value &&
    oreder_apply_phone.value &&
    oreder_apply_message.value
  ) {
    widget_tab_oreder_apply_body_form.style.display = "none";
    widget_tab_oreder_apply_body_status.style.display = "block";
  }
}

// ------------------------------

var widgetButton_online_chat_button =
  document.getElementById("tab-online_chat");
var widgetTab_online_chat_button = document.getElementById(
  "widget-tab_online_chat"
);

widgetButton_online_chat_button.addEventListener("click", function () {
  widget_index_tab.style.display = "none";
  widgetTab_online_chat_button.style.display = "flex";
});

// ------------------------------

var widgetButton_yandex_map_button = document.getElementById("tab-yandex_map");
var widgetTab_yandex_map_button = document.getElementById(
  "widget-tab_yandex-map"
);

widgetButton_yandex_map_button.addEventListener("click", function () {
  widget_index_tab.style.display = "none";
  widgetTab_yandex_map_button.style.display = "block";
});

// ------------------------------

let online_chat_form = document.getElementById("widget-online_chat-form");

online_chat_form.addEventListener("submit", function (e) {
  e.preventDefault();

  let message = this.elements["message"];
  let file = this.elements["file"];

  let url = this.action;
  let method = this.method;
  let sendMessage = message.value;

  let request = new XMLHttpRequest();
  request.open(method, url);

  request.setRequestHeader("Content-Type", "application/json");
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    }
  });

  request.send(sendMessage);

  if (message.value && online_chat_upload_allFiles?.length) {

    for (let a = 0; a < online_chat_upload_allFiles.length; a++) {
      if (online_chat_upload_allFiles[a]) {
        let fileLen = online_chat_upload_allFiles.length;
        let reader = new FileReader();
        let fileType = "";
        let fileFormat = "";
        for (let i = 0; i < online_chat_upload_allFiles[a].type.length; i++) {
          if (online_chat_upload_allFiles[a].type[i] == "/") {
            for (let j = 0; j < i; j++) {
              fileType += online_chat_upload_allFiles[a].type[j];
            }
            for (let j = i + 1; j < online_chat_upload_allFiles[a].type.length; j++) {
              fileFormat += online_chat_upload_allFiles[a].type[j];
            }
          }
        }

        let messageValue = message.value;
        reader.onload = function (e) {
          if (fileType == "image") {
            let fileUrl = e.target.result;
            if (a >= fileLen - 1) {
              widget_tab_online_chat_messager.innerHTML += `
                        <div class="widget-tab_online_chat-message">
                            <div class="message-to-box message-text_plus_image">
                                <img src="${fileUrl}" alt="image">
                                <p>${messageValue}</p>
                            </div>
                        </div>
                    `;
            } else {
              widget_tab_online_chat_messager.innerHTML += `
                        <div class="widget-tab_online_chat-message">
                            <div class="message-to-box">
                                <img src="${fileUrl}" alt="image">
                            </div>
                        </div>
                    `;
            }
          } else {
            if (a >= fileLen - 1) {
              widget_tab_online_chat_messager.innerHTML += `
                        <div class="widget-tab_online_chat-message">
                            <div class="message-to-box message-text_plus_image">
                                <p style="margin-top: 0; font-size: 17px">Файл: <b>${fileFormat}</b></p>
                                <p>${messageValue}</p>
                            </div>
                        </div>
                    `;
            } else {
              widget_tab_online_chat_messager.innerHTML += `
                <div class="widget-tab_online_chat-message">
                    <div class="message-to-box">
                        <p style="margin-top: 0; font-size: 17px">Файл: <b>${fileFormat}</b></p>
                    </div>
                </div>
              `;
            }
          }
        };

        reader.readAsDataURL(online_chat_upload_allFiles[a]);
      }
    }

    deleteAllFiles();
    document.getElementById("widget-tab_online_chat-file_info").style.display =
      "none";

    message.value = "";
    message.style.height = "1.1rem";

    widget_tab_online_chat_messager.scrollTop =
      widget_tab_online_chat_messager.scrollHeight;

  } else if (online_chat_upload_allFiles?.length) {

    for (let a = 0; a < online_chat_upload_allFiles.length; a++) {
      if (online_chat_upload_allFiles[a]) {
        let reader = new FileReader();
        let fileType = "";
        let fileFormat = "";
        for (let i = 0; i < online_chat_upload_allFiles[a].type.length; i++) {
          if (online_chat_upload_allFiles[a].type[i] == "/") {
            for (let j = 0; j < i; j++) {
              fileType += online_chat_upload_allFiles[a].type[j];
            }
            for (let j = i + 1; j < online_chat_upload_allFiles[a].type.length; j++) {
              fileFormat += online_chat_upload_allFiles[a].type[j];
            }
          }
        }

        reader.onload = function (e) {
          if (fileType == "image") {
            let fileUrl = e.target.result;
            widget_tab_online_chat_messager.innerHTML += `
                      <div class="widget-tab_online_chat-message">
                          <div class="message-to-box">
                              <img src="${fileUrl}" alt="image">
                          </div>
                      </div>
                  `;
          } else {
            widget_tab_online_chat_messager.innerHTML += `
                      <div class="widget-tab_online_chat-message">
                          <div class="message-to-box">
                              <p style="margin-top: 0; font-size: 17px">Файл: <b>${fileType}</b></p>
                          </div>
                      </div>
                  `;
          }
        };

        reader.readAsDataURL(online_chat_upload_allFiles[a]);
      }
    }

    deleteAllFiles();
    document.getElementById("widget-tab_online_chat-file_info").style.display =
      "none";

    widget_tab_online_chat_messager.scrollTop =
      widget_tab_online_chat_messager.scrollHeight;
  } else if (message.value) {
    widget_tab_online_chat_messager.innerHTML += `
            <div class="widget-tab_online_chat-message">
                <div class="message-to-box">
                    <p>${message.value}</p>
                </div>
            </div>
        `;

    message.value = "";
    message.style.height = "1.1rem";

    widget_tab_online_chat_messager.scrollTop =
      widget_tab_online_chat_messager.scrollHeight;
  }

  widget_tab_online_chat_smile_box.style.display = "none"
  widget_tab_online_chat_smile_box_open = false
});

// ------------------------------

// let widget_warning_close_button = document.getElementById("widget-warning_close-button")
//
// widget_warning_close_button.addEventListener("click", function() {
//     widget_warning_message.style.display = "none"
//     widget_warning_message_open = false
//     scrollController("auto")
// })

setInterval(function () {
  if (!widget_openTab) {
    return;
  }

  let orientation = window.matchMedia("(orientation: landscape)").matches;

  if (
    orientation &&
    window.innerHeight <= 570 &&
    widgetTabs.offsetWidth != window.innerWidth &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    widget_warning_message.style.display = "flex";
    widget_warning_message_open = true;

    widgetTabs.style.display = "none";
    widget_open_button.style.display = "flex";
  } else {
    widget_warning_message.style.display = "none";
    widget_warning_message_open = false;

    widgetTabs.style.display = "flex";
    widget_open_button.style.display = "none";
  }

  if (window.innerWidth <= 500 || widget_warning_message_open) {
    scrollController("hidden");
  } else {
    scrollController("auto");
  }

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    widget_tab_online_chat_send_form_action_smile.style.display = "none";
    widget_tab_online_chat_message_input.parentElement.style.width = "100%";
  } else {
    widget_tab_online_chat_send_form_action_smile.style.display = "block";
    widget_tab_online_chat_message_input.parentElement.style.width = "auto";
  }
}, 1000);

function scrollController(action) {
  if (action == "hidden") {
    document.body.classList.add("scroll_hidden");
  } else {
    document.body.classList.remove("scroll_hidden");
  }
}

// ------------------------------

var widget_tab_online_chat_message_input = document.getElementById(
  "widget-tab_online_chat-message-input"
);
var widget_tab_online_chat_send_form_action_smile = document.getElementById(
  "widget-tab_online_chat-send-form_action-smile"
);

widget_tab_online_chat_message_input.addEventListener("input", function () {check_widget_tab_online_chat_message_input()});

function check_widget_tab_online_chat_message_input() {
  if (widget_tab_online_chat_message_input.value && widget_tab_online_chat_message_input.scrollHeight >= 34) {
    widget_tab_online_chat_message_input.style.height = "auto";
    widget_tab_online_chat_message_input.parentElement.style.height = "auto";
  } else {
    widget_tab_online_chat_message_input.parentElement.style.height = "1.1rem";
    widget_tab_online_chat_message_input.style.height = "1.1rem";
  }
  widget_tab_online_chat_message_input.scrollTop =
      widget_tab_online_chat_message_input.scrollHeight;
}

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  widget_tab_online_chat_send_form_action_smile.style.display = "none";
  widget_tab_online_chat_message_input.parentElement.style.width = "100%";
}

let widget_tab_online_chat_upload = document.getElementById(
  "widget-tab_online_chat-upload"
);

let online_chat_upload_allFiles = []
let online_chat_upload_allFiles_ids = 0

widget_tab_online_chat_upload.addEventListener("change", function () {
  let widget_tab_online_chat_file_info = document.getElementById(
    "widget-tab_online_chat-file_info"
  );

  if (this?.files?.length) {
    for (let a = 0; a < this.files.length; a++) {
      this.files[a].id = online_chat_upload_allFiles_ids
      online_chat_upload_allFiles[online_chat_upload_allFiles.length] = this.files[a]
      online_chat_upload_allFiles_ids++

      let reader = new FileReader();
      let fileType = "";
      let fileFormat = "";
      for (let i = 0; i < this.files[a].type.length; i++) {
        if (this.files[a].type[i] == "/") {
          for (let j = 0; j < i; j++) {
            fileType += this.files[a].type[j];
          }
          for (let j = i + 1; j < this.files[a].type.length; j++) {
            fileFormat += this.files[a].type[j];
          }
        }
      }

      let fileData =  this.files[a]
      reader.onload = function (e) {
        if (fileType == "image") {
          let fileUrl = e.target.result;
          widget_tab_online_chat_file_info.innerHTML += `
                        <div class='widget-tab_online_chat-file_container' id="deleteFile${fileData.id}">
                            <img src="${fileUrl}">
                            <button type="button" id="widget-tab_online_chat-file_info-delete" onclick="deleteFiles(${fileData.id})">
                                <img src="images/vector.png" alt="delete">
                            </button>
                        </div>
                    `;
        } else {
          widget_tab_online_chat_file_info.innerHTML += `
                        <div class='widget-tab_online_chat-file_container' id="deleteFile${fileData.id}">
                            <p>Файл, формат: ${fileFormat}</p>
                            <button type="button" id="widget-tab_online_chat-file_info-delete" onclick="deleteFiles(${fileData.id})">
                                <img src="images/vector.png" alt="delete">
                            </button>
                        </div>
                    `;
        }

      };

      reader.readAsDataURL(this.files[a]);
    }
    widget_tab_online_chat_file_info.style.display = "flex";
    this.value = ""
  } else {
    widget_tab_online_chat_file_info.style.display = "none";
  }

});

function deleteFiles(id) {
  let widget_tab_online_chat_file_info_id = document.getElementById(
    "deleteFile" + id
  );

  online_chat_upload_allFiles = online_chat_upload_allFiles.filter((item) => item.id != id)
  widget_tab_online_chat_file_info_id.remove()

  let empty = 0;
  for (let b = 0; b < online_chat_upload_allFiles.length; b++) {
    if (online_chat_upload_allFiles[b] == null) {
      empty++;
    }
  }

  if (empty >= online_chat_upload_allFiles.length) {
    let widget_tab_online_chat_file_info = document.getElementById(
      "widget-tab_online_chat-file_info"
    );

    widget_tab_online_chat_file_info.innerHTML = "";
    widget_tab_online_chat_file_info.style.display = "none";
  }
}

function deleteAllFiles() {
  let widget_tab_online_chat_file_info = document.getElementById(
    "widget-tab_online_chat-file_info"
  );

  widget_tab_online_chat_upload.value = "";
  widget_tab_online_chat_file_info.innerHTML = "";
  widget_tab_online_chat_file_info.style.display = "none";

  online_chat_upload_allFiles = []
}

let widget_tab_online_chat_smile_button = document.getElementById("widget-tab_online_chat-smile_button")
var widget_tab_online_chat_smile_box = document.getElementById("widget-tab_online_chat-smile_box")
var widget_tab_online_chat_smile_box_open = false

widget_tab_online_chat_smile_button.addEventListener("click", function () {
  if (widget_tab_online_chat_smile_box_open) {
    widget_tab_online_chat_smile_box.style.display = "none"
    widget_tab_online_chat_smile_box_open = false
  } else {
    widget_tab_online_chat_smile_box.style.display = "flex"
    widget_tab_online_chat_smile_box_open = true
  }
})

function online_chat_add_smile(smile) {
  widget_tab_online_chat_message_input.value += smile
  check_widget_tab_online_chat_message_input()
}

