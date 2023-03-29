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
                filter: (d) => d.mision_hs >= 3000
                  
              }
                )
            
          )
        ],
        style: {
          fontFamily:"arial",
          fontSize:12,
        },
        x:{
          label: 'Nacionalidad (→)'
        },
        y:{
          label: 'Cantidad Total De Hs En Evacuacion Mision, en miles (↑)',
          grid: true
        },
        height: 400,
        marginLeft: 60,
        width: 715,
        marginBottom: 50
       
    })
    // Agregamos chart al div#chart de index.html
    d3.select('#chart').append(() => chart)
  })
