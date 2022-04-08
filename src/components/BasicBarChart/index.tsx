import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BasicBarChart = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    //  定义数据源
    const data = [4, 8, 15, 16, 23, 42];

    // 创建图形场景div(也就是最外层包裹条形图的div)，并给予一定效果的样式
    const div = d3
      .create("div")
      .style("padding", "10px")
      .style("color", "white")
      .style("text-align", "right");

    // 遍历数据生成条形图
    div
      // 选择子级下的所有div，为绘制图形的载体
      .selectAll("div")
      // 绑定数据
      .data(data)
      // 遍历data插入div
      .join("div")
      .style("background", "#2e8555")
      .style("padding-right", "5px")
      .style("margin-bottom", "2px")
      .style("width", (d) => `${d * 10}px`)
      .text((d) => d);
    // 将d3生成的div插入我们的div中
    ref.current.appendChild(div.node());
  }, []);

  return <div ref={ref} />;
};

export default BasicBarChart;
