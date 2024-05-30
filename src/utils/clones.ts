import { cloneDeep } from 'lodash'

export const user = {
  name: 'John',
  birthDate: new Date('1980-01-01 00:00:00'),
  isDeveloper: true,
  sayHi: function () {
    console.log(`Hi, my name is ${this.name}`)
  },
  stack: ['js', 'ts', 'react', 'redux', 'nextjs']
}

// export const copyUser = JSON.parse(JSON.stringify(user))
// export const copyUser = structuredClone(user)
// export const copyUser = {...user}
// export const copyUser = Object.assign({}, user)

export const copyUser = cloneDeep(user)
