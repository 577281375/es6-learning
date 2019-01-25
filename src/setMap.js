/*
 * @Author: songxue
 * @Date: 2019-01-25 11:49:46
 * @Last Modified by: songxue
 * @Last Modified time: 2019-01-25 14:46:11
 * @Module Name: Set 和 Map 数据结构
 */
/**
 * set: 不重复的值的集合 size
 * 操作：add delete has clear
 * 遍历：key value entries forEach
 *
 * map: key 可以是 variable(变量) 的 键值对 size
 * 操作: get set delete has clear
 * 遍历: keys values  entries forEach
*/

import { log } from './utils/index';
/**

log('prototype', Set.prototype)

log('去除字符串里面的重复字符 abc', [...new Set('aabbcc')].join(''));
const s = new Set();
const array = [2, 3, 5, 4, 5, 2, 2];
array.forEach(x => s.add(x));
//  去除重复项 2, 3, 5, 4
log('set.add', s);
s.clear();
log('set.clear', s);

log('Set 用于数组 或 伪数组', array);
const array2 = new Set([{ a: 'a' }, { a: 'a' }]);
log('同一个引用地址 也会被去重', array2);
const aaa = { a: 'a' };
const array3 = new Set([aaa, aaa]);
log('同一个引用地址 也会被去重', array3);

s.add(1).add(2).add(2);
console.warn('如果加入的项是重复的 也会被因为去重 不加入')
console.log(s.size);
console.log(s.has(1));
console.log(s.has(2));
console.log(s.has(3));
s.delete(2);
console.log(s.has(2));


console.warn('')
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
log('遍历的应用', (interSection,
    union,
    differenceSet));
*/

console.warn(Map.prototype)
//get key时候 key的引用地址不一样 value是不一样的
const m = new Map();
const o = ['a'];
m.set(o, 555);
console.log(m.get(o), 'm.get(o)');
const map = new Map();
map.set(['a'], 555);
console.log(map.get(['a']), "map.get(['a'])");
//如果对同一个键多次赋值，后面的值将覆盖前面的值
const c = new Map();




