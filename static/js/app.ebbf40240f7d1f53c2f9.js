webpackJsonp([1],{NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]},r=e("VU/8")({name:"App"},i,!1,null,null,null).exports,l=e("/ocq"),n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"dashboard"}},[e("section",{staticClass:"jumbotron text-center"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"text-primary"},[t._v("E.P. Ville Integrated Academy")]),t._v(" "),e("p",{staticClass:"lead text-muted"},[t._v("Block 19 Lot 11 Phase 1 E.P. Village, Pinagsama, Taguig City")]),t._v(" "),e("p",{staticClass:"lead text-muted"},[t._v("641-1557")]),t._v(" "),e("p",[e("router-link",{staticClass:"btn btn-primary",attrs:{to:"/enrollment"}},[t._v("Enroll Student")])],1)])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"bg-primary"},[s("div",{staticClass:"container",staticStyle:{"margin-bottom":"10px"}},[s("div",{staticClass:"row text-center"},[s("div",{staticClass:"col-sm-12"},[s("h3",{staticStyle:{color:"white"}},[this._v("\n                        DEPED Recognition\n                    ")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top",attrs:{src:"",alt:""}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h3",{staticClass:"card-title text-primary text-center"},[t._v("P 076 S. 2012e")]),t._v(" "),e("h5",[t._v("Pre-School")]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("Content details for Preschool.")])])])]),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top",attrs:{src:"",alt:""}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h3",{staticClass:"card-title text-primary text-center"},[t._v("P 076 S. 2012e")]),t._v(" "),e("h5",[t._v("Pre-School")]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("Content details for Preschool.")])])])]),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top",attrs:{src:"",alt:""}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h3",{staticClass:"card-title text-primary text-center"},[t._v("P 076 S. 2012e")]),t._v(" "),e("h5",[t._v("Pre-School")]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("Content details for Preschool.")])])])])])])])}]},o=e("VU/8")({name:"dashboard",data:function(){return{}}},n,!1,null,null,null).exports,d=e("kxiW"),c=e.n(d),v=(e("881v"),c.a.initializeApp({apiKey:"AIzaSyCLbgAsUHCS7er7YN3Vi0wTiUecQ00PNII",authDomain:"epvia-enroll-std.firebaseapp.com",databaseURL:"https://epvia-enroll-std.firebaseio.com",projectId:"epvia-enroll-std",storageBucket:"epvia-enroll-std.appspot.com",messagingSenderId:"986382899831",appId:"1:986382899831:web:da37a649c52f0a193b4472",measurementId:"G-62SZ6CHHRL"}),c.a.firestore()),_={name:"enrollstudent",data:function(){return{std_stat:null,std_lvl:"",std_lrn:"",std_cls:"",sch_name:"",sch_add:"",img_psa:"",sch_card:"",good_moral:"",ref_id:null,rand_num:null,ref_md:null}},mounted:function(){this.rand_num=(new Date).getUTCMilliseconds(),this.ref_md=(new Date).getMonth()+""+(new Date).getDate()},methods:{randomNumber:function(){return Math.floor(10*Math.random())+1},statStd:function(t){this.std_stat=t.target.value,"old"===this.std_stat?this.ref_id="EP01"+this.ref_md+this.rand_num:this.ref_id="EP02"+this.ref_md+this.rand_num},lvl:function(t){this.std_lvl=t.target.value},onFileChange:function(t){var s=this,e=t.target;if(e.files&&e.files[0]){var a=new FileReader;a.onload=function(t){s.img_psa=t.target.result},a.readAsDataURL(e.files[0])}},onFileSC:function(t){var s=this,e=t.target;if(e.files&&e.files[0]){var a=new FileReader;a.onload=function(t){s.sch_card=t.target.result},a.readAsDataURL(e.files[0])}},onFileGM:function(t){var s=this,e=t.target;if(e.files&&e.files[0]){var a=new FileReader;a.onload=function(t){s.good_moral=t.target.result},a.readAsDataURL(e.files[0])}},removeImage:function(){this.img_psa=""},removeSC:function(){this.sch_card=""},removeGM:function(){this.good_moral=""},saveBasicInfo:function(){var t=this;v.collection("studentinfo").add({ref_id:this.ref_id,std_stat:this.std_stat,std_level:this.std_lvl,std_lrn:this.std_lrn,std_class:this.std_cls,prev_school:this.sch_name,prev_sch_add:this.sch_add,img_psa:this.img_psa,img_card:this.sch_card,img_gm:this.good_moral}).then(function(s){return t.$router.push({path:"/student_info/"+t.ref_id})}).catch(function(t){return console.log(t)})}}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container",attrs:{id:"enrollstudent"}},[e("h3",{staticClass:"center bg-primary text-center text-white"},[t._v(" Enrollment Form")]),t._v(" "),e("div",{staticClass:"row"},[e("form",{staticClass:"col s12",on:{submit:function(s){return s.preventDefault(),t.saveBasicInfo(s)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Old / New Student")]),t._v(" "),e("select",{staticClass:"form-control",attrs:{required:"",id:"exampleFormControlSelect1"},on:{change:function(s){return t.statStd(s)}}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Select")]),t._v(" "),e("option",{attrs:{value:"old"}},[t._v("Old Student")]),t._v(" "),e("option",{attrs:{value:"new"}},[t._v("New Student")])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Incomming Level")]),t._v(" "),e("select",{staticClass:"form-control",attrs:{required:"",id:"exampleFormControlSelect1"},on:{change:function(s){return t.lvl(s)}}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Select Student Level")]),t._v(" "),e("option",{attrs:{value:"k1"}},[t._v("Kinder 1")]),t._v(" "),e("option",{attrs:{value:"k2"}},[t._v("kinder 2")]),t._v(" "),e("option",{attrs:{value:"g1"}},[t._v("Grade 1")]),t._v(" "),e("option",{attrs:{value:"g2"}},[t._v("Grade 2")]),t._v(" "),e("option",{attrs:{value:"g3"}},[t._v("Grade 3")]),t._v(" "),e("option",{attrs:{value:"g4"}},[t._v("Grade 4")]),t._v(" "),e("option",{attrs:{value:"g5"}},[t._v("Grade 5")]),t._v(" "),e("option",{attrs:{value:"g6"}},[t._v("Grade 6")]),t._v(" "),e("option",{attrs:{value:"g7"}},[t._v("Grade 7")]),t._v(" "),e("option",{attrs:{value:"g8"}},[t._v("Grade 8")]),t._v(" "),e("option",{attrs:{value:"g9"}},[t._v("Grade 9")]),t._v(" "),e("option",{attrs:{value:"g10"}},[t._v("Grade 10")])])])])]),t._v(" "),"k1"!=t.std_lvl&&"k2"!=t.std_lvl?e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Student LRN")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.std_lrn,expression:"std_lrn"}],staticClass:"form-control",attrs:{id:"lrn",type:"text",required:""},domProps:{value:t.std_lrn},on:{input:function(s){s.target.composing||(t.std_lrn=s.target.value)}}})])])]):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Student Classification")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.std_cls,expression:"std_cls"}],staticClass:"form-control",attrs:{required:"",id:"exampleFormControlSelect1"},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.std_cls=s.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Classification")]),t._v(" "),e("option",{attrs:{value:"reg"}},[t._v("Regular Student")]),t._v(" "),e("option",{attrs:{value:"tlc"}},[t._v("TLC")])])])])]),t._v(" "),"new"==t.std_stat&&"k1"!=t.std_lvl&&"k2"!=t.std_lvl?e("div",[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sch_name,expression:"sch_name"}],staticClass:"form-control",attrs:{id:"School_Name",type:"text",required:""},domProps:{value:t.sch_name},on:{input:function(s){s.target.composing||(t.sch_name=s.target.value)}}}),t._v(" "),e("label",[t._v("School Name")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sch_add,expression:"sch_add"}],staticClass:"form-control",attrs:{id:"School_Name",type:"text",required:""},domProps:{value:t.sch_add},on:{input:function(s){s.target.composing||(t.sch_add=s.target.value)}}}),t._v(" "),e("label",[t._v("School Address")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[""===t.img_psa?e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("UPLOAD NSO / PSA")]),t._v(" "),e("input",{attrs:{type:"file",required:""},on:{change:function(s){return t.onFileChange(s)}}})])]):e("div",{staticClass:"card"},[e("img",{attrs:{src:t.img_psa}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("NSO / PSA")]),t._v(" "),e("button",{staticClass:"btn btn-warning",on:{click:function(s){return t.removeImage()}}},[t._v("Remove")])])])]),t._v(" "),e("div",{staticClass:"col-md-4"},[""===t.sch_card?e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("UPLOAD SCHOOL CARD")]),t._v(" "),e("input",{attrs:{type:"file",required:""},on:{change:function(s){return t.onFileSC(s)}}})])]):e("div",{staticClass:"card"},[e("img",{attrs:{src:t.sch_card}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("SCHOOL CARD")]),t._v(" "),e("button",{staticClass:"btn",on:{click:function(s){return t.removeSC()}}},[t._v("Remove")])])])]),t._v(" "),e("div",{staticClass:"col-md-4"},[""===t.good_moral?e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("UPLOAD GOOD MORAL")]),t._v(" "),e("input",{attrs:{type:"file",required:""},on:{change:function(s){return t.onFileGM(s)}}})])]):e("div",{staticClass:"card"},[e("img",{attrs:{src:t.good_moral}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("GOOD MORAL")]),t._v(" "),e("button",{staticClass:"btn",on:{click:function(s){return t.removeGM()}}},[t._v("Remove")])])])])])]):t._e(),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("router-link",{staticClass:"btn btn-danger",attrs:{to:"/"}},[t._v("CANCEL")])],1),t._v(" "),t._m(1)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("h3",{staticClass:"center bg-primary text-center text-white"},[this._v(" School Information")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col text-right"},[s("button",{staticClass:"btn btn-primary pull-right",attrs:{type:"submit"}},[this._v("SUBMIT")])])}]},u=e("VU/8")(_,m,!1,null,null,null).exports,p={name:"studentinfo",data:function(){return{ref_id:this.$route.params.ref_id,std_img:"",lastname:null,firstname:null,middlename:null,std_add:null,std_bday:null,std_age:null,std_gender:null,std_email:null,std_contact:null,std_mother:null,std_father:null,std_guard:null,parent_contact:null}},methods:{savePersonalInfo:function(){var t=this;v.collection("personalInfo").add({ref_id:this.ref_id,std_img:this.std_img,lastname:this.lastname,firstname:this.firstname,middlename:this.middlename,std_add:this.std_add,std_bday:this.std_bday,std_age:this.std_age,std_gender:this.std_gender,std_email:this.std_email,std_contact:this.std_contact,std_mother:this.std_mother,std_father:this.std_father,std_guard:this.std_guard,parent_contact:this.parent_contact}).then(function(s){return t.$router.push("/finalpage/"+t.ref_id)}).catch(function(t){return console.log(t)})},onFileSP:function(t){var s=this,e=t.target;if(e.files&&e.files[0]){var a=new FileReader;a.onload=function(t){s.std_img=t.target.result},a.readAsDataURL(e.files[0])}},removeSP:function(){this.std_img=""}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"studentinfo"}},[e("h3",{staticClass:"center bg-primary text-center text-white"},[t._v("Student information")]),t._v(" "),e("div",{staticClass:"container"},[e("form",{on:{submit:function(s){return s.preventDefault(),t.savePersonalInfo(s)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[""===t.std_img?e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Upload Student Picture")]),t._v(" "),e("input",{attrs:{type:"file",required:""},on:{change:function(s){return t.onFileSP(s)}}})])]):e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("img",{staticStyle:{width:"100%"},attrs:{src:t.std_img}}),t._v(" "),e("h5",{staticClass:"card-title"},[t._v("Student Picture")]),t._v(" "),e("button",{staticClass:"btn btn-secondary",on:{click:function(s){return t.removeSP()}}},[t._v("Remove")])])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("label",[t._v("Last Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.lastname,expression:"lastname"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.lastname},on:{input:function(s){s.target.composing||(t.lastname=s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("label",[t._v("Given Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.firstname,expression:"firstname"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.firstname},on:{input:function(s){s.target.composing||(t.firstname=s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("label",[t._v("Middle Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.middlename,expression:"middlename"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.middlename},on:{input:function(s){s.target.composing||(t.middlename=s.target.value)}}})])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("label",[t._v("Address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.std_add,expression:"std_add"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.std_add},on:{input:function(s){s.target.composing||(t.std_add=s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("label",[t._v("Birthday")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.std_bday,expression:"std_bday"}],staticClass:"form-control",attrs:{type:"date",required:""},domProps:{value:t.std_bday},on:{input:function(s){s.target.composing||(t.std_bday=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("label",[t._v("Age")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.std_age,expression:"std_age"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.std_age},on:{input:function(s){s.target.composing||(t.std_age=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("label",[t._v("Gender")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.std_gender,expression:"std_gender"}],staticClass:"form-control",attrs:{required:""},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.std_gender=s.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"male"}},[t._v("Male")]),t._v(" "),e("option",{attrs:{value:"female"}},[t._v("Female")])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("label",[t._v("Student e-Mail Address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.std_email,expression:"std_email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.std_email},on:{input:function(s){s.target.composing||(t.std_email=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("label",[t._v("Student Contact Number")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.std_contact,expression:"std_contact"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.std_contact},on:{input:function(s){s.target.composing||(t.std_contact=s.target.value)}}})])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("label",[t._v("Mother's Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.std_mother,expression:"std_mother"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.std_mother},on:{input:function(s){s.target.composing||(t.std_mother=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("label",[t._v("Father's Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.std_father,expression:"std_father"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.std_father},on:{input:function(s){s.target.composing||(t.std_father=s.target.value)}}})])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("label",[t._v("Guardian's Name (if Parents are not around)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.std_guard,expression:"std_guard"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.std_guard},on:{input:function(s){s.target.composing||(t.std_guard=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("label",[t._v("Guardian/Parent's Contact Number")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.parent_contact,expression:"parent_contact"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.parent_contact},on:{input:function(s){s.target.composing||(t.parent_contact=s.target.value)}}})])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("router-link",{staticClass:"btn btn-danger",attrs:{to:"/"}},[t._v("CANCEL")])],1),t._v(" "),t._m(0)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col text-right"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("SUBMIT")])])}]},f=e("VU/8")(p,C,!1,null,null,null).exports,g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"finalpage"}},[e("div",{staticClass:"jumbotron text-center"},[e("div",{staticClass:"container"},[e("h3",[t._v("Ref. ID: "+t._s(t.ref_id)+" ")]),t._v(" "),e("p",{staticClass:"lead text-muted"},[t._v("Thank you for register, Please remember this reference ID for your payment transantion.")])])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"col-md-6"},[e("ul",{staticClass:"list-group"},[e("li",{staticClass:"list-group-item active text-center"},[t._v("SCHOOL FEES")]),t._v(" "),e("li",{staticClass:"list-group-item"},[t._v("a. Kinder 1 and Kinder 2 - P15,000")]),t._v(" "),e("li",{staticClass:"list-group-item"},[t._v("b. Grade 1 to Grade 3 - P18,000")]),t._v(" "),e("li",{staticClass:"list-group-item"},[t._v("c. Grade 4 to Grade 6 - P19,000")]),t._v(" "),e("li",{staticClass:"list-group-item"},[t._v("d. Grade 7 to Grade 10 - P23,000")])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("ul",{staticClass:"list-group"},[e("li",{staticClass:"list-group-item active text-center"},[t._v("BOOKS PRICES")]),t._v(" "),e("li",{staticClass:"list-group-item"},[t._v("a. Kinder (To be announce)")]),t._v(" "),e("li",{staticClass:"list-group-item"},[t._v("b. Grade 1 to Grade 3 - P")]),t._v(" "),e("li",{staticClass:"list-group-item"},[t._v("c. Grade 4 to Grade 6 - P")]),t._v(" "),e("li",{staticClass:"list-group-item"},[t._v("d. Grade 7 to Grade 10 - P")]),t._v(" "),e("li",{staticClass:"list-group-item disabled"},[e("i",[t._v("Note: Books are in CASH basic only")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("ul",{staticClass:"list-group"},[e("li",{staticClass:"list-group-item active text-center"},[t._v("Mode of Payment")]),t._v(" "),e("li",{staticClass:"list-group-item"},[t._v("a. 10% Discount for Cash")]),t._v(" "),e("li",{staticClass:"list-group-item"},[t._v("\n                b. Monthly\n                "),e("div",{staticClass:"col-md-12"},[e("ul",{staticClass:"list-group"},[e("li",{staticClass:"list-group-item"},[t._v("i. Upon Enrollment - P5,000")]),t._v(" "),e("li",{staticClass:"list-group-item"},[t._v("ii. Monthly (AUGUST to APRIL 30 ) ")]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("ul",{staticClass:"list-group"},[e("li",{staticClass:"list-group-item"},[t._v("1. Kinder - P1,120")]),t._v(" "),e("li",{staticClass:"list-group-item"},[t._v("2. Grade 1 to Grade 3 - P1,500")]),t._v(" "),e("li",{staticClass:"list-group-item"},[t._v("3. Grade 4 to Grade 6 - P1,560 ")]),t._v(" "),e("li",{staticClass:"list-group-item"},[t._v("3. Grade 7 to Grade 10 - P2,000 ")])])])])])]),t._v(" "),e("li",{staticClass:"list-group-item  list-group-item-primary text-center"},[e("i",[t._v("Please call "),e("b",[t._v("09167688057")]),t._v(" for Bank Payment.")])])])])])}]},h=e("VU/8")({name:"finalpage",data:function(){return{ref_id:this.$route.params.ref_id}}},g,!1,null,null,null).exports;a.a.use(l.a);var b=new l.a({routes:[{path:"/",name:"dashboard",component:o},{path:"/enrollment",name:"enrollstudent",component:u},{path:"/student_info/:ref_id",name:"studentinfo",component:f},{path:"/thankyou/:ref_id",name:"finalpage",component:h}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:b,components:{App:r},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.ebbf40240f7d1f53c2f9.js.map