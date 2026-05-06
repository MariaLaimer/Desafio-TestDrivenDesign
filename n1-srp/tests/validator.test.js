import { userValidator } from '../src/validador.js';

describe('UserValidator (Initial State)', () => {
  test('deve validar um usuário correto', () => {
    const user = { email: 'test@atitus.edu.br', password: 'password123', age: 20 };
    expect(userValidator(user)).toBe(true);
  });
});

