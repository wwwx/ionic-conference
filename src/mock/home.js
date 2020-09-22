import Mock from 'mockjs'

Mock.setup({ timeout: 1e3 })

Mock.mock('/api/test', 'get', function(options) {
    // console.log(options)
    
    return [
        {author: 'Tom and Jerry.'}
    ]
})
