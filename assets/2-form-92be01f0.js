const a={email:"",message:""},s=document.querySelector(".feedback-form"),o=document.querySelector('input[name="email"]'),m=document.querySelector('textarea[name="message"]');s.addEventListener("input",e=>{(e.target===o||e.target===m)&&(a[e.target.name]=e.target.value.trim(),r())});const r=()=>{localStorage.setItem("feedback-form-state",JSON.stringify(a))},l=()=>{const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);o.value=t.email,m.value=t.message,Object.assign(a,t)}};l();s.addEventListener("submit",e=>{e.preventDefault(),a.email===""||a.message===""?alert("Fill please all fields"):(console.log(a),localStorage.removeItem("feedback-form-state"),Object.assign(a,{email:"",message:""}),s.reset())});
//# sourceMappingURL=2-form-92be01f0.js.map
