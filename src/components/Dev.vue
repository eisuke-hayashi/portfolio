<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Dev',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Linux','Node','Git','Github','Firebase'],
        datasets: [{
    label: 'devops',
    data: [2, 2, 3, 4, 2],
    backgroundColor: 'RGBA(225,95,150, 0.5)',
    borderColor: 'RGBA(225,95,150, 1)',
    borderWidth: 5,
    pointBackgroundColor: 'RGB(46,106,177)'
  },
          {
            borderWidth: 1
          }
        ]
      },
      options: {
  title: {
    display: true,
  text: 'DevOps'
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
