var cookieName="uid",URLParameterName="dir",DirParameter="ref",cookiePersistDays=14,cookiePath="",cookieDomain="."+window.location.hostname,cookieSecure=!0;function createCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+1e3*(60*(60*(24*c)))),d="; expires="+e.toGMTString()}var f=a+"="+b+d;f+="; path="+(cookiePath.length?cookiePath:"/"),f+="; domain="+(cookieDomain.length?cookieDomain:window.location.hostname),cookieSecure&&(f+="; secure"),document.cookie=f}function readCookie(a){for(var b,d=a+"=",e=document.cookie.split(";"),f=0;f<e.length;f++){for(b=e[f];" "===b.charAt(0);)b=b.substring(1,b.length);if(0===b.indexOf(d))return b.substring(d.length,b.length)}return null}function eraseCookie(a){createCookie(a,"",-1)}function encode(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function decode(a){return a.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">")}function trim(a){if(null===a)return"";var b;return b=a.replace(/^\s*/,"").replace(/\s*$/,""),b=b.replace(/\s{2,}/," "),b}function getParameterByName(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b="[\\?&]"+a+"=([^&#]*)",c=new RegExp(b),d=c.exec(window.location.href);return null===d?"":decodeURIComponent(d[1].replace(/\+/g," "))}function getUrlParameter(a){var b=getParameterByName(URLParameterName);a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var c="[\\?&]"+a+"=([^&#]*)",d=new RegExp(c),e=d.exec(b);return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))}function getResponse(){var a=getUrlParameter(DirParameter);alert(`formid: ${a}`);var b=getParameterByName(URLParameterName);alert(`URL: ${b}`);var c=fetch(b,{method:"POST",body:{userCode:a},headers:{"Content-Type":"application/json"}});console.log(`Response: ${JSON.stringify(c)}`);var d=document.getElementById("beenform"),e=document.createElement("input");return e.type="text",e.name="AirtableRecord",e.value=c.id,d.appendChild(e),Object.keys(c).forEach(function(a){var b=document.getElementsByName(a);for(i=0;i<b.length;i++)"checkbox"==b[i].type?b[i].checked=c[a]:b[i].value=c[a]}),c}function CaptureCode(){var a=getUrlParameter(DirParameter),b=getResponse();alert(`q: ${json.stringify({r:b})}`),null!==a&&""!==a&&(eraseCookie(cookieName),createCookie(cookieName,a,cookiePersistDays))}function SaveCode(a){null!==a&&""!==a&&(eraseCookie(cookieName),createCookie(cookieName,a,cookiePersistDays))}function SaveCodeManually(a,b,c){null!==a&&""!==a&&null!==b&&""!==b&&(eraseCookie(a),createCookie(a,b,c))}function GetCode(){return readCookie(cookieName)}function GetCodeByName(a){return readCookie(a)}CaptureCode();