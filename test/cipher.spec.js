global.window = global;
require('../src/cipher');

describe('cipher', () => {
  it('debería ser un object', () => {
    expect(typeof cipher).toBe('object');
  });
  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.encode).toBe('function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      //escribe aquí tus test
    });
  })
  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.decode).toBe('function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
     //escribe aquí tus test
    });  
  });
});
