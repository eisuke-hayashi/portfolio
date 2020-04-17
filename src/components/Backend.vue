<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Backend',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Java','Ruby','RubyOnRails','MySQL'],
        datasets: [{
    label: 'back-end',
    data: [2, 4, 2, 1],
    backgroundColor: 'RGBA(0,100,0, 0.2)',
    borderColor: 'RGBA(0,95,0, 1)',
    borderWidth: 5,
    pointBackgroundColor: 'RGB(0,200,0)'
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
