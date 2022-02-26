import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";

const arr = [
  { date: 202106, totalScore: 250 },
  { date: 202107, totalScore: 255 },
  { date: 202108, totalScore: 250 },
  { date: 202109, totalScore: 265 },
  { date: 202110, totalScore: 280 },
  { date: 202111, totalScore: 295 },
  { date: 202112, totalScore: 270 },
  { date: 202201, totalScore: 310 },
];

const MonthlyGraph = () => {
  const chart = useRef();
  const [data, setData] = useState(arr);
  const width = 33 * arr.length;
  const height = 120;
  useEffect(() => {
    const svg = d3
      .select(chart.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    // let xScale = d3
    //   .scaleLinear()
    //   .domain([0, d3.max(data)])
    //   .range([0, width - 50]);
    // let yScale = d3
    //   .scaleLinear()
    //   .domain([0, d3.max(data)])
    //   .range([height - 50, 0]);
    // let xAxis = d3.axisBottom().scale(xScale);
    // let yAxis = d3.axisLeft().scale(yScale);
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function (d, i) {
        return i * 30 + 20;
      })
      .attr("y", function (d) {
        return height;
      })
      .attr("width", "1.2rem")
      .attr("height", function (d) {
        return 0;
      })
      .attr("fill", (d, i) => {
        if (i === arr.length - 1) {
          return "#F8AB0D";
        } else {
          return "#d8d8d8";
        }
      });
    // svg.append("g").attr("transform", "translate(30, 30)").call(yAxis);

    // svg.append("g").attr("transform", "translate(30, 280)").call(xAxis);

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", function (d, i) {
        return i * 30 + 20 + 3;
      })
      .attr("y", (d) => height - 5)
      .text(0);

    svg
      .selectAll("text")
      .transition()
      .duration(800)
      .attr("y", (d) => height - d.totalScore / 3 - 5)
      .text((d) => d.totalScore)
      .delay((d, i) => {
        return i * 500;
      });

    svg
      .selectAll("rect")
      .transition()
      .duration(800)
      .attr("y", (d) => height - d.totalScore / 3 + 5)
      .attr("height", (d) => d.totalScore / 3)
      .delay((d, i) => {
        return i * 500;
      });

    // let x = d3.scale
    //   .ordinal()
    //   .domain(
    //     data.map(function (d) {
    //       return d.date;
    //     })
    //   )
    //   .rangeRoundBands([0, width], 0.3);
    // let y = d3.scale
    //   .linear()
    //   .domain([
    //     0,
    //     d3.max(data, function (d) {
    //       return d.totalScore;
    //     }),
    //   ])
    //   .range([height, 0]);
    // svg
    //   .selectAll(".bar")
    //   .data(data)
    //   .enter()
    //   .append("rect")
    //   .attr("class", "bar")
    //   .attr("x", function (d) {
    //     return x(d.date);
    //   })
    //   .attr("width", x.rangeBand())
    //   .attr("y", function (d) {
    //     return y(d.totalScore);
    //   })
    //   .attr("height", function (d) {
    //     return height - y(d.value);
    //   })
    //   .attr("fill", "#049DBF");
  }, [data]);

  return (
    <Chart>
      <div ref={chart}></div>
    </Chart>
  );
};

const Chart = styled.div`
  svg {
    display: block;
    font-size: 0.4rem;
    rect {
      ry: 0.3rem;
    }
  }
`;

export default MonthlyGraph;