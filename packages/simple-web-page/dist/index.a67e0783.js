let e;function t(e,t,n,l,o){let i=void 0===t?void 0:t.key;return{sel:e,data:t,children:n,text:l,elm:o,key:i}}const n=Array.isArray;function l(e){return"string"==typeof e||"number"==typeof e||e instanceof String||e instanceof Number}function o(e){if(i(e)){for(;e&&i(e);)e=r(e).parent;return null!=e?e:null}return e.parentNode}function i(e){return 11===e.nodeType}function r(e,t){var n,l,o;return null!==(n=e.parent)&&void 0!==n||(e.parent=null!=t?t:null),null!==(l=e.firstChildNode)&&void 0!==l||(e.firstChildNode=e.firstChild),null!==(o=e.lastChildNode)&&void 0!==o||(e.lastChildNode=e.lastChild),e}const d={createElement:function(e,t){return document.createElement(e,t)},createElementNS:function(e,t,n){return document.createElementNS(e,t,n)},createTextNode:function(e){return document.createTextNode(e)},createDocumentFragment:function(){return r(document.createDocumentFragment())},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){if(i(e)){let t=e;for(;t&&i(t);)t=r(t).parent;e=null!=t?t:e}i(t)&&(t=r(t,e)),n&&i(n)&&(n=r(n).firstChildNode),e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){i(t)&&(t=r(t,e)),e.appendChild(t)},parentNode:o,nextSibling:function(e){var t;if(i(e)){let n=r(e),l=o(n);if(l&&n.lastChildNode){let e=Array.from(l.childNodes),o=e.indexOf(n.lastChildNode);return null!==(t=e[o+1])&&void 0!==t?t:null}return null}return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},getTextContent:function(e){return e.textContent},isElement:function(e){return 1===e.nodeType},isText:function(e){return 3===e.nodeType},isComment:function(e){return 8===e.nodeType},isDocumentFragment:i};function u(e){return void 0===e}function a(e){return void 0!==e}const c=t("",{},[],void 0,void 0);function f(e,t){var n,l;let o=e.key===t.key,i=(null===(n=e.data)||void 0===n?void 0:n.is)===(null===(l=t.data)||void 0===l?void 0:l.is),r=e.sel===t.sel,d=!!e.sel||e.sel!==t.sel||typeof e.text==typeof t.text;return r&&o&&i&&d}const s=["create","update","remove","destroy","pre","post"];function v(e,o,i){let r,d,u,a={};if(void 0!==i?(null!==o&&(a=o),n(i)?r=i:l(i)?d=i.toString():i&&i.sel&&(r=[i])):null!=o&&(n(o)?r=o:l(o)?d=o.toString():o&&o.sel?r=[o]:a=o),void 0!==r)for(u=0;u<r.length;++u)l(r[u])&&(r[u]=t(void 0,void 0,void 0,r[u],void 0));return e.startsWith("svg")&&(3===e.length||"."===e[3]||"#"===e[3])&&function e(t,n,l){if(t.ns="http://www.w3.org/2000/svg","foreignObject"!==l&&void 0!==n)for(let t=0;t<n.length;++t){let l=n[t];if("string"==typeof l)continue;let o=l.data;void 0!==o&&e(o,l.children,l.sel)}}(a,r,e),t(e,a,r,d,void 0)}const m=function(e,o,i){let r={create:[],update:[],remove:[],destroy:[],pre:[],post:[]};for(let t of s)for(let n of e){let e=n[t];void 0!==e&&r[t].push(e)}function v(e,t){var o,i,f;let s;let m=e.data;if(void 0!==m){let t=null===(o=m.hook)||void 0===o?void 0:o.init;a(t)&&(t(e),m=e.data)}let h=e.children,g=e.sel;if("!"===g)u(e.text)&&(e.text=""),e.elm=d.createComment(e.text);else if(""===g)e.elm=d.createTextNode(e.text);else if(void 0!==g){let o=g.indexOf("#"),u=g.indexOf(".",o),f=o>0?o:g.length,p=u>0?u:g.length,x=-1!==o||-1!==u?g.slice(0,Math.min(f,p)):g,C=e.elm=a(m)&&a(s=m.ns)?d.createElementNS(s,x,m):d.createElement(x,m);for(f<p&&C.setAttribute("id",g.slice(f+1,p)),u>0&&C.setAttribute("class",g.slice(p+1).replace(/\./g," ")),s=0;s<r.create.length;++s)r.create[s](c,e);if(l(e.text)&&(!n(h)||0===h.length)&&d.appendChild(C,d.createTextNode(e.text)),n(h))for(s=0;s<h.length;++s){let e=h[s];null!=e&&d.appendChild(C,v(e,t))}let y=e.data.hook;a(y)&&(null===(i=y.create)||void 0===i||i.call(y,c,e),y.insert&&t.push(e))}else e.elm=d.createTextNode(e.text);return e.elm}function m(e,t,n,l,o,i){for(;l<=o;++l){let o=n[l];null!=o&&d.insertBefore(e,v(o,i),t)}}function h(e){var t,n;let l=e.data;if(void 0!==l){null===(n=null===(t=null==l?void 0:l.hook)||void 0===t?void 0:t.destroy)||void 0===n||n.call(t,e);for(let t=0;t<r.destroy.length;++t)r.destroy[t](e);if(void 0!==e.children)for(let t=0;t<e.children.length;++t){let n=e.children[t];null!=n&&"string"!=typeof n&&h(n)}}}function g(e,t,n,l){for(var o,i;n<=l;++n){let l,u;let c=t[n];if(null!=c){if(a(c.sel)){h(c),l=r.remove.length+1,u=function(e,t){return function(){if(0==--t){let t=d.parentNode(e);null!==t&&d.removeChild(t,e)}}}(c.elm,l);for(let e=0;e<r.remove.length;++e)r.remove[e](c,u);let e=null===(i=null===(o=null==c?void 0:c.data)||void 0===o?void 0:o.hook)||void 0===i?void 0:i.remove;a(e)?e(c,u):u()}else c.children?(h(c),g(e,c.children,0,c.children.length-1)):d.removeChild(e,c.elm)}}}return function(e,n){var l,o;let i,c,s;let h=[];for(i=0;i<r.pre.length;++i)r.pre[i]();for((l=e,d.isElement(l))?e=function(e){let n=e.id?"#"+e.id:"",l=e.getAttribute("class"),o=l?"."+l.split(" ").join("."):"";return t(d.tagName(e).toLowerCase()+n+o,{},[],void 0,e)}(e):(o=e,d.isDocumentFragment(o)&&(e=t(void 0,{},[],void 0,e))),f(e,n)?function e(t,n,l){var o,i,c,s,h,p,x,C;let y=null===(o=n.data)||void 0===o?void 0:o.hook;null===(i=null==y?void 0:y.prepatch)||void 0===i||i.call(y,t,n);let N=n.elm=t.elm;if(t===n)return;if(void 0!==n.data||a(n.text)&&n.text!==t.text){null!==(c=n.data)&&void 0!==c||(n.data={}),null!==(s=t.data)&&void 0!==s||(t.data={});for(let e=0;e<r.update.length;++e)r.update[e](t,n);null===(x=null===(p=null===(h=n.data)||void 0===h?void 0:h.hook)||void 0===p?void 0:p.update)||void 0===x||x.call(p,t,n)}let k=t.children,T=n.children;u(n.text)?a(k)&&a(T)?k!==T&&function(t,n,l,o){let i,r,a,c=0,s=0,h=n.length-1,p=n[0],x=n[h],C=l.length-1,y=l[0],N=l[C];for(;c<=h&&s<=C;)null==p?p=n[++c]:null==x?x=n[--h]:null==y?y=l[++s]:null==N?N=l[--C]:f(p,y)?(e(p,y,o),p=n[++c],y=l[++s]):f(x,N)?(e(x,N,o),x=n[--h],N=l[--C]):f(p,N)?(e(p,N,o),d.insertBefore(t,p.elm,d.nextSibling(x.elm)),p=n[++c],N=l[--C]):f(x,y)?(e(x,y,o),d.insertBefore(t,x.elm,p.elm),x=n[--h],y=l[++s]):(void 0===i&&(i=function(e,t,n){var l;let o={};for(let i=t;i<=n;++i){let t=null===(l=e[i])||void 0===l?void 0:l.key;void 0!==t&&(o[t]=i)}return o}(n,c,h)),u(r=i[y.key])?(d.insertBefore(t,v(y,o),p.elm),y=l[++s]):u(i[N.key])?(d.insertBefore(t,v(N,o),d.nextSibling(x.elm)),N=l[--C]):((a=n[r]).sel!==y.sel?d.insertBefore(t,v(y,o),p.elm):(e(a,y,o),n[r]=void 0,d.insertBefore(t,a.elm,p.elm)),y=l[++s]));s<=C&&m(t,null==l[C+1]?null:l[C+1].elm,l,s,C,o),c<=h&&g(t,n,c,h)}(N,k,T,l):a(T)?(a(t.text)&&d.setTextContent(N,""),m(N,null,T,0,T.length-1,l)):a(k)?g(N,k,0,k.length-1):a(t.text)&&d.setTextContent(N,""):t.text!==n.text&&(a(k)&&g(N,k,0,k.length-1),d.setTextContent(N,n.text)),null===(C=null==y?void 0:y.postpatch)||void 0===C||C.call(y,t,n)}(e,n,h):(c=e.elm,s=d.parentNode(c),v(n,h),null!==s&&(d.insertBefore(s,n.elm,d.nextSibling(c)),g(s,[e],0,0))),i=0;i<h.length;++i)h[i].data.hook.insert(h[i]);for(i=0;i<r.post.length;++i)r.post[i]();return n}}([]);let h={count:0};!function(t,n){function l(t){h={...h,...t},e()}function o(){m(t,n(h,l))}e=()=>{console.log("State changed:",h),o()},console.log("Component mounted"),o()}(document.getElementById("app"),(e,t)=>v("div",[v("h1",e.count),v("button",{on:{click:()=>t({count:e.count+1})}},"Add")]));
//# sourceMappingURL=index.a67e0783.js.map
