export async function 等待(条件: () => boolean, 超时时间: number = 5000, 轮询时间: number = 100) {
    if (轮询时间 == 0) 轮询时间 = 1
    return new Promise((res, rej) => {
        var 计数器 = 0
        function f() {
            计数器++
            if (超时时间 != 0 && 计数器 * 轮询时间 >= 超时时间) return rej('等待超时')
            if (条件()) return res(null)
            setTimeout(f, 轮询时间)
        }
        f()
    })
}
export async function 睡眠(时间: number) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            res(null)
        }, 时间)
    })
}
