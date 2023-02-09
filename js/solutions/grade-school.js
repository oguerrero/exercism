class GradeSchool {
  constructor() {
    this.rosterList = {}
  }
  roster() {
    return Object.keys(this.rosterList)
      .sort()
      .reduce((obj, key) => {
        obj[key] = Object.values(this.rosterList[key]).sort()
        return obj
      }, {})
  }

  add(name, grade) {
    if (!this.rosterList[grade]) this.rosterList[grade] = [name]
    else this.rosterList[grade] = [...this.rosterList[grade], name]
  }

  grade(grade) {
    if (!this.rosterList[grade]) return []
    return Object.values(this.rosterList[grade]).sort()
  }
}

let school = new GradeSchool()

school.add('James', 2)
school.add('Blair', 2)
school.add('Paul', 2)
school.add('Franklin', 5)
school.add('Bradley', 5)
school.add('Jeff', 1)
// const expectedDb = { 2: ['Blair', 'James', 'Paul'] }

console.log(school.rosterList)
console.log(school.grade(5))
console.log(school.grade(756))
