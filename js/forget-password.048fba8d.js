import{_ as f,v as h}from"./index.30f1037c.js";import{r as t,o as g,c as v,b as e,w as a,d,t as u,y,u as k}from"./mock.96d8fd81.js";const w={data(){return{form:{phone:""},rule:{phone:[{required:!0,validator:this.validatorPhone,message:this.$t("no_valid"),trigger:"blur"}]},second:3,timer:null}},methods:{goBackPage(){this.$router.back(-1)},validatorPhone(){return!!h(this.form.phone)},sendForget(){this.$refs.form.validate(o=>{!o||(this.$Message.success("\u7CFB\u7D71\u5DF2\u6210\u529F\u5BC4\u51FA\u5BC6\u78BC\uFF0C\u8ACB\u6839\u64DA\u8A72\u5BC6\u78BC\u91CD\u65B0\u767B\u5165"),this.timer=setInterval(()=>{this.second===0?this.$router.push({name:"login_or_register"}):this.second--},1e3))})}},beforeDestroy(){clearInterval(this.timer)}},B={class:"form-title"};function I(o,r,P,F,s,n){const c=t("Icon"),i=t("FormItem"),m=t("Input"),p=t("Button"),_=t("Form");return g(),v("div",null,[e(_,{ref:"form",model:s.form,rules:s.rule,class:"div"},{default:a(()=>[e(i,null,{default:a(()=>[d("span",{onClick:r[0]||(r[0]=(...l)=>n.goBackPage&&n.goBackPage(...l))},[e(c,{size:"40",color:"orange",type:"md-arrow-back"})]),d("span",B,u(o.$t("reset_password")),1)]),_:1}),e(i,{prop:"phone"},{default:a(()=>[e(m,{class:"input",size:"large",type:"text",modelValue:s.form.phone,"onUpdate:modelValue":r[1]||(r[1]=l=>s.form.phone=l),onKeydown:y(n.sendForget,["enter"]),placeholder:o.$t("plz_type_phone")},null,8,["modelValue","onKeydown","placeholder"])]),_:1}),e(p,{class:"btn",size:"large",type:"warning",onClick:n.sendForget,long:""},{default:a(()=>[k(u(o.$t("next_step")),1)]),_:1},8,["onClick"])]),_:1},8,["model","rules"])])}var x=f(w,[["render",I]]);export{x as default};
