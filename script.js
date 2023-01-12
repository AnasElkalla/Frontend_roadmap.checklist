"use strict";
const container = document.querySelector("main .container");
let checklist;
if (window.localStorage.hasOwnProperty("HTMLTagsChecklist")) {
  checklist = JSON.parse(window.localStorage.getItem("HTMLTagsChecklist"));
} else {
  checklist = [];
}
const resource = `HTML Introduction
HTML Editors
HTML Basic
HTML Elements
HTML Attributes
HTML Headings
HTML Paragraphs
HTML Styles
HTML Formatting
HTML Quotations
HTML Comments
HTML Colors
HTML CSS
HTML Links
HTML Images
HTML Favicon
HTML Tables
HTML Lists
HTML Block & Inline
HTML Classes
HTML Id
HTML Iframes
HTML JavaScript
HTML File Paths
HTML Head
HTML Layout
HTML Responsive
HTML Computercode
HTML Semantics
HTML Style Guide
HTML Entities
HTML Symbols
HTML Emojis
HTML Charset
HTML URL Encode
HTML vs. XHTML
HTML Forms
HTML Form Attributes
HTML Form Elements
HTML Input Types
HTML Input Attributes
HTML Input Form Attributes
HTML Graphics
HTML Canvas
HTML SVG
HTML Media
HTML Media
HTML Video
HTML Audio
HTML Plug-ins
HTML YouTube
HTML APIs
HTML Geolocation
HTML Drag/Drop
HTML Web Storage
HTML Web Workers
HTML SSE
HTML Examples
HTML Quiz
HTML Exercises
HTML Certificate
HTML Summary
HTML Accessibility
HTML Tag List
HTML Attributes
HTML Global Attributes
HTML Browser Support
HTML Events
HTML Colors
HTML Canvas
HTML Audio/Video
HTML Doctypes
HTML Character Sets
HTML URL Encode
HTML Lang Codes
HTTP Messages
HTTP Methods
PX to EM Converter
Keyboard Shortcuts
Quirks Mode and Standards Mode
Date and time formats used in HTML
Constraint validation
Microdata
Microformats
Viewport meta tag
meta tags`;

const contentArr = resource.split("\n");

contentArr.forEach((ele, i, arr) => {
  let checked;
  checklist.forEach((element) => {
    if (element[0] === `div-${i}`) {
      checked = "checked";
    }
  });
  const array = ele.split(" ");
  let array2 = array.map((ele, i, arr1) => {
    ele = ele.split("");
    if (i !== arr1.length - 1) {
      ele.push("+");
    }
    ele = ele.join("");
    return ele;
  });
  array2 = array2.join("");
  const html = ` <div class="div-${i}" id="div-${i}">
      <span>${i + 1}</span>
         <h2>${ele}</h2>
     
         <div class="links">
         <input type="checkbox" ${checked ?? ""} >
           <a class="mdn" data-element="${ele}" href="javascript:delay('URL')" target="_blank"
             ><img
               src="images/mdn.webp"
               alt=""
           /></a>
           <a href="https://www.youtube.com/results?search_query=${array2}" target="_blank"
             ><img
               src="images/youtube.png"
               alt=""
           /></a>
           <a data-element="${ele}" class="w3c" href="" target="_blank"
             ><img
               src="images/channels4_profile.jpg"
               alt=""
           /></a>
         </div>
         </div>`;
  container.insertAdjacentHTML("beforeend", html);
});
const circleText = document.querySelector(".circle span:last-child");
const span1 = document.querySelector(".circle span:nth-child(1)");
const span2 = document.querySelector(".circle span:nth-child(2)");
const span3 = document.querySelector(".circle span:nth-child(3)");
const span4 = document.querySelector(".circle span:nth-child(4)");
const spanRed = document.querySelector(".circle span:nth-child(5)");
const input = function (num) {
  if (num <= 25) {
    span1.style.transform = `rotate(${45 + (num / 100) * 360}deg)`;
  } else if (num > 25 && num <= 50) {
    span2.style.transform = `rotate(${45 + (num / 100) * 360}deg)`;
    span1.style.transform = `rotate(-45deg)`;
  } else if (num > 50 && num <= 75) {
    span3.style.transform = `rotate(${45 + (num / 100) * 360}deg)`;
    span1.style.transform = `rotate(-45deg)`;
    span2.style.transform = `rotate(-45deg)`;
  } else if (num > 75 && num <= 100) {
    span4.style.transform = `rotate(${45 + (num / 100) * 360}deg)`;
    span1.style.opacity = "0";
    span2.style.opacity = "0";
    span3.style.opacity = "0";
    spanRed.style.opacity = "1";
  }
  circleText.textContent = `${Math.trunc(
    (checklist.length / checkbox.length) * 100
  )}%`;
};
const checkbox = document.querySelectorAll(`input[type="checkbox"]`);
console.log((checklist.length / checkbox.length) * 100);
input((checklist.length / checkbox.length) * 100);
checkbox.forEach((ele, i) => {
  ele.addEventListener("mouseover", function () {
    cursor.classList.add("hovering");
  });
  ele.addEventListener("mouseleave", function () {
    cursor.classList.remove("hovering");
  });
  ele.addEventListener("click", function () {
    if (ele.checked) {
      ele.setAttribute("checked", "");
      checklist.push(ele.parentNode.parentElement.classList);
      input((checklist.length / checkbox.length) * 100);
      window.localStorage.setItem(
        "HTMLTagsChecklist",
        JSON.stringify(checklist)
      );
    } else if (!ele.checked) {
      ele.removeAttribute("checked", "");
      console.log(ele);

      checklist.forEach((element, i) => {
        if (ele.parentNode.parentElement.classList[0] === element[0]) {
          checklist.splice(i, 1);
        }
      });
      input((checklist.length / checkbox.length) * 100);

      window.localStorage.setItem(
        "HTMLTagsChecklist",
        JSON.stringify(checklist)
      );
    }
  });
});
function delay(URL) {
  setTimeout(function () {
    window.open(URL, "_blank");
  }, 100);
}
const a = document.querySelectorAll(".container a");
a.forEach((ele) => {
  ele.addEventListener("mouseover", function () {
    cursor.classList.add("hovering");
  });
  ele.addEventListener("click", function (e) {
    e.preventDefault();
    if (ele.classList.contains("mdn") || ele.classList.contains("w3c")) {
      let info = ele.dataset.element.split(" ");
      let array2 = info.map((ele, i, arr1) => {
        ele = ele.split("");
        if (i !== arr1.length - 1) {
          ele.push("%20");
        }
        ele = ele.join("");
        return ele;
      });
      array2 = array2.join("");
      console.log(array2);
      let searchKeyword;
      if (ele.classList.contains("mdn")) {
        searchKeyword = "developer.mozilla.org%20" + array2;
      } else if (ele.classList.contains("w3c")) {
        searchKeyword = "w3schools.com%20" + array2;
      }
      const myHeaders = new Headers();
      myHeaders.append("apikey", "b7hJ1v2fsbasMNn1Hbco0ch3kHI4uWAF");

      const requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      fetch(
        `https://api.apilayer.com/google_search?q=${searchKeyword}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          ele.href = response.organic[0].link;
          if (inOutBtn.classList.contains("in")) {
            e.preventDefault();
            setTimeout(function () {
              window.open(
                `${ele.href}`,
                "_blank",
                `width=600,height=600,left=${
                  window.screen.width / 2 - 300
                },top=${window.screen.height / 2 - 300}`
              );
            }, 100);
          } else {
            delay(`${ele.href}`);
          }
          console.log(response.organic[0].link);
        })
        .catch((error) => console.log("error", error));
    } else {
      if (inOutBtn.classList.contains("in")) {
        window.open(
          `${ele.href}`,
          "_blank",
          `width=600,height=600,left=${window.screen.width / 2 - 300},top=${
            window.screen.height / 2 - 300
          }`
        );
      } else {
        delay(`${ele.href}`);
      }
    }
  });
});
const inOut = document.querySelector(".inOut .btn");
const inOutBtn = document.querySelector(".inOut .btn span");
inOut.addEventListener("click", function () {
  inOutBtn.classList.toggle("in");
});
