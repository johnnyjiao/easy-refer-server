(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{568:function(e,t,r){"use strict";r(210),r(51),r(38),r(10),r(106);var n=r(574);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.JOB_RULES={company:[{required:!0,message:"请输入公司名",trigger:"blur"}],deadline:[{required:!0}],autoRejectDay:[{required:!0}],applyTotal:[{required:!0}],requiredFields:[{required:!0}]},t.LOGIN_RULES={email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位以上",trigger:"blur"}]},t.ACTIVATE_RULES=t.LOGIN_RULES,t.REGISTER_RULES=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},t.LOGIN_RULES,{confirmPassword:[{required:!0,message:"请确认密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位以上",trigger:"blur"}]}),t.RESUME_RULES={email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],phone:[{required:!0,message:"请输入姓名",trigger:"blur"},{pattern:/[\d\-]{9,11}/,message:"电话格式不正确",trigger:"blur"}]},t.EDIT_USER_RULES={email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],phone:[{required:!1,message:"请输入姓名",trigger:"blur"},{pattern:/[\d\-]{9,11}/,message:"电话格式不正确",trigger:"blur"}]}},572:function(e,t,r){var n=r(573);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},573:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}},574:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},575:function(e,t,r){var n=r(576),o=r(577),l=r(572),c=r(578);e.exports=function(e,i){return n(e)||o(e,i)||l(e,i)||c()}},576:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},577:function(e,t){e.exports=function(e,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,n=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(t.push(l.value),!i||t.length!==i);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw o}}return t}}},578:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},579:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LEVEL_MAPPER={0:"应届生",1:"1年工作经验",2:"2年工作经验",3:"3年工作经验",4:"4年工作经验",5:"5年工作经验",6:"6年工作经验",7:"7年工作经验",8:"8+年工作经验"}},580:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.REFER_FIELDS_MAPPER={name:"姓名",email:"邮箱",phone:"电话",experience:"工作经验",resumeId:"个人简历",intro:"个人简介",thirdPersonIntro:"第三人称介绍",leetCodeUrl:"LeetCode链接",referLinks:"内推链接"},t.getFieldName=function(e){if(!t.REFER_FIELDS_MAPPER[e])throw new Error("字段 ".concat(e," 不存在于表单中"));return t.REFER_FIELDS_MAPPER[e]},t.REQUIRED_REFER_FIELD_VALUES=["email"]},582:function(e,t,r){"use strict";r.r(t);var n=r(583),o=r.n(n);for(var l in n)"default"!==l&&function(e){r.d(t,e,(function(){return n[e]}))}(l);t.default=o.a},583:function(e,t,r){"use strict";r(23),r(24),r(100);var n=r(575);r(323),r(33);var o=r(321);r(38),r(10),r(106),r(107),r(108);var l=r(101),c=r(209),f=r(102),d=r(103),m=r(104),v=r(80);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var y=this&&this.__decorate||function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":v(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},_=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var E=_(r(1)),R=r(105),I=_(r(585)),j=r(579),P=r(568),k=r(580),S=r(639),x=function(e){f(v,e);var t,r=(t=v,function(){var e,r=m(t);if(h()){var n=m(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return d(this,e)});function v(){var e;return l(this,v),(e=r.apply(this,arguments)).form={email:"",experience:0,intro:"",leetCodeUrl:"",name:"",phone:"",referLinks:"",resumeId:"",thirdPersonIntro:""},e.resume={resumeId:"",url:"",name:""},e.rules=P.RESUME_RULES,e.field=k.getFieldName,e.uploading=!1,e}return c(v,[{key:"mounted",value:function(){this.initForm()}},{key:"isShowField",value:function(e){return this.requiredFields.includes(e)}},{key:"onUploaded",value:function(e){this.form.resumeId=e.resumeId,this.resume=e,this.uploading=!1,this.$message.success("上传成功")}},{key:"onUploading",value:function(e){var t=e.status;"success"!==t&&"fail"!==t&&(this.uploading=!0)}},{key:"beforeUpload",value:function(e){var t=S.RESUME_MIME_TYPES.includes(e.type),r=e.size<=S.RESUME_SIZE;return t||(this.$message.error("上传简历只能是 PDF 格式"),this.uploading=!1),r||(this.$message.error("上传简历大小不能超过 5MB"),this.uploading=!1),t&&r}},{key:"initForm",value:function(){var e=this;return this.refer?Object.keys(this.form).forEach((function(t){t in e.refer&&(e.form[t]=e.refer[t])})):this.$auth.loggedIn?Object.keys(this.form).forEach((function(t){t in e.userInfo&&(e.form[t]=e.userInfo[t])})):void 0}},{key:"submit",value:function(){var e=this;this.$refs.form.validate(function(){var t=o(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",e.$message.error("填写不正确"));case 2:e.$emit("submit",e.form);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"back",value:function(){this.$emit("back")}},{key:"userInfo",get:function(){return this.$auth.user.info}},{key:"levels",get:function(){return Object.entries(j.LEVEL_MAPPER).map((function(e){var t=n(e,2),r=t[0],label=t[1];return[parseInt(r),label]}))}}]),v}(E.default);y([R.Prop({type:Boolean,default:!1})],x.prototype,"submitting",void 0),y([R.Prop()],x.prototype,"refer",void 0),y([R.Prop({required:!0})],x.prototype,"requiredFields",void 0),x=y([R.Component({components:{JobItem:I.default}})],x),t.default=x},584:function(e,t,r){var content=r(641);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(50).default)("32d6f13c",content,!0,{sourceMap:!1})},636:function(e,t,r){"use strict";r.r(t);var n=r(637),o=r.n(n);for(var l in n)"default"!==l&&function(e){r.d(t,e,(function(){return n[e]}))}(l);t.default=o.a},637:function(e,t,r){"use strict";r(23),r(24),r(10),r(100),r(33);var n=r(321),o=r(101),l=r(209),c=r(102),f=r(103),d=r(104),m=r(80);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var h=this&&this.__decorate||function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":m(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},y=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var _=y(r(1)),E=r(105),R=y(r(585)),I=y(r(638)),j=function(e){c(y,e);var t,r,m,h=(t=y,function(){var e,r=d(t);if(v()){var n=d(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return f(this,e)});function y(){var e;return o(this,y),(e=h.apply(this,arguments)).job=null,e.submitting=!1,e}return l(y,[{key:"asyncData",value:(m=n(regeneratorRuntime.mark((function e(t){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.route,e.next=3,r.$get("/jobs/".concat(n.params.jobId));case 3:return o=e.sent,e.abrupt("return",{job:o});case 5:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)})},{key:"apply",value:(r=n(regeneratorRuntime.mark((function e(form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.submitting=!0,e.next=3,this.$axios.$post("/refers/".concat(this.jobId),form);case 3:return this.submitting=!1,this.$message.success("已提交内推信息"),e.next=7,this.$router.push("/my/refer-list");case 7:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"jobId",get:function(){return this.$route.params.jobId}}]),y}(_.default);j=h([E.Component({auth:!1,components:{JobItem:R.default,ReferForm:I.default}})],j),t.default=j},638:function(e,t,r){"use strict";r.r(t);var n=r(646),o=r(582);for(var l in o)"default"!==l&&function(e){r.d(t,e,(function(){return o[e]}))}(l);r(640);var c=r(28),component=Object(c.a)(o.default,n.a,n.b,!1,null,"ad4fd4d6",null);t.default=component.exports},639:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IMAGE_SIZE=2097152,t.IMAGE_MIME_TYPES=["image/jpeg","image/png","image/gif"],t.RESUME_MIME_TYPES=["application/pdf"],t.RESUME_SIZE=5242880},640:function(e,t,r){"use strict";var n=r(584);r.n(n).a},641:function(e,t,r){(t=r(49)(!1)).push([e.i,".submit[data-v-ad4fd4d6]{text-align:center}",""]),e.exports=t},646:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var n=function(){var e=this,t=this,r=t.$createElement,n=t._self._c||r;return n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px","label-position":"left",rules:t.rules}},[n("el-form-item",{attrs:{required:"",prop:"name",label:t.field("name")}},[n("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("el-form-item",{attrs:{required:"",prop:"email",label:t.field("email")}},[n("el-input",{attrs:{type:"email",disabled:t.$auth.loggedIn},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),t.isShowField("phone")?n("el-form-item",{attrs:{required:"",prop:"phone",label:t.field("phone")}},[n("el-input",{attrs:{type:"tel"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1):t._e(),t._v(" "),n("el-form-item",{attrs:{required:"",prop:"experience",label:t.field("experience")}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.experience,callback:function(e){t.$set(t.form,"experience",e)},expression:"form.experience"}},t._l(t.levels,(function(e){var t=e[0],label=e[1];return n("el-option",{key:t,attrs:{label:label,value:t}})})),1)],1),t._v(" "),t.isShowField("intro")?n("el-form-item",{attrs:{required:"",prop:"intro",label:t.field("intro")}},[n("el-input",{attrs:{type:"textarea",autosize:""},model:{value:t.form.intro,callback:function(e){t.$set(t.form,"intro",e)},expression:"form.intro"}})],1):t._e(),t._v(" "),t.isShowField("referLinks")?n("el-form-item",{attrs:{required:"",prop:"referLinks",label:t.field("referLinks")}},[n("el-input",{attrs:{type:"textarea",autosize:""},model:{value:t.form.referLinks,callback:function(e){t.$set(t.form,"referLinks",e)},expression:"form.referLinks"}})],1):t._e(),t._v(" "),t.isShowField("thirdPersonIntro")?n("el-form-item",{attrs:{required:"",prop:"thirdPersonIntro",label:t.field("thirdPersonIntro")}},[n("el-input",{attrs:{type:"textarea",autosize:""},model:{value:t.form.thirdPersonIntro,callback:function(e){t.$set(t.form,"thirdPersonIntro",e)},expression:"form.thirdPersonIntro"}})],1):t._e(),t._v(" "),t.isShowField("leetCodeUrl")?n("el-form-item",{attrs:{required:"",prop:"leetCodeUrl",label:t.field("leetCodeUrl")}},[n("el-input",{attrs:{type:"url"},model:{value:t.form.leetCodeUrl,callback:function(e){t.$set(t.form,"leetCodeUrl",e)},expression:"form.leetCodeUrl"}})],1):t._e(),t._v(" "),t.isShowField("resumeId")?n("el-form-item",{attrs:{required:"",label:t.field("resumeId")}},[n("el-upload",{attrs:{action:"/api/upload/resume",data:{resumeId:t.form.resumeId},"on-success":t.onUploaded,"on-change":t.onUploading,disabled:t.uploading,"on-error":function(){return e.$message.error("上传失败")},"before-upload":t.beforeUpload,"show-file-list":!1}},[n("el-button",{attrs:{size:"small",type:"primary",loading:t.uploading}},[t._v("上传简历")]),t._v(" "),n("span",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.resume.name))]),t._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传 "),n("strong",[t._v("pdf")]),t._v(" 文件，且不超过5MB")])],1)],1):t._e(),t._v(" "),n("div",{staticClass:"submit"},[n("el-button",{attrs:{type:"primary",round:"",loading:t.submitting},on:{click:t.submit}},[t._v("提交")]),t._v(" "),n("el-button",{attrs:{round:""},on:{click:t.back}},[t._v("返回")])],1)],1)},o=[]},695:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.job?r("div",[r("div",[r("JobItem",{attrs:{job:e.job}})],1),e._v(" "),r("el-divider",[e._v("填写你的信息")]),e._v(" "),r("ReferForm",{attrs:{"required-fields":e.job.requiredFields,submitting:e.submitting},on:{submit:e.apply,back:function(t){return e.$router.push("/job/list")}}})],1):e._e()},o=[]},720:function(e,t,r){"use strict";r.r(t);var n=r(695),o=r(636);for(var l in o)"default"!==l&&function(e){r.d(t,e,(function(){return o[e]}))}(l);var c=r(28),component=Object(c.a)(o.default,n.a,n.b,!1,null,"a980e02c",null);t.default=component.exports}}]);