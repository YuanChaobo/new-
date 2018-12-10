function util(){
  console.log('被调用模块');
}
module.exports.util = util();