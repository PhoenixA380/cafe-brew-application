(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{1575:function(e,r,t){Promise.resolve().then(t.bind(t,1244))},1244:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var n=t(7437),s=t(2265),a=t(1169),i=t(495),o=t(6013),d=t(3102),l=t(7135);function c(){let[e,r]=(0,s.useState)(""),[t,c]=(0,s.useState)(""),u=(0,a.useRouter)(),f=async r=>{r.preventDefault();try{(await fetch("/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).ok?u.push("/dashboard"):console.error("Signup failed")}catch(e){console.error("Error:",e)}};return(0,n.jsx)("div",{className:"container mx-auto flex h-screen items-center justify-center",children:(0,n.jsxs)(o.Zb,{className:"w-[350px]",children:[(0,n.jsx)(o.Ol,{children:(0,n.jsx)(o.ll,{className:"text-2xl font-bold",children:"Sign Up"})}),(0,n.jsx)(o.aY,{children:(0,n.jsxs)("form",{onSubmit:f,className:"space-y-4",children:[(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(l._,{htmlFor:"email",children:"Email"}),(0,n.jsx)(d.I,{id:"email",type:"email",value:e,onChange:e=>r(e.target.value),required:!0})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(l._,{htmlFor:"password",children:"Password"}),(0,n.jsx)(d.I,{id:"password",type:"password",value:t,onChange:e=>c(e.target.value),required:!0})]}),(0,n.jsx)(i.z,{type:"submit",className:"w-full",children:"Sign Up"})]})})]})})}},495:function(e,r,t){"use strict";t.d(r,{z:function(){return l}});var n=t(7437),s=t(2265),a=t(2974),i=t(2218),o=t(7440);let d=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=s.forwardRef((e,r)=>{let{className:t,variant:s,size:i,asChild:l=!1,...c}=e,u=l?a.g7:"button";return(0,n.jsx)(u,{className:(0,o.cn)(d({variant:s,size:i,className:t})),ref:r,...c})});l.displayName="Button"},6013:function(e,r,t){"use strict";t.d(r,{Ol:function(){return o},Zb:function(){return i},aY:function(){return l},ll:function(){return d}});var n=t(7437),s=t(2265),a=t(7440);let i=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...s})});i.displayName="Card";let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",t),...s})});o.displayName="CardHeader";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("h3",{ref:r,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",t),...s})});d.displayName="CardTitle",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("p",{ref:r,className:(0,a.cn)("text-sm text-muted-foreground",t),...s})}).displayName="CardDescription";let l=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("p-6 pt-0",t),...s})});l.displayName="CardContent",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("flex items-center p-6 pt-0",t),...s})}).displayName="CardFooter"},3102:function(e,r,t){"use strict";t.d(r,{I:function(){return i}});var n=t(7437),s=t(2265),a=t(7440);let i=s.forwardRef((e,r)=>{let{className:t,type:s,...i}=e;return(0,n.jsx)("input",{type:s,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...i})});i.displayName="Input"},7135:function(e,r,t){"use strict";t.d(r,{_:function(){return l}});var n=t(7437),s=t(2265),a=t(7200),i=t(2218),o=t(7440);let d=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),l=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.f,{ref:r,className:(0,o.cn)(d(),t),...s})});l.displayName=a.f.displayName},7440:function(e,r,t){"use strict";t.d(r,{cn:function(){return a}});var n=t(4839),s=t(6164);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.m6)((0,n.W)(r))}}},function(e){e.O(0,[4,971,582,744],function(){return e(e.s=1575)}),_N_E=e.O()}]);