(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+aTU":function(e,t,r){"use strict";r("Cm4o");t.a=class{constructor(e){try{this.parser=new URL(e)}catch(t){this.parser=document.createElement("a"),this.parser.href=e}}getHostname(){return this.parser.hostname}getPath(){return this.parser.pathname}isSafe(){return!!this.parser.protocol.match(/^https?:$/)}addSearchParam(e,t){this.parser.search?this.parser.search=`${this.parser.search}&${e}=${t}`:this.parser.search=`?${e}=${t}`}toString(){return this.parser.href}}},BVo1:function(e,t,r){"use strict";r.d(t,"e",(function(){return i})),r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c})),r.d(t,"f",(function(){return l}));const n=r("rHpw").a.create((e=>({root:{writingDirection:"ltr",position:"absolute",bottom:0,cursor:"auto",width:"100%"},container:{paddingHorizontal:e.spaces.space4,paddingBottom:e.spaces.space2},absoluteContainer:{paddingHorizontal:e.spaces.space4,paddingBottom:e.spaces.space2,width:"100%",position:"absolute",minHeight:"100%"},scrubber:{paddingLeft:e.spaces.space4,paddingRight:e.spaces.space4},bottomBar:{width:"100%",justifyContent:"space-between"},actionContainer:{minHeight:e.spaces.space40},flex:{flex:1},flexShrink:{flexShrink:1},flexRow:{alignItems:"center",flexDirection:"row"},rightContainer:{justifyContent:"flex-end"},leftContainer:{justifyContent:"flex-start",flexGrow:1},controlContainer:{flexDirection:"row",paddingHorizontal:e.spaces.space4},controlsBottomOffset:{paddingBottom:e.spaces.space2},withMargin:{marginHorizontal:e.spaces.space2,paddingHorizontal:e.spaces.space2},skipButtonAffordance:{opacity:0},skipAdText:{fontVariant:["tabular-nums"]}}))),i=n.root,s=n.container,a=[n.flexRow,n.bottomBar],o=[n.actionContainer,n.leftContainer,n.flexShrink,n.flexRow],c=[n.actionContainer,n.rightContainer,n.flexRow],l=n.skipAdText;t.g=n},"IE/l":function(e,t,r){"use strict";var n=r("ERkP"),i=r("USG3"),s=r("aNKf"),a=r("rHpw"),o=r("MWbm"),c=r("BVo1");t.a=({actionButton:e,displayDismissableControls:t=!0,leftContent:r,rightContent:l,scrubber:u,skipButton:d})=>n.createElement(n.Fragment,null,n.createElement(i.a,{show:t},n.createElement(s.a,{colors:[a.a.theme.colors.transparent,a.a.theme.colors.translucentBlack77],style:c.g.absoluteContainer})),n.createElement(o.a,{style:c.g.controlContainer},n.createElement(o.a,{style:c.g.flex},n.createElement(i.a,{show:t},n.createElement(o.a,{style:c.g.controlsBottomOffset},u,n.createElement(o.a,{style:c.c},n.createElement(o.a,{style:c.a},e,n.createElement(o.a,{style:[c.g.flexRow,c.g.flexShrink]},r)),n.createElement(o.a,{style:c.b},l))))),d&&n.createElement(o.a,{style:c.g.controlsBottomOffset},d)))},N2PN:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("97Jx"),i=r.n(n),s=r("ERkP"),a=r("/yvb"),o=r("gK2g");const c=e=>{const{hoverLabelPreferredHorizontalOrientation:t,hoverLabelWithExtraSpace:r,...n}=e,o=e.accessibilityLabel?{label:e.accessibilityLabel,preferredVerticalOrientation:"up",preferredHorizontalOrientation:e.hoverLabelPreferredHorizontalOrientation,withLayer:!1,withExtraSpace:e.hoverLabelWithExtraSpace}:void 0;return s.createElement(a.a,i()({},n,{hoverLabel:o,size:e.size||"medium",type:"onMediaText"}))},l=e=>{const{icon:t,onPress:r,scribeNamespace:n,size:a,testID:l,...u}=e,d=o.a.useAnalytics();return s.createElement(c,i()({},u,{icon:t,onPress:e=>{r&&r(e),d.scribe(n)},size:a,testID:l}))};t.b=c},NnQ9:function(e,t,r){"use strict";var n=r("ERkP"),i=r("Lsrn"),s=r("shC7"),a=r("k/Ka");const o=(e={})=>Object(a.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.a.root,e.style,s.a.getConstants().isRTL&&i.a.iconRTL],viewBox:"0 0 24 24"},n.createElement("g",null,n.createElement("path",{d:"M3.5 19.44v-4c0-.414-.336-.75-.75-.75s-.75.336-.75.75v5.81c0 .414.336.75.75.75h5.81c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-4l6.577-6.576c.146-.146.22-.338.22-.53s-.073-.384-.22-.53c-.293-.293-.768-.293-1.06 0L3.5 19.44zM14.69 2.75c0 .414.336.75.75.75h4l-6.577 6.576c-.293.293-.293.768 0 1.06s.768.294 1.06 0L20.5 4.562v4c0 .414.336.75.75.75s.75-.336.75-.75V2.75c0-.414-.336-.75-.75-.75h-5.81c-.414 0-.75.336-.75.75z"})));o.metadata={width:24,height:24},t.a=o},Q0n6:function(e,t,r){"use strict";r.d(t,"a",(function(){return S})),r.d(t,"l",(function(){return E})),r.d(t,"g",(function(){return g})),r.d(t,"h",(function(){return C})),r.d(t,"d",(function(){return _})),r.d(t,"f",(function(){return k})),r.d(t,"j",(function(){return L})),r.d(t,"e",(function(){return T})),r.d(t,"k",(function(){return P})),r.d(t,"i",(function(){return x})),r.d(t,"c",(function(){return O})),r.d(t,"b",(function(){return B}));var n=r("kCRK"),i=r("3XMw"),s=r.n(i);const a=s.a.d58baa7e,o=s.a.i3b7a017,c=s.a.ie5d110e,l=s.a.df5f11b3,u=s.a.a7cd5cf4,d=s.a.b6eb8f69,h=s.a.dcc2b9b2,p=s.a.hf4ffd4d,b=s.a.f6e90cd6,m=s.a.e7d191ec,f=s.a.h1888a33,v=s.a.c58b2ab7,y=e=>"number"==typeof e?a(e):e,S=e=>{const{viewCount:t,viewerCount:r}=e;return t||0===t?v({viewCount:y(t)}):r||0===r?f({viewerCount:y(r)}):null},E=e=>{if(!e)return"";return(({durationSeconds:e,isBroadcast:t,isLive:r,timecode:n,videoTrack:i}={})=>{const s=[],a=t||r?d:u,o=r?p:h;if(s.push(o({locVideoType:a})),"number"==typeof e&&e&&!r){const{hoursWord:t,minutesWord:r,secondsWord:n}=w(e);s.push(b({hoursWord:t,minutesWord:r,secondsWord:n}))}if("number"==typeof n&&n){const{hoursWord:e,minutesWord:t,secondsWord:r}=w(n);s.push(m({hoursWord:e,minutesWord:t,secondsWord:r}))}const c=i&&S(i);return c&&s.push(c),s.join(". ")})({isLive:e.isLive,isBroadcast:e.contentType===n.a.BROADCAST,durationSeconds:k(e),timecode:x(e),videoTrack:e})},w=e=>{const{hours:t,minutes:r,seconds:n}=R(e),i={hoursWord:"",minutesWord:"",secondsWord:""};return 0===n&&0===r&&0===t&&0===r?(i.secondsWord=o(0),i):(i.hoursWord=t>0?l(t):"",i.minutesWord=r>0?c(r):"",i.secondsWord=n>0?o(n):"",i)},g=e=>e?(e.currentTimeMs||0)/1e3:void 0,C=e=>e?(e.durationMs||0)/1e3:void 0,_=e=>{const t=g(e);return t&&Math.round(t)},k=e=>{const t=C(e);return t&&Math.round(t)},L=e=>e.tracks.find((e=>0===e.id)),T=e=>e.tracks.find((t=>t.id===e.currentTrackId)),P=e=>e.controls&&e.controls.isPosterShown?L(e):T(e),x=e=>{if(e){const t=e.requestedTimecode;return t&&t>0?t:e.replayEditedStartTime}},O=e=>B(Math.round(e/1e3)),B=e=>{const{hours:t,minutes:r,seconds:n}=R(e),i=n<10?`0${n}`:n,s=r<10&&t?`0${r}`:r;return t?`${t}:${s}:${i}`:`${s}:${i}`},R=e=>({hours:Math.floor(e/3600),minutes:Math.floor(e%3600/60),seconds:Math.floor(e%60)})},USG3:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("ERkP");const i={transitionDuration:"250ms",transitionProperty:"opacity, height",transitionTimingFunction:"ease",willChange:"opacity"};function s({children:e,show:t}){const[r,s]=n.useState(!t);return n.useEffect((()=>{t&&r&&s(!1)}),[r,t]),n.useMemo((()=>{const a={...i,opacity:t?1:0};return n.createElement("div",{onTransitionEnd:e=>{t||r||s(!0)},style:a},r?null:e)}),[e,t,r])}},Y3cQ:function(e,t,r){"use strict";var n=r("ERkP"),i=r("fyvP"),s=r("rHpw"),a=r("MWbm");t.a=e=>n.createElement(a.a,{style:o.root},n.createElement(i.a,e));const o=s.a.create((e=>({root:{backgroundColor:e.colors.cellBackground,paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical}})))},dPHj:function(e,t,r){"use strict";var n=r("ERkP"),i=r("t62R");const s=e=>n.createElement(i.b,{color:"white",numberOfLines:1,style:[a.withMargin,e.style]},e.children),a=r("rHpw").a.create((e=>({withMargin:{marginHorizontal:e.spaces.space4}})));t.a=n.memo(s)},hhMf:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r("97Jx"),i=r.n(n),s=r("KEM+"),a=r.n(s),o=r("ERkP"),c=r("6fxz");const l="click",u="focused",d="mousemove",h="mouseover",p="touch",b=(e,t)=>r=>{const{observed:n}=r;return n[e].add(t),{observed:n}},m=(e,t)=>r=>{const{observed:n}=r;return n[e].delete(t),{observed:n}},f=o.createContext({observed:{click:new Set,focused:new Set,mousemove:new Set,mouseover:new Set},Observer:()=>null}),v=o.createContext((()=>null));class y extends o.Component{constructor(...e){super(...e),a()(this,"_timeoutCollection",{click:{},focused:{},mousemove:{},mouseover:{},touch:{}}),a()(this,"_interactionWatcherRefs",{}),a()(this,"state",{observed:{click:new Set,focused:new Set,mousemove:new Set,mouseover:new Set,touch:new Set}}),a()(this,"getContext",(()=>{const{observed:e}=this.state;return{observed:e,Observer:this._renderObserver}})),a()(this,"hasActiveInteractionWatcherChildren",(()=>!Object.keys(this._interactionWatcherRefs).every((e=>{const t=this._interactionWatcherRefs[e];return!t||!t.contains(document.activeElement)})))),a()(this,"_renderObserver",(({children:e,interactionKey:t,click:r,focus:n,mousemove:s,mouseover:a,touch:c,interactionTimeoutMs:l=2e3})=>{const u={};return r&&(u.onClick=this._handleClick(t,l)),n&&(u.onBlur=this._handleBlur(t,l),u.onFocus=this._handleActive(t)),s&&(u.onMouseMove=this._handleMouseMove(t,l)),a&&(u.onMouseEnter=this._handleMouseEnter(t),u.onMouseLeave=this._handleMouseLeave(t)),c&&(u.onTouchStart=this._handleTouchStart(t),u.onTouchEnd=this._handleTouchEnd(t,l)),o.createElement("div",i()({},u,{ref:e=>{if(!t)throw new Error("Observer requires an `interactionKey` prop for storing refs.");this._interactionWatcherRefs[t]=e}}),e)})),a()(this,"_handleMouseEnter",(e=>()=>{this.setState(b(h,e))})),a()(this,"_handleMouseLeave",(e=>()=>{this.setState(m(h,e))})),a()(this,"_handleTouchStart",(e=>()=>{this.setState(b(p,e))})),a()(this,"_handleTouchEnd",((e,t)=>()=>{const r=p;clearTimeout(this._timeoutCollection[r][e]),t?this._timeoutCollection[r][e]=setTimeout((()=>this.setState(m(r,e))),t):this.setState(m(r,e))})),a()(this,"_handleMouseMove",((e,t)=>()=>{const r=d;this.state.observed[r].has(e)||this.setState(b(r,e)),clearTimeout(this._timeoutCollection[r][e]),this._timeoutCollection[r][e]=setTimeout((()=>this.setState(m(r,e))),t)})),a()(this,"_handleClick",((e,t)=>()=>{const r=l;this.state.observed[r].has(e)||this.setState(b(r,e)),clearTimeout(this._timeoutCollection[r][e]),this._timeoutCollection[r][e]=setTimeout((()=>this.setState(m(r,e))),t)})),a()(this,"_handleActive",(e=>()=>{const t=u;clearTimeout(this._timeoutCollection[t][e]);const r=this.hasActiveInteractionWatcherChildren();c.a.hadKeyboardEvent&&r&&this.setState(b(t,e))})),a()(this,"_handleBlur",((e,t)=>()=>{const r=u;clearTimeout(this._timeoutCollection[r][e]),this.state.observed[r].has(e)&&(this._timeoutCollection[r][e]=setTimeout(this._handleFocusReset(e),t))})),a()(this,"_handleFocusReset",(e=>()=>{const t=u;this.setState(m(t,e)),clearTimeout(this._timeoutCollection[t][e])}))}componentWillUnmount(){Object.keys(this._timeoutCollection).forEach((e=>{const t=this._timeoutCollection[e];Object.keys(t).forEach((e=>{clearTimeout(t[e])}))}))}render(){const{children:e}=this.props;if(!e)throw new Error("component requires children prop.");const t=this._renderObserver;return o.createElement(y.ObserverContext.Provider,{value:t},o.createElement(y.Context.Provider,{value:this.getContext()},e))}}a()(y,"Context",f),a()(y,"ObserverContext",v)},kCRK:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return s})),r.d(t,"c",(function(){return a})),r.d(t,"e",(function(){return o}));const n={VISIT:"url",WATCH:"watch"},i={watch_now:"watch_now",visit_site:"visit_site",shop:"shop",see_more:"see_more",go_to:"go_to"},s={MEDIA:"media_entity",GIF:"gif",VMAP:"vmap",BROADCAST:"broadcast"},a={AD:"ad",CONTENT:"content"},o={BROADCAST:"broadcast",DM:"dm",TWEET:"tweet"}},p6DB:function(e,t,r){"use strict";var n=r("ERkP"),i=r("Lsrn"),s=r("shC7"),a=r("k/Ka");const o=(e={})=>Object(a.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.a.root,e.style,s.a.getConstants().isRTL&&i.a.iconRTL],viewBox:"0 0 24 24"},n.createElement("g",null,n.createElement("path",{d:"M3.983 13.605c0 .414.336.75.75.75H8.57l-6.357 6.357c-.297.297-.297.777 0 1.074s.777.297 1.074 0l6.357-6.357v3.828c0 .414.336.75.75.75s.75-.336.75-.75v-5.653c0-.414-.336-.75-.75-.75h-5.66c-.415 0-.75.336-.75.75zm16.73-11.392L14.355 8.57V4.74c0-.413-.336-.75-.75-.75s-.75.337-.75.75v5.654c0 .414.336.75.75.75h5.653c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H15.43l6.357-6.357c.148-.148.223-.343.223-.537s-.074-.39-.223-.537c-.297-.297-.777-.297-1.074 0z"})));o.metadata={width:24,height:24},t.a=o},ub6r:function(e,t,r){"use strict";r.d(t,"a",(function(){return Re}));var n=r("ERkP"),i=r("KEM+"),s=r.n(i),a=r("Zl35"),o=r("IE/l"),c=r("N2PN"),l=r("dPHj"),u=r("kCRK"),d=r("3XMw"),h=r.n(d),p=r("hhMf"),b=r("Q0n6"),m=r("9RkS"),f=r("+d3d");const v=h.a.f06f2e53;class y extends n.PureComponent{constructor(e){super(e),s()(this,"_handleChange",(e=>{this.setState({scrubTo:e}),this.scheduledSeekTargetSec=e,this._throttledPlayerSeek()})),s()(this,"_throttledPlayerSeek",Object(f.a)((()=>{const{scheduledSeekTargetSec:e}=this,{duration:t,playerApi:r}=this.props;if(t){const n=e/t;r.scrubToFraction(n)}}),50,{leading:!0,trailing:!0})),s()(this,"_handleActive",(e=>(!this.state.isScrubbing&&e&&document.addEventListener("click",this._handleCaptureClick,!0),e||this._throttledPlayerSeek.flush(),this.props.playerApi.setScrubbing(e),this.setState({isScrubbing:e})))),s()(this,"_handleCaptureClick",(e=>{e.preventDefault(),e.stopPropagation(),document.removeEventListener("click",this._handleCaptureClick,!0)})),this.state={isScrubbing:!1,scrubTo:0}}render(){const{accessibilityLabel:e,currentTime:t,duration:r}=this.props,i=this.state.isScrubbing||this.props.isSeeking?this.state.scrubTo:t;if("number"==typeof i&&"number"==typeof r&&r>0){const t=Object(b.b)(i),s=Object(b.b)(r);return n.createElement(m.a,{accessibilityLabel:e,accessibilityLabelValueText:v({currentTime:t,durationTime:s}),color:"white",keepLTR:!0,keyboardStep:5,max:r,min:0,onActive:this._handleActive,onChange:this._handleChange,step:"any",value:i,withHidingThumb:!0})}return null}}var S=y,E=r("97Jx"),w=r.n(E),g=r("/yvb"),C=r("BVo1"),_=r("w05h"),k=r("+/1j"),L=r("MWbm");class T extends n.PureComponent{constructor(...e){super(...e),s()(this,"_handleSkipPress",(()=>{this.props.playerApi.nextTrack()}))}render(){if(!this.props.playerState)return null;const e=Object(b.e)(this.props.playerState);if(!e||e.durationMs<=this.props.skipThreshold||e.displayType!==u.c.AD)return null;const t=Math.ceil((5e3-e.currentTimeMs)/1e3),r=t>0,i=r?Object(_.m)({seconds:Object(_.q)(t)}):_.l,s=r?Object(_.n)({seconds:Object(_.p)(t)}):_.k;return n.createElement(g.a,{accessibilityLabel:i,disabled:r,onPress:r?void 0:this._handleSkipPress,pointerEvents:"auto",size:"small",testID:"ControlBar-skipButton",type:"onMediaDominantColorFilled"},n.createElement(k.a,{style:C.f},s))}}s()(T,"defaultProps",{skipThreshold:7e3});var P=n.memo((function(e){return e.useRefactoredLayout?n.createElement(L.a,{pointerEvents:"none",style:C.b},n.createElement(a.a,{periodic:!0},(({playerApi:t,playerState:r})=>n.createElement(T,w()({},e,{playerApi:t,playerState:r}))))):n.createElement(L.a,{pointerEvents:"none",style:C.e},n.createElement(L.a,{style:C.d},n.createElement(L.a,{style:C.c},n.createElement(L.a,{style:C.a}),n.createElement(L.a,{style:C.b},n.createElement(a.a,{periodic:!0},(({playerApi:t,playerState:r})=>n.createElement(T,w()({},e,{playerApi:t,playerState:r}))))))))})),x=r("rHpw"),O=r("+aTU"),B=r("aITJ"),R=r("jV+4"),M=r("M2x3"),j=r("nBUg"),z=r("3dyc"),A=r("t62R"),H=r("Y3cQ"),W=r("efqG");const D=h.a.h9b3104d,I=h.a.ccc97152,F=h.a.cd6e0e5f,N=h.a.a0551d36,V=h.a.if8ee0cd,K=h.a.e4347df3,U=h.a.e14d60ca,$=h.a.bf7aa0dd,q=h.a.j2476269,G=h.a.d6a09fad,Q=h.a.e2457653,J=h.a.e23b20af,X={label:U,value:"1"},Y=[{label:N,value:"0.25"},{label:V,value:"0.5"},{label:K,value:"0.75"}],Z=[{label:$,value:"1.25"},{label:q,value:"1.5"},{label:G,value:"1.75"},{label:Q,value:"2"}];function ee(e){switch(e){case"fast":return[X,...Z];case"slow":return[...Y,X];default:return[...Y,X,...Z]}}const te=x.a.create((e=>({root:{flexDirection:"column",paddingTop:e.spaces.space8,paddingBottom:e.spaces.space4,paddingLeft:e.spaces.space8,paddingRight:e.spaces.space8,borderRadius:e.borderRadii.xLarge},popover:{maxWidth:5*e.spacesPx.space64},modal:{borderRadius:e.borderRadii.none},title:{flexDirection:"column",paddingHorizontal:e.spaces.space16,paddingTop:e.spaces.space16},subtext:{paddingTop:e.spaces.space4},menuRow:{flexDirection:"row",paddingTop:e.spaces.space12,paddingBottom:e.spaces.space12,alignItems:"center",borderRadius:e.borderRadii.small},cancelButton:{marginHorizontal:e.spaces.space16,marginVertical:e.spaces.space16}})));var re=function(e){var t;const r=null===(t=e.playerState.playbackRate)||void 0===t?void 0:t.toString(),{children:i,onDismiss:s,showVideoSettings:a}=e,{features:o,fullscreen:c}=e.playerState,l=c.isFullscreen,u=null==o?void 0:o.web_video_playback_rate_enabled,d=a?z.b.forceVisible:z.b.forceHidden,h=j.a.useProps().isDMDrawer;function p(t,r){const{playerApi:n}=e;n.setPlaybackRate(parseFloat(r)),s()}return n.createElement(W.a,{onDismiss:s,renderContent:(e,t)=>{const i="sheet"===t;return n.createElement(L.a,{accessibilityRole:"dialog",style:te.root},n.createElement(L.a,{style:te.title},n.createElement(A.b,{size:"headline1",weight:"bold"},I),n.createElement(L.a,{style:te.subtext},n.createElement(A.b,{color:"gray700",size:"subtext2"},F))),n.createElement(H.a,{accessibilityLabel:D,name:"playback_rate",onChange:p,options:ee(u),value:r}),i?n.createElement(g.a,{onPress:s,style:te.cancelButton,testID:"Cancel",type:"primaryOutlined"},J):null)},visibilityBehavior:d,withArrow:!0,withFixedPosition:l||h(),withoutLayer:l},i)};const ne={action:"click",element:"video_settings"};function ie(e){const[t,r]=n.useState({showVideoSettings:!1,resumePlaybackOnDismiss:!1}),{isNarrow:i,playerApi:s,playerState:a,...o}=e,l=Object(b.e)(a);return l&&l.playbackRateSupported?n.createElement(re,{onDismiss:function(){r({showVideoSettings:!1})},playerApi:s,playerState:a,showVideoSettings:t.showVideoSettings},n.createElement(c.a,w()({},o,{accessibilityLabel:D,icon:n.createElement(M.a,null),onPress:function(){r({showVideoSettings:!0})},scribeNamespace:ne,size:i?"xSmall":"medium"}))):null}var se=r("kRXa");const ae=Object.freeze({wide:"wide",narrow:"narrow",veryNarrow:"veryNarrow"}),oe=Object.freeze({[ae.wide]:500,[ae.narrow]:285,[ae.veryNarrow]:200});var ce=r("wtsM"),le=r("5Ixf"),ue=r("RUwF"),de=r("AtEG"),he=r("NnQ9"),pe=r("p6DB"),be=r("pHub"),me=r("8A5z"),fe=r("Lsrn"),ve=r("k/Ka");const ye=(e={})=>Object(ve.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[fe.a.root,e.style],viewBox:"0 0 24 24"},n.createElement("g",null,n.createElement("path",{d:"M12.13 1.5c-4.684 0-8.387 4.316-8.387 9.055 0 4.95 6.51 11.945 8.386 11.945 1.642 0 8.152-7.383 8.152-12.334 0-4.74-3.702-8.666-8.153-8.666zm.026 13.17c-2.924 0-5.178-2.232-5.178-4.84 0-1.217.402-2.313 1.08-3.178v.01c0 1.08.884 1.958 1.976 1.958s1.977-.877 1.977-1.958c0-.8-.486-1.488-1.182-1.79.422-.106.865-.168 1.327-.168 2.636 0 4.89 2.23 4.89 5.126 0 2.61-2.252 4.84-4.89 4.84z"})));ye.metadata={width:24,height:24};var Se=ye;const Ee=/^https?:\/\/(?:www.)?(?:periscope|pscp).tv/,we=h.a.j25d7cc9,ge=h.a.a858b25b,Ce=h.a.faf9f483,_e=h.a.ae2ea9e6,ke=h.a.hea01797,Le=h.a.f8a09386,Te={CAPTIONS:"ControlBar-Captions",PERISCOPE:"ControlBar-Periscope",FULLSCREEN:"ControlBar-Fullscreen",SETTING:"ControlBar-Setting"},Pe=e=>e===ae.narrow||e===ae.veryNarrow;class xe extends n.PureComponent{constructor(e){if(super(e),s()(this,"state",{currentBreakpoint:ae.wide,showScrubber:!0,scrubTime:0}),s()(this,"_parentRef",n.createRef()),s()(this,"_renderActionButton",((e,t)=>{const{controls:r,isPlaying:i}=t,{pause:s,play:a,replay:o}=e,{currentBreakpoint:l}=this.state,u=Object(b.e)(t),d=Pe(l)?"xSmall":"medium";return!u||u.isLive?null:i||r&&"PLAY_REQUESTED"===r.playState?n.createElement(c.b,{accessibilityLabel:ce.d,hoverLabelPreferredHorizontalOrientation:"end",hoverLabelWithExtraSpace:this.props.showScrubber,icon:n.createElement(le.a,null),onPress:s,size:d}):r.isReplayButtonShown?n.createElement(c.b,{accessibilityLabel:ce.f,hoverLabelPreferredHorizontalOrientation:"end",hoverLabelWithExtraSpace:this.props.showScrubber,icon:n.createElement(ue.a,null),onPress:o,size:d}):n.createElement(c.b,{accessibilityLabel:ce.e,hoverLabelPreferredHorizontalOrientation:"end",hoverLabelWithExtraSpace:this.props.showScrubber,icon:n.createElement(de.a,null),onPress:a,size:d})})),s()(this,"_renderViewCount",(e=>{const t=Object(b.e)(e);if(!t)return null;const r=Object(b.a)(t);return r?n.createElement(l.a,null,r):null})),s()(this,"_renderPublisherAttribution",(e=>{const{publisherDisplayName:t,publisherProfileImageUrl:r}=this.props,i=Object(b.e)(e);return t&&r&&i?n.createElement(L.a,{style:C.g.flex},n.createElement(L.a,{style:[C.g.withMargin,C.g.flex]},n.createElement(R.a,{color:"white",name:t,profileImageUrl:r}))):null})),s()(this,"_renderMiddot",(e=>{const{publisherDisplayName:t,publisherProfileImageUrl:r}=this.props,i=Object(b.e)(e);return i&&t&&r&&(i.viewCount||i.viewerCount)?n.createElement(l.a,null,"·"):null})),s()(this,"_renderAdBadge",(e=>{const t=Object(b.e)(e),{currentBreakpoint:r}=this.state;if(t&&t.displayType===u.c.AD){const{advertiserName:e}=t;return n.createElement(l.a,{style:Pe(r)&&{fontSize:x.a.theme.fontSizes.subtext2}},e?_e({advertiserName:e}):Ce)}return null})),s()(this,"_renderFullScreenButton",((e,t)=>{const{fullscreenAdsDisabledOnIOS:r}=this.props,i=Object(b.e)(t),s=(null==i?void 0:i.displayType)===u.c.AD&&B.b.isIOS(),{fullscreen:a}=t,{currentBreakpoint:o}=this.state,l=this._fullScreenIcon,d=Pe(o)?"xSmall":"medium";return r&&s?null:a.isFullscreen?n.createElement(c.b,{accessibilityLabel:ce.b,hoverLabelPreferredHorizontalOrientation:"start",hoverLabelWithExtraSpace:this.props.showScrubber,icon:n.createElement(l,{isFullscreen:a.isFullscreen}),onPress:this._exitFullScreen(e),size:d}):n.createElement(c.b,{accessibilityLabel:ce.a,hoverLabelPreferredHorizontalOrientation:"start",hoverLabelWithExtraSpace:this.props.showScrubber,icon:n.createElement(l,{isFullscreen:a.isFullscreen}),onPress:this._requestFullScreen(e),size:d})})),s()(this,"_fullScreenIcon",(({isFullscreen:e,style:t})=>{const{hidden:r,shown:i}=Be;return n.createElement(n.Fragment,null,n.createElement(he.a,{style:e?r:i}),n.createElement(pe.a,{style:e?i:r}))})),s()(this,"_requestFullScreen",(e=>()=>{e.fullScreen(this.props.containerRef)})),s()(this,"_exitFullScreen",(e=>()=>e.exitFullScreen())),s()(this,"_renderScrubber",(e=>this.props.showScrubber&&this.state.showScrubber?n.createElement(L.a,{style:C.g.scrubber},n.createElement(a.a,{periodic:!0},(({playerState:t})=>{const r=Object(b.e)(t);return n.createElement(S,{accessibilityLabel:ke,currentTime:Object(b.g)(r),duration:Object(b.h)(r),isScrubbing:t.isScrubbing,isSeeking:t.isSeeking,playerApi:e})}))):null)),s()(this,"_renderVolume",((e,t)=>{const{isMuted:r,volume:i}=t,{mute:s,setVolume:a,unmute:o}=e,{containerHeight:c,currentBreakpoint:l}=this.state,u=r?o:s,d=r?ce.g:ce.c;return n.createElement(se.a,{accessibilityLabelIcon:d,accessibilityLabelSlider:ce.h,containerHeight:c,isMuted:r,onHideSlider:this._showScrubberHandler(!0),onMuteToggle:u,onShowSlider:this._showScrubberHandler(!1),onSliderChange:this._setVolumePercent(a),size:Pe(l)?"xSmall":"medium",volumePercent:100*i})})),s()(this,"_renderCaptionsButton",((e,t)=>{const r=Object(b.e)(t);if(r&&r.hasCaptions){const{currentBreakpoint:r}=this.state,{areCaptionsShown:i}=t,{toggleCaptions:s}=e;return n.createElement(c.b,{accessibilityLabel:i?we:ge,hoverLabelWithExtraSpace:this.props.showScrubber,icon:i?n.createElement(be.a,null):n.createElement(me.a,null),onPress:s,size:Pe(r)?"xSmall":"medium",testID:"captions"})}})),s()(this,"_renderTimePlayed",(()=>n.createElement(a.a,{periodic:!0},(({playerState:e})=>{const{currentBreakpoint:t}=this.state,r=Object(b.e)(e),i=Object(b.d)(r),s=Object(b.f)(r),{controls:a,isSeeking:o}=e,{scrubToFraction:c}=a,u=o&&void 0!==c&&s?c*s:Object(b.d)(r)||0;if(r&&"number"==typeof i&&s&&!r.isLive){const e=t===ae.veryNarrow?`${Object(b.b)(s-u)}`:`${Object(b.b)(u)} / ${Object(b.b)(s)}`;return n.createElement(l.a,{style:Pe(t)&&{fontSize:x.a.theme.fontSizes.subtext2}},e)}return null})))),s()(this,"_renderPeriscopeOrCustomIconLink",((e,t,r)=>{const{pause:n}=e,{customControlBarIcon:i}=this.props,s=Object(b.e)(t),a=r&&r.hidePeriscopeLink,o=null==s?void 0:s.broadcastShareUrl;return o&&Ee.test(o)?this._renderPeriscopeLink(s,a,n):i?this._renderCustomIconLink(i):void 0})),s()(this,"_renderPeriscopeLink",((e,t,r)=>n.createElement(a.a,{periodic:!0},(({playerState:i})=>{if(e&&e.broadcastShareUrl&&!e.unavailableInPeriscope&&!t){const{currentBreakpoint:t}=this.state,i=new O.a(e.broadcastShareUrl),s=Object(b.d)(e),a=Object(b.i)(e);if(s&&s>0&&!e.isLive)i.addSearchParam("t",s.toString());else if(e.isLive&&a){const e=a+(s||0);i.addSearchParam("t",e.toString())}return n.createElement(c.b,{accessibilityLabel:Le,hoverLabelPreferredHorizontalOrientation:"start",hoverLabelWithExtraSpace:this.props.showScrubber,icon:n.createElement(Se,null),link:{pathname:i.toString(),anchorless:!0},onPress:r,size:Pe(t)?"xSmall":"medium",testID:"periscopeLink"})}})))),s()(this,"_renderCustomIconLink",(e=>{const{currentBreakpoint:t}=this.state,r=new O.a(e.link),i=e.tooltipLabel,s=e.onPress;return n.createElement(c.b,{accessibilityLabel:i,hoverLabelPreferredHorizontalOrientation:"start",hoverLabelWithExtraSpace:this.props.showScrubber,icon:e.icon,link:{pathname:r.toString(),anchorless:!0},onPress:s,size:Pe(t)?"xSmall":"medium"})})),s()(this,"_showScrubberHandler",(e=>()=>this.setState({showScrubber:e}))),s()(this,"_setVolumePercent",(e=>t=>{e(t/100)})),s()(this,"_handleLayout",(e=>{const{width:t}=e.nativeEvent.layout,{currentBreakpoint:r}=this.state,n=this._convertWidthToBreakpoint(t);n!==r&&this.setState((e=>({currentBreakpoint:n})))})),s()(this,"_convertWidthToBreakpoint",(e=>{let t;return e>oe.wide?t=ae.wide:e<oe.veryNarrow?t=ae.veryNarrow:e<oe.narrow&&(t=ae.narrow),t})),e.containerRef){const{height:t,width:r}=e.containerRef.getBoundingClientRect();this.state={...this.state,currentBreakpoint:this._convertWidthToBreakpoint(r),containerHeight:t}}}static getDerivedStateFromProps(e,t){return e.hideControls?{...t,showScrubber:!0}:t}render(){const{hideControls:e,playerApi:t,playerDisplayOptions:r,playerState:i}=this.props,{currentBreakpoint:s}=this.state;return t&&i?n.createElement(p.a.ObserverContext.Consumer,null,(a=>n.createElement(L.a,{onLayout:this._handleLayout,pointerEvents:"auto",ref:this._parentRef,style:C.e},n.createElement(o.a,{actionButton:this._renderActionButton(t,i),displayDismissableControls:!e,leftContent:n.createElement(n.Fragment,null,this._renderAdBadge(i),this._renderPublisherAttribution(i),s===ae.wide?this._renderMiddot(i):null,s===ae.wide?this._renderViewCount(i):null),rightContent:n.createElement(n.Fragment,null,this._renderTimePlayed(),n.createElement(a,{focus:!0,interactionKey:Te.CAPTIONS,interactionTimeoutMs:0,mouseover:!0},this._renderCaptionsButton(t,i)),this._renderVolume(t,i),n.createElement(a,{focus:!0,interactionKey:Te.PERISCOPE,interactionTimeoutMs:0,mouseover:!0},this._renderPeriscopeOrCustomIconLink(t,i,r)),n.createElement(a,{focus:!0,interactionKey:Te.SETTING,interactionTimeoutMs:0,mouseover:!0},n.createElement(ie,{isNarrow:Pe(s),playerApi:t,playerState:i})),n.createElement(a,{focus:!0,interactionKey:Te.FULLSCREEN,interactionTimeoutMs:0,mouseover:!0},this._renderFullScreenButton(t,i))),scrubber:this._renderScrubber(t),skipButton:n.createElement(P,{useRefactoredLayout:!0})})))):null}}s()(xe,"defaultProps",{showScrubber:!0});var Oe=xe;const Be={hidden:{display:"none",height:"1.5em"},shown:{display:"block",height:"1.5em"}};function Re(e){return n.createElement(Oe,e)}},w05h:function(e,t,r){"use strict";r.d(t,"e",(function(){return s})),r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c})),r.d(t,"d",(function(){return l})),r.d(t,"p",(function(){return u})),r.d(t,"q",(function(){return d})),r.d(t,"j",(function(){return h})),r.d(t,"h",(function(){return p})),r.d(t,"g",(function(){return b})),r.d(t,"f",(function(){return m})),r.d(t,"i",(function(){return f})),r.d(t,"o",(function(){return v})),r.d(t,"k",(function(){return y})),r.d(t,"l",(function(){return S})),r.d(t,"m",(function(){return E})),r.d(t,"n",(function(){return w}));var n=r("3XMw"),i=r.n(n);const s=i.a.eeb64451,a=i.a.f3c268a4,o=i.a.g60001bb,c=i.a.dff1ddd9,l=i.a.b0b22805,u=i.a.e8733ed8,d=i.a.i3b7a017,h=i.a.c67e71aa,p=i.a.a6ada13d,b=i.a.j0f12222,m=i.a.f569f7c7,f=i.a.j0c67729,v=i.a.f73003aa,y=i.a.b3112b89,S=i.a.h6333ad0,E=i.a.c59da417,w=i.a.c3c147cf},wtsM:function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"f",(function(){return a})),r.d(t,"e",(function(){return o})),r.d(t,"c",(function(){return c})),r.d(t,"g",(function(){return l})),r.d(t,"h",(function(){return u})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var n=r("3XMw"),i=r.n(n);const s=i.a.fb236727,a=i.a.e9bd453e,o=i.a.f17dfdb5,c=i.a.ec8ab8b4,l=i.a.b8b6344a,u=i.a.c9a642f9,d=i.a.c27e60bf,h=i.a.d2969f1f}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loaders.video.VideoPlayerDefaultUI~loader.MediaPreviewVideoPlayer~loaders.video.VideoPlayerEventsUI.4755dea5.js.map