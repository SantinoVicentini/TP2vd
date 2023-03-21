d3.csv('astronautas.csv', d3.autoType).then(data => {
    let eva_mision_hs_filtrado = data.filter(astronauta => astronauta.eva_mision_hs !== 0);
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
      marks: [
        Plot.barX(eva_mision_hs_filtrado, {
          x: 'eva_mision_hs',
          y: 'nombre',
          fill: 'blue',
          fillOpacity: 0.5,
          sort: { y: "x" , reverse: true},
        }),
      ],
      x: {
        grid: true,
      },
      height: 1800,
      marginLeft: 170,

    })
    // Agregamos chart al div#chart de index.html
    d3.select('#chart').append(() => chart)
  })
