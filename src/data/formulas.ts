import type { FormulaSection } from './types'

export const formulaSections: FormulaSection[] = [
  {
    title: 'Áreas e perímetros',
    items: [
      'Quadrado: A = l² e P = 4l.',
      'Retângulo: A = b · h e P = 2(b + h).',
      'Triângulo: A = (b · h)/2.',
      'Paralelogramo: A = b · h.',
      'Trapézio: A = (B + b) · h / 2.',
      'Círculo: A = πr² e comprimento da circunferência C = 2πr.',
      'Macete: área mede a parte de dentro; perímetro é a volta. Área usa unidade ao quadrado (cm²); perímetro usa unidade simples (cm).',
    ],
  },
  {
    title: 'Função quadrática',
    items: [
      'Para f(x) = ax² + bx + c, com a ≠ 0:',
      'Discriminante: Δ = b² − 4ac.',
      'Raízes: x = (−b ± √Δ)/(2a).',
      'Eixo de simetria: xv = −b/(2a).',
      'Vértice: yv = −Δ/(4a).',
      'Se a > 0, a parábola abre para cima e tem mínimo. Se a < 0, abre para baixo e tem máximo.',
      'Macete: “delta separa, Bhaskara resolve; a diz para onde a parábola se move”.',
    ],
  },
  {
    title: 'Fatoração',
    items: [
      'Fator comum: ax + ay = a(x + y).',
      'Agrupamento: ax + ay + bx + by = (a + b)(x + y).',
      'Diferença de quadrados: a² − b² = (a − b)(a + b).',
      'Trinômio quadrado perfeito: a² + 2ab + b² = (a + b)² e a² − 2ab + b² = (a − b)².',
      'Macete: antes de tentar uma técnica complicada, procure primeiro o fator comum.',
    ],
  },
  {
    title: 'Divisores, múltiplos e paridade',
    items: [
      'Divisor de n é o número que divide n sem deixar resto.',
      'Múltiplo de n é o resultado de n · k, com k inteiro.',
      'Número par termina em 0, 2, 4, 6 ou 8.',
      'Número ímpar termina em 1, 3, 5, 7 ou 9.',
      'Produto é par quando pelo menos um fator é par. Produto só é ímpar quando todos os fatores são ímpares.',
      'Macete: para listar múltiplos, vá somando o número-base; para testar divisores, procure pares de fatores.',
    ],
  },
  {
    title: 'Regra de três, porcentagem e juros',
    items: [
      'Regra de três direta: se uma grandeza aumenta e a outra também aumenta (ou ambas diminuem), são diretamente proporcionais.',
      'Porcentagem: p% = p/100.',
      'Aumento de p%: valor final = valor inicial · (1 + p/100).',
      'Desconto de p%: valor final = valor inicial · (1 − p/100).',
      'Juros simples: J = C · i · t e M = C + J.',
      'Macete: transforme primeiro a porcentagem em decimal: 8% = 0,08; 25% = 0,25.',
    ],
  },
  {
    title: 'Medidas e volume',
    items: [
      '1 m = 100 cm; 1 kg = 1.000 g; 1 L = 1.000 mL.',
      '1 m² = 10.000 cm²; ao converter área, o fator também fica ao quadrado.',
      'Paralelepípedo: V = comprimento · largura · altura.',
      'Macete: antes de calcular, deixe todas as medidas na mesma unidade.',
    ],
  },
]
