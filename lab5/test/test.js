var assert = require('assert');
let kmp = require('../src/kmp')
//const kmp = require('../scripts');   // require strReverse.js script
describe('Алгоритм Кнута-Морриса-Пратта.', function() {
  describe('Поиск подстроки в строке', function() {
    it('Возвращает -1, если данной подстроки в строке нет', function(){
      assert.equal(-1, kmp("qwerty","eee")[0]);
      });
      it('Возвращает индекс вхождения подстроки', function(){
        assert.equal(1, kmp("qwerty","w")[0]);
    });
      it('Возвращает индексы,если вхождений несколько', function(){
      assert.equal(1, kmp("qwerwy","w")[0][0]);
      assert.equal(4, kmp("qwerwy","w")[0][1]);
  });
  it('Возвращает -1, если строки пустые', function(){
  assert.equal(-1, kmp("","")[0]);
});
  });

  describe('Поиск циклического сдвига в строке', function() {
    it('Возвращает -1, если строка не является циклическим сдвигом', function(){
      assert.equal(-1, kmp("wertyq","qwerta")[1]);
      });
      it('Возвращает индекс начала сдвига', function(){
        assert.equal(5, kmp("wertyq","qwerty")[1]);
        assert.equal(2, kmp("fgqwertyasd","qwertyasdfg")[1]);
        assert.equal(1, kmp("81234567","12345678")[1]);
    });
      it('Возвращает 0, если строки идентичны', function(){
      assert.equal(0, kmp("qwerwy","qwerwy")[1]);
  });
  it('Возвращает 0, если строки пустые', function(){
  assert.equal(0, kmp("","")[1]);
});
  });
});
