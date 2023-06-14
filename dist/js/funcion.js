let plot = (data) => { 
  const ctx = document.getElementById('myChart');

  const dataset = {
    labels: data.hourly.time, /* ETIQUETA DE DATOS */
    datasets: [{
        label: 'Temperatura semanal', /* ETIQUETA DEL GRÁFICO */
        data: data.hourly.temperature_2m, /* ARREGLO DE DATOS */
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
    };
    const config = {
      type: 'line',
      data: dataset,
  };

  const chart = new Chart(ctx, config)
 }
 let load = (data) => { 

  }

(
    function () {
        let URL = 'https://api.open-meteo.com/v1/forecast?latitude=-2.20&longitude=-79.89&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise&timezone=auto';
        fetch( URL )
          .then(response => response.json())
          .then(data => {
            let timezone = data["timezone"]
            let timezoneHTML= document.getElementById("timezone")
            console.log(data);

            plot(data)
          })
          .catch(console.error);
    }
  )();