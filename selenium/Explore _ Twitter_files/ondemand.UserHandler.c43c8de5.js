(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{"88ay":function(e,t,o){"use strict";o.d(t,"c",(function(){return D})),o.d(t,"e",(function(){return U})),o.d(t,"f",(function(){return j})),o.d(t,"d",(function(){return O})),o.d(t,"a",(function(){return K}));var r=o("KEM+"),i=o.n(r),n=o("97Jx"),s=o.n(n),c=o("ERkP"),l=o("6rlp"),a=o("zh9S"),d=o("G6rE"),p=o("rxPX"),u=o("0KEI");const h=(e,t)=>d.e.select(e,t.userId),m=(e,t)=>t.promotedContent;var _=Object(p.a)().propsFromState((()=>({promotedContent:m,user:h}))).adjustStateProps((({promotedContent:e,user:t})=>({promotedContent:e||(t?t.promoted_content:void 0),user:t}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(u.createLocalApiErrorHandlerWithContextFactory)("USER_CELL_CONTAINER"),log:l.a,scribeAction:a.c}))),b=o("I57f"),C=o("vMjK"),g=o("MWbm"),I=o("IG7M"),v=o("rHpw");const k=e=>{const{children:t,promotedContent:o,user:r}=e;return c.createElement(g.a,{style:y.decorationWrapper},t,c.createElement(I.a,{renderActionMenu:e=>c.createElement(C.b,{onClose:e,promotedContent:o,user:r,view:"follower"}),style:y.actionMenu}))},y=v.a.create((e=>({decorationWrapper:{flexDirection:"row"},actionMenu:{marginLeft:e.spaces.space12}})));var S=o("uIZp"),f=o("mN6z"),w=o("caTy"),A=o("3IPs"),E=o("Rp9C"),R=o("X04g"),T=o("Re5t"),P=o("TnY3"),B=o("hxu0"),L=o("v6aA"),F=o("7JQg"),M=o("IMA+"),x=o("cFuS");const N=e=>{const{user:t}=e;return t&&t.profile_image_url_https?c.createElement(H,s()({},e,{avatarUri:t.profile_image_url_https,description:t.description,entities:t.entities,followRequestReceived:t.follow_request_received,highlightedLabel:t.highlightedLabel,isAutoblocking:t.smart_blocking,isBlockedBy:t.blocked_by,isBlocking:t.blocking,isDeviceFollowing:t.notifications,isFollowedBy:t.followed_by,isFollowing:t.following,isProtected:t.protected,isVerified:t.verified,name:t.name,screenName:t.screen_name,translatorType:t.translator_type,user:t,withheldDescription:t.withheld_description,withheldEntities:t.withheld_entities})):null};N.defaultProps={cellClickable:!0,decoration:null,displayMode:T.a.UserCompact,followRequestReceived:!1,hideBlocked:!1,promotedItemType:x.c.USER,shouldScribeProfileClick:!0,shouldScribeImpression:!1,withFollowsYou:!1};const D=({isDeviceFollowing:e,userId:t})=>c.createElement(b.a,{isFollowing:e,style:q.followButton,userId:t}),U=({loggedInUserId:e,promotedContent:t,userId:o})=>e!==o?c.createElement(S.a,{promotedContent:t,size:"small",style:q.followButton,userId:o}):null,j=e=>c.createElement(k,{promotedContent:e.promotedContent,user:e.user},U(e)),O=e=>c.createElement(I.a,{renderActionMenu:t=>c.createElement(C.b,{onClose:t,promotedContent:e.promotedContent,user:e.user,view:"rito_flagged_accounts"})});class H extends c.Component{constructor(...e){super(...e),i()(this,"_handleAvatarClick",(()=>{const{shouldScribeProfileClick:e}=this.props;this._handleSaveAsRecentSearch(),e&&this._scribeAction({element:"avatar",action:"profile_click"}),this._handleAsyncPromotedEvent(x.b.PROFILE_IMAGE_CLICK)})),i()(this,"_handleCellClick",(()=>{const{history:e,onClick:t,screenName:o,user:r}=this.props,i=this._getPromotedTweetState();this._handleSaveAsRecentSearch(),this._handleScreenNameClick(),t?t({user:r,state:i}):e.push({pathname:`/${o}`,state:i||void 0})})),i()(this,"_handleScreenNameClick",(()=>{const{shouldScribeProfileClick:e}=this.props;this._handleSaveAsRecentSearch(),e&&this._scribeAction({action:"profile_click"}),this._handleAsyncPromotedEvent(x.b.SCREEN_NAME_CLICK)})),i()(this,"_handleSaveAsRecentSearch",(()=>{const{saveAsRecentSearch:e,shouldStoreTypeaheadItem:t,userId:o}=this.props;e&&t&&t(R.a.ItemType.USER)&&e({user:{id:o,type:A.a.User}})})),i()(this,"_scribeAction",(e=>{var t;const{promotedContent:o,scribeAction:r,scribeData:i,scribeNamespace:n,user:s,userId:c}=this.props,l=null==i||null===(t=i.items)||void 0===t?void 0:t.find((e=>e.item_type===R.a.ItemType.USER&&e.id===c)),a=i.search_details;r({...n,...e},{items:[{...l,...E.a.getUserItem(s,o)}],profile_id:c,search_details:a})}))}componentDidMount(){this._shouldRender()&&this._handleImpression()}shouldComponentUpdate(e){return!Object(f.a)(this.props,e)}render(){const{avatarDecoration:e,bottomControl:t,cellClickable:o,createLocalApiErrorHandler:r,decoration:i,followRequestReceived:n,hideBlocked:l,history:a,isAutoblocking:d,isBlockedBy:p,isBlocking:u,isDeviceFollowing:h,isFollowing:m,isInSidebar:_,location:b,log:C,onClick:g,promotedItemId:I,saveAsRecentSearch:v,scribeAction:k,scribeData:y,scribeNamespace:S,shouldScribeImpression:f,shouldScribeProfileClick:A,shouldStoreTypeaheadItem:E,socialContext:R,user:T,...P}=this.props;return this._shouldRender()?c.createElement(M.a,s()({},P,{avatarDecoration:e,bottomControl:this._renderBottomControl(),decoration:this._renderDecoration(),highlightedLabel:this._getHighlightedLabel(),isBlocking:T.blocking,onAvatarClick:this._handleAvatarClick,onCellClick:o?this._handleCellClick:void 0,onScreenNameClick:this._handleScreenNameClick,socialContext:R?{contextType:R.contextType,text:R.text,link:R.landingUrl?Object(w.b)(R.landingUrl):void 0}:void 0,withDarkerInteractiveBackground:_})):null}_renderBottomControl(){return this._renderControl(this.props.bottomControl||null)}_renderDecoration(){return this._renderControl(this.props.decoration)}_renderControl(e){const{loggedInUserId:t}=this.context,{displayMode:o,followRequestReceived:r,isAutoblocking:i,isBlocking:n,isDeviceFollowing:s,isFollowing:c,promotedContent:l,screenName:a,user:d,userId:p}=this.props;return"function"==typeof e?e({displayMode:o,followRequestReceived:r,isAutoblocking:i,isBlocking:n,isDeviceFollowing:!!s,isFollowing:!!c,loggedInUserId:t,promotedContent:l,screenName:a,user:d,userId:p}):e}_shouldRender(){const{hideBlocked:e,isBlockedBy:t,isBlocking:o,screenName:r,userId:i}=this.props;return i&&r&&!(e&&(t||o))}_getHighlightedLabel(){const{highlightedLabel:e}=this.props.user,t="AutomatedLabel"===(null==e?void 0:e.userLabelType),o=!!t&&this.context.featureSwitches.isTrue("account_taxonomy_automated_label_enabled");return!t||o?e:void 0}_getPromotedTweetState(){const{promotedContent:e,promotedItemType:t}=this.props;return e&&t===x.c.TWEET?{promotedTweetState:e}:null}_handleAsyncPromotedEvent(e){const{createLocalApiErrorHandler:t,log:o,promotedContent:r,promotedItemId:i,promotedItemType:n,userId:s}=this.props;if(r){const{disclosure_type:c,impression_id:l}=r;o({disclosureType:c,itemId:i||s,itemType:n,params:{event:e,impression_id:l}}).catch(t())}}_handleImpression(){const{createLocalApiErrorHandler:e,log:t,promotedContent:o,promotedItemType:r,shouldScribeImpression:i,userId:n}=this.props;if(o&&r===x.c.USER){const{disclosure_type:r,impression_id:i}=o;t({disclosureType:r,itemId:n,itemType:x.c.USER,params:{event:x.b.IMPRESSION,impression_id:i}}).catch(e())}else i&&this._scribeAction({action:"impression"})}}i()(H,"contextType",L.a),i()(H,"defaultProps",N.defaultProps);const q=v.a.create((e=>({followButton:{marginLeft:e.spaces.space12}}))),K=Object(P.a)(Object(B.a)(_(N)));t.b=Object(F.c)({element:"user"})(K)},lX7a:function(e,t,o){"use strict";o.r(t);var r=o("ezF+"),i=o("wtjx"),n=o("RgK2"),s=o.n(n),c=o("cFuS"),l=o("Rp9C"),a=o("Re5t"),d=o("VPAj"),p=o("fs1G"),u=o("88ay");const h=e=>e?{disclosure_type:e.disclosureType,impression_id:e.impressionId}:void 0,m=[u.e,u.f];t.default=({cellClickable:e=!0,decoration:t,displayMode:o=a.a.UserCompact,onClick:n,shouldScribeProfileClick:_=!0,shouldScribeImpression:b=!1,shouldStoreTypeaheadItem:C,withLink:g=!0})=>{const I=t||u.e;return r.g({component:u.a,selectData:Object(d.a)(s.a),bindActions:()=>({saveAsRecentSearch:i.a}),defaultScribeNamespace:{element:"user"},createProps:({actions:{saveAsRecentSearch:t},entry:r,scribeData:i,scribeNamespace:s})=>{const{content:{id:l,promotedMetadata:a,socialContext:d}}=r,p=h(a),u=d&&d.generalContext||void 0;return{decoration:I,displayMode:o,shouldStoreTypeaheadItem:C,promotedContent:p,promotedItemType:c.c.USER,scribeData:i,scribeNamespace:s,userId:l,withFollowsYou:m.includes(I),socialContext:u,withLink:g,cellClickable:e,shouldScribeProfileClick:_,shouldScribeImpression:b,onClick:n,saveAsRecentSearch:t}},onImpression:p.a,getScribeDataItem(e){const{content:{id:t,promotedMetadata:o},cursor:r,itemMetadata:i,position:n}=e,s=i.clientEventInfo,c=h(o);return l.a.getUserItem({id_str:t,promoted_content:c},void 0,n,r,s)},isFocusable:Object(d.a)(!0)})}}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.UserHandler.c43c8de5.js.map