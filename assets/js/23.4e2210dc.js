(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{263:function(t,e,i){},303:function(t,e,i){"use strict";i(263)},317:function(t,e,i){"use strict";i.r(e);var s={name:"Deliverable",props:{title:{type:String,required:!0},dueDate:{type:String,required:!0},description:{type:String,required:!0},detailsLink:{type:String,default:""},isLast:{type:Boolean,default:!1},linkType:{type:String,default:"disabled"}}},a=(i(303),i(9)),n=Object(a.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"deliverable"},[e("div",{staticClass:"header"},[e("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("Badge",{staticClass:"due-date",attrs:{text:t.dueDate}})],1),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),"active"===t.linkType?e("router-link",{staticClass:"details-button",attrs:{to:t.detailsLink}},[t._v("View Details")]):"paused"===t.linkType?e("Badge",{staticClass:"coming-soon",attrs:{text:"Coming Soon",type:"disabled"}}):t._e()],1)}),[],!1,null,"3b981b91",null);e.default=n.exports}}]);