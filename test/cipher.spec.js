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
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect( cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33)).toBe("HIJKLMNOPQRSTUVWXYZABCDEFG");
      //escribe aquí tus test
    });
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
    //   expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    // });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    //
    // it('debería retornar " !@" para " !@"', () => {
    //   expect(cipher.encode(33, ' !@')).toBe(' !@');
    // });
  });
  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.decode).toBe('function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG""ABCDEFGHIJKLMNOPQRSTUVWXYZ" para  con offset 33', () => {
      expect( cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33, "holi")).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    //
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    //
    // it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
    //   expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
    // });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    //
    // it('debería retornar " !@" para " !@"', () => {
    //   expect(cipher.decode(33, ' !@')).toBe(' !@');
    // });
  });
});
