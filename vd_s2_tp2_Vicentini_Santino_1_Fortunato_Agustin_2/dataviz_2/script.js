d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
        marks: [
          Plot.line(data, {
            x: "ano_mision",
            y: "mision_hs",
            stroke: "genero",
            strokeWidth: 1.5,
            curve: "linear"
          })
        ],
        x: { grid: true, line: true, zero: true, nice: true, },
        y: { grid: true, line: true, zero: true, nice: true, },
        width: 714, 
        height: 300, 
        x: { ticks: 3 }, 
        marginLeft: 50, 
        color: {
          legend: true,
          width: 714,
          columns: "120px"
        }
      })
            
    d3.select('#chart').append(() => chart)
  })