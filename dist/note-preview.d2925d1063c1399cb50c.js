(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{791:function(e,t,r){"use strict";r.r(t),r.d(t,"NotePreview",(function(){return N}));var n=r(0),a=r.n(n),o=r(490),c=r(560),i=r(785),s=r.n(i),u=r(786),l=r.n(u),d=r(33),f={type:"output",regex:'<input type="checkbox" disabled',replace:'<input type="checkbox" '},h=function(e){return r.e(18).then(r.t.bind(null,1261,7)).then((function(t){var r=t.default;r.extension("enableCheckboxes",f);var n=new r.Converter({extensions:["enableCheckboxes"]});n.setFlavor("github"),n.setOption("simpleLineBreaks",!1),n.setOption("ghMentions",!1),n.setOption("smoothLivePreview",!0),n.setOption("tables",!0),n.setOption("strikethrough",!0);var a=e.replace(/([ \t\u2000-\u200a]*)\u2022(\s)/gm,"$1-$2");return function(e){for(var t=(new DOMParser).parseFromString(e,"text/html"),r=t.createTreeWalker(t.body,NodeFilter.SHOW_ALL,null,!1),n=[],a=[],o=function(){var e=r.currentNode;if(function(e){switch(e.nodeName.toLowerCase()){case"head":case"html":case"iframe":case"link":case"meta":case"object":case"script":case"style":return!0;default:return!1}}(e))return a.push(e),"continue";if(!function(e){var t=e.nodeName.toLowerCase();if("input"===t)return"checkbox"===e.getAttribute("type");switch(t){case"#text":case"a":case"article":case"b":case"br":case"blockquote":case"cite":case"code":case"dd":case"del":case"div":case"dt":case"em":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"hr":case"i":case"img":case"ins":case"kbd":case"li":case"ol":case"p":case"pre":case"s":case"span":case"strong":case"sub":case"sup":case"table":case"tbody":case"td":case"th":case"thead":case"tr":case"tt":case"ul":return!0;default:return!1}}(e))return n.push(e),"continue";var t=e.nodeName.toLowerCase();Object(d.filter)(e.attributes,(function(e){var r=e.name,n=e.value;return!function(e,t,r){switch(e){case"a":switch(t){case"href":return!r.toLowerCase().trim().startsWith("javascript");case"alt":case"rel":case"title":return!0;default:return!1}case"img":switch(t){case"alt":case"src":case"title":case"width":return!0;default:return!1}case"input":switch(t){case"disabled":case"checked":case"type":return!0;default:return!1}case"li":switch(t){case"class":switch(r){case"task-list-item":return!0;default:return!1}default:return!1}case"ol":switch(t){case"start":return!0;default:return!1}case"th":case"td":switch(t){case"style":switch(r){case"text-align:center;":case"text-align:left;":case"text-align:right;":return!0;default:return!1}default:return!1}default:return!1}}(t,r,n)&&(("href"!==r&&"src"!==r||!l.a.isWebUri(n))&&("href"!==r||!n.startsWith("mailto:")||!s.a.validate(n.slice(7))))})).forEach((function(t){var r=t.name;return e.removeAttribute(r)}));var o="a"===t&&e.getAttribute("href");"a"!==t||"string"!=typeof o||o.startsWith("mailto:")||(e.setAttribute("target","_blank"),e.setAttribute("rel","external noopener noreferrer")),"li"===t&&"task-list-item"===e.getAttribute("class")&&e.setAttribute("style","list-style: none;")};r.nextNode();)o();return a.forEach((function(e){try{var t;null==e||null===(t=e.parentNode)||void 0===t||t.removeChild(e)}catch(e){}})),n.forEach((function(e){var t,r=e.parentNode;try{for(;t=e.firstChild;)null==r||r.insertBefore(t,e);null==r||r.removeChild(e)}catch(e){}})),t.body.innerHTML}(n.makeHtml(a))}))},p=function(e,t,n){return h(t).then((function(t){return e.innerHTML=t,e})).then((function(e){if(!n)return e.querySelectorAll("pre code");var t=Object(c.a)(n).map((function(e){return e.toLocaleLowerCase()}));if(!t.length)return e.querySelectorAll("pre code");for(var r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode:function(e){return t.some((function(t){var r;return null===(r=e.textContent)||void 0===r?void 0:r.toLocaleLowerCase().includes(t)}))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}},!1),a=[],o=r.currentNode;o;)a.push(o),o=r.nextNode();return a.forEach((function(e){return function e(t,r){var n=t.parentNode;r.forEach((function(t){n.childNodes.forEach((function(n){var a,o,c;if(n.nodeType===Node.TEXT_NODE&&(null===(a=n.textContent)||void 0===a?void 0:a.toLocaleLowerCase().includes(t))){var i=null===(o=n.textContent)||void 0===o?void 0:o.toLocaleLowerCase().indexOf(t),s=n.splitText(i),u=s.splitText(t.length),l=document.createElement("span");l.setAttribute("class","search-match"),null===(c=s.parentNode)||void 0===c||c.replaceChild(l,s),l.appendChild(s),e(u,r)}}))}))}(e,t)})),e.querySelectorAll("pre code")})).then((function(e){if(e.length)return r.e(13).then(r.t.bind(null,1260,7)).then((function(t){var r=t.default;e.forEach(r.highlightBlock)})).catch()}))},v=r(133),m=r(589),b=r(506);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var N=function(e){var t,r=e.editNote,o=e.fontSize,c=e.isFocused,i=e.note,s=e.noteId,u=e.openNote,l=e.searchQuery,d=e.showRenderedView,f=Object(n.useRef)();return Object(n.useEffect)((function(){var e=function(e){if(!c)return!0;if(!document.getSelection().isCollapsed)return!0;var t=document.createElement("div");p(t,i.content,l).then((function(){try{e.clipboardData.setData("text/plain",t.innerHTML)}catch(e){navigator.clipboard.writeText(t.innerHTML)}})),e.preventDefault()};return document.addEventListener("copy",e,!1),function(){return document.removeEventListener("copy",e,!1)}}),[c,l]),Object(n.useEffect)((function(){var e,t=function(e){for(var t=e.target;null!==t;t=t.parentNode){if("A"===t.tagName){e.preventDefault(),e.stopPropagation();var n=t;if(n.href.startsWith("simplenote://note/")){var a=/^simplenote:\/\/note\/(.+)$/.exec(n.href);if(!a)return;var o=w(a,2),c=(o[0],o[1]);return void u(c)}return void(n.href.startsWith("http://localhost")||Object(v.a)(n.href))}if("task-list-item"===t.className){var l=function(){e.preventDefault(),e.stopPropagation();var n=f.current.querySelectorAll("[data-markdown-root] .task-list-item"),a=Array.prototype.indexOf.call(n,t),o=0,c=i.content.replace(/[\ue000|\ue001]/g,(function(e){return o++===a?""===e?"":"":e}));return r(s,{content:c}),{v:void 0}}();if("object"===y(l))return l.v}}};return null===(e=f.current)||void 0===e||e.addEventListener("click",t,!0),function(){var e;return null===(e=f.current)||void 0===e?void 0:e.removeEventListener("click",t,!0)}}),[]),Object(n.useEffect)((function(){var e;f.current&&((null==i?void 0:i.content)&&d?p(f.current,i.content,l):f.current.innerText=Object(m.a)(null!==(e=null==i?void 0:i.content)&&void 0!==e?e:""))}),[null==i?void 0:i.content,l,d]),a.a.createElement("div",{className:"note-detail-wrapper"},a.a.createElement("div",{className:"note-detail note-detail-preview"},a.a.createElement("div",{ref:f,className:"note-detail-markdown theme-color-bg theme-color-fg","data-markdown-root":!0,style:{fontSize:"".concat(o,"px")}},a.a.createElement("div",{style:{whiteSpace:"pre"}},!d&&Object(m.a)(null!==(t=null==i?void 0:i.content)&&void 0!==t?t:"")))))},x={editNote:b.a.data.editNote,openNote:b.a.ui.selectNote};t.default=Object(o.b)((function(e,t){var r,n,a=null!==(r=t.noteId)&&void 0!==r?r:e.ui.openedNote,o=null!==(n=t.note)&&void 0!==n?n:e.data.notes.get(a);return{fontSize:e.settings.fontSize,isFocused:0===e.ui.dialogs.length&&!e.ui.showNoteInfo,note:o,noteId:a,searchQuery:e.ui.searchQuery,showRenderedView:!!(null==o?void 0:o.systemTags.includes("markdown"))&&!e.ui.editMode}}),x)(N)}}]);