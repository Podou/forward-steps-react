import * as React from 'react'

import highcharts from 'highcharts'
import ReactHighmap from 'react-highcharts/ReactHighmaps'


import { worldMapData } from './worldMapData'
import { europeMapData } from './europeMapData'

console.log(worldMapData)
console.log(europeMapData)

const mapConfig = {
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
      joinBy: ['iso-a2', 'code'],
      dataLabels: {
        enabled: true,
        color: 'white',
        style: {
          fontWeight: 'bold'
        }
      },
      mapData: europeMapData,
      tooltip: {
        headerFormat: '',
        pointFormat: '{point.name}: <b>{series.name}</b>'
      }

    }
  },

  series: [{
    name: 'UTC',
    data: ['IE', 'IS', 'GB', 'PT'].map(function (code) {
      return { code: code };
    })
  }, {
    name: 'UTC + 1',
    data: ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU', 'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map(function (code) {
      return { code: code };
    })
  }]
}

const Example = () => {
  return (
    <ReactHighmap config={mapConfig} />
  )
}

export default (story) => {
  story.add('Chart', Example)
}
