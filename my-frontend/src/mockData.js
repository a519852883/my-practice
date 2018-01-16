var Mock = require('mockjs')
Mock.mock('/aaa', 'get', function (options) {
  return '123'
})

Mock.mock('/login', 'post', function () {
  return {
    result: true
  };
})
