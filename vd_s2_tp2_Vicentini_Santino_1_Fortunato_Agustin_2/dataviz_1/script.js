d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
      marks: [
        Plot.barX(data, {
          x: 'eva_mision_hs',
          y: 'nombre',
          sort: { y: "x" , reverse: true},
        }),
      ],
      x: {
        grid: true,
      },
      height: 1800,
      marginLeft: 170,

      x: { grid: true, line: true, zero: true, nice: true, },
      y: { grid: true, line: true, zero: true, nice: true, },
    })
    // Agregamos chart al div#chart de index.html
    d3.select('#chart').append(() => chart)
  })
