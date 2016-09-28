/**
 * Created by rt11007 on 2016-09-28.
 */
var countNum = 0

function count() {
    postMessage(countNum)
    countNum++
    setTimeout(count,1000)
}

count()