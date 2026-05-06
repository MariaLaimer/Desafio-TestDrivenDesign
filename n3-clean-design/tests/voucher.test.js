import { calcularDesconto } from '../src/calculadoraVoucher.js';

describe('VoucherCalculator (RED State)', () => {
  test('não deve aplicar desconto para voucher inválido', () => {
    expect(calcularDesconto('NATAL10', 100)).toBe(100);
  });
});

describe('VoucherCalculator (GREEN State -> REFACTOR)', () => {
test('deve aplicar 10% para o voucher DEZ', () => {
    expect(calcularDesconto('DEZ', 700)).toBe(630);
  });

  test('deve aplicar 30% para o voucher TRINTA', () => {
    expect(calcularDesconto('TRINTA', 100)).toBe(70);
  });
});
