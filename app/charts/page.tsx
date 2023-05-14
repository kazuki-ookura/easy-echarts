'use client'
import Image from 'next/image'
import styles from '../page.module.css'
import React from 'react';
import ReactECharts from 'echarts-for-react';

export default function Home() {

  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  const style = {
    width: "80vw",
    height: "80vh",
    display: "block",
    margin: "0 auto",
  };

  return (
    <main className={styles.main}>
      <ReactECharts
        option={options}
        style={style}
      />
    </main>
  )
}
