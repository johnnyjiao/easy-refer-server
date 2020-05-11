(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{568:function(e,r,t){"use strict";t(210),t(51),t(38),t(10),t(106);var n=t(574);function o(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}Object.defineProperty(r,"__esModule",{value:!0}),r.JOB_RULES={company:[{required:!0,message:"请输入公司名",trigger:"blur"}],deadline:[{required:!0}],autoRejectDay:[{required:!0}],applyTotal:[{required:!0}],requiredFields:[{required:!0}]},r.LOGIN_RULES={email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位以上",trigger:"blur"}]},r.ACTIVATE_RULES=r.LOGIN_RULES,r.REGISTER_RULES=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(r){n(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}({},r.LOGIN_RULES,{confirmPassword:[{required:!0,message:"请确认密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位以上",trigger:"blur"}]}),r.RESUME_RULES={email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],phone:[{required:!0,message:"请输入姓名",trigger:"blur"},{pattern:/[\d\-]{9,11}/,message:"电话格式不正确",trigger:"blur"}]},r.EDIT_USER_RULES={email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],phone:[{required:!1,message:"请输入姓名",trigger:"blur"},{pattern:/[\d\-]{9,11}/,message:"电话格式不正确",trigger:"blur"}]}},572:function(e,r,t){var n=t(573);e.exports=function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}},573:function(e,r){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,t=new Array(r);i<r;i++)t[i]=e[i];return t}},574:function(e,r){e.exports=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},575:function(e,r,t){var n=t(576),o=t(577),l=t(572),f=t(578);e.exports=function(e,i){return n(e)||o(e,i)||l(e,i)||f()}},576:function(e,r){e.exports=function(e){if(Array.isArray(e))return e}},577:function(e,r){e.exports=function(e,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],t=!0,n=!1,o=void 0;try{for(var l,f=e[Symbol.iterator]();!(t=(l=f.next()).done)&&(r.push(l.value),!i||r.length!==i);t=!0);}catch(e){n=!0,o=e}finally{try{t||null==f.return||f.return()}finally{if(n)throw o}}return r}}},578:function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},579:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.LEVEL_MAPPER={0:"应届生",1:"1年工作经验",2:"2年工作经验",3:"3年工作经验",4:"4年工作经验",5:"5年工作经验",6:"6年工作经验",7:"7年工作经验",8:"8+年工作经验"}},580:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.REFER_FIELDS_MAPPER={name:"姓名",email:"邮箱",phone:"电话",experience:"工作经验",resumeId:"个人简历",intro:"个人简介",thirdPersonIntro:"第三人称介绍",leetCodeUrl:"LeetCode链接",referLinks:"内推链接"},r.getFieldName=function(e){if(!r.REFER_FIELDS_MAPPER[e])throw new Error("字段 ".concat(e," 不存在于表单中"));return r.REFER_FIELDS_MAPPER[e]},r.REQUIRED_REFER_FIELD_VALUES=["email"]},582:function(e,r,t){"use strict";t.r(r);var n=t(583),o=t.n(n);for(var l in n)"default"!==l&&function(e){t.d(r,e,(function(){return n[e]}))}(l);r.default=o.a},583:function(e,r,t){"use strict";t(23),t(24),t(100);var n=t(575);t(323),t(33);var o=t(321);t(38),t(10),t(106),t(107),t(108);var l=t(101),f=t(209),c=t(102),d=t(103),m=t(104),v=t(80);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var y=this&&this.__decorate||function(e,r,t,desc){var n,o=arguments.length,l=o<3?r:null===desc?desc=Object.getOwnPropertyDescriptor(r,t):desc;if("object"===("undefined"==typeof Reflect?"undefined":v(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,r,t,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(r,t,l):n(r,t))||l);return o>3&&l&&Object.defineProperty(r,t,l),l},_=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var E=_(t(1)),R=t(105),I=t(324),P=_(t(585)),x=t(579),S=t(568),j=t(580),k=t(639),O=function(e){c(v,e);var r,t=(r=v,function(){var e,t=m(r);if(h()){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function v(){var e;return l(this,v),(e=t.apply(this,arguments)).form={email:"",experience:0,intro:"",leetCodeUrl:"",name:"",phone:"",referLinks:"",resumeId:"",thirdPersonIntro:""},e.resume={resumeId:"",url:"",name:""},e.rules=S.RESUME_RULES,e.field=j.getFieldName,e}return f(v,[{key:"mounted",value:function(){this.initForm()}},{key:"isShowField",value:function(e){return this.requiredFields.includes(e)}},{key:"uploaded",value:function(e){this.form.resumeId=e.resumeId,this.resume=e,this.setLoading(!1),this.$message.success("上传成功")}},{key:"uploading",value:function(e){var r=e.status;this.setLoading(!("success"===r||"fail"===r))}},{key:"beforeUpload",value:function(e){var r=k.RESUME_MIME_TYPES.includes(e.type),t=e.size<=k.RESUME_SIZE;return r||(this.$message.error("上传简历只能是 PDF 格式"),this.setLoading(!1)),t||(this.$message.error("上传简历大小不能超过 5MB"),this.setLoading(!1)),r&&t}},{key:"initForm",value:function(){var e=this;return this.refer?Object.keys(this.form).forEach((function(r){r in e.refer&&(e.form[r]=e.refer[r])})):this.$auth.loggedIn?Object.keys(this.form).forEach((function(r){r in e.userInfo&&(e.form[r]=e.userInfo[r])})):void 0}},{key:"submit",value:function(){var e=this;this.$refs.form.validate(function(){var r=o(regeneratorRuntime.mark((function r(t){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=2;break}return r.abrupt("return",e.$message.error("填写不正确"));case 2:e.$emit("submit",e.form);case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}},{key:"back",value:function(){this.$emit("back")}},{key:"userInfo",get:function(){return this.$auth.user.info}},{key:"levels",get:function(){return Object.entries(x.LEVEL_MAPPER).map((function(e){var r=n(e,2),t=r[0],label=r[1];return[parseInt(t),label]}))}}]),v}(E.default);y([R.Prop()],O.prototype,"refer",void 0),y([R.Prop({required:!0})],O.prototype,"requiredFields",void 0),y([I.Mutation("setLoading")],O.prototype,"setLoading",void 0),O=y([R.Component({components:{JobItem:P.default}})],O),r.default=O},584:function(e,r,t){var content=t(641);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(50).default)("2d2567d8",content,!0,{sourceMap:!1})},638:function(e,r,t){"use strict";t.r(r);var n=t(646),o=t(582);for(var l in o)"default"!==l&&function(e){t.d(r,e,(function(){return o[e]}))}(l);t(640);var f=t(28),component=Object(f.a)(o.default,n.a,n.b,!1,null,"b6f9d4f0",null);r.default=component.exports},639:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.IMAGE_SIZE=2097152,r.IMAGE_MIME_TYPES=["image/jpeg","image/png","image/gif"],r.RESUME_MIME_TYPES=["application/pdf"],r.RESUME_SIZE=5242880},640:function(e,r,t){"use strict";var n=t(584);t.n(n).a},641:function(e,r,t){(r=t(49)(!1)).push([e.i,".submit[data-v-b6f9d4f0]{text-align:center}",""]),e.exports=r},642:function(e,r,t){"use strict";t.r(r);var n=t(643),o=t.n(n);for(var l in n)"default"!==l&&function(e){t.d(r,e,(function(){return n[e]}))}(l);r.default=o.a},643:function(e,r,t){"use strict";t(23),t(24),t(10),t(100),t(33);var n=t(321),o=t(101),l=t(209),f=t(102),c=t(103),d=t(104),m=t(80);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var h=this&&this.__decorate||function(e,r,t,desc){var n,o=arguments.length,l=o<3?r:null===desc?desc=Object.getOwnPropertyDescriptor(r,t):desc;if("object"===("undefined"==typeof Reflect?"undefined":m(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,r,t,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(r,t,l):n(r,t))||l);return o>3&&l&&Object.defineProperty(r,t,l),l},y=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var _=y(t(1)),E=t(105),R=y(t(585)),I=y(t(638)),P=function(e){f(y,e);var r,t,m,h=(r=y,function(){var e,t=d(r);if(v()){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function y(){var e;return o(this,y),(e=h.apply(this,arguments)).job=null,e.refer=null,e.referId=null,e}return l(y,[{key:"asyncData",value:(m=n(regeneratorRuntime.mark((function e(r){var t,n,o,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.$axios,n=r.route,o=n.params.referId,e.next=4,t.$get("/refers/".concat(o));case 4:return l=e.sent,e.next=7,t.$get("/jobs/".concat(l.jobId));case 7:return f=e.sent,e.abrupt("return",{referId:o,refer:l,job:f});case 9:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)})},{key:"edit",value:(t=n(regeneratorRuntime.mark((function e(form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.$patch("/refers/".concat(this.referId),form);case 2:return this.$message.success("已修改内推信息"),e.next=5,this.$router.push("/my/refer-list");case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),y}(_.default);P=h([E.Component({components:{JobItem:R.default,ReferForm:I.default}})],P),r.default=P},646:function(e,r,t){"use strict";t.d(r,"a",(function(){return n})),t.d(r,"b",(function(){return o}));var n=function(){var e=this,r=this,t=r.$createElement,n=r._self._c||t;return n("el-form",{ref:"form",attrs:{model:r.form,"label-width":"120px","label-position":"left",rules:r.rules}},[n("el-form-item",{attrs:{required:"",prop:"name",label:r.field("name")}},[n("el-input",{model:{value:r.form.name,callback:function(e){r.$set(r.form,"name",e)},expression:"form.name"}})],1),r._v(" "),n("el-form-item",{attrs:{required:"",prop:"email",label:r.field("email")}},[n("el-input",{attrs:{type:"email",disabled:r.$auth.loggedIn},model:{value:r.form.email,callback:function(e){r.$set(r.form,"email",e)},expression:"form.email"}})],1),r._v(" "),r.isShowField("phone")?n("el-form-item",{attrs:{required:"",prop:"phone",label:r.field("phone")}},[n("el-input",{attrs:{type:"tel"},model:{value:r.form.phone,callback:function(e){r.$set(r.form,"phone",e)},expression:"form.phone"}})],1):r._e(),r._v(" "),n("el-form-item",{attrs:{required:"",prop:"experience",label:r.field("experience")}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:r.form.experience,callback:function(e){r.$set(r.form,"experience",e)},expression:"form.experience"}},r._l(r.levels,(function(e){var r=e[0],label=e[1];return n("el-option",{key:r,attrs:{label:label,value:r}})})),1)],1),r._v(" "),r.isShowField("intro")?n("el-form-item",{attrs:{required:"",prop:"intro",label:r.field("intro")}},[n("el-input",{attrs:{type:"textarea",autosize:""},model:{value:r.form.intro,callback:function(e){r.$set(r.form,"intro",e)},expression:"form.intro"}})],1):r._e(),r._v(" "),r.isShowField("referLinks")?n("el-form-item",{attrs:{required:"",prop:"referLinks",label:r.field("referLinks")}},[n("el-input",{attrs:{type:"textarea",autosize:""},model:{value:r.form.referLinks,callback:function(e){r.$set(r.form,"referLinks",e)},expression:"form.referLinks"}})],1):r._e(),r._v(" "),r.isShowField("thirdPersonIntro")?n("el-form-item",{attrs:{required:"",prop:"thirdPersonIntro",label:r.field("thirdPersonIntro")}},[n("el-input",{attrs:{type:"textarea",autosize:""},model:{value:r.form.thirdPersonIntro,callback:function(e){r.$set(r.form,"thirdPersonIntro",e)},expression:"form.thirdPersonIntro"}})],1):r._e(),r._v(" "),r.isShowField("leetCodeUrl")?n("el-form-item",{attrs:{required:"",prop:"leetCodeUrl",label:r.field("leetCodeUrl")}},[n("el-input",{attrs:{type:"url"},model:{value:r.form.leetCodeUrl,callback:function(e){r.$set(r.form,"leetCodeUrl",e)},expression:"form.leetCodeUrl"}})],1):r._e(),r._v(" "),r.isShowField("resumeId")?n("el-form-item",{attrs:{required:"",label:r.field("resumeId")}},[n("el-upload",{attrs:{action:"/api/upload/resume",data:{resumeId:r.form.resumeId},"on-success":r.uploaded,"on-change":r.uploading,"on-error":function(){return e.$message.error("上传失败")},"before-upload":r.beforeUpload,"show-file-list":!1}},[n("el-button",{attrs:{size:"small",type:"primary"}},[r._v("上传简历")]),r._v(" "),n("span",{staticStyle:{"margin-left":"12px"}},[r._v(r._s(r.resume.name))]),r._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[r._v("只能上传 "),n("strong",[r._v("pdf")]),r._v(" 文件，且不超过5MB")])],1)],1):r._e(),r._v(" "),n("div",{staticClass:"submit"},[n("el-button",{attrs:{type:"primary",round:""},on:{click:r.submit}},[r._v("提交")]),r._v(" "),n("el-button",{attrs:{round:""},on:{click:r.back}},[r._v("返回")])],1)],1)},o=[]},693:function(e,r,t){"use strict";t.d(r,"a",(function(){return n})),t.d(r,"b",(function(){return o}));var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[e.job?t("div",[t("JobItem",{attrs:{job:e.job}})],1):e._e(),e._v(" "),t("el-divider",[e._v("修改你的信息")]),e._v(" "),e.refer&&e.job?t("ReferForm",{attrs:{refer:e.refer,"required-fields":e.job.requiredFields},on:{submit:e.edit,back:function(r){return e.$router.push("/my/refer-list")}}}):e._e()],1)},o=[]},720:function(e,r,t){"use strict";t.r(r);var n=t(693),o=t(642);for(var l in o)"default"!==l&&function(e){t.d(r,e,(function(){return o[e]}))}(l);var f=t(28),component=Object(f.a)(o.default,n.a,n.b,!1,null,"bc80c50e",null);r.default=component.exports}}]);