<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Frontend',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['HTML','CSS','Javascript','SCSS','Vue'],
        datasets: [{
    label: 'front-end',
    data: [1, 1, 1, 1, 2],
    backgroundColor: 'RGBA(225,95,150, 0.5)',
    borderColor: 'RGBA(225,95,150, 1)',
    borderWidth: 5,
    pointBackgroundColor: 'RGB(100,0,0)'
  },
          {
            borderWidth: 1
          }
        ]
      },
      options: {
  title: {
    display: true,
  text: 'Front-end'
  },
  scale:{
    ticks:{
      suggestedMax: 5,
      suggestedMin: 0,
      stepSize: 5,
      callback: function(value){
        return  value +  '点'
      }
    }
  }
}
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
