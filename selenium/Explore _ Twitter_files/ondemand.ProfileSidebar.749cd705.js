(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{hIbf:function(e,t,a){"use strict";a.r(t),a.d(t,"ProfileSidebarContainer",(function(){return k})),a.d(t,"toRelativePath",(function(){return T}));var i=a("KEM+"),r=a.n(i),n=(a("MvUL"),a("ERkP")),s=a("k49u"),d=a("es0u"),o=a("hqKg"),c=a("8UdT"),l=a("P1r1"),p=a("wrlS"),h=a("XOJV"),m=a("YjVx"),u=a("FLCi"),I=a("zrOZ");const b=(e,t)=>Object(m.a)(e,t),f=[],w=Object(o.createSelector)(((e,t)=>b(Object(p.d)(e),t).selectEntries(e)),h.a.createHydratedSelector,l.l,((e,t,a)=>Object(u.a)(e,(e=>{var i;const r=e.type===c.b.Tweet&&t(e.content.id),n=null!=r&&null!==(i=r.extended_entities)&&void 0!==i&&i.media?Object(I.a)(r.extended_entities.media.map((e=>{const t=e.sensitive_media_warning;return t?Object.keys(t).filter((e=>t[e])):[]})).flat()):void 0;return!r||r.tombstoneInfo||r.isDeleted||r.possibly_sensitive&&!a||null!=n&&n.size||!r.extended_entities||!r.extended_entities.media?f:r.extended_entities.media.map((t=>({mediaItem:t,entry:e})))})))),M=(e,t)=>b(e,t).fetchInitial();var g=a("MDbM"),_=a("rxPX"),S=a("0KEI");const x=(e,t)=>w(e,t.userId),v=(e,t)=>t.hideMediaModule?g.a.LOADED:((e,t)=>b(Object(p.d)(e),t).selectInitialFetchStatus(e))(e,t.userId)||g.a.LOADING;var E=Object(_.a)().propsFromState((()=>({mediaItemsWithEntry:x,mediaFetchStatus:v}))).adjustStateProps((({mediaFetchStatus:e,mediaItemsWithEntry:t})=>({mediaItems:t.map((e=>({...e.mediaItem}))),mediaItemsWithEntry:t,mediaFetchStatus:e}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(S.createLocalApiErrorHandlerWithContextFactory)("PROFILE_SIDE_BAR"),fetchRecentMediaIfNeeded:M}))),O=a("kGix"),y=a("3XMw"),A=a.n(y),L=a("fs1G"),R=a("q2Cp"),F=a("Qwev"),j=a("rHpw"),C=a("3dad"),D=a("v6aA");const P=A.a.b327c129,U={[s.a.NotAuthorizedToViewUser]:{customAction:L.a}};class k extends n.Component{constructor(...e){super(...e),r()(this,"_fetchRecentUserMedia",(()=>{const{createLocalApiErrorHandler:e,fetchRecentMediaIfNeeded:t,hideMediaModule:a,userId:i}=this.props;!a&&t(this.context.featureSwitches,i).catch(e(U))}))}componentDidUpdate(e){e.userId===this.props.userId&&e.hideMediaModule===this.props.hideMediaModule||this._fetchRecentUserMedia()}componentDidMount(){this._fetchRecentUserMedia()}render(){const{mediaFetchStatus:e}=this.props;return e&&e!==O.a.LOADING?this._renderSidebar():n.createElement(F.a,{accessibilityLabel:"Loading profile sidebar"})}_renderSidebar(){const{hideMediaModule:e,userId:t,userScreenName:a,withTopicsToFollow:i}=this.props,r=this._getImages();return n.createElement(d.a,{profileScreenName:a,profileUserId:t,withTopicsToFollow:i},r.length>=2&&!e?n.createElement(R.a,{cacheLocationKey:"profileSidebar",images:r,singleImageMaxAspectRatio:j.a.theme.aspectRatios.landscape,singleImageMinAspectRatio:j.a.theme.aspectRatios.landscape}):null)}_getImages(){const{mediaItems:e,mediaItemsWithEntry:t}=this.props;return t.map(((t,a)=>{var i;const{entry:r,mediaItem:n}=t,s={pathname:T(n.expanded_url),state:{mediaItems:{items:e,index:a},forwardPivotInfo:null===(i=r.content)||void 0===i?void 0:i.forwardPivot}},d=C.a.getOriginalImage(n);return d&&{width:d.width,height:d.height,url:d.url,backgroundColor:C.a.getBackgroundColor(n),cropCandidates:C.a.getCropCandidates(n),accessibilityLabel:n.ext_alt_text||P,shouldShowAltLabel:!1,expandedUrl:s}})).filter(Boolean)}}r()(k,"contextType",D.a);const T=e=>e.replace("https://twitter.com",""),N=E(k);t.default=N}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ProfileSidebar.749cd705.js.map