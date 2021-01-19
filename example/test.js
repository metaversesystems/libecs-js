module.exports=function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function u(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=f(t);if(n){var r=f(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return c(this,e)}}function c(t,n){return!n||"object"!==o(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=e(1),y=l.Component,p=l.Manager,h=l.System,v=new p,m=function(t){u(e,t);var n=s(e);function e(t){var o;return i(this,e),(o=n.call(this,t)).Type="PositionComponent",o}return e}(y),d=function(t){u(e,t);var n=s(e);function e(t){var o;return i(this,e),(o=n.call(this,t)).Type="VelocityComponent",o}return e}(y),b=function(t){u(c,t);var n,e,o,a=s(c);function c(t){var n;return i(this,c),void 0===t&&(t={}),(n=a.call(this,t)).Handle="PhysicsSystem",n.ComponentRequest("PositionComponent"),n.ComponentRequest("VelocityComponent"),n.frame_time=void 0===t.frame_time?20:t.frame_time,n}return n=c,(e=[{key:"Update",value:function(){var t=this.DeltaTimeGet(),n=t/1e3;console.log("Last run "+t+"ms ago.");var e=this.ComponentsGet();Object.keys(e.PositionComponent).forEach((function(t){var o=e.PositionComponent[t],r=e.VelocityComponent[t];o.x+=r.x*n,o.y+=r.y*n,console.log(t+" - Position - x: "+Number.parseFloat(o.x).toFixed(2)+", y: "+Number.parseFloat(o.y).toFixed(2)+"   Velocity - x: "+r.x+", y: "+r.y)}))}}])&&r(n.prototype,e),o&&r(n,o),c}(h),C=v.Container();C.System(new b);var g=C.Entity();g.Component(new m({x:10,y:20})),g.Component(new d({x:1,y:0}));var S=C.Export();console.log(JSON.stringify(S,null,2)),C.Start(500)},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){var n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==e(t)&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)o.d(r,i,function(n){return t[n]}.bind(null,i));return r},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=1)}([function(t,n,e){var o=e(6),r=e(7);t.exports=function(t,n,e){var i=n&&e||0;"string"==typeof t&&(n="binary"===t?new Array(16):null,t=null);var u=(t=t||{}).random||(t.rng||o)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,n)for(var a=0;a<16;++a)n[i+a]=u[a];return n||r(u)}},function(t,n,e){var o=e(2),r=e(3),i=e(8);t.exports={Component:o,Manager:r,System:i}},function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var o=function(){function t(n){var e=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.EntityHandle=null,Object.keys(n).forEach((function(t){e[t]=n[t]}))}var n,o;return n=t,(o=[{key:"Export",value:function(){var t=this,n={};return Object.keys(this).forEach((function(e){"EntityHandle"!=e&&"Type"!=e&&(n[e]=t[e])})),n}}])&&e(n.prototype,o),t}();t.exports=o},function(t,n,e){function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var r=e(4),i=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.Containers=[],this.Running=!0}var n,e;return n=t,(e=[{key:"ContainerCreate",value:function(t){var n=new r(t);return this.Containers[n.Handle]=n,this.Containers[n.Handle]}},{key:"Container",value:function(t){return void 0!==t?void 0!==containers[t]?containers[t]:this.ContainerCreate(t):this.ContainerCreate()}},{key:"ContainersGet",value:function(){return Containers}},{key:"ContainersKill",value:function(t){t.forEach((function(t){clearInterval(t.interval)}))}},{key:"IsRunning",value:function(){return Running}},{key:"Shutdown",value:function(){Running=!1,this.ContainersKill(this.ContainersGet())}}])&&o(n.prototype,e),t}();t.exports=i},function(t,n,e){function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var r=e(5),i=e(0),u=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.Handle=n,void 0===this.Handle&&(this.Handle=i()),this.Entities={},this.Systems={},this.Components={},this.SleepInterval=1e3/30,this.IntervalFunc=null,this.Running=!1}var n,e;return n=t,(e=[{key:"Start",value:function(t){void 0!==t&&(this.SleepInterval=t);var n=this;this.SystemsInit(),this.IntervalFunc=setInterval((function(){n.Update()}),this.SleepInterval),this.Running=!0}},{key:"SystemsInit",value:function(){var t=this;Object.keys(this.Systems).forEach((function(n){t.Systems[n].Init()}))}},{key:"Update",value:function(){var t=this;Object.keys(this.Systems).forEach((function(n){t.Systems[n].Update()})),!1===this.Running&&clearInterval(this.IntervalFunc)}},{key:"ManagerSet",value:function(t){this.Manager=t}},{key:"HandleGet",value:function(){return this.Handle}},{key:"Entity",value:function(t){return this.EntityCreate(t)}},{key:"System",value:function(t){return t.ContainerSet(this),this.Systems[t.HandleGet()]=t,t}},{key:"EntityCreate",value:function(t){var n;return void 0===t?(n=new r,this.Entities[n.HandleGet()]=n):void 0===this.Entities[t]?(n=new r(t),this.Entities[n.HandleGet()]=n):n=this.Entities[t],n.ContainerSet(this),n}},{key:"EntityDestroy",value:function(t){var n=this;Object.keys(this.Components).forEach((function(e){delete n.Components[e][t]}))}},{key:"Component",value:function(t){return void 0===this.Components[t.Type]&&(this.Components[t.Type]={}),this.Components[t.Type][t.EntityHandle]=t,t}},{key:"ComponentsGet",value:function(t){var n=this,e={};return t.forEach((function(t){e[t]=n.Components[t],void 0===e[t]&&(e[t]={})})),e}},{key:"Export",value:function(){var t=this,n={};return n.Handle=this.Handle,n.Entities=[],n.Systems=[],Object.keys(this.Entities).forEach((function(e){n.Entities.push(t.Entities[e].Export())})),Object.keys(this.Systems).forEach((function(e){n.Systems.push(t.Systems[e].Export())})),n}}])&&o(n.prototype,e),t}();t.exports=u},function(t,n,e){function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var r=e(0),i=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.Handle=r(),this.Components={}}var n,e;return n=t,(e=[{key:"HandleGet",value:function(){return this.Handle}},{key:"ContainerSet",value:function(t){this.Container=t}},{key:"Component",value:function(t){return t.EntityHandle=this.Handle,void 0===this.Components[t.Type]&&(this.Components[t.Type]={}),this.Components[t.Type][this.Handle]=t,this.Container.Component(t)}},{key:"Export",value:function(){var t=this,n={Handle:this.Handle,Components:{}};return Object.keys(this.Components).forEach((function(e){Object.keys(t.Components[e]).forEach((function(o){n.Components[e]=t.Components[e][o].Export()}))})),n}},{key:"destroy",value:function(){this.Container.EntityDestroy(this.Handle)}}])&&o(n.prototype,e),t}();t.exports=i},function(t,n){var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(e){var o=new Uint8Array(16);t.exports=function(){return e(o),o}}else{var r=new Array(16);t.exports=function(){for(var t,n=0;n<16;n++)0==(3&n)&&(t=4294967296*Math.random()),r[n]=t>>>((3&n)<<3)&255;return r}}},function(t,n){for(var e=[],o=0;o<256;++o)e[o]=(o+256).toString(16).substr(1);t.exports=function(t,n){var o=n||0,r=e;return[r[t[o++]],r[t[o++]],r[t[o++]],r[t[o++]],"-",r[t[o++]],r[t[o++]],"-",r[t[o++]],r[t[o++]],"-",r[t[o++]],r[t[o++]],"-",r[t[o++]],r[t[o++]],r[t[o++]],r[t[o++]],r[t[o++]],r[t[o++]]].join("")}},function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var o=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.Handle=null,this.RequestedComponents=[],this.LastTime=(new Date).getTime()}var n,o;return n=t,(o=[{key:"HandleGet",value:function(){return this.Handle}},{key:"ContainerSet",value:function(t){this.Container=t}},{key:"ComponentRequest",value:function(t){this.RequestedComponents.includes(t)||this.RequestedComponents.push(t)}},{key:"ComponentsGet",value:function(){return this.Container.ComponentsGet(this.RequestedComponents)}},{key:"DeltaTimeGet",value:function(){var t=(new Date).getTime(),n=t-this.LastTime;return this.LastTime=t,n}},{key:"Init",value:function(){}},{key:"Export",value:function(){var t=this,n={Handle:this.Handle};return Object.keys(this).forEach((function(e){"Handle"!=e&&"Container"!=e&&"RequestedComponents"!=e&&"LastTime"!=e&&(n[e]=t[e])})),n}}])&&e(n.prototype,o),t}();t.exports=o}])}]);