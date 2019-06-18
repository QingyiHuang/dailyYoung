/**
 * 递归算法实现，15行代码以内
 * 1）生成长度为5的空数组arr
 * 2）生成一个（2-32）之间的随机整数rand
 * 3）把随机数rand插入到数组arr内，如果数组arr内已经存在与
 * rand相同的数字，则重新生成随机数rand并插入到arr内（使用递归实现）
 * 4）最终输入一个长度为5，且内容不重复的数组arr
 */
/**
◎Math.ceil()执行向上舍入，即它总是将数值向上舍入为最接近的整数；
◎Math.floor()执行向下舍入，即它总是将数值向下舍入为最接近的整数；
◎Math.round()执行标准舍入，即它总是将数值四舍五入为最接近的整数(这也是我们在数学课上学到的舍入规则)。
 */
function randomArray(arr, i = 0, min = 2, max = 32){
    const num = Math.max(min, Math.ceil(Math.random() * max))
    if (!arr[arr.length - 1]){//判断数组满否
        if (!arr.includes(num)){
            arr[i++] = num
        }
        return randomArray(arr, i)
    }
}
const arr = new Array(5)
const result = randomArray(arr)