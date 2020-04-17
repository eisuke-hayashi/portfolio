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
    data: [3, 4, 2, 1, 3],
    backgroundColor: 'RGBA(225,0,0, 0.5)',
    borderColor: 'RGBA(225,95,150, 1)',
    borderWidth: 5,
    pointBackgroundColor: 'RGB(100,0,0)'
  },
        ]
      },
      options: {
  scale:{
    ticks:{
      suggestedMax: 5,
      suggestedMin: 0,
      stepSize: 1,
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
