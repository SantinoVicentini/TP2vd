d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
        marks: [
          Plot.barY(
            data,
            Plot.groupX({ y: "sum" }, { 
                x: "nacionalidad", 
                y: "mision_hs",
                fill: 'blue',
                fillOpacity: 0.5,
                sort: { x: "y", reverse: true }, 
                filter: (d) => d.mision_hs >= 1000
                  
              }
                )
            
          )
        ],
        height: 400,
        marginLeft: 50,
        width: 714,
       
    })
    // Agregamos chart al div#chart de index.html
    d3.select('#chart').append(() => chart)
  })
