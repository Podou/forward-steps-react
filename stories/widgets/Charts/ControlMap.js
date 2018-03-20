
import React, { Component } from 'react'
import ReactHighmap from 'react-highcharts/ReactHighmaps'
import worldMapData from './worldMapData'
import getCodes from './utils'

class ControlMap extends Component {

  render() {
    const config = {
      chart: {
        spacingBottom: 20
      },
      title: {
        text: 'Europe time zones'
      },

      legend: {
        enabled: true
      },

      plotOptions: {
        map: {
          allAreas: false,
          joinBy: ['hc-key', 'code'],
          dataLabels: {
            enabled: true,
            color: 'white',
            style: {
              fontWeight: 'bold'
            }
          },
          tooltip: {
            headerFormat: '',
            pointFormat: '{point.name}: <b>{series.name}</b>'
          }

        }
      },

      series: [{
        name: 'UTC',
        data: getCodes(worldMapData),
        mapData: worldMapData
      }]
    }
    console.log(getCodes(worldMapData))

    return <ReactHighmap config={config} />
  }
}

export default ControlMap
