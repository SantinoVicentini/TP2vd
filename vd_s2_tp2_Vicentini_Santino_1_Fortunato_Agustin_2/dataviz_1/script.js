d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
      marks: [
        Plot.barY(data, {
            x: 'genero',
            y: 'eva_mision_hs',
            fill: 'country',
            sort: 'pop',
            title: d => d.country + '\n' + d.pop,
          }),
      ],
      marginLeft: 70,
        width: 300,
      x: { grid: true, line: true, zero: true, nice: true, },
      y: { grid: true, line: true, zero: true, nice: true, },
    })
    // Agregamos chart al div#chart de index.html
    d3.select('#chart').append(() => chart)
  })