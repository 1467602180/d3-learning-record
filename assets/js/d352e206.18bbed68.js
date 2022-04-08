"use strict";(self.webpackChunkd_3_learning_record=self.webpackChunkd_3_learning_record||[]).push([[763],{7338:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var r=n(7462),c=n(3366),i=n(7294),a=n(3905),s=n(6658),o=function(){var e=(0,i.useRef)(null);return(0,i.useEffect)((function(){var t=s.Ue8("svg").style("width","100%");t.selectAll("circle").data([10,20,30]).join("circle").attr("cx",(function(e){return 10*e+"px"})).attr("cy","50px").attr("r",(function(e){return e})).style("fill","#2e8555"),e.current.appendChild(t.node())}),[]),i.createElement("div",{ref:e})},l=n(8066),d=["components"],u={sidebar_position:3,title:"\u7ed8\u5236\u4e09\u4e2a\u5927\u5c0f\u4e0d\u4e00\u7684\u5706"},f=void 0,p={unversionedId:"basic/make-three-circle",id:"basic/make-three-circle",title:"\u7ed8\u5236\u4e09\u4e2a\u5927\u5c0f\u4e0d\u4e00\u7684\u5706",description:"",source:"@site/docs/basic/make-three-circle.mdx",sourceDirName:"basic",slug:"/basic/make-three-circle",permalink:"/docs/basic/make-three-circle",editUrl:"https://github.com/1467602180/d3-learning-record/tree/master/docs/basic/make-three-circle.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u7ed8\u5236\u4e09\u4e2a\u5927\u5c0f\u4e0d\u4e00\u7684\u5706"},sidebar:"tutorialSidebar",previous:{title:"\u7ed8\u5236\u4e00\u4e2a\u7b80\u5355\u7684\u6298\u7ebf\u56fe",permalink:"/docs/basic/make-a-line-chart"}},m={},h=[],k={toc:h};function v(e){var t=e.components,n=(0,c.Z)(e,d);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o,{mdxType:"ThreeCircle"}),(0,a.kt)(l.Z,{language:"tsx",mdxType:"CodeBlock"},'import React, { useEffect, useRef } from "react";\nimport * as d3 from "d3";\n\nconst ThreeCircle = () => {\n  const ref = useRef<HTMLDivElement | null>(null);\n\n  useEffect(() => {\n    // \u5b9a\u4e49\u5706\u7684\u534a\u5f84\u5927\u5c0f\n    const data = [10, 20, 30];\n    // \u521b\u5efa\u56fe\u5f62\u573a\u666fsvg\n    const svg = d3.create("svg").style("width", "100%");\n\n    svg\n      // \u521b\u5efa\u627f\u8f7d\u56fe\u5f62\u7684\u8f7d\u4f53\n      .selectAll("circle")\n      // \u7ed1\u5b9a\u6570\u636e\n      .data(data)\n      // \u904d\u5386data\u63d2\u5165circle\n      .join("circle")\n      .attr("cx", (d) => `${d * 10}px`)\n      .attr("cy", "50px")\n      .attr("r", (d) => d)\n      .style("fill", "#2e8555");\n    ref.current.appendChild(svg.node());\n  }, []);\n\n  return <div ref={ref} />;\n};\n\nexport default ThreeCircle;\n'))}v.isMDXComponent=!0}}]);