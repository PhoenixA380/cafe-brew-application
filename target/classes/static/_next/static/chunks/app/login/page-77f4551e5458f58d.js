(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{5884:function(e,r,t){Promise.resolve().then(t.bind(t,5207))},5207:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var n=t(7437),s=t(2265),a=t(495),i=t(6013),o=t(3102),l=t(7135),d=t(7138);function c(){let[e,r]=(0,s.useState)(""),[t,c]=(0,s.useState)("");return(0,n.jsx)("div",{className:"container mx-auto flex h-screen items-center justify-center",children:(0,n.jsxs)(i.Zb,{className:"w-[350px]",children:[(0,n.jsx)(i.Ol,{children:(0,n.jsx)(i.ll,{className:"text-2xl font-bold",children:"Login"})}),(0,n.jsxs)(i.aY,{children:[(0,n.jsxs)("form",{onSubmit:r=>{r.preventDefault(),console.log("Login with",e,t)},className:"space-y-4",children:[(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(l._,{htmlFor:"email",children:"Email"}),(0,n.jsx)(o.I,{id:"email",type:"email",value:e,onChange:e=>r(e.target.value),required:!0})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(l._,{htmlFor:"password",children:"Password"}),(0,n.jsx)(o.I,{id:"password",type:"password",value:t,onChange:e=>c(e.target.value),required:!0})]}),(0,n.jsx)(a.z,{type:"submit",className:"w-full",children:"Login"})]}),(0,n.jsx)("div",{className:"mt-4 text-center text-sm",children:(0,n.jsx)(d.default,{href:"/forgot-password",className:"text-blue-500 hover:underline",children:"Forgot Password?"})}),(0,n.jsxs)("div",{className:"mt-2 text-center text-sm",children:["Dont have an account?"," ",(0,n.jsx)(d.default,{href:"/signup",className:"text-blue-500 hover:underline",children:"Sign Up"})]})]})]})})}},495:function(e,r,t){"use strict";t.d(r,{z:function(){return d}});var n=t(7437),s=t(2265),a=t(2974),i=t(2218),o=t(7440);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,r)=>{let{className:t,variant:s,size:i,asChild:d=!1,...c}=e,u=d?a.g7:"button";return(0,n.jsx)(u,{className:(0,o.cn)(l({variant:s,size:i,className:t})),ref:r,...c})});d.displayName="Button"},6013:function(e,r,t){"use strict";t.d(r,{Ol:function(){return o},Zb:function(){return i},aY:function(){return d},ll:function(){return l}});var n=t(7437),s=t(2265),a=t(7440);let i=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...s})});i.displayName="Card";let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",t),...s})});o.displayName="CardHeader";let l=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("h3",{ref:r,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",t),...s})});l.displayName="CardTitle",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("p",{ref:r,className:(0,a.cn)("text-sm text-muted-foreground",t),...s})}).displayName="CardDescription";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("p-6 pt-0",t),...s})});d.displayName="CardContent",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("flex items-center p-6 pt-0",t),...s})}).displayName="CardFooter"},3102:function(e,r,t){"use strict";t.d(r,{I:function(){return i}});var n=t(7437),s=t(2265),a=t(7440);let i=s.forwardRef((e,r)=>{let{className:t,type:s,...i}=e;return(0,n.jsx)("input",{type:s,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...i})});i.displayName="Input"},7135:function(e,r,t){"use strict";t.d(r,{_:function(){return d}});var n=t(7437),s=t(2265),a=t(7200),i=t(2218),o=t(7440);let l=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.f,{ref:r,className:(0,o.cn)(l(),t),...s})});d.displayName=a.f.displayName},7440:function(e,r,t){"use strict";t.d(r,{cn:function(){return a}});var n=t(4839),s=t(6164);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.m6)((0,n.W)(r))}},7138:function(e,r,t){"use strict";t.d(r,{default:function(){return s.a}});var n=t(231),s=t.n(n)}},function(e){e.O(0,[4,231,971,582,744],function(){return e(e.s=5884)}),_N_E=e.O()}]);