(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{"Pc/x":function(e,t,i){"use strict";i.d(t,"a",(function(){return T}));var n=i("KEM+"),r=i.n(n),o=i("CEs6");class a extends Error{constructor(e,t,i){super(`${a.displayName}: ${e} HTTP-${t} message: ${i}`),this.url=e,this.status=t}}r()(a,"displayName","ProxseeApiError");var s=i("epkG"),c=i("SrIh"),u=i("RqPI");let l,p=0;const h="X-Idempotence",d={["X-Periscope-User-Agent"]:"Twitter/m5",["X-Attempt"]:1};function y(){const e=Date.now();return p=e<=p?p+1:e,Object.assign({},d,{[h]:p,"content-type":"application/json"})}const m="m5-proxsee-login-a2011357b73e",f={},g={host:"https://proxsee.pscp.tv",errorFilter:function(e,t){return t(e).then((t=>{return t.status&&((i=t.status)<200||i>399)?Promise.reject(function(e,t){const{uri:i}=e,{status:n}=t,r=Object(o.a)(t);return new a(i,n,r.msg)}(e,t)):t;var i}))}};const b=Object.freeze({SelfHarm:"SELF_HARM",Violence:"VIOLENCE",SexualContent:"SEXUAL_CONTENT",ChildSafety:"CSE",PrivateInformation:"PRIVATE_INFO",AbusiveBehavior:"HARASSMENT"}),P=new class{constructor(e=f){r()(this,"reportSpaceFor",{SelfHarm:e=>this._reportSpace({abuse_type:b.SelfHarm,...e}),Violence:e=>this._reportSpace({abuse_type:b.Violence,...e}),SexualContent:e=>this._reportSpace({abuse_type:b.SexualContent,...e}),ChildSafety:e=>this._reportSpace({abuse_type:b.ChildSafety,...e}),PrivateInformation:e=>this._reportSpace({abuse_type:b.PrivateInformation,...e}),AbusiveBehavior:e=>this._reportSpace({abuse_type:b.AbusiveBehavior,...e})});const{httpConfig:t}=e;this.client=new s.a({...g,...t}),this._authToken=void 0,this._authPromise=null}init(e){l=e}initialized(){return!!l}isLoggedIn(){return!!this._authToken}isTwitterAuthenticated(){if(!this.initialized())return!1;const e=l.store.getState();return Object(u.l)(e)}authToken(){return this._authToken}dispatch(e){return this.initialized()?this.client.dispatch(e).then(o.a):Promise.reject(new Error("[ProxseeApi] config not initialized"))}post(e,t,i={}){const{params:n}=i,r=Object.assign(y(),i.headers),o=JSON.stringify({...t,cookie:this._authToken}),a="Twitter"===this._authUserType?`twitter/${e}`:e;return this.dispatch({method:"POST",path:`/api/v2/${a}`,headers:r,params:n,data:o})}login(){return this._authPromise?this._authPromise:this.initialized()?this.isTwitterAuthenticated()?this.isLoggedIn()?Promise.resolve():(this._authPromise=l.api.Auth.authenticatePeriscope().then((e=>this.loginTwitterToken(e.token))).then((e=>{if(!e)throw new Error("[ProxseeApi] invalid loginTwitterToken response");this._authToken=e.cookie,this._authUserType=e.type})).catch((e=>{const t={err:e};Object(c.a)("[ProxseeApi] failed to login",{extra:t})})).then((()=>{this._authPromise=null})),this._authPromise):Promise.resolve():Promise.reject(new Error("[ProxseeApi] config not initialized"))}loginTwitterToken(e){const t={jwt:e,vendor_id:m,create_user:!1,direct:!0};return this.post("loginTwitterToken",t)}publicPath(e){return this.isLoggedIn()?e:`${e}Public`}accessChat(e){return this.login().then((()=>this.post(this.publicPath("accessChat"),{chat_token:e})))}getChatHistory(e,t={}){return this.login().then((()=>{const{params:i}=t,n=Object.assign(y(),t.headers),r=JSON.stringify({access_token:e.access_token,cursor:e.cursor,limit:1e3,since:null});return this.dispatch({method:"POST",host:e.host,path:e.path,headers:n,params:i,data:r})}))}trackAudiospaceClientEvent(e){return e.length?this.login().then((()=>this.post(this.publicPath("trackAudiospaceClientEvent"),{time:Date.now(),log:e}).catch((e=>{Object(c.a)("[ProxseeApi] failed to scribe events",{extra:{err:e}})})))):Promise.resolve()}_reportSpace(e){return this.login().then((()=>this.post("markAbuse",e).catch((e=>{Object(c.a)("[ProxseeApi] failed to report space",{extra:{err:e}})}))))}};var _=i("G6rE");let S;const A=new Error("[AudioModule] config not initialized");var T=new class{constructor(){this.proxsee=P}init(e){S=e,P.init(S)}initialized(){return!!S}loggedInUser(){if(this.initialized()){const e=S.store.getState();return _.e.selectLoggedInUser(e)}}audioSpace(e){return S?S.api.AudioSpaces.byId(e):Promise.reject(A)}subscribeToScheduledSpace(e){return S?S.api.AudioSpaces.subscribeToScheduledSpaceById(e):Promise.reject(A)}unsubscribeFromScheduledSpace(e){return S?S.api.AudioSpaces.unsubscribeFromScheduledSpaceById(e):Promise.reject(A)}searchAudioSpace(e,t){return S?S.api.AudioSpaces.search(e,t):Promise.reject(A)}}},u2Vg:function(e,t,i){"use strict";i.r(t),i.d(t,"__DANGEROUS_IMPORT_VIDEOPLAYER_BASE__",(function(){return S})),i.d(t,"__DANGEROUS_IMPORT__",(function(){return A}));var n=i("ERkP"),r=i("v6aA"),o=i("rxPX");const a=()=>(e,t,{api:i})=>i.getHttpClient();var s=Object(o.a)().propsFromActions((()=>({getTwitterAuthedHttpClient:a}))).withAnalytics(),c=i("Pc/x"),u=i("gOg7");var l=i("epkG"),p=i("88qn"),h=i("fs1G"),d=i("mf9H"),y=i("lklz"),m=i("MWbm"),f=i("HT/6"),g=i("Zl35"),b=i("rHpw");function P(e){const{featureSwitches:t}=n.useContext(r.a),{broadcastId:i,isLive:o,media:a,mediaKey:s,onEnded:l,onPlayerApi:m,onPlayerState:g,requestedTimecode:b}=e,[P,S]=n.useState(null),A=n.useRef({playbackCoordinationEmitter:null,previousPlayerState:null}),k=a||i&&s;if(n.useEffect((()=>{null===P&&k&&Object(p.a)({showControls:!1,source:{}},t).then((e=>S((()=>e))))}),[P,k,t]),n.useEffect((()=>function(){const{playbackCoordinationEmitter:e}=A.current;e&&e.unregister()}),[]),null===P||!k)return null;const E={analytics:function(e,t){const i={scribeContext:{...e.analytics.contextualScribeNamespace},enableShortFormCompleteLogging:t.isTrue("responsive_web_video_pcomplete_enabled"),periscopeAuthToken:c.a.proxsee.authToken()},n={log:t=>{const{category:i,data:n,namespace:r}=t;null!=r&&r.action&&e.analytics.scribe({...r,data:{...n,_category_:i}})}};return new u.a(n,{log:()=>{}},e.getTwitterAuthedHttpClient(),i)}(e,t),basePlayerClass:P,httpClient:v,onApiReady:function(t){var n;t.play(),"function"==typeof m&&m(t);const r=null==a||null===(n=a.video_info)||void 0===n?void 0:n.duration_millis;"number"==typeof r&&"number"==typeof b&&t.scrubToFraction(b/r);const o=e.disablePlaybackCoordination?h.a:()=>t.pause(),c=i&&s?f.a.SPACE:f.a.NORMAL;A.current.playbackCoordinationEmitter=function(e,t){const i={onAutoPlayRequest:()=>{},onPauseRequest:e,canAutoplay:!1,isLooping:!1,playbackPriority:t};return d.b.register(i)}(o,c)},onStateUpdate:function(e,t){"function"==typeof g&&g(e,t),function(e){const t=T(e);e.isPlaying&&t&&t.durationMs===t.currentTimeMs&&"function"==typeof l&&(l(),A.current.playbackCoordinationEmitter&&A.current.playbackCoordinationEmitter.signalPlaybackFinish())}(e),function(e){const{playbackCoordinationEmitter:t,previousPlayerState:i}=A.current,n=null===i,r=null==i?void 0:i.isPlaying,o=e.isPlaying,a=!n&&r&&!o;!n&&r||!o?a&&t&&t.signalPause():t&&t.signalPlay()}(e),A.current.previousPlayerState=e},twitterAuthedHttpClient:e.getTwitterAuthedHttpClient()};if(i&&s){const e={...E,configType:"static",contentId:s,contentType:"broadcast",variants:[],videoId:y.b.forAudioSpace(i,s,o)};return n.createElement(_,{key:i,playerConfig:e})}if(a){const e={...E,configType:"static",contentId:a.id_str,loop:!1,contentType:"media_entity",durationMs:a.video_info.duration_millis,variants:a.video_info.variants.map((({bitrate:e,content_type:t,url:i})=>({type:t,src:i})))};return n.createElement(_,{key:a.id_str,playerConfig:e})}return null}function _({playerConfig:e}){return n.createElement(m.a,{style:k.displayNone},n.createElement(g.b,e))}const S=P,A=s(P),T=e=>e&&e.tracks[e.currentTrackId],v=new l.a({}),k=b.a.create((e=>({displayNone:{display:"none"}})))}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioOnlyVideoPlayer.056fad85.js.map