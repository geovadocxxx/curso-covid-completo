Highcharts.chart('container', {
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45
    }
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  plotOptions: {
    pie: {
      innerSize: 100,
      depth: 45
    }
  },
  series: [{
    name: 'Porcentaje',
    data: [
      ['Examen final', 40],
      ['Examen por módulo', 30],
      ['Navegación del curso', 30],

    ]
  }]
});