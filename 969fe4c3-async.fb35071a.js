(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@ant-design/x"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@ant-design/x"]||[]).push([["969fe4c3"],{"0a010bc1":function(e,t,r){"use strict";r.d(t,"__esModule",{value:!0}),r.d(t,"DarkContext",{enumerable:!0,get:function(){return n;}});let n=r("777fffbe")._(r("3e6b097d")).default.createContext(!1);},"33238a70":function(e,t,r){"use strict";r.d(t,"__esModule",{value:!0}),r.d(t,"default",{enumerable:!0,get:function(){return s;}});var n=r("852bbaa9"),a=r("8090cfc0"),i=r("c5d21053"),o=r("0ba2ace3"),l=n._(r("3e6b097d")),s=({children:e,theme:t,...r})=>{let{getPrefixCls:n,iconPrefixCls:s}=(0,l.useContext)(i.ConfigProvider.ConfigContext),d=n(),{token:c}=i.theme.useToken();return l.default.useEffect(()=>{i.ConfigProvider.config({theme:t});},[t]),(0,a.jsx)(o.ThemeProvider,{...r,theme:t,customToken:{headerHeight:80,bannerHeight:38,indexRadius:24,pcMaxWidth:1560,pcContainerMargin:100,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:c.colorFillTertiary,antCls:`.${d}`,iconCls:`.${s}`,marginFarXS:c.marginXXL/6*7,marginFarSM:c.marginXXL/3*5,marginFar:2*c.marginXXL,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:80+c.margin},children:e});};},"3f17f50e":function(e,t,r){"use strict";r.d(t,"__esModule",{value:!0}),r.d(t,"default",{enumerable:!0,get:function(){return i;}});var n=r("8090cfc0"),a=r("2c3c6094"),i=()=>(0,n.jsx)(a.Assistant,{showBubble:!0,isVisible:!1,bottom:48,token:"e3092c32-9ed9-44c2-ad0c-7251e382c2df",apiDomain:"https://api.petercat.ai"});},e540a199:function(e,t,r){"use strict";var n=r("852bbaa9")._;r.d(t,"__esModule",{value:!0}),r.e(t,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return v;},default:function(){return S;}});var a=r("777fffbe"),i=r("852bbaa9"),o=r("8090cfc0"),l=r("a307cec5"),s=r("9e2dcb94"),d=r("c5d21053"),c=r("3a2876c3"),u=i._(r("3e6b097d")),f=r("0a010bc1"),m=a._(r("d7250faa")),h=a._(r("6d8f1b37")),g=a._(r("33238a70")),b=a._(r("3f17f50e")),_=a._(r("968104eb"));let p=u.default.lazy(()=>Promise.all([r.ensure("vendors_3"),r.ensure("common"),r.ensure("22d5b106")]).then(r.dr(n,r.bind(r,"22d5b106")))),v="ANT_DESIGN_NOT_SHOW_BANNER",x=(e=[])=>e.map(e=>"dark"===e?d.theme.darkAlgorithm:"compact"===e?d.theme.compactAlgorithm:null).filter(Boolean);var S=()=>{let e=(0,c.useOutlet)(),{pathname:t}=(0,h.default)(),{token:r}=d.theme.useToken(),[n,a]=(0,c.useSearchParams)(),[{theme:i=[],direction:v,isMobile:S},k]=(0,m.default)({isMobile:!1,direction:"ltr",theme:[]}),M=u.default.useMemo(()=>""===t||t.startsWith("/index"),[t]),y=(0,u.useCallback)(e=>{k(t=>({...t,...e}));let t=n.toString(),r=n;Object.entries(e).forEach(([e,t])=>{if("direction"===e&&("rtl"===t?r.set("direction","rtl"):r.delete("direction")),"theme"===e){var n;r=(0,c.createSearchParams)({...r,theme:t.filter(e=>"light"!==e)}),null===(n=document.querySelector("html"))||void 0===n||n.setAttribute("data-prefers-color",t.includes("dark")?"dark":"light");}}),r.toString()!==t&&a(r);},[n,a]),T=()=>{y({isMobile:window.innerWidth<768});};(0,u.useEffect)(()=>{let e=document.querySelector('meta[name="theme-color"]');e&&e.setAttribute("content",M?"#0c0e10cc":r.colorBgContainer);},[i.length,M]),(0,u.useEffect)(()=>{let e=n.getAll("theme");return k({theme:e,direction:"rtl"===n.get("direction")?"rtl":"ltr"}),document.documentElement.setAttribute("data-prefers-color",e.includes("dark")?"dark":"light"),T(),window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T);};},[]);let C=u.default.useMemo(()=>({direction:v,updateSiteConfig:y,theme:i,isMobile:S}),[S,v,y,i]),j=u.default.useMemo(()=>({algorithm:M?x(["dark"]):x(i),token:{motion:!i.includes("motion-off")},cssVar:!0,hashed:!1}),[i,t]),[L]=u.default.useState(()=>(0,l.createCache)());(0,c.useServerInsertedHTML)(()=>{let e=(0,l.extractStyle)(L,{plain:!0,types:"style"});return(0,o.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:e}});}),(0,c.useServerInsertedHTML)(()=>{let e=(0,l.extractStyle)(L,{plain:!0,types:["cssVar","token"]});return(0,o.jsx)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:e}});}),(0,c.useServerInsertedHTML)(()=>(0,o.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,s.getSandpackCssText)()}}));let N=t.startsWith("/~demos"),A=e;return N||(A=(0,o.jsxs)(d.App,{children:[e,(0,o.jsxs)(u.Suspense,{children:[(0,o.jsx)(p,{value:i,onChange:e=>y({theme:e})}),(0,o.jsx)(b.default,{})]})]})),(0,o.jsx)(f.DarkContext.Provider,{value:i.includes("dark"),children:(0,o.jsx)(l.StyleProvider,{cache:L,linters:[l.legacyNotSelectorLinter,l.parentSelectorLinter,l.NaNLinter],children:(0,o.jsx)(_.default.Provider,{value:C,children:(0,o.jsx)(g.default,{theme:j,children:A})})})});};}}]);
//# sourceMappingURL=969fe4c3-async.fb35071a.js.map