import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BasicLineChart = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 定义数据源
    const data = [
      {
        x: 1,
        y: 1,
      },
      {
        x: 32,
        y: 48,
      },
      {
        x: 100,
        y: 1,
      },
      {
        x: 174,
        y: 67,
      },
      { x: 199, y: 40 },
    ];

    // 定义折线图svg
    const svg = d3
      .create("svg")
      .style("width", "100%")
      // 转换成常见的笛卡尔坐标
      .attr("transform", "scale(1,-1)");

    // 生成折线图
    svg
      .selectAll("line")
      // 绑定数据
      .data(data)
      // 遍历数据插入line
      .join("line")
      .attr("x1", (d) => {
        return d.x;
      })
      .attr("y1", (d) => d.y)
      // 获取横线的下一坐标点
      .attr("x2", (datum, index) => {
        if (data[index + 1]) {
          return data[index + 1].x;
        }
        return datum.x;
      })
      .attr("y2", (datum, index) => {
        if (data[index + 1]) {
          return data[index + 1].y;
        }
        return datum.y;
      })
      .attr("stroke", "#2e8555");
    ref.current.appendChild(svg.node());
  }, []);

  return <div ref={ref} />;
};

export default BasicLineChart;
