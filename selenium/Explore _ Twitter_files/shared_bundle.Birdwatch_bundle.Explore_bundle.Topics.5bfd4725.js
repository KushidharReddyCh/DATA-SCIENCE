(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"180P":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=e=>{const t=(JSON.stringify(e)||"").split("");t.sort();const n=t.join("");return i(n,0).toString()},i=(e,t)=>{const n="string"==typeof e?e:String(e);let a=t;for(let e=0;e<n.length;e++){a=(a<<5)-a+n.charCodeAt(e),a&=a}return a}},I6Uj:function(e,t,n){"use strict";var a=n("ERkP");function i(e){return null}var r=n("97Jx"),o=n.n(r),c=n("3XMw"),s=n.n(c),l=n("/yvb"),u=n("fn9Y");const p=s.a.c0530da5,d=s.a.ifea3114;var b=function(e){return a.createElement(l.a,{accessibilityLabel:p,hoverLabel:{label:d},icon:a.createElement(u.a,null),onPress:e.onPress,pullRight:!0,renderMenu:e.renderMenu,style:e.style,testID:e.testID,type:"primaryText"})},m="share-button",h="share-by-tweet",f=n("1YZw"),g=n("CaKu");n("Cm4o");function v(e){const t=new URL(e,"https://twitter.com");return t.searchParams.has("s")||t.searchParams.set("s","20"),t.href}var y=n("SrIh"),E=n("Irs7"),C=n("uDfI"),I=n("zCf4"),w=n("jwTb"),T=n("SOvA"),S=n("I/9y");const x={tweet:{isAvailable:()=>!0,scribeAction:"share_via_tweet",Icon:w.a,text:s.a.fcc684a9,testID:h},dm:{isAvailable:()=>!0,scribeAction:"share_via_dm",Icon:T.a,text:s.a.f61c4bbf},copy:{isAvailable:()=>g.a.isAvailable(),scribeAction:"copy_link",Icon:S.a,text:s.a.e05c00b4},via:{isAvailable:()=>"function"==typeof window.navigator.share,scribeAction:"share_via",Icon:u.a,text:s.a.if23a251}};function L(e){const t=Object(E.b)();return{getActionItem:function(e,t){const n=Object(C.c)(),i=Object(I.g)();return a.useMemo((()=>function(a){const{isAvailable:r,scribeAction:o,...c}=x[a.type];if(!r())return null;const s={...c};function l(){const r=a.shareText||e.shareText,c=e.url,s={...e.scribeNamespace,action:o,...a.scribeNamespace},l={text:r,url:c},u={analytics:t,dispatch:n,history:i,mergedScribeNamespace:s};!function(e,t,n){const a=()=>n.analytics.scribe(n.mergedScribeNamespace);switch(e){case"dm":return a(),void n.history.push({...k(t),pathname:"/messages/compose"});case"copy":return g.a.setString(v(t.url)),a(),void n.dispatch(Object(f.b)({text:O.copyLinkSuccessMessage}));case"tweet":return a(),void n.history.push({pathname:"/compose/tweet",...k(t),state:{positionCursorAtBeginning:!0}});case"via":return void window.navigator.share({text:t.text,url:v(t.url)}).then(a).catch((()=>{n.analytics.scribe({...n.mergedScribeNamespace,action:"share_error"})}));default:Object(y.a)(`[ShareButton] Unexpected share type [${e}]`)}}(a.type,l,u)}a.label&&(s.text=a.label);return{...s,onClick:l}}),[t,n,i,e.scribeNamespace,e.shareText,e.url])}(e,t),analytics:t}}const O={copyLinkSuccessMessage:s.a.f88553c8,shareTextPrefixFormatter:s.a.gb5851d7};function k(e){const t=e.url,n=e.text;return{query:{text:n?O.shareTextPrefixFormatter({prefix:n,url:t}):t}}}var _=n("mN6z");var A=n("mjJ+"),j=n("rHpw");const M={element:"share"};function N(e){const t=function(e){const t=a.useRef({previous:void 0});if("object"!=typeof e)return e;function n(){return t.current.previous=e,e}const{previous:i}=t.current;return i&&(e===i||Object(_.a)(e,i))?i:n()}({...M,...e.scribeNamespace}),{analytics:n,getActionItem:i}=L({...e,scribeNamespace:t});const r=e.ButtonComponent||B;return a.createElement(r,{onPress:function(){const e={...t,action:"share_menu_click"};n.scribe(e)},pullRight:e.pullRight,renderMenu:function(t){const n=[];return e.children?a.Children.forEach(e.children,(e=>{if(!a.isValidElement(e))return;const t=i(e.props);t&&n.push(t)})):["tweet","dm","copy","via"].forEach((e=>{const t=i({type:e});t&&n.push(t)})),a.createElement(A.a,{isFixed:e.isFixed,items:n,onCloseRequested:t,shouldCloseOnClick:!0})}})}function B(e){return a.createElement(b,o()({},e,{style:P.button,testID:m}))}const P=j.a.create((e=>({button:{marginRight:e.spaces.space4}})));function F(e){const{copyLinkShareLabel:t,dmShareLabel:n,externalShareLabel:r,tweetShareLabel:o,...c}=e;return a.createElement(N,c,a.createElement(i,{label:o,type:"tweet"}),a.createElement(i,{label:n,type:"dm"}),a.createElement(i,{label:t,type:"copy"}),a.createElement(i,{label:r,type:"via"}))}F.Action=i,F.Custom=N;t.a=F},UZjl:function(e,t,n){"use strict";var a=n("ERkP"),i=n("es0u"),r=n("hqKg"),o=n("MDbM"),c=n("rxPX");const s=(e,t)=>t.module.selectPageConfiguration(e),l=(e,t)=>t.module.selectInitialFetchStatus(e),u=Object(r.createSelector)(s,l,((e,t)=>t!==o.a.LOADED||!!e&&!!e.tabs));var p=Object(c.a)().propsFromState((()=>({hasTabNavigation:u,pageConfiguration:s,initialFetchStatus:l}))).withAnalytics(),d=n("QIgh"),b=n("s14A"),m=n("dwig"),h=n("7JQg"),f=n("rHpw"),g=n("GKOv"),v=n("Rp9C"),y=n("Irs7");function E(e,t){const n=Object(y.b)(),{component:i,element:r}=t||{},o={items:[v.a.forTopic(e,t)]};return a.useEffect((()=>{n.scribe({component:i,element:r,action:"impression",data:o})}),[o,i,r,n]),{namespace:{component:i,element:r},data:o}}var C=n("MWbm");function I(e){const{header:{clientEventInfo:t,displayType:n,facepile:i,landingContext:r,topicId:o},onHeaderVisible:c}=e,{data:s,namespace:l}=E(o,t);return a.createElement(C.a,{style:w.root},a.createElement(h.b,{data:s,namespace:l},a.createElement(g.a,{displayType:n,facepile:i,onFollowHeaderOffscreen:({isOffscreen:e})=>c(!e),topicId:o,topicLandingContext:r,withDivider:!0})))}const w=f.a.create((e=>({root:{borderBottomWidth:e.borderWidths.small,borderBottomColor:e.colors.borderColor,borderBottomStyle:"solid"}})));var T=n("3XMw"),S=n.n(T),x=n("zI2C"),L=n("v6aA"),O=n("Zejx");const k=(e,t)=>{const n=t.navBar.topicId?t.navBar.topicId:"";return O.a.select(e,n)};var _=Object(c.a)().propsFromState((()=>({topic:k}))),A=n("PbbS"),j=n("LWCC"),M=n("IcAo"),N=n("rJoH"),B=n("I6Uj"),P=n("zfvc");const F=e=>`https://twitter.com/i/topics/${e}`,D=e=>`twitter://topics_timeline?id=${e}`,H=S.a.ed88e742;const R=f.a.create((e=>({rightControl:{flexDirection:"row"},followButtonContainer:{justifyContent:"center",paddingEnd:e.spaces.space4}})));var U=_((function(e){const t=e.navBar.topicId?e.navBar.topicId:"",{isHeaderOffscreen:n,navBar:{clientEventInfo:i},pageNamespace:r,topic:o,withAppLinks:c,withOpenGraphMeta:s}=e,{featureSwitches:l}=a.useContext(L.a),u=l.isTrue("topic_landing_page_share_enabled"),{data:p,namespace:d}=E(t,i),b=Object(M.a)({},r,d);return o?a.createElement(h.b,{data:p,namespace:b},a.createElement(a.Fragment,null,s?a.createElement(N.a,{canonical:F(t),description:o.description,title:o.name,type:"article"}):null,c?a.createElement(x.a,{deepLink:D(t)}):null,a.createElement(C.a,{style:R.rightControl},a.createElement(C.a,{style:R.followButtonContainer},a.createElement(P.b,{animateMount:!0,show:n,type:"fade"},a.createElement(j.a,{size:"medium",textMode:A.a.FollowTopic,topic:o}))),u?a.createElement(B.a,{copyLinkShareLabel:H,scribeNamespace:b,url:F(t)}):null))):null})),G=n("yoO3"),Q=n("KEM+"),W=n.n(Q),J=n("v84o"),K=n("0KEI");const V=(e,t)=>t.initialModule.selectPageConfiguration&&t.initialModule.selectPageConfiguration(e),q=(e,t)=>{const n=t.selectedTabId,a=V(e,t);return a&&a.tabs&&a.tabs.tabs.find((e=>e.id===n))};var $=Object(c.a)().propsFromState((()=>({pageConfiguration:V,selectedTab:q}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(K.createLocalApiErrorHandlerWithContextFactory)("RICH_SEGMENTED_TIMELINE")}))).withAnalytics(),z=n("doI8"),Z=n("oQhu"),X=n("fTQJ");class Y extends a.Component{constructor(...e){super(...e),W()(this,"_getTimelineNamespace",(()=>{const{analytics:e,pageConfiguration:t,selectedTab:n}=this.props,a=(null==n?void 0:n.scribeConfig)||(null==t?void 0:t.scribeConfig);if(a){const{entityToken:e,...t}=a;return t}return e.contextualScribeNamespace})),W()(this,"_getModule",Object(Z.a)(((e,t,n,a)=>{if((null==e?void 0:e.id)!==t){if(null!=e&&e.urtEndpoint)return Object(J.a)({urtUrl:null==e?void 0:e.urtEndpoint,timelinePrefix:a});if(null!=e&&e.graphQLTimelineId)return Object(z.a)(e.graphQLTimelineId)}return n}))),W()(this,"_getRefreshIntervalSecForCurrentTab",(()=>{var e;const{pageConfiguration:t,selectedTab:n}=this.props,a=null==t||null===(e=t.tabs)||void 0===e?void 0:e.initialTabId;if(n)return n.refreshIntervalSec;if(a){var i;const e=null==t||null===(i=t.tabs)||void 0===i?void 0:i.tabs.find((e=>a===e.id));return null==e?void 0:e.refreshIntervalSec}}))}render(){var e,t;const{entryConfiguration:n,initialModule:i,pageConfiguration:r,prerollDisplayLocation:o,refreshControl:c,renderEmptyState:s,renderUnavailable:l,selectedTab:u,timelinePrefix:p,title:d}=this.props,b={token:null==r||null===(e=r.scribeConfig)||void 0===e?void 0:e.entityToken},m=this._getModule(u,null==r||null===(t=r.tabs)||void 0===t?void 0:t.initialTabId,i,p),f=this._getRefreshIntervalSecForCurrentTab(),g=f?1e3*f:void 0;return a.createElement(h.b,{namespace:this._getTimelineNamespace()},a.createElement(X.a,{behavioralEventContext:b,entryConfiguration:n,module:m,pollingIntervalMsOverride:g,prerollDisplayLocation:o,refreshControl:c,renderEmptyState:s,renderUnavailable:l,title:d}))}}var ee=$(Y),te=n("+Kfv");const ne=(e,t)=>t.module.selectInitialFetchStatus(e),ae=(e,t)=>t.module.selectPageConfiguration&&t.module.selectPageConfiguration(e),ie=(e,t)=>{const n=t.selectedTabId,a=ae(e,t);return a&&a.tabs&&a.tabs.tabs.find((e=>e.id===n))};var re=Object(c.a)().propsFromState((()=>({initialFetchStatus:ne,pageConfiguration:ae,selectedTab:ie}))).propsFromActions((({module:e})=>({createLocalApiErrorHandler:Object(K.createLocalApiErrorHandlerWithContextFactory)("RICH_SEGMENTED_TIMELINE"),fetchInitial:e.fetchInitial}))).withAnalytics(),oe=n("Nhmk"),ce=n("k/OQ"),se=n("G8HL");class le extends a.Component{constructor(...e){super(...e),W()(this,"_fetchPageModule",(()=>{const{analytics:e,createLocalApiErrorHandler:t,fetchInitial:n,pageConfiguration:a}=this.props,i=a?a.scribeConfig:void 0;return n().then((({performed:t})=>{t&&e.scribe({...this._getScribeNamespace(i),action:"get_initial"})}),t(oe.a))})),W()(this,"_render",(()=>{const{analytics:e,getTabLink:t,pageConfiguration:n,selectedTab:i}=this.props,r=null==n?void 0:n.tabs;if(r&&r.tabs){const o=i&&i.id||r.initialTabId,c=n?n.scribeConfig:void 0;let s;const l=r.tabs.map(((n,a)=>{var i;const r=n.id===o;return r&&(s=a),{isActive:()=>r,key:n.labelText,label:n.labelText,onClick:()=>{e.scribe(this._buildTabNamespace(this._getScribeNamespace(c),this._getScribeNamespace(n.scribeConfig)))},to:t(n.id),token:null===(i=n.scribeConfig)||void 0===i?void 0:i.entityToken}}));return a.createElement(te.a,{viewType:"controls"},a.createElement(ce.a,{links:l,visibleItemIndex:s}))}return null}))}componentDidMount(){this._fetchPageModule()}componentDidUpdate(e){e.module===this.props.module&&this.props.initialFetchStatus||this._fetchPageModule()}render(){const{initialFetchStatus:e}=this.props;return e===o.a.LOADED?this._render():null}_buildTabNamespace(e,t){let n;return e&&(n=e),t&&(n={...n,...t}),{...n,element:"tab",action:"navigate"}}_getScribeNamespace(e){if(e){const{entityToken:t,...n}=e;return n}}}var ue=re(Object(se.a)(le)),pe=n("VS6U"),de=n("5Y9N"),be=n("FIs5"),me=n("cHvH"),he=n("mw9i");const fe=S.a.e9f1fbcb,ge=a.createElement(i.a,null),ve=Object(Z.a)(((e,t)=>({...t,...Object(de.a)({isWide:e})}))),ye=e=>{const{TabBar:t,backLocation:n,behavioralEventViewType:i,entryConfiguration:r,fab:c,getTabLink:s,hasTabNavigation:l,history:u,initialFetchStatus:p,initialPageNamespace:d,logoButton:g,module:v,onBackClick:y,pageConfiguration:E,prerollDisplayLocation:C,renderEmptyState:w,renderUnavailable:T,rightControl:S,searchBoxRef:x,selectedTabId:L,sidebarContent:O,timelinePrefix:k,title:_,withAppLinks:A,withBottomLoginSignupBar:j,withDeferredView:N,withOpenGraphMeta:B,withSearchBox:P,withTweetButton:F}=e,[D,H]=a.useState(!0),{header:R,navBar:Q,subtitle:W,title:J}=E||{},K=p===o.a.LOADED?J||_:"",V=((e,t,n)=>{const a=null==t?void 0:t.scribeConfig,{entityToken:i,...r}=a||{},o=null==t?void 0:t.tabs,c=e||(null==o?void 0:o.initialTabId),s=null==o?void 0:o.tabs.find((e=>e.id===c)),{entityToken:l,...u}=(null==s?void 0:s.scribeConfig)||{};return Object(M.a)({},n,r,u)})(L,E,d),q=R?a.createElement(I,{header:R,onHeaderVisible:H}):null,$=Q?a.createElement(U,{isHeaderOffscreen:!D,navBar:Q,pageNamespace:V,withAppLinks:A,withOpenGraphMeta:B}):null,z=N?b.a:a.Fragment,Z=a.createElement(me.a,null,(({windowWidth:e})=>{const t=e>=f.a.theme.breakpoints.medium;return a.createElement(a.Fragment,null,q,a.createElement(z,null,a.createElement(ee,{entryConfiguration:ve(t,r),initialModule:v,prerollDisplayLocation:C,renderEmptyState:w,renderUnavailable:T,selectedTabId:L,timelinePrefix:k,title:_})))})),X=c?a.createElement(m.a,{component:he.a,fab:c},Z):Z,Y=s&&l?a.createElement(ue,{getTabLink:s,module:v,selectedTabId:L}):void 0;return a.createElement(h.b,{namespace:V},a.createElement(G.a,{behavioralEventViewType:i},a.createElement(pe.a,{TabBar:t,backLocation:n,history:u,logoButton:g,onBackClick:y,primaryContent:X,rightControl:$||S,searchBoxRef:x,secondaryBar:Y,sidebarContent:O,subtitle:W,title:q&&D?_:K,withBottomLoginSignupBar:j,withSearchBox:P,withTweetButton:F})))};ye.defaultProps={entryConfiguration:d.b,renderEmptyState:()=>a.createElement(be.a,{header:fe}),sidebarContent:ge,withDeferredView:!1,withAppLinks:!1,withOpenGraphMeta:!1};const Ee=p(ye);t.a=Ee},doI8:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("WpDa"),i=n("ZNT5");t.b=({endpointParams:e,endpointUrl:t,timelineId:n})=>Object(i.a)({timelineId:n,getEndpoint:e=>e.URT.fetchGeneric,getEndpointParams:({count:n,cursor:a})=>({...e,cursor:"string"==typeof a?a:void 0,count:n,endpointUrl:t}),context:"FETCH_TIMELINE",perfKey:"generic"});const r=e=>Object(i.a)({timelineId:`generic-graphql-timeline-${e}`,getEndpoint:e=>e.Graphql.fetchGenericTimelineById,getEndpointParams:({count:t,cursor:n})=>({cursor:"string"==typeof n?n:void 0,count:t,timelineId:e}),formatResponse:a.a,context:"FETCH_GENERIC_TIMELINE_GQL",perfKey:"genericGQL"})},v84o:function(e,t,n){"use strict";var a=n("180P"),i=n("doI8");t.a=({timelinePrefix:e="generic-timeline-",urtUrl:t})=>{const{url:n,urtEndpointOptions:r}=t,{cacheId:o,requestParams:c}=r||{};return Object(i.b)({timelineId:o||`${e}${Object(a.a)(t)}`,endpointUrl:n,endpointParams:c||{}})}}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Birdwatch~bundle.Explore~bundle.Topics.5bfd4725.js.map