<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Frontend',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [{
    label: 'front-end',
    data: [],
    backgroundColor: 'RGBA(100,20,0, 0.3)',
    borderColor: 'RGBA(225,95,150, 1)',
    borderWidth: 5,
    pointBackgroundColor: 'RGB(100,20,0)'
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
    this.getSkills()
    this.renderChart(this.data, this.options)
  },
  methods: {
    getSkills() {
      const frontSkillInfo = this.$store.getters.getSkills('front-end')
      /* eslint-disable no-debugger */
      debugger
      frontSkillInfo.skills.forEach((skill) => {
      this.data.labels.push(skill.name)
      this.data.datasets[0].data.push(skill.score)
      })
    }
  }
}
</script>
