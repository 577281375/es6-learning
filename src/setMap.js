/*
 * @Author: songxue
 * @Date: 2019-01-25 11:49:46
 * @Last Modified by: songxue
 * @Last Modified time: 2019-01-25 13:06:58
 * @Module Name: Set 和 Map 数据结构
 */
/**
 * set: 不重复的值的集合
 * 操作：add delete has clear
 * 遍历：key value entries forEach
*/
console.log(Set.prototype);

//  去除字符串里面的重复字符 abc
console.log([...new Set('aabbcc')].join(''));

//Set 用于数组 或 伪数组
const s = new Set();
const array = [2, 3, 5, 4, 5, 2, 2];
array.forEach(x => s.add(x));
//  去除重复项 2, 3, 5, 4
console.log(s, 'add');
s.clear();
console.log(s, 'clear');
//如果加入的项是重复的 也会被因为去重 不加入
s.add(1).add(2).add(2);
console.log(s.size);
console.log(s.has(1));
console.log(s.has(2));
console.log(s.has(3));
s.delete(2);
console.log(s.has(2));

//遍历的应用

const arr1 = [1, 2, 3, 4];
const arr2 = [4, 5, 6, 7];
const set1 = new Set(arr1);
const set2 = new Set(arr2);
//交集
const interSection = [...set1].filter(x => set2.has(x));
//并集
const union = [...set1, ...set2];
//差集
const differenceSet = [...set1].filter(x => !set2.has(x));
console.log(
    interSection,
    union,
    differenceSet,
)




