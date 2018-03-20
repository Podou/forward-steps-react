export default (mapJson) => {
  const data = []
  mapJson.features.map((feature, index) => {
    data.push({
      code: feature.properties['hc-key']
    })
  })
  return data
}
