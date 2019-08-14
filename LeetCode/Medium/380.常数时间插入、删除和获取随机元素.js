/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] 常数时间插入、删除和获取随机元素
 */
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.map1 = new Map();
    this.map2 = new Map();
    this.size = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map1.has(val)){
        return false;
    }else {
        this.map1.set(val, this.size);
        this.map2.set(this.size, val);
        this.size += 1;
        return true;
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.size == 0) return false;
    if(this.map1.has(val)){
        let index = this.map1.get(val);
        let last = this.map2.get(this.size -1 );
        this.map1.set(last, index);
        this.map2.set(index, last);
        this.map1.delete(val);
        this.map2.delete(this.size -1);
        this.size -= 1;
        return true;
    }else {
        return false;
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let index = Math.floor(Math.random() * this.size);
    return this.map2.get(index);
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

