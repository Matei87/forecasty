(this["webpackJsonpweather-context"]=this["webpackJsonpweather-context"]||[]).push([[0],{16:function(e,t,a){e.exports=a(42)},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),s=a(3),u=a.n(s),m=a(14),o=a(2),i=Object(n.createContext)(),p=a(15),h=a.n(p),d=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),p=Object(o.a)(s,2),d=p[0],f=p[1],E=Object(n.useState)(""),_=Object(o.a)(E,2),b=(_[0],_[1]),v=Object(n.useState)(),w=Object(o.a)(v,2),N=w[0],j=w[1],x=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,b(t),t){e.next=4;break}return e.abrupt("return",(j("Please enter the name of the city !"),l(null)));case 4:return"99c761bf3c43e7d491ccf9d3610ca963",a="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("99c761bf3c43e7d491ccf9d3610ca963"),n=h.a.get(a),e.next=9,n;case 9:r=e.sent,l(r.data.main),f(r.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("Error: ",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x()}),[]),r.a.createElement(i.Provider,{value:{api_call:x,main:c,text:d,error:N}},e.children)},f=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"header-title"}," Forecast Finder"))},E=function(){var e=Object(n.useState)(new Date),t=Object(o.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){var e=setInterval((function(){return l()}),1e3);return function(){clearInterval(e)}}));var l=function(){c(new Date)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"clock"}," ",a.toLocaleString("en-GB").replace(", "," - ")))},_=(a(39),function(){var e=Object(n.useContext)(i).api_call,t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:"weather-search"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(t.target[0].value),l("")},className:"weather-search__form"},r.a.createElement("input",{autoComplete:"off",type:"text",className:"weather-search__input",name:"location",value:c,onChange:function(e){l(e.target.value)}.bind(void 0)}),r.a.createElement("div",{className:"weather-search__submit"},r.a.createElement("button",{className:"weather-search__button"},"\u2192"))))}),b=function(){var e=Object(n.useContext)(i),t=e.main,a=e.text,c=e.error,l=function(e){return(e-273.15).toFixed(1)};return r.a.createElement(r.a.Fragment,null," ",t?r.a.createElement("div",{className:"weather-data"},r.a.createElement("p",{className:"weather__tagline"},"Weather forecast for ",r.a.createElement("span",{className:"weather-data__city"},a.name)),r.a.createElement("div",{className:"weather-data__box"},r.a.createElement("span",{className:"weather-data__property"},r.a.createElement("p",{className:"weather-data__title"},"Temperature"),r.a.createElement("p",{className:"weather-data__value"},l(t.temp),"\xb0C")),r.a.createElement("span",{className:"weather-data__property"},r.a.createElement("p",{className:"weather-data__title"},"Humidity"),r.a.createElement("p",{className:"weather-data__value"},t.humidity+"%")),r.a.createElement("span",{className:"weather-data__property"},r.a.createElement("p",{className:"weather-data__title"},"Min/Max"),r.a.createElement("p",{className:"weather-data__value"},l(t.temp_min),"/",l(t.temp_max))))):r.a.createElement("p",{style:{textAlign:"center"}},c))},v=(a(40),a(41),function(){return r.a.createElement(d,null,r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(E,null),r.a.createElement(_,null),r.a.createElement(b,null)))});l.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.37a37faa.chunk.js.map