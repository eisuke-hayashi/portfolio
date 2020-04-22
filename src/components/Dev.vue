<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Dev',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [{
    label: 'devops',
    data: [],
    backgroundColor: 'RGBA(150,0,150, 0.2)',
    borderColor: 'RGBA(150,95,150, 1)',
    borderWidth: 5,
    pointBackgroundColor: 'RGB(46,106,177)'
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
      const frontSkillInfo = this.$store.getters.getSkills('devops')
      frontSkillInfo.skills.forEach((skill) => {
      this.data.labels.push(skill.name)
      this.data.datasets[0].data.push(skill.score)
      })
    }
  }
}
</script>
