(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{"+93b":function(e,a,t){"use strict";t.r(a);var r=t("ezF+"),s=t("ERkP"),n=t("Fmkq"),o=t("KEM+"),c=t.n(o),i=t("FIs5"),l=t("MDbM"),d=t("eXtP"),m=t("3XMw"),b=t.n(m),u=t("fs1G"),p=t("zb92"),y=t("RuTB");var h=Object(p.a)({loader:()=>Promise.all([t.e(0),t.e(193)]).then(t.bind(null,"DO1+")),renderPlaceholder:(e,a)=>s.createElement(y.a,{hasError:e,onRetry:a})}),C=t("BKvV"),E=t("b1wW"),v=t("Fz18"),f=t("JfS+");var R=Object(p.a)({loader:()=>Promise.all([t.e(0),t.e(193)]).then(t.bind(null,"0xZH")),renderPlaceholder:(e,a)=>s.createElement(y.a,{hasError:e,onRetry:a})}),g=t("v6aA"),T=t("rpbw"),A=t("XBtf");const w={loader:()=>t.e(213).then(t.bind(null,"kh1t")),loaderKey:"feedbackItemLoader",strategy:A.a.Critical};var I=t("TEXq"),O=t("PlEh");const P=Object.freeze({PagedCarouselFeedbackItem:"pagedCarouselFeedbackItem",Message:"message"});var S=r.c({selectDisplayType:e=>Object(I.a)(e.content.content)||"",handlers:{[P.PagedCarouselFeedbackItem]:w,[P.Message]:Object(O.a)({withGaps:!1})}}),D=t("VPAj"),F=t("yDHe");var j=r.d({render:({content:{dismissedEntry:e,feedbackKeys:a}},{module:t})=>s.createElement(F.a,{carousel:!0,entry:e,feedbackKeys:a,module:t}),shouldDisplayBorder:Object(D.a)(!1)});const k=Object.freeze({ScoreCard:"scoreCard",Standard:"standard",Broadcast:"broadcast",CallToAction:"callToAction"}),M={loader:()=>t.e(222).then(t.bind(null,"CdHO")),loaderKey:"standardHandlerLoader",strategy:A.a.Critical},K={loader:()=>t.e(222).then(t.bind(null,"vKPG")),loaderKey:"broadcastLoader",strategy:A.a.Critical},L={loader:()=>t.e(222).then(t.bind(null,"kthL")),loaderKey:"callToActionLoader",strategy:A.a.Critical},B={loader:()=>t.e(222).then(t.bind(null,"FYbo")),loaderKey:"scoreCardLoader",strategy:A.a.Critical};var x=r.c({selectDisplayType:e=>Object(I.a)(e.content.content)||"",handlers:{[k.Standard]:M,[k.ScoreCard]:B,[k.Broadcast]:K,[k.CallToAction]:L}}),z=t("67iF"),N=t("8UdT");const X={[N.b.PagedCarouselItem]:S,[N.b.Tile]:x,[N.b.Topic]:Object(z.a)({}),[N.b.TwitterList]:Object(T.a)({})},G={[N.a.Tombstone]:r.e(j)};var H=X;const V=u.a,J=b.a.afb4c24a;class q extends s.PureComponent{render(){const{applyReactionInstructions:e,canRefresh:a,dismissedEntries:t,items:r,module:n,moduleEntryId:o,numRowsFromMetadata:c,renderEmptyState:i,richScribeAction:m,scribe:b,scribeNamespace:p,scrollerDisplayType:y}=this.props;return s.createElement(C.b.Provider,{value:{numRowsFromMetadata:c,scrollerDisplayType:y,...this.context}},s.createElement(d.a,{additionalConfiguration:G,dismissedEntries:t,entries:r,entryConfiguration:H},((t,r)=>s.createElement(v.a,{identifier:o},s.createElement(f.a,{applyReactionInstructions:e,canRefresh:a,clearActiveCover:u.a,entries:r,handlerRegistry:t,initialFetchStatus:l.a.LOADED,module:n,onAtTop:u.a,onRef:u.a,processCallback:V,refreshControl:null,removeAlert:u.a,renderEmptyState:i,richScribeAction:m,scribeAction:b,scribeNamespace:p,scroller:y===E.a.PagedCarousel?h:R,timelineId:o,title:"Carousel",withKeyboardShortcuts:!1})))))}}c()(q,"contextType",g.a),c()(q,"defaultProps",{renderEmptyState:()=>s.createElement(i.a,{message:J}),scrollerDisplayType:E.a.Vertical});var U=q,W=t("zh9S"),Y=t("Rp9C"),Z=t("X04g");a.default=({scrollerDisplayType:e})=>r.g({bindActions:({module:e})=>({applyReactionInstructions:e.applyReactionInstructions,richScribeAction:n.richScribeAction,scribe:W.c}),component:U,selectData:({entry:e,module:a})=>({canRefresh:e=>a.selectCanRefresh(e),dismissedEntries:e=>a.selectDismissedEntries(e)}),createProps:({data:{dismissedEntries:a={},canRefresh:t},entry:{content:{items:r},entryId:s,itemMetadata:{moduleMetadata:n}},scribeNamespace:o,actions:{applyReactionInstructions:c,richScribeAction:i,scribe:l},module:d})=>{var m;return{applyReactionInstructions:c,canRefresh:t,dismissedEntries:a,items:r||[],module:d,moduleEntryId:s,numRowsFromMetadata:e===E.a.GridCarousel?null==n||null===(m=n.gridCarouselMetadata)||void 0===m?void 0:m.numRows:void 0,richScribeAction:i,scribeNamespace:o,scribe:l,scrollerDisplayType:e}},onImpression:({actions:{scribe:e},entry:{itemMetadata:{clientEventInfo:a}},scribeNamespace:t})=>{const r=Y.a.getAllSurfaceDetails(a);e({...t,action:"impression"},r?{items:[{item_type:Z.a.ItemType.CAROUSEL,...r}]}:void 0)},isFocusable:Object(D.a)(!0),getBehavioralEventContextOverride:u.a})},BKvV:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var r=t("ERkP"),s=t("b1wW"),n=t("v6aA");const o=r.createContext(Object.create(n.c,Object.getOwnPropertyDescriptors({numRowsFromMetadata:void 0,scrollerDisplayType:s.a.Carousel})));a.b=o}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.CarouselTimelineHandler.2d1672b5.js.map