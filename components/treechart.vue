<template lang='html'>
    <div class='tree-chart'></div>
</template>

<script>
import makeTree from '~/components/treecharts'

export default {
  name: 'tree-chart',
  props: [
    'chartData',
    'city'
  ],
  mounted () {
    this.modifyData(this.chartData)
    makeTree(this.hireData)
  },
  data () {
    return {
      legalPositions: ['Associate General Counsel'],
      marketingSalesPositions: ['Communications Manager', 'Graphic Designer', 'Closer I', 'Customer Service Rep', 'Processor I', 'QC Underwriter', 'Sales Admin', 'Underwriter I', 'Underwriter III'],
      hrPositions: ['Payroll Manager', 'Recruiter'],
      itPositions: ['Network Administrator'],
      compliancePositions: ['Compliance Analyst'],
      execPositons: ['Chief Information Officer'],
      biPositions: ['Business Intel Sr Analyst', 'Collateral Analyst', 'Lock Desk Analyst', 'Real Estate Analyst'],
      executiveChildren: [],
      legalChildren: [],
      biChildren: [],
      marketingChildren: [],
      itChildren: [],
      hrChildren: [],
      complianceChildren: [],
      generalChildren: []
    }
  },
  computed: {
    hireData () {
      let obj = {
        'name': this.city,
        'children': [
          {
            'name': 'Executive',
            'children': this.executiveChildren
          },
          {
            'name': 'Legal',
            'children': this.legalChildren
          },
          {
            'name': 'Business Intelligence',
            'children': this.biChildren
          },
          {
            'name': 'Marketing & Sales',
            'children': this.marketingChildren
          },
          {
            'name': 'IT',
            'children': this.itChildren
          },
          {
            'name': 'HR',
            'children': this.hrChildren
          },
          {
            'name': 'Compliance',
            'children': this.complianceChildren
          },
          {
            'name': 'General',
            'children': this.generalChildren
          }
        ]
      }
      return obj
    }
  },
  methods: {
    modifyData (chartData) {
      let arr = chartData.map(obj => {
        let newObj = {
          'name': obj.EENAME,
          'position': obj.Position,
          'dateHired': obj.HireDate,
          'department': this.findDepartment(obj.Position)
        }
        return newObj
      })

      this.setHires(arr)
    },
    findDepartment (position) {
      // Check each array to see if the position exists, if it doesn't return General
      if (position) {
        return this.legalPositions.includes(position) ? 'Legal'
          : this.marketingSalesPositions.includes(position) ? 'Marketing & Sales'
            : this.hrPositions.includes(position) ? 'HR'
              : this.itPositions.includes(position) ? 'IT'
                : this.compliancePositions.includes(position) ? 'Compliance'
                  : this.execPositons.includes(position) ? 'Executive'
                    : this.biPositions.includes(position) ? 'Business Intelligence'
                      : 'General'
      }
    },
    setHires (hires) {
      hires.forEach(obj => {
        switch (obj.department) {
          case 'Marketing & Sales':
            this.marketingChildren.push(obj)
            break
          case 'IT':
            this.itChildren.push(obj)
            break
          case 'HR':
            this.hrChildren.push(obj)
            break
          case 'Business Intelligence':
            this.biChildren.push(obj)
            break
          case 'Compliance':
            this.complianceChildren.push(obj)
            break
          case 'General':
            this.generalChildren.push(obj)
            break
          case 'Executive':
            this.executiveChildren.push(obj)
            break
          case 'Legal':
            this.legalChildren.push(obj)
            break
        }
      })
      console.log(this.executiveChildren)
    }
  }
}
</script>

<style lang='scss'>
.tree-chart {
  width: 80%;
  margin: 0 auto;
}

.node circle {
  fill: #fff;
  stroke: #540719;
  stroke-width: 5px;
}

.node text {
  font: 12px sans-serif;
  color: #fff !important;
}

.link {
  fill: none;
  stroke: #540719;
  stroke-width: 5px;
}

</style>
