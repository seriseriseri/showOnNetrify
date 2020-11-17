// 2020.11.09 matsuda 作成

module.exports = function(content, map, meta) {

  this.cacheable(false);

  const fs = require('fs');
  const path = require('path');

  let imports = [];
  let locales = [];
  let objects = [];

  let dir = './src/messages/';
  let files = fs.readdirSync(dir);

  files.forEach(file => {
    if (fs.statSync(path.join(dir, file)).isFile() && /^.+\..+\.js$/.test(file)) {
      let spl = file.split(".");
      imports.push(`import ${spl[0]}_${spl[1]} from "../../src/messages/${file}";`);
      if (!locales.includes(spl[1])) {
        locales.push(spl[1]);
      }
      objects.push(`obj.${spl[1]}.${spl[0]} = ${spl[0]}_${spl[1]};`);
    }
  });

  let ret = [];
  imports.forEach(item => {
    ret.push(item);
  });
  ret.push(`let obj = {};`);
  locales.forEach(item => {
    ret.push(`obj.${item} = {};`);
  });
  objects.forEach(item => {
    ret.push(item);
  });
  ret.push(`export default obj;`);
  return ret.join("\n");

};

//    import sample1_en from "../../src/messages/sample1.en.js"
//    import sample1_ja from "../../src/messages/sample1.ja.js"
//    import sample2_en from "../../src/messages/sample2.en.js"
//    import sample2_ja from "../../src/messages/sample2.ja.js"
//    
//    let obj = {};
//
//    obj.en = {};
//    obj.ja = {};
//    
//    obj.en.sample1 = sample1_en;
//    obj.ja.sample1 = sample1_ja;
//    obj.en.sample2 = sample2_en;
//    obj.ja.sample2 = sample2_ja;
//
//    export default obj;

// ↓に直す

//    import en_sample1 from "../../src/messages/en/sample1.js"
//    import ja_sample1 from "../../src/messages/ja/sample1.js"
//    import en_sample2 from "../../src/messages/en/sample2.js"
//    import ja_sample2 from "../../src/messages/ja/sample2.js"
//    
//    let obj = {};
//
//    obj.en = {};
//    obj.ja = {};
//    
//    obj.en.sample1 = en_sample1;
//    obj.ja.sample1 = ja_sample1;
//    obj.en.sample2 = en_sample2;
//    obj.ja.sample2 = ja_sample2;
//
//    export default obj;



