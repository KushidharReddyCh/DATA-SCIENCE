(window.webpackJsonp=window.webpackJsonp||[]).push([[180,168],{ACNv:function(e,t,n){"use strict";n.r(t);var o=n("KEM+"),i=n.n(o),a=n("ERkP"),r=n("3XMw"),s=n.n(r),c=n("oQhu"),l=n("mjJ+"),d=n("eb3s");const m=s.a.cfd2f35d;class h extends a.Component{constructor(...e){super(...e),i()(this,"state",{activeConfirmation:null}),i()(this,"_handleConfirm",(e=>{this.setState({activeConfirmation:e})})),i()(this,"_handleConfirmed",(()=>{this.state.activeConfirmation&&this.state.activeConfirmation.callback(),this.setState({activeConfirmation:null}),this.props.onClose()})),i()(this,"_handleCancelConfirm",(()=>{this.setState({activeConfirmation:null})}))}render(){const{onClose:e}=this.props,{activeConfirmation:t}=this.state;return t?this._renderConfirmation(t):a.createElement(l.a,{cancelButtonLabel:m,items:this._getProcessedActionItems(),onCloseRequested:e})}_renderConfirmation(e){if(e&&e.render)return e.render(this._handleConfirmed,this._handleCancelConfirm);{const{confirmButtonType:t,headline:n,label:o,text:i,withCancelButton:r}=e||{};return a.createElement(d.a,{confirmButtonLabel:o,confirmButtonType:t,headline:n,onCancel:this._handleCancelConfirm,onConfirm:this._handleConfirmed,text:i,withCancelButton:r})}}_getProcessedActionItems(){const{actionItems:e,dividerIndices:t,onClose:n}=this.props;return u(e,t,n,this._handleConfirm)}}const u=Object(c.a)(((e,t,n,o)=>e.reduce(((e,{Icon:i,behavioralEventContext:a,confirmation:r,disabled:s,excludeFromActionMenu:c,isEmphasized:l,link:d,onClick:m,subText:h,testID:u,text:p,withCancelButton:b},v)=>{if(!c){const c=m?()=>{r?r.render?o({callback:m,render:r.render}):o({callback:m,text:r.text,headline:r.headline,label:r.label,confirmButtonType:r.confirmButtonType,withCancelButton:r.withCancelButton}):(m(),n())}:n;e.push({behavioralEventContext:a,disabled:s,Icon:i,isEmphasized:l,testID:u,subText:h,text:p,onClick:c,link:d,withBottomBorder:t&&t.includes(v)})}return e}),[])));t.default=h},MzK7:function(e,t,n){"use strict";n.r(t),n.d(t,"CONVERSATION_CONTROLS_ANALYTICS",(function(){return Vt})),n.d(t,"TweetCurationActionMenu",(function(){return Wt}));var o=n("KEM+"),i=n.n(o),a=n("ERkP"),r=n("d4kb"),s=n("3XMw"),c=n.n(s),l=n("SNyS");const d=c.a.fb4ee11c;var m=n("xrkw");const h=c.a.g1fa869c;var u=n("2qZs");const p=c.a.h3ab37c7;var b=(e,{scribeAction:t,tweetId:n})=>({text:e.isTrue("responsive_web_birdwatch_hcomp_user")?"Write a note [research]":p,onClick:()=>{t({element:"contribute_to_birdwatch"})},link:{pathname:`/i/birdwatch/contribute/${n}`},Icon:u.a}),v=n("EbOo"),w=n("xZGM"),_=n("dFWS");const f=c.a.bae0cbcf,y=c.a.f8393bda;const C={defaultToast:{text:c.a.ae0c5fbe},showToast:!0};var E=n("j7tW"),T=n("1YZw"),g=n("0pUJ"),k=n("XOJV"),x=n("G6rE"),I=n("rxPX"),A=n("ymux"),S=n("0KEI"),R=n("RqPI");const M=(e,t)=>Object(w.y)(e,w.n),O=(e,t)=>Object(w.y)(e,w.m),H=e=>Object(w.y)(e,w.d),L=e=>(t,n,{featureSwitches:o})=>Promise.all([t(k.a.delete(e)),t(Object(A.a)({focalTweetId:e,featureSwitches:o}).deleteTimeline())]);var z=Object(I.a)().propsFromState((()=>({userCountry:R.v,userLanguage:R.n,shouldShowMuteEducationTip:M,shouldShowHideReplyTip:O,shouldShowConversationControlsTip:H}))).propsFromActions((()=>({addFlag:w.v,addToast:T.b,block:x.e.block,changeConversationControls:k.a.changeConversationControls,createLocalApiErrorHandler:Object(S.createLocalApiErrorHandlerWithContextFactory)("TWEET_CURATION_ACTION_SHEET_CONTAINER"),deleteTweet:L,dismissUserFromConversation:A.b,follow:x.e.follow,hideReply:k.a.hideReply,mute:g.a,muteTweet:k.a.mute,pin:E.a,removeConversationControls:k.a.removeConversationControls,removeTag:k.a.removeTag,unblock:x.e.unblock,unfollow:x.e.unfollow,unhideReply:k.a.unhideReply,unmute:x.e.unmute,unmuteTweet:k.a.unmute,unpin:E.c}))).withAnalytics(),D=n("H7Rt"),B=n("v6aA");const j=e=>Object(w.y)(e,w.d);var U=Object(I.a)().propsFromState((()=>({shouldShowConversationControlsTip:j}))).propsFromActions((()=>({addFlag:w.v})));var F=n("MWbm"),N=n("4zmP"),P=n("rHpw");const V=c.a.bae0cbcf,W=P.a.create((e=>({inlineCallout:{position:"absolute",right:e.spaces.space32,marginTop:e.spaces.space2,zIndex:1},textStyle:{whiteSpace:"nowrap"}})));var $=U((({addFlag:e,shouldShowConversationControlsTip:t})=>{const n=a.useRef(),o=function(e){const[t,n]=a.useState(!1),o="IntersectionObserver"in window?new IntersectionObserver((([e])=>n(e.isIntersecting))):null;return a.useEffect((()=>{if(null!==o)return o.observe(e.current),()=>{o.disconnect()}}),[]),t}(n),i=a.useRef(!1),{featureSwitches:r}=a.useContext(B.a),s=r.isTrue("conversation_controls_change_tooltip_enabled"),c=t&&s;return a.useEffect((()=>{o&&(i.current=!0,setTimeout((()=>{e(w.d)}),5e3))}),[o,e]),a.useEffect((()=>()=>{i.current&&e(w.d)}),[]),a.createElement(F.a,{ref:n,style:W.inlineCallout},o&&c?a.createElement(N.a,{text:V,textStyle:W.textStyle,withRightArrow:!0}):null)})),K=n("yZqq"),q=n("hiGS");const J=c.a.d96cf7cd,Z=c.a.dd211107,G=c.a.c55d72d0,X=c.a.a1aa840e,Y=c.a.c189f2dd;var Q=n("Lsrn"),ee=n("k/Ka");const te=(e={})=>Object(ee.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[Q.a.root,e.style],viewBox:"0 0 24 24"},a.createElement("g",null,a.createElement("path",{d:"M23.804 11.5l-6.496-7.25c-.278-.31-.752-.334-1.06-.06-.308.277-.334.752-.058 1.06L22.238 12l-6.047 6.75c-.275.308-.25.782.06 1.06.142.127.32.19.5.19.204 0 .41-.084.558-.25l6.496-7.25c.252-.28.258-.713 0-1zm-23.606 0l6.496-7.25c.278-.31.752-.334 1.06-.06.308.277.334.752.058 1.06L1.764 12l6.047 6.75c.277.308.25.782-.057 1.06-.143.127-.322.19-.5.19-.206 0-.41-.084-.56-.25L.197 12.5c-.252-.28-.257-.713 0-1zm9.872 12c-.045 0-.09-.004-.135-.012-.407-.073-.68-.463-.605-.87l3.863-21.5c.074-.407.466-.674.87-.606.408.073.68.463.606.87l-3.864 21.5c-.065.363-.38.618-.737.618z"})));te.metadata={width:24,height:24};var ne=te;const oe=c.a.e6c84638;var ie=n("pwey"),ae=n("PSpH");const re=c.a.c66afdc2,se=c.a.hbe4feb4,ce=c.a.e1618e48;const le=Object.freeze({all:c.a.baffe39a,community:c.a.af293dc2,by_invitation:c.a.cf7f7e39}),de=c.a.bf994ab2;var me=(e,t)=>{let n=le[t];if(t===D.a.by_invitation){var o,i;!(null!==(o=e.entities)&&void 0!==o&&null!==(i=o.user_mentions)&&void 0!==i&&i.some((t=>t.id_str!==e.user.id_str)))&&(n=de)}return a.createElement(c.a.I18NFormatMessage,{$i18n:"f8ea2809",selection:n})},he=n("F3pd"),ue=n("feu+"),pe=n("eb3s"),be=n("lUZE"),ve=n("5cUs");const we=c.a.ge5067bb,_e=c.a.ea626ab3,fe=c.a.fc716886,ye=`${c.a.f2a2a06e}\n\n${c.a.f82c0bbf}`,Ce=c.a.b2615c6d,Ee=c.a.i62a03aa,Te=c.a.cfd2f35d,ge=c.a.a6450e83,ke=c.a.hb279a11;var xe=({addFlag:e,addToast:t,behavioralEventEntityToken:n,createLocalApiErrorHandler:o,hideReply:i,onBlock:r,onTweetDismiss:s,scribeAction:c,shouldShowHideReplyTip:l,tweet:d})=>{const m=()=>{c({element:"moderated_replies_prompt",action:"impression"})};return{confirmation:l?{render:(e,t)=>(({onConfirm:e,onCancel:t,onHideReplyImpression:n=(()=>{})})=>a.createElement(ue.a,{actionLabel:we,graphic:be.a,headline:fe,onAction:e,onClose:t,onImpression:n,onTertiaryAction:t,subtext:ye,supportUrl:"https://help.twitter.com/en/using-twitter/mentions-and-replies?lang=browser#hidden-reply",tertiaryActionLabel:Te}))({onConfirm:e,onCancel:t,onHideReplyImpression:m})}:{render:(e,t)=>{const{user:{screen_name:n}}=d;return a.createElement(pe.a,{cancelButtonLabel:Ee,confirmButtonLabel:ge,confirmButtonType:"destructiveFilled",headline:Ce({screenName:n}),onCancel:e,onConfirm:()=>{r(),e()},text:ke({screenName:n})})}},text:we,onClick:()=>{e(w.m),i(d.id_str,{conversation_id:d.conversation_id_str}).then((e=>{s&&s(),t({text:_e,behavioralEventEntityToken:n})}),o({showToast:!0})),c({element:"moderate_reply"})},Icon:ve.a}},Ie=n("n5fo"),Ae=n("fz3c");const Se=c.a.f20b040d;var Re=n("jQy5"),Me=n("NTtI"),Oe=n("qz6Z"),He=n("w02m");const Le=c.a.e2d6c17e,ze=c.a.cd1942f4,De=c.a.bbd8bed6,Be=c.a.c13af432,je=c.a.gf5e9ea6,Ue=c.a.df744bd9,Fe=c.a.j9552760,Ne=c.a.cfd2f35d,Pe=c.a.d751694c;var Ve=({addFlag:e,addToast:t,behavioralEventEntityToken:n,createLocalApiErrorHandler:o,muteTweet:i,scribeAction:r,shouldShowMuteEducationTip:s,tweet:c,unmuteTweet:l})=>{const d=()=>{e(w.n)},m=()=>{l(c.id_str).then((()=>{t({text:Be,behavioralEventEntityToken:n})}),(e=>{o({showToast:!0})(e),r({element:"unmute_conversation_error"})})),r({element:"unmute_conversation"})},h={behavioralEventContext:{viewType:"mute_conversation",viewState:{type:"toggleable",toggledTo:!0}},text:Le,onClick:()=>{i(c.id_str).then((()=>{t({action:{label:je,onAction:m,behavioralEventViewType:"unmute_conversation"},behavioralEventEntityToken:n,text:De})}),(e=>{o({showToast:!0})(e),r({element:"mute_conversation_error"})})),r({element:"mute_conversation"})},confirmation:s?{render:(e,t)=>a.createElement(ue.a,{actionLabel:Ue,graphic:Me.a,graphicDisplayMode:"illustration",headline:Fe,onAction:e,onClose:t,onImpression:d,onTertiaryAction:t,subtext:Pe,supportUrl:"https://support.twitter.com/articles/20175032",tertiaryActionLabel:Ne})}:void 0,Icon:Oe.a},u={behavioralEventContext:{viewType:"mute_conversation",viewState:{type:"toggleable",toggledTo:!1}},text:ze,onClick:m,Icon:He.a};return c.conversation_muted?u:h},We=n("ShJ/"),$e="block",Ke="pin",qe="unpin",Je="report";const Ze=c.a.ha35a1d2,Ge=c.a.afac3b9d,Xe=c.a.e2d44ce9,Ye=c.a.c5d23126,Qe=c.a.aaef1b48;const et=c.a.f5cdcc2b;var tt=n("24HD"),nt=n("Bwid");const ot=c.a.jcba15d2;var it=n("5oT/");const at=c.a.b99364a5;var rt=n("Rp9C"),st=n("4bW+"),ct=n("u0B7"),lt=n("SJ11"),dt=n("tJZD");const mt=c.a.ja66a2b4,ht=c.a.c2423b7a;const ut=(e={})=>Object(ee.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[Q.a.root,e.style],viewBox:"0 0 24 24"},a.createElement("g",null,a.createElement("path",{d:"M18.64.94c-2.2 0-4.05 1.53-4.54 3.59H2.96c-1.15 0-2.08.94-2.08 2.08v14.34c0 1.15.93 2.08 2.08 2.08H17.3c1.15 0 2.08-.93 2.08-2.08V10.22c2.23-.35 3.94-2.28 3.94-4.6 0-2.58-2.1-4.68-4.68-4.68zm-.65 20.01c0 .39-.31.7-.69.7H2.96c-.38 0-.69-.31-.69-.7V6.62c0-.39.31-.7.69-.7h11.02c.14 2.22 1.83 4.02 4.01 4.32v10.71zm.65-12.16c-1.75 0-3.17-1.42-3.17-3.17s1.42-3.18 3.17-3.18 3.17 1.43 3.17 3.18-1.42 3.17-3.17 3.17z"}),a.createElement("path",{d:"M13.25 10.71H5.493c-.414 0-.75-.336-.75-.75s.336-.752.75-.752h7.754c.415 0 .752.337.752.75s-.34.752-.75.752zm1.47 3.793H5.493c-.414 0-.75-.336-.75-.75 0-.415.335-.752.75-.752h9.225c.413 0 .75.338.75.75 0 .418-.335.754-.75.754h.002zm-4.613 3.793H5.494c-.414 0-.75-.336-.75-.75 0-.416.335-.752.75-.752h4.613c.414 0 .75.336.75.75 0 .416-.336.752-.75.752zM20.72 5.62c0 .38-.31.69-.69.69h-.7V7c0 .38-.31.69-.69.69s-.69-.31-.69-.69v-.69h-.69c-.38 0-.69-.31-.69-.69s.31-.69.69-.69h.69v-.7c0-.38.31-.69.69-.69s.69.31.69.69v.7h.7c.38 0 .69.3.69.69z"})));ut.metadata={width:24,height:24};var pt=ut;const bt=c.a.i31dfa4c,vt=c.a.j8e56ba1;const wt=c.a.ic030337,_t=c.a.j1b8c867,ft=c.a.eb2d59f3,yt=c.a.j44ec61f,Ct=c.a.i0086d6b;const Et=c.a.f9478972;var Tt=n("TnY3"),gt=n("mqpi"),kt=n("4hQ9"),xt=n("ACNv"),It=n("zIWA"),At=n("6s7X");const St=c.a.f1824804,Rt=c.a.ff9bd692,Mt=c.a.e3fd237d,Ot=c.a.d1e2161f,Ht=({analytics:e,featureSwitches:t,history:n,isAppealTweetWarning:o=!1,promotedContent:i,scribeAction:a,tweet:r})=>{let s={element:"report_tweet"},c="/i/report/status",l=Ae.a.Tweet,d=It.a,m=i?Mt:Rt;o&&(s={element:"appeal_tweet_warning"},c="/i/report/appeal_tweet_warning",l=Ae.a.AppealTweetWarning,d=At.a,m=St);return{behavioralEventContext:{viewType:"report"},Icon:d,onClick:()=>{var d,m,h,u,p;const b=e.contextualScribeData,v=((null==r||null===(d=r.extended_entities)||void 0===d||null===(m=d.media)||void 0===m?void 0:m.length)||0)>0,w=b.items&&b.items[0]&&(null===(h=b.items[0].conversation_details)||void 0===h?void 0:h.conversation_section);a(s);if(!(o||r.community_id_str||"745291183405076480:broadcast"===(null===(u=r.card)||void 0===u?void 0:u.name)||"3691233323:periscope_broadcast"===(null===(p=r.card)||void 0===p?void 0:p.name)||i)&&Object(Ae.g)(t,l)){const t=Object(Ae.d)({clientReferer:window.location.pathname,conversationSection:w,isMedia:v,isPromoted:void 0!==i,reportType:l,reportedTweet:r,reportedUser:r.user,scribeNamespace:e.contextualScribeNamespace});n.push({pathname:"/i/safety/report_story",state:{input:{requested_variant:JSON.stringify(t)}}})}else n.push({pathname:`${c}/${r.id_str}`,state:{clientReferer:window.location.pathname,conversationSection:w,isMedia:v,promotedContent:i,scribeNamespace:e.contextualScribeNamespace}})},testID:Je,text:m}};var Lt=n("IG7M"),zt=n("0wXR"),Dt=n("1wVr");const Bt=c.a.e68b09b4,jt=c.a.g9425e3f,Ut=c.a.jfc76958;const Ft=c.a.e133be4e,Nt=c.a.a9fd20be,Pt=["hideTweet","removeCommunityMember","delete","appealTweetWarning","pinOrUnpin","promotedTweetDismiss","adInfo","removeTag","feedbackOptions","followOrUnfollow","addOrRemoveFromList","muteOrUnmute","muteOrUnmuteConversation","changeConversationControls","blockOrUnblock","removeAutoblock","hideReply","unhideReply","embed","report","reportNetzDG","analytics","viewHiddenReplies","birdwatch"],Vt=Object.freeze({all:"change_conversation_control_to_everyone",community:"change_conversation_control_to_community",by_invitation:"change_conversation_control_to_mentioned",followers:"change_conversation_control_to_followers",community_members:"community_members",community_hidden_tweet:"community_hidden_tweet",super_followers_exclusive:"super_followers_exclusive",community_tweet_member_removed:"community_tweet_member_removed"});class Wt extends a.Component{constructor(...e){super(...e),i()(this,"_dividerIndices",[]),i()(this,"state",{showModerationBlockConfirmation:!1}),i()(this,"_shouldDisable",gt.b.bind(null,this.context.featureSwitches)),i()(this,"_birdwatchAction",b.bind(null,this.context.featureSwitches)),i()(this,"_shouldRenderSectionDividers",this.context.featureSwitches.isTrue("responsive_web_menu_section_divider_enabled")),i()(this,"_authorModeratedReplies",this.context.featureSwitches.isTrue("author_moderated_replies_urt_container_enabled")),i()(this,"_birdwatchNoteWritingEnabled",this.context.featureSwitches.isTrue("responsive_web_birdwatch_note_writing_enabled")),i()(this,"_convoControlsEnabled",this.context.featureSwitches.isTrue("conversation_controls_change_enabled")),i()(this,"_c9sModerationEnabled",this.context.featureSwitches.isTrue("c9s_moderation_enabled")),i()(this,"_c9sRemoveMemberEnabled",this.context.featureSwitches.isTrue("c9s_remove_member_enabled")),i()(this,"_onMenuClick",(()=>{const{addFlag:e,onMenuClick:t,shouldShowConversationControlsTip:n,withChangeConversationControlsTooltip:o}=this.props;n&&o&&e(w.d),t&&t()})),i()(this,"_handleOnChangeConversationControls",(e=>{const{addToast:t,analytics:n,behavioralEventEntityToken:o,changeConversationControls:i,createLocalApiErrorHandler:a,removeConversationControls:r,tweet:s}=this.props,c=me(s,e);var l;e===D.a.all?r&&r(s.id_str).then((()=>{t({text:c,behavioralEventEntityToken:o}),n.scribe({element:Vt.all,action:"click",data:{items:[rt.a.getChangeConversationControlsItem(s,e)]}})}),a(C)):i&&i(s.id_str,{policy:e,screenName:null===(l=s.user)||void 0===l?void 0:l.screen_name}).then((()=>{t({text:c,behavioralEventEntityToken:o}),n.scribe({element:Vt[e],action:"click",data:{items:[rt.a.getChangeConversationControlsItem(s,e)]}})}),a(C))})),i()(this,"_renderCurationActionMenu",(e=>t=>{const n=this._getActionItems(e);return a.createElement(xt.default,{actionItems:n,dividerIndices:this._shouldRenderSectionDividers?this._dividerIndices:void 0,onClose:t})})),i()(this,"_getMuteOrUnmuteAction",(()=>{const{addToast:e,behavioralEventEntityToken:t,createLocalApiErrorHandler:n,dismissUserFromConversation:o,mute:i,promotedContent:a,tweet:r,unmute:s}=this.props,{user:c}=r,l={addToast:e,behavioralEventEntityToken:t,createLocalApiErrorHandler:n,scribeAction:this._scribeAction},d={promotedContent:this.context.featureSwitches.isTrue("responsive_web_add_impression_id_to_mute_engagement_enabled")?a:void 0};return Object(Re.a)({...l,mute:i,unmute:s,user:c,dismissUserFromConversation:o,...d})})),i()(this,"_getActionItems",(e=>{const{deleteTweet:t,follow:n,hideReply:o,muteTweet:i,pin:a,removeTag:s,unmuteTweet:c,unpin:u}=this.props,{addFlag:p,addToast:b,analytics:v,behavioralEventEntityToken:w,createLocalApiErrorHandler:C,feedbackItems:E,history:T,isPinned:g,onDeleteTweet:k,onTweetDismiss:x,promotedContent:I,shouldShowHideReplyTip:A,shouldShowMuteEducationTip:S,tweet:R,userCountry:M,withChangeConversationControls:O,withCommunityModerationAuthority:H,withHideReply:L,withMuteConversation:z,withUnhideReply:D,withViewHiddenReplies:B}=this.props,{featureSwitches:j,loggedInUserId:U}=this.context,{user:F}=R,N=[],P=I&&"earned"!==Object(he.a)(I),V={},W=[],$=this._scribeAction,K={addToast:b,behavioralEventEntityToken:w,createLocalApiErrorHandler:C,scribeAction:$},Q=this._c9sModerationEnabled&&R.community_id_str&&H;if(P&&(V.adInfo=(({promotedContent:e})=>{if(!e||!e.impression_id)return;const{impression_id:t}=e;return{behavioralEventContext:{viewType:"ad_info"},text:d,Icon:l.a,link:{pathname:`/i/about-this-ad/${t}`}}})({promotedContent:I})),F.id_str!==U||this._shouldDisable(R,gt.a.Analytics)||(V.analytics=(({scribeAction:e,tweet:t})=>({text:h,onClick:()=>{e({element:"analytics"})},link:`/${t.user.screen_name}/status/${t.id_str}/analytics`,Icon:m.a}))({tweet:R,scribeAction:$})),F.protected||this._shouldDisable(R,gt.a.Embed)||(V.embed=(({permalink:e,scribeAction:t})=>({behavioralEventContext:{viewType:"embed"},text:oe,onClick:()=>{const n=`https://publish.twitter.com/?url=https://twitter.com${e}`;window.open(n,"_blank"),t({element:"embed_tweet"})},Icon:ne}))({permalink:R.permalink,scribeAction:$})),B&&R.conversation_id_str===R.id_str&&!this._shouldDisable(R,gt.a.ViewHiddenReplies)&&(V.viewHiddenReplies=(({permalink:e,scribeAction:t})=>({text:Et,link:`${e}/hidden`,onClick:()=>{t({element:"view_moderated_replies"})},Icon:ve.a}))({permalink:R.permalink,scribeAction:$})),((e,t)=>{var n,o,i;const a=(null===(n=t.extended_entities)||void 0===n?void 0:n.media)&&t.extended_entities.media[0]&&(null===(o=t.extended_entities.media[0].features)||void 0===o||null===(i=o.all)||void 0===i?void 0:i.tags);return!!a&&Object(Dt.a)(a,(t=>t.user_id===e))})(U,R)&&(V.removeTag=(({createLocalApiErrorHandler:e,loggedInUserId:t,removeTag:n,tweet:o})=>({behavioralEventContext:{viewType:"remove_tag"},confirmation:{label:Bt,headline:jt},text:Ut,onClick:()=>{var i,a;const r=null===(i=o.extended_entities)||void 0===i||null===(a=i.media)||void 0===a?void 0:a.map((e=>e.id_str)).join(",");n(o.id_str,{status_id:o.id_str,media_ids:r,tagged_user_ids:t}).catch(e({showToast:!0}))},Icon:zt.a}))({createLocalApiErrorHandler:C,loggedInUserId:U,removeTag:s,tweet:R})),U)if(F.blocking||this._shouldDisable(R,gt.a.ListsAddRemove)||(V.addOrRemoveFromList=(({scribeAction:e,user:t})=>Object(r.a)(t,(()=>{e({element:"add_to_list"})})))({user:F,scribeAction:$})),this._birdwatchNoteWritingEnabled&&(V.birdwatch=this._birdwatchAction({scribeAction:$,tweetId:R.id_str})),F.id_str!==U){if(Q){const e=v.contextualScribeNamespace;this._shouldDisable(R,gt.a.HideCommunityTweet)||(V.hideTweet=((e,t)=>({text:Se,Icon:Ie.a,link:{pathname:`/i/report/${Ae.a.HideCommunityTweet}/${e}`,state:{scribeNamespace:t}}}))(R.id_str,{...e,element:"hide_tweet"})),this._c9sRemoveMemberEnabled&&!this._shouldDisable(R,gt.a.RemoveCommunityMember)&&(V.removeCommunityMember=((e,t,n)=>({text:at({screenName:e.screen_name}),Icon:it.a,link:{pathname:`/i/report/${Ae.a.RemoveCommunityMember}/${t}`,state:{scribeNamespace:n}}}))(F,R.id_str,{...e,element:"remove_community_member"}))}x&&P&&(V.promotedTweetDismiss=(({onTweetDismiss:e})=>({text:et,onClick:e,Icon:l.a}))({onTweetDismiss:x})),F.blocking||this._shouldDisable(R,gt.a.FollowAuthor)||(V.followOrUnfollow=F.following?(({addToast:e,behavioralEventEntityToken:t,createLocalApiErrorHandler:n,promotedContent:o,scribeAction:i,unfollow:a,user:r})=>({behavioralEventContext:{viewType:"follow",viewState:{type:"toggleable",toggledTo:!1}},text:mt({screenName:r.screen_name}),onClick:()=>{a(r.id_str,{promotedContent:o}).then((n=>{e({behavioralEventEntityToken:t,text:ht({screenName:r.screen_name})})}),n(dt.a)),i({element:"unfollow"})},Icon:lt.a}))({...K,unfollow:this.props.unfollow,promotedContent:I,user:F}):(({addToast:e,behavioralEventEntityToken:t,createLocalApiErrorHandler:n,follow:o,promotedContent:i,scribeAction:a,user:r})=>({behavioralEventContext:{viewType:"follow",viewState:{type:"toggleable",toggledTo:!0}},text:re({screenName:r.screen_name}),onClick:()=>{o(r.id_str,{promotedContent:i}).then((n=>{a({element:"follow"}),n&&n.protected?e({text:se({screenName:r.screen_name}),behavioralEventEntityToken:t}):e({text:ce({screenName:r.screen_name}),behavioralEventEntityToken:t})}),n({...ae.a,showToast:!0})),a({element:"follow_attempt"})},Icon:ie.a}))({...K,follow:n,promotedContent:I,user:F}),V.muteOrUnmute=this._getMuteOrUnmuteAction()),z&&(V.muteOrUnmuteConversation=Ve({...K,addFlag:p,muteTweet:i,shouldShowMuteEducationTip:S,tweet:R,unmuteTweet:c})),L&&!this._authorModeratedReplies&&(V.hideReply=xe({...K,addFlag:p,hideReply:o,onBlock:this._handleBlock,onTweetDismiss:x,shouldShowHideReplyTip:A,tweet:R})),D&&(V.unhideReply=(({addToast:e,behavioralEventEntityToken:t,createLocalApiErrorHandler:n,scribeAction:o,tweet:i,unhideReply:a})=>({text:bt,onClick:()=>{a(i.id_str,{conversation_id:i.conversation_id_str}).then((n=>{e({ariaOnly:!0,text:vt,behavioralEventEntityToken:t})}),n({showToast:!0})),o({element:"unmoderate_reply"})},Icon:pt}))({...K,tweet:R,unhideReply:this.props.unhideReply}));const e={user:F,source:tt.k.TWEET_CARET,testID:$e,blockAction:this._handleBlock,unblockAction:this._handleUnblock};if(V.blockOrUnblock=Object(tt.g)(e),F.smart_blocking){const e={history:T,user:F,removeAutoblockAction:this._handleUnblock};V.removeAutoblock=(({history:e,removeAutoblockAction:t,user:n})=>{const o=Object(tt.i)(n.screen_name);return{text:ot,onClick:()=>{t(o),e.location.pathname.match(/actioned_tweets\/\d+/)&&e.goBack()},confirmation:o,Icon:nt.a}})(e)}}else g?V.pinOrUnpin=(({addToast:e,behavioralEventEntityToken:t,createLocalApiErrorHandler:n,scribeAction:o,tweetId:i,unpin:a})=>({confirmation:{text:ft,headline:_t,label:yt},testID:qe,text:wt,onClick:()=>{a(i).then((()=>{e({text:Ct,behavioralEventEntityToken:t})}),n({showToast:!0})),o({element:"unpin"})},Icon:We.a}))({...K,tweetId:R.id_str,unpin:u}):this._shouldDisable(R,gt.a.PinToProfile)||(V.pinOrUnpin=(({addToast:e,behavioralEventEntityToken:t,createLocalApiErrorHandler:n,pin:o,scribeAction:i,tweetId:a})=>({confirmation:{text:Xe,headline:Ge,label:Ye},testID:Ke,text:Ze,onClick:()=>{o(a).then((()=>{e({text:Qe,behavioralEventEntityToken:t})}),n({showToast:!0})),i({element:"pin"})},Icon:We.a}))({...K,pin:a,tweetId:R.id_str})),this._shouldIncludeTweetAppealOption()&&(V.appealTweetWarning=Ht({analytics:v,history:T,isAppealTweetWarning:!0,promotedContent:I,scribeAction:$,tweet:R,featureSwitches:j})),z&&!this._shouldDisable(R,gt.a.MuteConversation)&&(V.muteOrUnmuteConversation=Ve({...K,addFlag:p,muteTweet:i,shouldShowMuteEducationTip:S,tweet:R,unmuteTweet:c})),O&&this._convoControlsEnabled&&(V.changeConversationControls=(({onChangeConversationControls:e,tweet:t})=>{const n=!!t.exclusivity_info;return{disabled:n,onClick:n?void 0:e,subText:n?y:void 0,text:f,Icon:_.a}})({tweet:R,onChangeConversationControls:e})),V.delete=(({addToast:e,behavioralEventEntityToken:t,createLocalApiErrorHandler:n,deleteTweet:o,onDeleteTweet:i,scribeAction:a,tweet:r})=>({confirmation:{label:J,headline:Z,text:G,confirmButtonType:"destructiveFilled"},isEmphasized:!0,text:J,onClick:()=>{o(r.id_str).then((()=>{e({text:X,behavioralEventEntityToken:t})}),n({defaultToast:{text:Y},showToast:!0})),a({element:"delete"}),i&&i(r.id_str)},Icon:q.a}))({...K,deleteTweet:t,onDeleteTweet:k,tweet:R});const ee=U&&U!==F.id_str;var te;return ee?V.report=Ht({analytics:v,history:T,promotedContent:I,scribeAction:$,tweet:R,featureSwitches:j}):!U&&M&&(e=>"DE"===e.toUpperCase())(M)&&(V.report=(({promotedContent:e,scribeAction:t})=>({behavioralEventContext:{viewType:"report"},Icon:It.a,link:"https://help.twitter.com/forms",onClick:()=>{t({element:"report_tweet"})},testID:Je,text:e?Mt:Rt}))({promotedContent:I,scribeAction:$}),V.reportNetzDG=(te=R.id_str,{Icon:It.a,link:`https://help.twitter.com/forms/netzwerkdurchsetzungsgesetz?tweet_id=${te}`,text:Ot})),Pt.forEach((e=>{if("feedbackOptions"===e){const e=E?E.filter((e=>!e.excludeFromActionMenu)):[];N.push(...e);ee&&N.length&&W.push(N.length-1)}else if(V[e]){ee&&("embed"===e||"report"===e&&!V.embed)&&W.push(N.length-1),N.push(V[e])}})),this._dividerIndices=W,N})),i()(this,"_handleBlock",(()=>{const{addToast:e,behavioralEventEntityToken:t,block:n,createLocalApiErrorHandler:o,dismissUserFromConversation:i,promotedContent:a,tweet:r}=this.props;n(r.user.id_str,{promotedContent:a}).then((()=>{i({userId:r.user.id_str,feedbackKeys:["UnfollowEntity"]}),e({action:{label:Ft,onAction:this._handleUnblock,behavioralEventViewType:"unblock"},text:Nt,behavioralEventEntityToken:t})}),o(v.a)),this._scribeAction({element:"block"})})),i()(this,"_handleUnblock",(()=>{const{createLocalApiErrorHandler:e,promotedContent:t,tweet:n,unblock:o}=this.props;o(n.user.id_str,{promotedContent:t}).catch(e(ct.a)),this._scribeAction({element:"unblock"})})),i()(this,"_scribeAction",(({action:e,additionalData:t,element:n})=>{const{analytics:o,promotedContent:i,tweet:a}=this.props,r=o.contextualScribeData;let s=null!=r&&r.items?r:{...r||{},items:[rt.a.getTweetItem(a,i)]};return t&&(s={...s,...t}),o.scribe({element:n,action:e||"click",data:s})}))}render(){var e;const{isDisabled:t,tweet:n,withChangeConversationControlsTooltip:o}=this.props,i=(null===(e=n.conversation_control)||void 0===e?void 0:e.policy)||D.a.all;return a.createElement(F.a,{style:$t.overflowMenu},o?a.createElement($,null):null,a.createElement(K.a,{controlled:!0,midConversationTweet:n,onChange:this._handleOnChangeConversationControls,value:i},(({openPopover:e})=>a.createElement(Lt.a,{isDisabled:t,onClick:this._onMenuClick,renderActionMenu:this._renderCurationActionMenu(e),testID:st.a.caret}))))}_shouldIncludeTweetAppealOption(){const{forwardPivotDisplayType:e,isNsfwUser:t,tweet:n,userCountry:o,userLanguage:i}=this.props,{featureSwitches:a,loggedInUserId:r}=this.context;return Object(kt.b)({loggedInUserId:r,featureSwitches:a,forwardPivotDisplayType:e,tweet:n,userCountry:o,userLanguage:i})||Object(kt.a)({loggedInUserId:r,featureSwitches:a,isNsfwUser:t,tweet:n,userCountry:o,userLanguage:i})}}i()(Wt,"defaultProps",{withRemoveFromBookmarks:!1}),i()(Wt,"contextType",B.a);t.default=Object(Tt.a)(z(Wt));const $t=P.a.create((e=>({overflowMenu:{display:"flex",flexDirection:"row",alignItems:"center"}})))},NTtI:function(e,t,n){"use strict";var o=n("ERkP"),i=n("Lsrn"),a=n("k/Ka");const r=(e={})=>Object(a.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.a.root,e.style],viewBox:"0 0 200 200"},o.createElement("g",null,o.createElement("circle",{cx:"100",cy:"100",fill:"#97E3FF",r:"100"}),o.createElement("path",{d:"M57.575 121.5h29.408l25.142 28.858h16.367s6.425-12.867 6.425-50.133H52.042c0 15.817 5.533 21.275 5.533 21.275z",fill:"#005FD1"}),o.createElement("path",{d:"M112.125 50.092L86.983 78.95H57.575s-5.533 5.458-5.533 21.275h82.875c0-37.267-6.425-50.133-6.425-50.133h-16.367z",fill:"#1DA1F2"}),o.createElement("ellipse",{cx:"123.283",cy:"100.225",fill:"#97E3FF",rx:"6.567",ry:"45.075"}),o.createElement("path",{d:"M147.408 146.8L48.225 59.867c-2.425-2.125-2.667-5.817-.542-8.242 2.125-2.425 5.817-2.667 8.242-.542l99.183 86.925c2.425 2.125 2.667 5.817.542 8.242-2.125 2.425-5.817 2.675-8.242.55z",fill:"#71C9F8"}),o.createElement("path",{d:"M94.275 100.225h-7.058l30.808 27c-.233-2.108-.433-4.35-.608-6.717l-23.142-20.283zm33.942 29.75c-.25 1.983-.533 3.808-.833 5.458l4.325 3.792c.324-1.592.65-3.375.957-5.35l-4.45-3.9zm-33.942-29.75L70 78.958h-7.058l24.275 21.267",fill:"#005FD1"}),o.createElement("path",{d:"M118.025 127.225l9.358 8.208c.3-1.65.575-3.475.833-5.458l-10.8-9.467c.176 2.367.376 4.617.61 6.717z",fill:"#1DA1F2"})));r.metadata={width:200,height:200},t.a=r},SNyS:function(e,t,n){"use strict";var o=n("ERkP"),i=n("Lsrn"),a=n("k/Ka");const r=(e={})=>Object(a.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.a.root,e.style],viewBox:"0 0 24 24"},o.createElement("g",null,o.createElement("path",{d:"M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z"}),o.createElement("path",{d:"M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z"})));r.metadata={width:24,height:24},t.a=r},"ShJ/":function(e,t,n){"use strict";var o=n("ERkP"),i=n("Lsrn"),a=n("k/Ka");const r=(e={})=>Object(a.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.a.root,e.style],viewBox:"0 0 24 24"},o.createElement("g",null,o.createElement("path",{d:"M20.472 14.738c-.388-1.808-2.24-3.517-3.908-4.246l-.474-4.307 1.344-2.016c.258-.387.28-.88.062-1.286-.218-.406-.64-.66-1.102-.66H7.54c-.46 0-.884.254-1.1.66-.22.407-.197.9.06 1.284l1.35 2.025-.42 4.3c-1.667.732-3.515 2.44-3.896 4.222-.066.267-.043.672.222 1.01.14.178.46.474 1.06.474h3.858l2.638 6.1c.12.273.39.45.688.45s.57-.177.688-.45l2.638-6.1h3.86c.6 0 .92-.297 1.058-.474.265-.34.288-.745.228-.988zM12 20.11l-1.692-3.912h3.384L12 20.11zm-6.896-5.413c.456-1.166 1.904-2.506 3.265-2.96l.46-.153.566-5.777-1.39-2.082h7.922l-1.39 2.08.637 5.78.456.153c1.355.45 2.796 1.78 3.264 2.96H5.104z"})));r.metadata={width:24,height:24},t.a=r},Zg3A:function(e,t,n){"use strict";var o=n("ERkP"),i=n("Lsrn"),a=n("k/Ka");const r=(e={})=>Object(a.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.a.root,e.style],viewBox:"0 0 24 24"},o.createElement("g",null,o.createElement("path",{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z"})));r.metadata={width:24,height:24},t.a=r},hiGS:function(e,t,n){"use strict";var o=n("ERkP"),i=n("Lsrn"),a=n("k/Ka");const r=(e={})=>Object(a.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.a.root,e.style],viewBox:"0 0 24 24"},o.createElement("g",null,o.createElement("path",{d:"M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"}),o.createElement("path",{d:"M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z"})));r.metadata={width:24,height:24},t.a=r},yZqq:function(e,t,n){"use strict";var o=n("97Jx"),i=n.n(o),a=n("ERkP"),r=n("H7Rt"),s=n("3XMw"),c=n.n(s),l=n("MWbm"),d=n("t62R"),m=n("CKsB"),h=n("/yvb"),u=n("rHpw"),p=n("Zg3A"),b=n("Lsrn"),v=n("k/Ka");const w=(e={})=>Object(v.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[b.a.root,e.style],viewBox:"0 0 24 24"},a.createElement("g",null,a.createElement("path",{d:"M10.43 12.24c-1.37 0-2.89-.15-3.87-1.26-.82-.95-1.09-2.39-.81-4.43C6.13 3.7 7.88 2 10.43 2s4.3 1.7 4.68 4.55c.27 2.04.01 3.49-.81 4.42-.98 1.12-2.51 1.27-3.87 1.27zm0-8.73c-2.39 0-3.03 2.03-3.19 3.24-.21 1.56-.06 2.65.45 3.23.46.53 1.28.75 2.73.75 1.46 0 2.28-.22 2.74-.75.51-.58.66-1.67.45-3.23-.16-1.21-.79-3.24-3.18-3.24zm2.01 18.99H4.22c-.7 0-1.33-.3-1.75-.83-.43-.54-.57-1.26-.4-1.95.88-3.55 4.31-6.03 8.34-6.03.42 0 .75.34.75.75 0 .42-.34.75-.75.75-3.34 0-6.17 2.01-6.88 4.89-.06.25-.02.49.12.66.13.16.32.25.56.25h8.22c.42 0 .75.34.75.75.01.42-.32.76-.74.76zm9.15-10.87l-4.2 8.46c-.01.03-.02.05-.04.07-.02.06-.06.11-.1.15-.05.05-.1.09-.15.13h-.01c-.06.04-.12.06-.19.08-.07.02-.13.03-.2.03-.05 0-.11 0-.17-.02-.06-.01-.11-.03-.16-.06-.06-.03-.12-.07-.18-.12-.01-.01-.03-.02-.04-.03l-3.08-3.27c-.28-.3-.27-.78.04-1.06.3-.29.77-.27 1.06.03l2.34 2.48 3.74-7.53c.18-.37.63-.52 1-.34.37.17.52.63.34 1z"}),a.createElement("path",{d:"M17.1 20.44c.05-.04.1-.08.15-.13 0 .01-.02.03-.03.04-.04.04-.08.06-.12.09z"})));w.metadata={width:24,height:24};var _=w,f=n("boUI"),y=n("EweD");const C=c.a.g6185a9e,E=c.a.g2d04222,T=c.a.baffe39a,g=c.a.af293dc2,k=c.a.h1053f7e,x=c.a.bf994ab2,I=c.a.cf7f7e39,A=c.a.cfd2f35d,S=u.a.create((e=>({root:{flexDirection:"column",paddingTop:e.spaces.space16,paddingBottom:e.spaces.space4,borderRadius:e.borderRadii.xLarge},popover:{maxWidth:5*e.spacesPx.space64},modal:{borderRadius:e.borderRadii.none},title:{flexDirection:"column",paddingHorizontal:e.spaces.space16,marginBottom:e.spaces.space12},menuRow:{flexDirection:"row",paddingTop:e.spaces.space12,paddingBottom:e.spaces.space12,alignItems:"center",borderRadius:e.borderRadii.small},cancelButton:{marginHorizontal:e.spaces.space16,marginVertical:e.spaces.space16}})));var R=e=>{var t,n;const{dismiss:o,isModal:i,midConversationTweet:s,value:c}=e,u=t=>()=>{e.onChange(t),e.dismiss()},b=!!s,v=b&&!(null!=s&&null!==(t=s.entities)&&void 0!==t&&null!==(n=t.user_mentions)&&void 0!==n&&n.some((e=>e.id_str!==s.user.id_str)));let w=k;return v?w=x:b&&(w=I),a.createElement(l.a,{accessibilityDescribedBy:"conversation-controls-details",accessibilityLabelledBy:"conversation-controls-title",accessibilityRole:"dialog",style:[S.root,i?S.modal:S.popover]},a.createElement(l.a,{style:S.title},a.createElement(d.b,{nativeID:"conversation-controls-title",weight:"bold"},C),a.createElement(d.b,{color:"gray700",nativeID:"conversation-controls-details",size:"body"},E)),a.createElement(l.a,null,a.createElement(m.a,{Icon:p.a,actionText:T,isSelected:r.a.all===c,onClick:u(r.a.all),selectable:!0,style:S.menuRow,withIconAsThumbnail:!0}),a.createElement(m.a,{Icon:_,actionText:g,isSelected:r.a.community===c,onClick:u(r.a.community),selectable:!0,style:S.menuRow,withIconAsThumbnail:!0}),a.createElement(m.a,{Icon:v?f.a:y.a,actionText:w,isSelected:r.a.by_invitation===c,onClick:u(r.a.by_invitation),selectable:!0,style:S.menuRow,withIconAsThumbnail:!0}),e.isModal?a.createElement(h.a,{key:"button_cancel",onPress:o,size:"large",style:S.cancelButton,type:"primaryOutlined"},A):null))},M=n("OiMc"),O=n("efqG");t.a=e=>{const{children:t,controlled:n=!1,disabled:o}=e,[r,s]=a.useState(!1),c=a.useCallback((()=>s(!0)),[]),l=a.useCallback((()=>s(!1)),[]),d=n?r?M.a.VISIBILITY_BEHAVIOR.forceVisible:M.a.VISIBILITY_BEHAVIOR.forceHidden:void 0,m="function"==typeof t?t({openPopover:c,closePopover:l}):t;return a.createElement(O.a,{disabled:o,onDismiss:l,renderContent:(t,n)=>{const{children:o,controlled:r,...s}=e;return a.createElement(R,i()({},s,{dismiss:t,isModal:"sheet"===n}))},visibilityBehavior:d},m)}}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu.a09573c5.js.map