import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MonthlyGraph from "./App";
import ScoreDevelopment from './RankChart';

ReactDOM.render(
  <React.StrictMode>
    <MonthlyGraph />
    <ScoreDevelopment />
  </React.StrictMode>,
  document.getElementById('root')
)
