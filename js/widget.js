let widget_index_tab = document.getElementById(
  "widget-tab_index"
);
let widget_open_button = document.getElementById(
  "widget-open_button"
);

let widget_openTab = false;
let widget_warning_message_open = false;
let widgetTabs = document.getElementById("widget-tabs");

let widget_tab_online_chat_messager =
  document.getElementById(
    "widget-tab_online_chat-messager"
  );
let widget_warning_message = document.getElementById(
  "widget-warning_message"
);

let scrollTopValue = 0;

function open_button() {
  let orientation = window.matchMedia(
    "(orientation: landscape)"
  ).matches;

  if (
    window.innerHeight <= 570 &&
    orientation &&
    !widget_openTab
  ) {
    flexController(widget_warning_message, "flex");
    widget_openTab = true;
    widget_warning_message_open = true;
    scrollController("hidden");
    return;
  }

  if (widget_openTab) {
    flexController(widget_open_button, "flex");
    flexController(widgetTabs, "none");
    widget_openTab = false;
    if (window.innerWidth <= 500) {
      scrollController("auto");
      window.scrollBy({
        top: scrollTopValue,
        behavior: "instant",
      });
    }
  } else {
    flexController(widget_open_button, "none");
    flexController(widgetTabs, "flex");
    widget_openTab = true;

    if (window.innerWidth <= 500) {
      scrollTopValue = window.scrollY;
      scrollController("hidden");
    }
  }
}

function back_button() {
  flexController(widget_index_tab, "block");
  flexController(widgetTab_order_apply_button, "none");
  flexController(widgetTab_online_chat_button, "none");
  flexController(widgetTab_yandex_map_button, "none");
}

function scrollController(action) {
  if (action == "hidden") {
    document.body.classList.add("scroll_hidden");
  } else {
    document.body.classList.remove("scroll_hidden");
  }
}

function flexController(element, to) {
  element.classList.remove("widget_element_flex");
  element.classList.remove("widget_element_block");
  element.classList.remove("widget_element_none");

  element.classList.add("widget_element_" + to);
}

function borderColorController(element, to) {
  element.classList.remove("widget_element_border_green");
  element.classList.remove("widget_element_border_red");

  element.classList.add("widget_element_border_" + to);
}

function widthController(element, to) {
  element.classList.remove("widget_element_width_full");
  element.classList.remove("widget_element_width_auto");

  element.classList.add("widget_element_width_" + to);
}

function heightController(element, to) {
  element.classList.remove("widget_element_height_full");
  element.classList.remove("widget_element_height_rem");

  element.classList.add("widget_element_height_" + to);
}

// ------------------------------

var widgetButton_order_apply_button =
  document.getElementById("tab-order_apply");
var widgetTab_order_apply_button = document.getElementById(
  "widget-tab_oreder_apply"
);

widgetButton_order_apply_button.addEventListener(
  "click",
  function (e) {
    console.log("fsdf");
    flexController(widget_index_tab, "none");
    flexController(widgetTab_order_apply_button, "block");
  }
);

let widget_tab_oreder_apply_body_form =
  document.getElementById(
    "widget-tab_oreder_apply-body_form"
  );
let widget_tab_oreder_apply_body_status =
  document.getElementById(
    "widget-tab_oreder_apply-body_status"
  );

// ------------------------------

let oreder_apply_name = document.getElementById(
  "oreder_apply_name"
);
let oreder_apply_email = document.getElementById(
  "oreder_apply_email"
);
let oreder_apply_phone = document.getElementById(
  "oreder_apply_phone"
);
let oreder_apply_message = document.getElementById(
  "oreder_apply_message"
);

oreder_apply_name.addEventListener("change", function () {
  if (!this.value) {
    borderColorController(this.parentElement, "red");
  } else {
    borderColorController(this.parentElement, "green");
  }
});

oreder_apply_email.addEventListener("change", function () {
  if (!this.value) {
    borderColorController(this.parentElement, "red");
  } else {
    borderColorController(this.parentElement, "green");
  }
});

oreder_apply_phone.addEventListener("change", function () {
  if (!this.value) {
    borderColorController(this.parentElement, "red");
  } else {
    borderColorController(this.parentElement, "green");
  }
});

oreder_apply_message.addEventListener(
  "change",
  function () {
    if (!this.value) {
      borderColorController(this, "red");
    } else {
      borderColorController(this, "green");
    }
  }
);

function oreder_apply() {
  if (!oreder_apply_name.value) {
    borderColorController(
      oreder_apply_name.parentElement,
      "red"
    );
  } else {
    borderColorController(
      oreder_apply_name.parentElement,
      "green"
    );
  }

  if (!oreder_apply_email.value) {
    borderColorController(
      oreder_apply_email.parentElement,
      "red"
    );
  } else {
    borderColorController(
      oreder_apply_email.parentElement,
      "green"
    );
  }

  if (!oreder_apply_phone.value) {
    borderColorController(
      oreder_apply_phone.parentElement,
      "red"
    );
  } else {
    borderColorController(
      oreder_apply_phone.parentElement,
      "green"
    );
  }

  if (!oreder_apply_message.value) {
    borderColorController(oreder_apply_message, "red");
  } else {
    borderColorController(oreder_apply_message, "green");
  }

  if (
    oreder_apply_name.value &&
    oreder_apply_email.value &&
    oreder_apply_phone.value &&
    oreder_apply_message.value
  ) {
    flexController(
      widget_tab_oreder_apply_body_form,
      "none"
    );
    flexController(
      widget_tab_oreder_apply_body_status,
      "block"
    );
  }
}

// ------------------------------

var widgetButton_online_chat_button =
  document.getElementById("tab-online_chat");
var widgetTab_online_chat_button = document.getElementById(
  "widget-tab_online_chat"
);

widgetButton_online_chat_button.addEventListener(
  "click",
  function () {
    flexController(widget_index_tab, "none");
    flexController(widgetTab_online_chat_button, "flex");
    scrollBarInit(
      parseFloat(window.getComputedStyle(chatEl).height)
    );
  }
);

// ------------------------------

var widgetButton_yandex_map_button =
  document.getElementById("tab-yandex_map");
var widgetTab_yandex_map_button = document.getElementById(
  "widget-tab_yandex-map"
);

widgetButton_yandex_map_button.addEventListener(
  "click",
  function () {
    flexController(widget_index_tab, "none");
    flexController(widgetTab_yandex_map_button, "block");
  }
);

// ------------------------------

let online_chat_form = document.getElementById(
  "widget-online_chat-form"
);
const widget_tab_online_chat_messager_body =
  document.querySelector(
    ".widget-tab_online_chat-messager_body"
  );

online_chat_form.addEventListener("submit", function (e) {
  e.preventDefault();
  scrollBarInit(
    parseFloat(window.getComputedStyle(chatEl).height)
  );
  let message = this.elements["message"];
  console.log(message.value);
  let file = this.elements["file"];

  let url = this.action;
  let method = this.method;
  let sendMessage = message.value;

  let request = new XMLHttpRequest();
  request.open(method, url);

  request.setRequestHeader(
    "Content-Type",
    "application/json"
  );
  request.addEventListener("readystatechange", () => {
    if (
      request.readyState === 4 &&
      request.status === 200
    ) {
      console.log(request.responseText);
    }
  });

  request.send(sendMessage);

  if (
    message.value &&
    online_chat_upload_allFiles?.length
  ) {
    for (
      let a = 0;
      a < online_chat_upload_allFiles.length;
      a++
    ) {
      if (online_chat_upload_allFiles[a]) {
        let fileLen = online_chat_upload_allFiles.length;
        let reader = new FileReader();
        let fileType = "";
        let fileFormat = "";
        for (
          let i = 0;
          i < online_chat_upload_allFiles[a].type.length;
          i++
        ) {
          if (
            online_chat_upload_allFiles[a].type[i] == "/"
          ) {
            for (let j = 0; j < i; j++) {
              fileType +=
                online_chat_upload_allFiles[a].type[j];
            }
            for (
              let j = i + 1;
              j <
              online_chat_upload_allFiles[a].type.length;
              j++
            ) {
              fileFormat +=
                online_chat_upload_allFiles[a].type[j];
            }
          }
        }

        let messageValue = message.value;
        reader.onload = function (e) {
          if (fileType == "image") {
            let fileUrl = e.target.result;
            if (a >= fileLen - 1) {
              widget_tab_online_chat_messager_body.innerHTML += `
                        <sbtnw class="widget-tab_online_chat-message">
                            <sbtnw class="message-to-box message-text_plus_image">
                                <img src="${fileUrl}" alt="image">
                                ${messageValue
                                  .split("\n")
                                  .map((e) => `<p>${e}</p>`)
                                  .join("\n")}
                            </sbtnw>
                        </sbtnw>
                    `;
            } else {
              widget_tab_online_chat_messager_body.innerHTML += `
                        <sbtnw class="widget-tab_online_chat-message">
                            <sbtnw class="message-to-box">
                                <img src="${fileUrl}" alt="image">
                            </sbtnw>
                        </sbtnw>
                    `;
            }
          } else {
            if (a >= fileLen - 1) {
              widget_tab_online_chat_messager_body.innerHTML += `
                        <sbtnw class="widget-tab_online_chat-message">
                            <sbtnw class="message-to-box message-text_plus_image">
                                <p class="message-text_plus_file">Файл: <b>${fileFormat}</b></p>
                                ${messageValue
                                  .split("\n")
                                  .map((e) => `<p>${e}</p>`)
                                  .join("\n")}
                            </sbtnw>
                        </sbtnw>
                    `;
            } else {
              widget_tab_online_chat_messager_body.innerHTML += `
                <sbtnw class="widget-tab_online_chat-message">
                    <sbtnw class="message-to-box">
                        <p class="message-text_plus_file">Файл: <b>${fileFormat}</b></p>
                    </sbtnw>
                </sbtnw>
              `;
            }
          }
        };

        reader.readAsDataURL(
          online_chat_upload_allFiles[a]
        );
      }
    }

    deleteAllFiles();
    flexController(
      document.getElementById(
        "widget-tab_online_chat-file_info"
      ),
      "none"
    );

    message.value = "";
    heightController(message, "rem");
  } else if (online_chat_upload_allFiles?.length) {
    for (
      let a = 0;
      a < online_chat_upload_allFiles.length;
      a++
    ) {
      if (online_chat_upload_allFiles[a]) {
        let reader = new FileReader();
        let fileType = "";
        let fileFormat = "";
        for (
          let i = 0;
          i < online_chat_upload_allFiles[a].type.length;
          i++
        ) {
          if (
            online_chat_upload_allFiles[a].type[i] == "/"
          ) {
            for (let j = 0; j < i; j++) {
              fileType +=
                online_chat_upload_allFiles[a].type[j];
            }
            for (
              let j = i + 1;
              j <
              online_chat_upload_allFiles[a].type.length;
              j++
            ) {
              fileFormat +=
                online_chat_upload_allFiles[a].type[j];
            }
          }
        }

        reader.onload = function (e) {
          if (fileType == "image") {
            let fileUrl = e.target.result;
            widget_tab_online_chat_messager_body.innerHTML += `
                      <sbtnw class="widget-tab_online_chat-message">
                          <sbtnw class="message-to-box">
                              <img src="${fileUrl}" alt="image">
                          </sbtnw>
                      </sbtnw>
                  `;
          } else {
            widget_tab_online_chat_messager_body.innerHTML += `
                      <sbtnw class="widget-tab_online_chat-message">
                          <sbtnw class="message-to-box">
                              <p class="message-text_plus_file">Файл: <b>${fileType}</b></p>
                          </sbtnw>
                      </sbtnw>
                  `;
          }
        };

        reader.readAsDataURL(
          online_chat_upload_allFiles[a]
        );
      }
    }

    deleteAllFiles();
    flexController(
      document.getElementById(
        "widget-tab_online_chat-file_info"
      ),
      "none"
    );
  } else if (message.value) {
    widget_tab_online_chat_messager_body.innerHTML += `
            <sbtnw class="widget-tab_online_chat-message">
                <sbtnw class="message-to-box">
                    ${message.value
                      .split("\n")
                      .map((e) => `<p>${e}</p>`)
                      .join("\n")}
                </sbtnw>
            </sbtnw>
        `;

    message.value = "";
    heightController(message, "rem");
  }

  setTimeout(() => {
    widget_tab_online_chat_messager.scrollTo({
      behavior: "smooth",
      top: widget_tab_online_chat_messager.scrollHeight,
    });
    scrollBarInit(
      parseFloat(window.getComputedStyle(chatEl).height)
    );
  }, 100);
  flexController(widget_tab_online_chat_smile_box, "none");
  widget_tab_online_chat_smile_box_open = false;
});

// ------------------------------

// let widget_warning_close_button = document.getElementById("widget-warning_close-button")
//
// widget_warning_close_button.addEventListener("click", function() {
//     flexController(widget_warning_message,"none");
//     widget_warning_message_open = false
//     scrollController("auto")
// })

const windowOrientationChecker = () => {
  if (!widget_openTab) {
    return;
  }

  let orientation = window.matchMedia(
    "(orientation: landscape)"
  ).matches;

  if (
    orientation &&
    window.innerHeight <= 570 &&
    widgetTabs.offsetWidth != window.innerWidth &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    flexController(widget_warning_message, "flex");
    widget_warning_message_open = true;

    flexController(widgetTabs, "none");
    flexController(widget_open_button, "flex");
  } else {
    flexController(widget_warning_message, "none");
    widget_warning_message_open = false;

    flexController(widgetTabs, "flex");
    flexController(widget_open_button, "none");
  }

  if (
    window.innerWidth <= 500 ||
    widget_warning_message_open
  ) {
    scrollController("hidden");
  } else {
    scrollController("auto");
  }

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    flexController(
      widget_tab_online_chat_send_form_action_smile,
      "none"
    );
    widthController(
      widget_tab_online_chat_message_input.parentElement,
      "full"
    );
  } else {
    flexController(
      widget_tab_online_chat_send_form_action_smile,
      "block"
    );
    widthController(
      widget_tab_online_chat_message_input.parentElement,
      "auto"
    );
  }
};

// ------------------------------

var widget_tab_online_chat_message_input =
  document.getElementById(
    "widget-tab_online_chat-message-input"
  );
var widget_tab_online_chat_send_form_action_smile =
  document.getElementById(
    "widget-tab_online_chat-send-form_action-smile"
  );

widget_tab_online_chat_message_input.addEventListener(
  "input",
  function () {
    check_widget_tab_online_chat_message_input();
  }
);

function check_widget_tab_online_chat_message_input() {
  if (
    widget_tab_online_chat_message_input.value &&
    widget_tab_online_chat_message_input.scrollHeight >= 34
  ) {
    heightController(
      widget_tab_online_chat_message_input,
      "auto"
    );
    heightController(
      widget_tab_online_chat_message_input.parentElement,
      "auto"
    );
  } else {
    heightController(
      widget_tab_online_chat_message_input,
      "rem"
    );
    heightController(
      widget_tab_online_chat_message_input.parentElement,
      "rem"
    );
  }
  widget_tab_online_chat_message_input.scrollTop =
    widget_tab_online_chat_message_input.scrollHeight;
}

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  flexController(
    widget_tab_online_chat_send_form_action_smile,
    "none"
  );
  widthController(
    widget_tab_online_chat_message_input.parentElement,
    "full"
  );
}

let widget_tab_online_chat_upload = document.getElementById(
  "widget-tab_online_chat-upload"
);

let online_chat_upload_allFiles = [];
let online_chat_upload_allFiles_ids = 0;

widget_tab_online_chat_upload.addEventListener(
  "change",
  function () {
    let widget_tab_online_chat_file_info =
      document.getElementById(
        "widget-tab_online_chat-file_info"
      );

    if (this?.files?.length) {
      for (let a = 0; a < this.files.length; a++) {
        this.files[a].id = online_chat_upload_allFiles_ids;
        online_chat_upload_allFiles[
          online_chat_upload_allFiles.length
        ] = this.files[a];
        online_chat_upload_allFiles_ids++;

        let reader = new FileReader();
        let fileType = "";
        let fileFormat = "";
        for (
          let i = 0;
          i < this.files[a].type.length;
          i++
        ) {
          if (this.files[a].type[i] == "/") {
            for (let j = 0; j < i; j++) {
              fileType += this.files[a].type[j];
            }
            for (
              let j = i + 1;
              j < this.files[a].type.length;
              j++
            ) {
              fileFormat += this.files[a].type[j];
            }
          }
        }

        let fileData = this.files[a];
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
      flexController(
        widget_tab_online_chat_file_info,
        "flex"
      );
      this.value = "";
    } else {
      flexController(
        widget_tab_online_chat_file_info,
        "none"
      );
    }
  }
);

function deleteFiles(id) {
  let widget_tab_online_chat_file_info_id =
    document.getElementById("deleteFile" + id);

  online_chat_upload_allFiles =
    online_chat_upload_allFiles.filter(
      (item) => item.id != id
    );
  widget_tab_online_chat_file_info_id.remove();

  let empty = 0;
  for (
    let b = 0;
    b < online_chat_upload_allFiles.length;
    b++
  ) {
    if (online_chat_upload_allFiles[b] == null) {
      empty++;
    }
  }

  if (empty >= online_chat_upload_allFiles.length) {
    let widget_tab_online_chat_file_info =
      document.getElementById(
        "widget-tab_online_chat-file_info"
      );

    widget_tab_online_chat_file_info.innerHTML = "";
    flexController(
      widget_tab_online_chat_file_info,
      "none"
    );
  }
}

function deleteAllFiles() {
  let widget_tab_online_chat_file_info =
    document.getElementById(
      "widget-tab_online_chat-file_info"
    );

  widget_tab_online_chat_upload.value = "";
  widget_tab_online_chat_file_info.innerHTML = "";
  flexController(widget_tab_online_chat_file_info, "none");

  online_chat_upload_allFiles = [];
}

let widget_tab_online_chat_smile_button =
  document.getElementById(
    "widget-tab_online_chat-smile_button"
  );
var widget_tab_online_chat_smile_box =
  document.getElementById(
    "widget-tab_online_chat-smile_box"
  );
var widget_tab_online_chat_smile_box_open = false;

widget_tab_online_chat_smile_button.addEventListener(
  "click",
  function () {
    if (widget_tab_online_chat_smile_box_open) {
      flexController(
        widget_tab_online_chat_smile_box,
        "none"
      );
      widget_tab_online_chat_smile_box_open = false;
    } else {
      flexController(
        widget_tab_online_chat_smile_box,
        "flex"
      );
      widget_tab_online_chat_smile_box_open = true;
    }
  }
);

function online_chat_add_smile(smile) {
  widget_tab_online_chat_message_input.value += smile;
  check_widget_tab_online_chat_message_input();
}

// CUSTOM SCROLLBAR
// widget_tab_online_chat_messager

const inputEl = document.querySelector(
  ".widget .widget-tab-chat_scroll-bar_range"
);
const circleEl = document.querySelector(
  ".widget-tab-chat_scroll-bar_circle"
);
const scrollBarEl = document.querySelector(
  ".widget .widget-tab-chat_scroll-bar"
);
const chatEl = widget_tab_online_chat_messager;
const chatBodyEl =
  widget_tab_online_chat_messager.querySelector(
    ".widget .widget-tab_online_chat-messager_body"
  );
const messageEl = document.querySelector(
  ".widget .widget-tab_online_chat-message"
);
let topK = 0;
let topP = 0;
inputEl.addEventListener("input", (e) => {
  chatEl.scrollTop = (topP / 100) * inputEl.value;
  circleEl.style.marginTop = topK * inputEl.value + "px";
});

chatEl.addEventListener("scroll", (e) => {
  scrollBarInit(
    parseFloat(window.getComputedStyle(chatEl).height)
  );
  inputEl.value = (chatEl.scrollTop / topP) * 100;
  circleEl.style.marginTop = topK * inputEl.value + "px";
});

const scrollBarInit = (height) => {
  const supportMessages = document.querySelectorAll(
    ".message-from-box"
  );
  supportMessages.forEach((el) => {
    el.parentElement.style.marginLeft =
      document.querySelector(
        ".widget .widget-tab_online_chat-body"
      ).clientWidth -
      parseFloat(
        window.getComputedStyle(el.parentElement).width
      ) -
      40 +
      "px";
  });

  if (topP <= 0) {
    scrollBarEl.style.opacity = 0;
  } else {
    scrollBarEl.style.opacity = 1;
  }

  const value = height + "px";
  scrollBarEl.style.height = value;
  inputEl.style.height = value;
  inputEl.style.width = value;
  updateCoefficient();
};

const updateCoefficient = () => {
  topK =
    (parseFloat(
      window.getComputedStyle(scrollBarEl).height
    ) -
      parseFloat(
        window.getComputedStyle(circleEl).height
      )) /
    100;
  topP =
    parseFloat(window.getComputedStyle(chatBodyEl).height) +
    parseFloat(
      window.getComputedStyle(chatBodyEl).marginTop
    ) +
    parseFloat(
      window.getComputedStyle(chatBodyEl).marginBottom
    ) -
    chatEl.clientHeight;
};

window.addEventListener("resize", () => {
  windowOrientationChecker();
  scrollBarInit(
    parseFloat(window.getComputedStyle(chatEl).height)
  );
});

const widgetChatEl = document.querySelector(
  "#widget-tab_online_chat-messager"
);
const widgetMapsEl = document.querySelector(
  ".widget-tab_yandex_map-body"
);
const widgetEl = document.querySelector(".widget");
const mapEl = document.querySelector(
  ".widget-tab_yandex_map-body-maps iframe"
);
widgetEl.addEventListener("wheel", (e) => {
  // родители классов, которые должны прокручиваться
  // если адреса на виджете должны прокручиваться, то
  // необходимо items добавить в общий родитель и добавить
  // свойство overflow, и в mapEl изменить на класс родителя
  const targetClassArray = [widgetChatEl, widgetMapsEl];
  let target = e.target;
  while (
    target !== widgetEl &&
    !targetClassArray.includes(target)
  ) {
    target = target.parentElement;
  }
  if (
    e.deltaY >= 0
      ? target.scrollTop + target.clientHeight >=
        target.scrollHeight
      : e.deltaY < 0 && target.scrollTop == 0
  ) {
    e.preventDefault();
  }
});

widgetEl.addEventListener("touchmove", function (e) {
  console.log("first");
  e.preventDefault();
  document.body.style.overflow = "hidden";
  window.scrollTo({ top: 0, behavior: "instant" });
});
