/**
 * substring(index1, index2) 截取str下标从index1 到index2的内容
 * str.lastIndexOf(target) 最后一个target的下标值
 */
let delLast = (str,del) => {
    if(typeof str !== 'string'){
        console.log('请确认要删除的对象为字符串')
        return false
    }else {
        let index = str.lastIndexOf(del)
        return str.substring(0, index) + str.substring(index + 1, str.length)
    }
}
/**
 * split() 按括号内的内容进行字符串分割，
 * reverse() 直接在原数组上颠倒元素顺序
 * join() 
 * replace()
 * split()
 */
function delLast(str, target) {
    return str.split('').reverse().join('').replace(target, '').split('').reverse().join('');
}

const str = delLast('asdfghhj', 'h')
console.log(str) // asdfghj 