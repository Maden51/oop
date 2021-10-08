/* eslint-disable no-new */
import Character from '../Character';

test('should throw error for name less than 2 symbols', () => {
  expect(() => { new Character('y', 'Bowman'); }).toThrow('Имя должно быть от 2 до 10 символов');
});

test('should throw error for unknown type', () => {
  expect(() => { new Character('Oleg', 'someone'); }).toThrow('неверный класс');
});
