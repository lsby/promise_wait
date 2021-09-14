import 等待 from '../dist/'

describe('基本测试', function () {
    it('测试1', async function () {
        var a = 1
        setTimeout(() => {
            a = 2
        }, 1000)
        await 等待(() => a == 2)
    })
})
