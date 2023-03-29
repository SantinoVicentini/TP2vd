d3.csv('astronautas.csv', d3.autoType).then(data => {
  
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
      marks: [
        Plot.areaY(data, Plot.groupX({y: "sum"},{x: "anio_mision", y: "mision_hs" , fill: "#6188ff", fillOpacity: 0.5})),
        Plot.lineY(data, Plot.groupX({y: "sum"}, {x: "anio_mision", y: "mision_hs", stroke: "#000", strokeWidth: 1})),
        Plot.ruleY([100000])
      ],
      style: {
        fontFamily:"arial",
        fontSize:12,
      },
      x: {
        label: 'Año (→)'
      },
      y: {
        label: 'Cantidad Total De Hs En Mision, en miles (↑)' ,
        labelOffset: 50,
        grid: true,
      },
      width: 900,
      height: 550,
      marginLeft: 50,
      marginTop: 30,
  })
            
    d3.select('#chart').append(() => chart)
  })

