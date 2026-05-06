const CUPONS = [
  {
    cupom: (c,v) => c === 'DEZ',
    desconto: v => v * 0.90,
  },
  {
    cupom: (c,v) => c === 'TRINTA',
    desconto: v => v * 0.70,
  },
];

export function calcularDesconto(codigo, valor) {
  const cupom = CUPONS.find(c => c.cupom(codigo, valor));
  return cupom ? cupom.desconto(valor) : valor;
}
