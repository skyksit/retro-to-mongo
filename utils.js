const utils = {
  //특수문자를 제거하는 정규식 함수
  removeSpecialChar: function(str) {
    return str.replace(/[^a-z0-9]/gi, "");
  }
}

module.exports = utils;