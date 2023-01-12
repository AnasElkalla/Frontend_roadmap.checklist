"use strict";

const container = document.querySelector(".container");
const arrangeItems = document.querySelectorAll(".arrange button");
const inOut = document.querySelector(".inOut .btn");
const inOutBtn = document.querySelector(".inOut .btn span");
inOut.addEventListener("click", function () {
  inOutBtn.classList.toggle("in");
});
arrangeItems.forEach((ele) => {
  ele.addEventListener("click", function () {
    if (ele.classList.contains("list")) {
      container.classList.add("list");
      container.classList.remove("two");
    } else if (ele.classList.contains("rowOfTwo")) {
      container.classList.add("two");
      container.classList.remove("list");
    }
  });
  ele.addEventListener("mouseover", function () {
    cursor.classList.add("hovering");
  });
});
let checklist;
if (window.localStorage.hasOwnProperty("HTMLTagsChecklist")) {
  checklist = JSON.parse(window.localStorage.getItem("HTMLTagsChecklist"));
} else {
  checklist = [];
}

const htmlString = `<comment>
<!DOCTYPE>
<a>
<abbr>
<acronym>
<address>
<applet>
<area>
<article>
<aside>
<audio>
<b>
<base>
<basefont>
<bdi>
<bdo>
<big>
<blockquote>
<body>
<br>
<button>
<canvas>
<caption>
<center>
<cite>
<code>
<col>
<colgroup>
<data>
<datalist>
<dd>
<del>
<details>
<dfn>
<dialog>
<dir>
<div>
<dl>
<dt>
<em>
<embed>
<fieldset>
<figcaption>
<figure>
<font>
<footer>
<form>
<frame>
<frameset>
<h1> - <h6>
<head>
<header>
<hr>
<html>
<i>
<iframe>
<img>
<input>
<ins>
<kbd>
<label>
<legend>
<li>
<link>
<main>
<map>
<mark>
<meta>
<meter>
<nav>
<noframes>
<noscript>
<object>
<ol>
<optgroup>
<option>
<output>
<p>
<param>
<picture>
<pre>
<progress>
<q>
<rp>
<rt>
<ruby>
<s>
<samp>
<script>
<section>
<select>
<small>
<source>
<span>
<strike>
<strong>
<style>
<sub>
<summary>
<sup>
<svg>
<table>
<tbody>
<td>
<template>
<textarea>
<tfoot>
<th>
<thead>
<time>
<title>
<tr>
<track>
<tt>
<u>
<ul>
<var>
<video>
<wbr>`;
const htmlArray = htmlString.split("\n");

htmlArray.forEach((ele, i, arr) => {
  const tag = ele
    .split("")
    .map((ele, i, arr) => {
      if (ele === "<") {
        return (arr[i] = "&lt;");
      } else if (ele === ">") {
        return (arr[i] = "&gt;");
      } else {
        return (arr[i] = ele);
      }
    })
    .join("");
  const tagName = ele
    .split("")
    .map((ele, i, arr) => {
      if (ele === "<") {
        return (arr[i] = "");
      } else if (ele === ">") {
        return (arr[i] = "");
      } else {
        return (arr[i] = ele);
      }
    })
    .join("");
  let checked;
  checklist.forEach((element) => {
    if (element[0] === `div-${i}`) {
      checked = "checked";
      console.log(checked);
    }
  });
  let html;
  if (tagName === "!DOCTYPE" || tagName === "comment") {
    html = ` <div class="div-${i}" id="div-${i}">
    <span>${i + 1}</span>
       <h2>${tag}</h2>
   
       <div class="links">
       <input type="checkbox" ${checked ?? ""} >
       
         <a href="https://www.youtube.com/results?search_query=html+${tagName}+tag" target="_blank"
           ><img
             src="../images/youtube.png"
             alt=""
         /></a>
      
       </div>
       </div>`;
    container.insertAdjacentHTML("beforeend", html);
    document.querySelector(`.div-${i} .links`).style.justifyContent =
      "space-between";
  } else {
    html = ` <div class="div-${i}" id="div-${i}">
    <span>${i + 1}</span>
       <h2>${tag}</h2>
   
       <div class="links">
       <input type="checkbox" ${checked ?? ""} >
         <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tagName}" target="_blank"
           ><img
             src="../images/mdn.webp"
             alt=""
         /></a>
         <a href="https://www.youtube.com/results?search_query=html+${tagName}+tag" target="_blank"
           ><img
             src="../images/youtube.png"
             alt=""
         /></a>
         <a href="https://www.w3schools.com/tags/tag_${tagName}.asp" target="_blank"
           ><img
             src="../images/channels4_profile.jpg"
             alt=""
         /></a>
       </div>
       </div>`;
    container.insertAdjacentHTML("beforeend", html);
  }
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

const a = document.querySelectorAll(".container a");
a.forEach((ele) => {
  ele.addEventListener("mouseover", function () {
    cursor.classList.add("hovering");
  });
  ele.addEventListener("click", function (e) {
    if (inOutBtn.classList.contains("in")) {
      e.preventDefault();
      window.open(
        `${ele.href}`,
        "_blank",
        `width=600,height=600,left=${window.screen.width / 2 - 300},top=${
          window.screen.height / 2 - 300
        }`
      );
    }
  });
});
console.log(window.screen.width);
