<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Backend',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [{
    label: 'back-end',
    data: [],
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
    this.getSkills()
    this.renderChart(this.data, this.options)
  },
  methods: {
    getSkills() {
      const frontSkillInfo = this.$store.getters.getSkills('back-end')
      frontSkillInfo.skills.forEach((skill) => {
      this.data.labels.push(skill.name)
      this.data.datasets[0].data.push(skill.score)
      })
    }
  }
}
</script>
