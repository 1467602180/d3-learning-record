---
title: 绘制三个大小不一的圆
order: 3
group:
  title: 入门
---

# 绘制三个大小不一的圆

```tsx
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ThreeCircle = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 定义圆的半径大小
    const data = [10, 20, 30];
    // 创建图形场景svg
    const svg = d3.create('svg').style('width', '100%');

    svg
      // 创建承载图形的载体
      .selectAll('circle')
      // 绑定数据
      .data(data)
      // 遍历data插入circle
      .join('circle')
      .attr('cx', (d) => `${d * 10}px`)
      .attr('cy', '50px')
      .attr('r', (d) => d)
      .style('fill', '#2e8555');
    ref.current.appendChild(svg.node());
  }, []);

  return <div ref={ref} />;
};

export default ThreeCircle;
```
