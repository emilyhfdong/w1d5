var list = [];
var sortingNum = function (numList) {
    return numList.sort((a,b) => a - b)
  }
module.exports = {
  storeNum: function(num) {
    list.push(num);
  },
  returnSortList: function() {
    return sortingNum(list);
  }
}