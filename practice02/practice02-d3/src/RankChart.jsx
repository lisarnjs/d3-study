import React, {useState, useEffect, useRef} from "react";  
import * as d3 from "d3";
import styled from "styled-components";

let subject;
let lastMonth;
let thisMonth;
const scoreArr = [
  subject = "헌법",
  lastMonth = 72, 
  thisMonth=84,
  
];

const ScoreDevelopment = () => {
  const score = useRef();
  const scoreText = useRef();
  const [data, setData] = useState(scoreArr);
  const width = 150;
  const height = 110;

  useEffect(() => {
    const svg = d3
      .select(score.current)
      .append("svg")
      .attr("width",width)
      .attr("height",height);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => {return i * 40 })
      .attr("y", (d, i) => { 
        if(i === 0)return null;
        else return (height-d+5);
      })
      .attr("width","1.2rem")
      .attr("height", (d, i) => {
        if(i === 0)return null;
        else return d;
      })
      .attr("fill", (d, i) => {
        if(i < scoreArr.length - 1){
          return "#D8D8D8";
        } else {
          return "#F8AB0D";
        }
      })

    const scoreTexts = d3
      .select(scoreText.current)
      .append("svg")
      .attr("width", width)
      .attr("height", 20)

    scoreTexts
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", function (d, i) {
        return i * 40 + 5 ;
      })
      .attr("y", (d) => {return 10})
      .text((d, i) => {
        if(i === 0){
          return null;
        } else {
          return d;
        }
      });

  }, [data]);

  return (
    <Chart>
      <Chart ref={score}></Chart>
      <Text><div ref={scoreText}></div></Text>
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

const Text = styled.div`
svg {
  border-top: 1px solid #000;
}

`;

export default ScoreDevelopment;