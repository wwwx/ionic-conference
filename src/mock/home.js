import Mock from 'mockjs'
import dayjs from 'dayjs'

Mock.setup({ timeout: 300 })

function getQueryJson(url) {
    const result = {}
    const search = url.split('?')[1]
     search.split('&').map(v => {
        const o = v.split('=')
        result[o[0]] = o[1]
        return null
    })
    return result
}

Mock.mock(new RegExp('/api/test.*'), 'get', function(options) {
    // console.log(options)

    return [
        {author: 'Tom and Jerry.'}
    ]
})

/**
 * 获取我的信息
 * 
 * 会议邀请数，带发布纪要数，最新消息数目 ...
 * 
 */
Mock.mock('/api/profile', 'get', function() {
    return {
        inviteNum: 23,
        summaryDraftNum: 9,
        messageNum: 8,
        staff: '黄小明',
        department: '品牌与市场发展中心',
        avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    }
})



/**
 * 根据日期, 获取我当天所有的日程会议
 *
 */
Mock.mock(new RegExp('/api/my-schedule.*'), 'get', function(options) {
    const params = getQueryJson(options.url)
    console.log('fetch: ',options.url)

    const DATE_FORMAT = 'YYYY/MM/DD'
    if (dayjs(+params.date).format(DATE_FORMAT) === dayjs().format(DATE_FORMAT)) {

        return [
            { status: 1, type: '【会议】', content: '管理沟通 Quick talk' },
            { status: 2, type: '【会议】', content: '管理沟通 Quick talk'  },
            { status: 3, type: '【会议】', content: '管理沟通 Quick talk'  },
            { status: 3, type: '【会议】', content: '管理沟通 Quick talk'  },
            { status: 3, type: '【会议】', content: '管理沟通 Quick talk'  },
        ]
    }

    return null
    
})
