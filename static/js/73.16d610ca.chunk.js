"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[73],{2073:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var a=t(2791),r=t(9434),s=t(6916),c=function(e){return e.contacts.items},o=function(e){return e.contacts.IsLoading},i=(0,s.P1)([c,function(e){return e.filter.filter}],(function(e,n){return n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):e})),u=t(8494),l=t(6016),m="ContactItem_item__gxreB",d="ContactItem_deleteBtn__fTo+a",f="ContactItem_icon__qzINN",h=t(3329),p=function(e){var n=e.id,t=e.name,a=e.number,s=(0,r.I0)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("li",{className:m,children:[(0,h.jsx)("span",{children:t}),(0,h.jsx)("span",{children:a}),(0,h.jsx)("button",{className:d,onClick:function(){return function(e){s((0,l.GK)(e))}(n)},type:"button",children:(0,h.jsx)(u.ZCS,{className:f})})]})})},_="ContactList_list__csErn",x=function(){var e=(0,r.v9)(i);return e?(0,h.jsx)("ul",{className:_,children:e.map((function(e){var n=e.id,t=e.name,a=e.phone;return(0,h.jsx)(p,{id:n,name:t,number:a},n)}))}):(0,h.jsx)("p",{children:"Not found contacts"})},b="ContactForm_form__dhl+T",j="ContactForm_label__-cVXI",v="ContactForm_input__Bl93P",C="ContactForm_button__eSwX9",N=function(){var e=(0,r.I0)(),n=(0,r.v9)(c),t=function(t){var a=t.name;if(n.find((function(e){return e.name.toLowerCase()===a.toLowerCase()})))return alert("".concat(a," is already in contacts"));e((0,l.uK)(t))};return(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.elements,a=n.name,r=n.number,s={name:a.value,phone:r.value};t(s),a.value="",r.value=""},className:b,children:[(0,h.jsx)("label",{className:j,children:"Name"}),(0,h.jsx)("input",{className:v,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name"}),(0,h.jsx)("label",{children:"Phone number"}),(0,h.jsx)("input",{className:v,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter phone number"}),(0,h.jsxs)("button",{className:C,type:"submit",children:[" ","Add contact"]})]})},w=t(2403),I=function(){var e=(0,r.I0)(),n=(0,r.v9)(o);return(0,a.useEffect)((function(){e((0,l.yF)())}),[e]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(N,{}),(0,h.jsx)("div",{children:n&&(0,h.jsx)(w.Z,{animation:"wave"})}),(0,h.jsx)(x,{})]})}}}]);
//# sourceMappingURL=73.16d610ca.chunk.js.map