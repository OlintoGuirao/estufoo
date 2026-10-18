import type { Question } from './types'

export const questions: Question[] = [
  {
    id: 1,
    block: 'A',
    statement: "Um terreno retangular mede 18 m de comprimento e 12 m de largura. A área e o perímetro desse terreno são, respectivamente:",
    options: {
      A: "30 m² e 60 m",
      B: "216 m² e 60 m",
      C: "216 m² e 30 m",
      D: "360 m² e 216 m",
      E: "432 m² e 60 m"
    },
    correct: 'B',
    explanation: [
      "Retângulo: área A = b · h e perímetro P = 2(b + h).",
      "Área: 18 · 12 = 216 m².",
      "Perímetro: 2(18 + 12) = 2 · 30 = 60 m.",
      "Junte os dois resultados na ordem pedida: área e depois perímetro."
    ],
  },
  {
    id: 2,
    block: 'A',
    statement: "Uma praça quadrada possui lado de 14 m. Para cercá-la completamente, serão necessários:",
    options: {
      A: "28 m de cerca",
      B: "56 m de cerca",
      C: "196 m de cerca",
      D: "784 m de cerca",
      E: "42 m de cerca"
    },
    correct: 'B',
    explanation: [
      "Cercar pede o perímetro (volta em volta), não a área.",
      "Quadrado: P = 4l = 4 · 14 = 56 m.",
      "14² = 196 seria a área em m², unidade inadequada para comprimento de cerca."
    ],
  },
  {
    id: 3,
    block: 'A',
    statement: "Uma sala retangular tem área de 84 m² e comprimento de 12 m. Sua largura mede:",
    options: {
      A: "6 m",
      B: "7 m",
      C: "8 m",
      D: "9 m",
      E: "10 m"
    },
    correct: 'B',
    explanation: [
      "A = comprimento · largura ⇒ 84 = 12 · largura.",
      "largura = 84 ÷ 12 = 7 m."
    ],
  },
  {
    id: 4,
    block: 'A',
    statement: "A área de um triângulo com base de 16 cm e altura de 9 cm é:",
    options: {
      A: "36 cm²",
      B: "54 cm²",
      C: "72 cm²",
      D: "144 cm²",
      E: "288 cm²"
    },
    correct: 'C',
    explanation: [
      "Triângulo: A = (b · h)/2.",
      "A = (16 · 9)/2 = 144/2 = 72 cm².",
      "Não esqueça de dividir por 2."
    ],
  },
  {
    id: 5,
    block: 'A',
    statement: "Um paralelogramo tem base de 15 cm e altura de 8 cm. Sua área é:",
    options: {
      A: "23 cm²",
      B: "46 cm²",
      C: "60 cm²",
      D: "120 cm²",
      E: "240 cm²"
    },
    correct: 'D',
    explanation: [
      "Paralelogramo: A = b · h.",
      "A = 15 · 8 = 120 cm²."
    ],
  },
  {
    id: 6,
    block: 'A',
    statement: "Considere π = 3. A área de um círculo de raio 5 cm é:",
    options: {
      A: "15 cm²",
      B: "30 cm²",
      C: "60 cm²",
      D: "75 cm²",
      E: "150 cm²"
    },
    correct: 'D',
    explanation: [
      "Área do círculo: A = πr².",
      "Com π = 3 e r = 5: A = 3 · 25 = 75 cm².",
      "2πr mede o comprimento da circunferência, não a área."
    ],
  },
  {
    id: 7,
    block: 'A',
    statement: "Um retângulo tem perímetro igual a 50 cm e comprimento de 15 cm. A largura mede:",
    options: {
      A: "5 cm",
      B: "10 cm",
      C: "15 cm",
      D: "20 cm",
      E: "25 cm"
    },
    correct: 'B',
    explanation: [
      "P = 2(b + h) = 50 ⇒ b + h = 25.",
      "Com b = 15: 15 + h = 25 ⇒ h = 10 cm."
    ],
  },
  {
    id: 8,
    block: 'A',
    statement: "Um trapézio tem bases de 10 cm e 18 cm e altura de 6 cm. A área é:",
    options: {
      A: "28 cm²",
      B: "42 cm²",
      C: "56 cm²",
      D: "84 cm²",
      E: "108 cm²"
    },
    correct: 'D',
    explanation: [
      "Trapézio: A = (B + b) · h / 2.",
      "A = (18 + 10) · 6 / 2 = 28 · 6 / 2 = 84 cm²."
    ],
  },
  {
    id: 9,
    block: 'A',
    statement: "Um piso retangular mede 4 m por 3 m. Cada caixa de revestimento cobre 2 m². Desconsiderando perdas, o número mínimo de caixas é:",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "8",
      E: "12"
    },
    correct: 'C',
    explanation: [
      "Área do piso: 4 · 3 = 12 m².",
      "Número de caixas = área total ÷ cobertura por caixa = 12 ÷ 2 = 6."
    ],
  },
  {
    id: 10,
    block: 'A',
    statement: "Uma circunferência tem diâmetro de 20 cm. Considerando π = 3, seu comprimento é:",
    options: {
      A: "30 cm",
      B: "40 cm",
      C: "60 cm",
      D: "120 cm",
      E: "240 cm"
    },
    correct: 'C',
    explanation: [
      "Raio = diâmetro/2 = 10 cm.",
      "Comprimento C = 2πr = 2 · 3 · 10 = 60 cm.",
      "Equivalente: C = π · d = 3 · 20 = 60 cm."
    ],
  },
  {
    id: 11,
    block: 'B',
    statement: "As raízes de f(x) = x² − 5x + 6 são:",
    options: {
      A: "1 e 6",
      B: "2 e 3",
      C: "−2 e −3",
      D: "0 e 6",
      E: "5 e 6"
    },
    correct: 'B',
    explanation: [
      "Procure dois números cuja soma seja 5 e o produto seja 6: 2 e 3.",
      "Fatore: (x − 2)(x − 3) = 0 ⇒ x = 2 ou x = 3.",
      "Pelo discriminante: Δ = 25 − 24 = 1; x = (5 ± 1)/2."
    ],
  },
  {
    id: 12,
    block: 'B',
    statement: "O discriminante de 2x² − 4x + 1 é:",
    options: {
      A: "4",
      B: "8",
      C: "12",
      D: "16",
      E: "24"
    },
    correct: 'A',
    explanation: [
      "Identifique a = 2, b = −4 e c = 1 na equação 2x² − 4x + 1.",
      "Aplique Δ = b² − 4ac.",
      "Calcule b² = 16 e 4ac = 8.",
      "Subtraia: Δ = 16 − 8. Esse resultado é o discriminante."
    ],
  },
  {
    id: 13,
    block: 'B',
    statement: "A função f(x) = −x² + 4x + 5 possui valor máximo igual a:",
    options: {
      A: "5",
      B: "7",
      C: "8",
      D: "9",
      E: "10"
    },
    correct: 'D',
    explanation: [
      "Como a = −1 < 0, a parábola tem máximo no vértice.",
      "xv = −b/(2a) = −4/(2·(−1)) = 2.",
      "yv = f(2) = −(2)² + 4·2 + 5 = −4 + 8 + 5 = 9.",
      "Ou yv = −Δ/(4a): Δ = 16 + 20 = 36; yv = −36/(4·(−1)) = 9."
    ],
  },
  {
    id: 14,
    block: 'B',
    statement: "O eixo de simetria de f(x) = x² − 8x + 3 é a reta:",
    options: {
      A: "x = −8",
      B: "x = −4",
      C: "x = 3",
      D: "x = 4",
      E: "x = 8"
    },
    correct: 'D',
    explanation: [
      "Eixo de simetria: xv = −b/(2a).",
      "a = 1, b = −8 ⇒ xv = −(−8)/(2·1) = 8/2 = 4.",
      "A reta é x = 4."
    ],
  },
  {
    id: 15,
    block: 'B',
    statement: "Para a função f(x) = 3x² − 12x + 7, o valor de x no vértice é:",
    options: {
      A: "−4",
      B: "−2",
      C: "2",
      D: "4",
      E: "12"
    },
    correct: 'C',
    explanation: [
      "xv = −b/(2a).",
      "a = 3, b = −12 ⇒ xv = −(−12)/(2·3) = 12/6 = 2."
    ],
  },
  {
    id: 16,
    block: 'B',
    statement: "A equação x² + 4x + 4 = 0 possui:",
    options: {
      A: "duas raízes reais distintas",
      B: "duas raízes complexas não reais",
      C: "uma raiz real dupla",
      D: "nenhuma raiz",
      E: "três raízes reais"
    },
    correct: 'C',
    explanation: [
      "Δ = 16 − 16 = 0.",
      "Δ = 0 indica uma raiz real dupla (repetida).",
      "De fato (x + 2)² = 0 ⇒ x = −2 (raiz dupla)."
    ],
  },
  {
    id: 17,
    block: 'B',
    statement: "Se f(x) = x² − 9, então f(4) é:",
    options: {
      A: "5",
      B: "7",
      C: "9",
      D: "16",
      E: "25"
    },
    correct: 'B',
    explanation: [
      "Substitua x = 4 na função.",
      "f(4) = 4² − 9 = 16 − 9 = 7."
    ],
  },
  {
    id: 18,
    block: 'B',
    statement: "A parábola de f(x) = −2x² + 3x − 1 tem concavidade:",
    options: {
      A: "para cima, pois b é positivo",
      B: "para baixo, pois a é negativo",
      C: "para cima, pois c é negativo",
      D: "para baixo, pois b é positivo",
      E: "indefinida"
    },
    correct: 'B',
    explanation: [
      "O sinal de a determina a concavidade.",
      "Aqui a = −2 < 0 ⇒ parábola abre para baixo.",
      "Os coeficientes b e c não definem a abertura."
    ],
  },
  {
    id: 19,
    block: 'B',
    statement: "As raízes de x² − 7x + 10 = 0 têm soma e produto, respectivamente:",
    options: {
      A: "7 e 10",
      B: "−7 e 10",
      C: "7 e −10",
      D: "10 e 7",
      E: "−10 e −7"
    },
    correct: 'A',
    explanation: [
      "Para x² + bx + c = 0 (ou ax² + bx + c = 0 com a = 1): soma = −b/a e produto = c/a.",
      "Aqui a = 1, b = −7, c = 10.",
      "Soma = −(−7)/1 = 7; produto = 10/1 = 10.",
      "Confira: 2 + 5 = 7 e 2 · 5 = 10."
    ],
  },
  {
    id: 20,
    block: 'B',
    statement: "O valor mínimo de f(x) = x² − 6x + 11 é:",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
      E: "11"
    },
    correct: 'B',
    explanation: [
      "Como a = 1 > 0, há mínimo no vértice.",
      "xv = −(−6)/(2·1) = 3.",
      "yv = f(3) = 9 − 18 + 11 = 2.",
      "Ou yv = −Δ/(4a): Δ = 36 − 44 = −8; yv = −(−8)/4 = 2."
    ],
  },
  {
    id: 21,
    block: 'C',
    statement: "A fatoração de 6x + 12 é:",
    options: {
      A: "6(x + 2)",
      B: "6(x + 12)",
      C: "12(x + 6)",
      D: "x(6 + 12)",
      E: "2(3x + 12)"
    },
    correct: 'A',
    explanation: [
      "Procure o fator comum de 6x e 12: o MDC é 6.",
      "6x + 12 = 6(x + 2).",
      "Confira distribuindo: 6 · x + 6 · 2 = 6x + 12."
    ],
  },
  {
    id: 22,
    block: 'C',
    statement: "A expressão x² − 25 pode ser fatorada como:",
    options: {
      A: "(x − 5)²",
      B: "(x + 5)²",
      C: "(x − 25)(x + 1)",
      D: "(x − 5)(x + 5)",
      E: "x(x − 25)"
    },
    correct: 'D',
    explanation: [
      "Diferença de quadrados: a² − b² = (a − b)(a + b).",
      "x² − 25 = x² − 5² = (x − 5)(x + 5)."
    ],
  },
  {
    id: 23,
    block: 'C',
    statement: "A fatoração de x² + 10x + 25 é:",
    options: {
      A: "(x + 5)²",
      B: "(x − 5)²",
      C: "(x + 10)(x + 25)",
      D: "x(x + 35)",
      E: "(x − 25)(x + 1)"
    },
    correct: 'A',
    explanation: [
      "Trinômio quadrado perfeito: a² + 2ab + b² = (a + b)².",
      "x² + 10x + 25 = x² + 2·x·5 + 5² = (x + 5)²."
    ],
  },
  {
    id: 24,
    block: 'C',
    statement: "A forma fatorada de x² − 12x + 36 é:",
    options: {
      A: "(x + 6)²",
      B: "(x − 6)²",
      C: "(x − 12)(x + 36)",
      D: "x(x − 48)",
      E: "(x − 3)(x − 12)"
    },
    correct: 'B',
    explanation: [
      "a² − 2ab + b² = (a − b)².",
      "x² − 12x + 36 = x² − 2·x·6 + 6² = (x − 6)²."
    ],
  },
  {
    id: 25,
    block: 'C',
    statement: "Fatorando por agrupamento ax + ay + bx + by, obtém-se:",
    options: {
      A: "(a + b)(x + y)",
      B: "(a − b)(x − y)",
      C: "ab(x + y)",
      D: "(a + x)(b + y)",
      E: "a(x + b) + y"
    },
    correct: 'A',
    explanation: [
      "Agrupe: (ax + ay) + (bx + by).",
      "Fatore cada par: a(x + y) + b(x + y).",
      "Fator comum (x + y): (a + b)(x + y)."
    ],
  },
  {
    id: 26,
    block: 'C',
    statement: "A fatoração completa de 3x² + 6x é:",
    options: {
      A: "3x(x + 2)",
      B: "3(x² + 6x)",
      C: "x(3x + 6x)",
      D: "6x(x + 3)",
      E: "3x²(1 + 2)"
    },
    correct: 'A',
    explanation: [
      "Fator comum de 3x² e 6x: 3x.",
      "3x² + 6x = 3x(x + 2).",
      "Confira: 3x · x + 3x · 2 = 3x² + 6x."
    ],
  },
  {
    id: 27,
    block: 'C',
    statement: "A expressão 4a² − 9b² é fatorada por:",
    options: {
      A: "(4a − 9b)(4a + 9b)",
      B: "(2a − 3b)(2a + 3b)",
      C: "(a − b)(a + b)",
      D: "(4a − 3b)²",
      E: "(2a − 9b)²"
    },
    correct: 'B',
    explanation: [
      "Diferença de quadrados: (2a)² − (3b)².",
      "Resultado: (2a − 3b)(2a + 3b)."
    ],
  },
  {
    id: 28,
    block: 'C',
    statement: "A fatoração de x² + 7x + 12 é:",
    options: {
      A: "(x + 2)(x + 6)",
      B: "(x + 3)(x + 4)",
      C: "(x − 3)(x − 4)",
      D: "(x + 1)(x + 12)",
      E: "(x − 2)(x − 6)"
    },
    correct: 'B',
    explanation: [
      "Procure dois números com soma 7 e produto 12: 3 e 4.",
      "Assim x² + 7x + 12 = (x + 3)(x + 4)."
    ],
  },
  {
    id: 29,
    block: 'C',
    statement: "Fatorando 2x² + 8x + 8, obtém-se:",
    options: {
      A: "2(x + 2)²",
      B: "2(x + 4)²",
      C: "(2x + 4)²",
      D: "2x(x + 8) + 8",
      E: "(x + 2)(2x + 8)"
    },
    correct: 'A',
    explanation: [
      "Primeiro tire o fator comum 2: 2(x² + 4x + 4).",
      "Dentro: x² + 4x + 4 = (x + 2)².",
      "Logo: 2(x + 2)²."
    ],
  },
  {
    id: 30,
    block: 'C',
    statement: "A expressão 9m² − 30m + 25 é igual a:",
    options: {
      A: "(3m + 5)²",
      B: "(3m − 5)²",
      C: "(9m − 25)²",
      D: "(m − 5)(9m − 5)",
      E: "9(m − 30)²"
    },
    correct: 'B',
    explanation: [
      "Verifique se é (3m − 5)² = 9m² − 2·3m·5 + 25 = 9m² − 30m + 25.",
      "Coincide com a expressão dada."
    ],
  },
  {
    id: 31,
    block: 'D',
    statement: "Qual alternativa apresenta somente divisores positivos de 36?",
    options: {
      A: "2, 3, 4 e 9",
      B: "2, 5, 6 e 12",
      C: "3, 7, 9 e 18",
      D: "1, 4, 8 e 36",
      E: "2, 6, 10 e 18"
    },
    correct: 'A',
    explanation: [
      "Divisores de 36: 1, 2, 3, 4, 6, 9, 12, 18, 36.",
      "Em A, todos (2, 3, 4, 9) dividem 36.",
      "Nas outras, aparece algum número que não divide 36 (como 5, 7, 8 ou 10)."
    ],
  },
  {
    id: 32,
    block: 'D',
    statement: "O menor múltiplo positivo comum de 6 e 8 é:",
    options: {
      A: "12",
      B: "16",
      C: "18",
      D: "24",
      E: "48"
    },
    correct: 'D',
    explanation: [
      "MMC(6, 8): fatore 6 = 2 · 3 e 8 = 2³.",
      "MMC = 2³ · 3 = 8 · 3 = 24.",
      "24 é múltiplo de 6 e de 8; 12 não é múltiplo de 8."
    ],
  },
  {
    id: 33,
    block: 'D',
    statement: "Entre os números abaixo, é divisível por 3 e por 5:",
    options: {
      A: "124",
      B: "135",
      C: "142",
      D: "154",
      E: "161"
    },
    correct: 'B',
    explanation: [
      "Divisível por 3 e por 5 ⇒ divisível por 15 (ou termina em 0 ou 5 e soma dos algarismos múltipla de 3).",
      "135 termina em 5 e 1+3+5 = 9, múltiplo de 3.",
      "Logo 135 é divisível por 3 e por 5."
    ],
  },
  {
    id: 34,
    block: 'D',
    statement: "Quantos divisores positivos possui o número 18?",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6",
      E: "8"
    },
    correct: 'D',
    explanation: [
      "18 = 2 · 3². Número de divisores = (1+1)(2+1) = 2 · 3 = 6.",
      "Lista: 1, 2, 3, 6, 9, 18."
    ],
  },
  {
    id: 35,
    block: 'D',
    statement: "O número de múltiplos de 7 entre 20 e 50, incluindo os extremos quando aplicável, é:",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6",
      E: "7"
    },
    correct: 'B',
    explanation: [
      "Liste os múltiplos de 7 estritamente entre 20 e 50, incluindo extremos só se forem múltiplos.",
      "Os candidatos são 21, 28, 35, 42 e 49.",
      "Conte quantos há nessa lista e compare com as alternativas."
    ],
  },
  {
    id: 36,
    block: 'D',
    statement: "Se n é ímpar, então necessariamente:",
    options: {
      A: "n + 1 é ímpar",
      B: "n − 1 é ímpar",
      C: "2n é ímpar",
      D: "n + 1 é par",
      E: "n² é par"
    },
    correct: 'D',
    explanation: [
      "Ímpar + 1 = par (vizinhos têm paridades opostas).",
      "n − 1 também é par; 2n é sempre par; n² de ímpar continua ímpar.",
      "A afirmação necessária entre as opções é: n + 1 é par."
    ],
  },
  {
    id: 37,
    block: 'D',
    statement: "O produto de cinco números ímpares é sempre:",
    options: {
      A: "par",
      B: "ímpar",
      C: "múltiplo de 10",
      D: "igual a 5",
      E: "divisível por 4"
    },
    correct: 'B',
    explanation: [
      "Produto de ímpares continua ímpar.",
      "Só há produto par se pelo menos um fator for par.",
      "Portanto o produto de cinco ímpares é sempre ímpar."
    ],
  },
  {
    id: 38,
    block: 'D',
    statement: "Qual dos números é simultaneamente par e múltiplo de 3?",
    options: {
      A: "15",
      B: "21",
      C: "27",
      D: "32",
      E: "42"
    },
    correct: 'E',
    explanation: [
      "Precisa ser par (divisível por 2) e múltiplo de 3 ⇒ múltiplo de 6.",
      "15, 21 e 27 são ímpares; 32 é par mas 32 ÷ 3 não é inteiro.",
      "42 = 2 · 21, par e divisível por 3."
    ],
  },
  {
    id: 39,
    block: 'D',
    statement: "O maior divisor comum de 24 e 36 é:",
    options: {
      A: "4",
      B: "6",
      C: "8",
      D: "12",
      E: "18"
    },
    correct: 'D',
    explanation: [
      "24 = 2³ · 3; 36 = 2² · 3².",
      "MDC usa os menores expoentes: 2² · 3 = 12."
    ],
  },
  {
    id: 40,
    block: 'D',
    statement: "Um número é múltiplo de 10 quando:",
    options: {
      A: "termina em 5",
      B: "é divisível apenas por 2",
      C: "termina em 0",
      D: "a soma de seus algarismos é 10",
      E: "é ímpar"
    },
    correct: 'C',
    explanation: [
      "Múltiplo de 10 precisa ser múltiplo de 2 e de 5.",
      "Na base decimal, isso ocorre quando o número termina em 0."
    ],
  },
  {
    id: 41,
    block: 'E',
    statement: "Se 4 caixas contêm 96 unidades, mantendo a mesma quantidade por caixa, 7 caixas conterão:",
    options: {
      A: "120",
      B: "144",
      C: "156",
      D: "168",
      E: "192"
    },
    correct: 'D',
    explanation: [
      "Regra de três direta: 4 caixas → 96 unidades.",
      "Unidades por caixa: 96 ÷ 4 = 24.",
      "7 caixas: 7 · 24 = 168."
    ],
  },
  {
    id: 42,
    block: 'E',
    statement: "Um produto de R$ 240,00 recebeu desconto de 15%. O preço final é:",
    options: {
      A: "R$ 204,00",
      B: "R$ 210,00",
      C: "R$ 216,00",
      D: "R$ 225,00",
      E: "R$ 236,00"
    },
    correct: 'A',
    explanation: [
      "Desconto: valor final = valor · (1 − p/100).",
      "15% = 0,15 ⇒ fator = 0,85.",
      "240 · 0,85 = 204."
    ],
  },
  {
    id: 43,
    block: 'E',
    statement: "Em uma unidade há 80 famílias cadastradas. Se 35% foram visitadas em uma semana, quantas famílias foram visitadas?",
    options: {
      A: "20",
      B: "24",
      C: "28",
      D: "32",
      E: "35"
    },
    correct: 'C',
    explanation: [
      "35% de 80 = 0,35 · 80.",
      "0,35 · 80 = 28 famílias."
    ],
  },
  {
    id: 44,
    block: 'E',
    statement: "Uma mercadoria de R$ 500,00 sofre aumento de 12%. O novo preço é:",
    options: {
      A: "R$ 512,00",
      B: "R$ 550,00",
      C: "R$ 560,00",
      D: "R$ 600,00",
      E: "R$ 620,00"
    },
    correct: 'C',
    explanation: [
      "Aumento: valor · (1 + p/100) = 500 · 1,12.",
      "500 · 1,12 = 560."
    ],
  },
  {
    id: 45,
    block: 'E',
    statement: "Cinco funcionários organizam um estoque em 12 horas, trabalhando no mesmo ritmo. Oito funcionários, nas mesmas condições, fariam o serviço em:",
    options: {
      A: "6 horas",
      B: "7,5 horas",
      C: "8 horas",
      D: "9 horas",
      E: "10 horas"
    },
    correct: 'B',
    explanation: [
      "Trabalho total em “funcionário-horas”: 5 · 12 = 60.",
      "Com 8 funcionários: tempo = 60 ÷ 8 = 7,5 horas.",
      "Mais gente ⇒ menos tempo (grandezas inversamente proporcionais)."
    ],
  },
  {
    id: 46,
    block: 'E',
    statement: "Um capital de R$ 1.000,00 aplicado a juros simples de 2% ao mês durante 5 meses produzirá juros de:",
    options: {
      A: "R$ 20,00",
      B: "R$ 50,00",
      C: "R$ 100,00",
      D: "R$ 120,00",
      E: "R$ 200,00"
    },
    correct: 'C',
    explanation: [
      "Juros simples: J = C · i · t.",
      "i = 2% = 0,02; t = 5.",
      "J = 1000 · 0,02 · 5 = 100."
    ],
  },
  {
    id: 47,
    block: 'E',
    statement: "3,5 kg correspondem a:",
    options: {
      A: "35 g",
      B: "350 g",
      C: "3.050 g",
      D: "3.500 g",
      E: "35.000 g"
    },
    correct: 'D',
    explanation: [
      "1 kg = 1.000 g.",
      "3,5 · 1.000 = 3.500 g."
    ],
  },
  {
    id: 48,
    block: 'E',
    statement: "2,4 L correspondem a:",
    options: {
      A: "24 mL",
      B: "240 mL",
      C: "2.040 mL",
      D: "2.400 mL",
      E: "24.000 mL"
    },
    correct: 'D',
    explanation: [
      "1 L = 1.000 mL.",
      "2,4 · 1.000 = 2.400 mL."
    ],
  },
  {
    id: 49,
    block: 'E',
    statement: "Uma equipe registrou 18 atendimentos na segunda-feira, 25 na terça e 17 na quarta. A média diária nesse período foi:",
    options: {
      A: "18",
      B: "19",
      C: "20",
      D: "21",
      E: "22"
    },
    correct: 'C',
    explanation: [
      "Média = soma ÷ quantidade de dias.",
      "Soma: 18 + 25 + 17 = 60.",
      "Média: 60 ÷ 3 = 20."
    ],
  },
  {
    id: 50,
    block: 'E',
    statement: "Um reservatório retangular mede 2 m de comprimento, 1,5 m de largura e 1 m de altura. Seu volume é:",
    options: {
      A: "2 m³",
      B: "2,5 m³",
      C: "3 m³",
      D: "4,5 m³",
      E: "6 m³"
    },
    correct: 'C',
    explanation: [
      "Volume do paralelepípedo: V = c · l · h.",
      "V = 2 · 1,5 · 1 = 3 m³."
    ],
  },
  {
    id: 51,
    block: 'F',
    statement: "Resolva 3x + 7 = 25.",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "8",
      E: "9"
    },
    correct: 'B',
    explanation: [
      "Isole o termo com x: 3x = 25 − 7 = 18.",
      "x = 18 ÷ 3 = 6.",
      "Confira: 3·6 + 7 = 18 + 7 = 25."
    ],
  },
  {
    id: 52,
    block: 'F',
    statement: "O dobro de um número, somado a 9, é 31. Esse número é:",
    options: {
      A: "9",
      B: "10",
      C: "11",
      D: "12",
      E: "13"
    },
    correct: 'C',
    explanation: [
      "Traduza: 2n + 9 = 31.",
      "2n = 22 ⇒ n = 11."
    ],
  },
  {
    id: 53,
    block: 'F',
    statement: "Em uma sequência, cada termo é obtido somando 4 ao anterior: 3, 7, 11, 15, ... O próximo termo é:",
    options: {
      A: "17",
      B: "18",
      C: "19",
      D: "20",
      E: "21"
    },
    correct: 'C',
    explanation: [
      "É uma PA de razão 4.",
      "Próximo após 15: 15 + 4 = 19."
    ],
  },
  {
    id: 54,
    block: 'F',
    statement: "Uma tabela mostra os atendimentos: segunda 12, terça 15, quarta 9 e quinta 14. O dia com maior número de atendimentos foi:",
    options: {
      A: "segunda",
      B: "terça",
      C: "quarta",
      D: "quinta",
      E: "houve empate"
    },
    correct: 'B',
    explanation: [
      "Compare os valores: 12, 15, 9 e 14.",
      "O maior é 15, na terça."
    ],
  },
  {
    id: 55,
    block: 'F',
    statement: "Se todo material urgente é separado primeiro e o lote X é material urgente, então:",
    options: {
      A: "X é separado por último",
      B: "X não é separado",
      C: "X é separado primeiro",
      D: "X é descartado",
      E: "nada pode ser concluído"
    },
    correct: 'C',
    explanation: [
      "Premissa universal: todo urgente é separado primeiro.",
      "X é urgente ⇒ aplica-se a regra ⇒ X é separado primeiro."
    ],
  },
  {
    id: 56,
    block: 'F',
    statement: "A negação de “Todos os produtos foram conferidos” é:",
    options: {
      A: "Nenhum produto foi conferido",
      B: "Pelo menos um produto não foi conferido",
      C: "Todos os produtos não foram conferidos",
      D: "Alguns produtos foram conferidos",
      E: "O estoque foi conferido duas vezes"
    },
    correct: 'B',
    explanation: [
      "Negar “todos são P” resulta em “existe pelo menos um que não é P”.",
      "Aqui: pelo menos um produto não foi conferido.",
      "“Nenhum foi conferido” é mais forte e não é a negação lógica."
    ],
  },
  {
    id: 57,
    block: 'F',
    statement: "Um número somado ao seu triplo resulta em 64. O número é:",
    options: {
      A: "12",
      B: "14",
      C: "16",
      D: "18",
      E: "20"
    },
    correct: 'C',
    explanation: [
      "n + 3n = 64 ⇒ 4n = 64.",
      "n = 16."
    ],
  },
  {
    id: 58,
    block: 'F',
    statement: "De 150 itens recebidos, 18 estavam danificados. A porcentagem de itens danificados foi:",
    options: {
      A: "8%",
      B: "10%",
      C: "12%",
      D: "15%",
      E: "18%"
    },
    correct: 'C',
    explanation: [
      "Porcentagem = (parte/todo) · 100%.",
      "(18/150) · 100% = 0,12 · 100% = 12%."
    ],
  },
  {
    id: 59,
    block: 'F',
    statement: "Uma sequência de caixas é organizada assim: 2 caixas na primeira fileira, 4 na segunda, 6 na terceira e 8 na quarta. Mantendo o padrão, a quinta fileira terá:",
    options: {
      A: "9",
      B: "10",
      C: "11",
      D: "12",
      E: "14"
    },
    correct: 'B',
    explanation: [
      "O padrão soma 2 a cada fileira (pares: 2, 4, 6, 8).",
      "Quinta fileira: 8 + 2 = 10."
    ],
  },
  {
    id: 60,
    block: 'F',
    statement: "Em uma pesquisa, 40 pessoas preferem o serviço A, 25 preferem B e 15 preferem C. O percentual que prefere A é:",
    options: {
      A: "40%",
      B: "45%",
      C: "50%",
      D: "55%",
      E: "60%"
    },
    correct: 'C',
    explanation: [
      "Total de pessoas: 40 + 25 + 15 = 80.",
      "Percentual de A: (40/80) · 100% = 50%."
    ],
  },
  {
    id: 61,
    block: 'G',
    statement: "Um ACS precisa visitar 6 famílias por dia durante 5 dias. Mantendo o planejamento, fará ao todo:",
    options: {
      A: "11 visitas",
      B: "25 visitas",
      C: "30 visitas",
      D: "35 visitas",
      E: "36 visitas"
    },
    correct: 'C',
    explanation: [
      "Total = visitas por dia · número de dias.",
      "6 · 5 = 30 visitas."
    ],
  },
  {
    id: 62,
    block: 'G',
    statement: "Uma microárea possui 240 moradores, dos quais 25% são crianças. O número de crianças é:",
    options: {
      A: "40",
      B: "50",
      C: "60",
      D: "80",
      E: "90"
    },
    correct: 'C',
    explanation: [
      "25% = 0,25 (ou 1/4).",
      "0,25 · 240 = 60 crianças."
    ],
  },
  {
    id: 63,
    block: 'G',
    statement: "De 120 famílias cadastradas, 90 receberam uma orientação. A taxa de cobertura foi:",
    options: {
      A: "25%",
      B: "50%",
      C: "60%",
      D: "75%",
      E: "90%"
    },
    correct: 'D',
    explanation: [
      "Taxa = (90/120) · 100%.",
      "90/120 = 0,75 = 75%."
    ],
  },
  {
    id: 64,
    block: 'G',
    statement: "Um almoxarifado tinha 850 unidades. Foram retiradas 275 e depois recebidas 120. O estoque final ficou com:",
    options: {
      A: "575",
      B: "695",
      C: "705",
      D: "815",
      E: "1.245"
    },
    correct: 'C',
    explanation: [
      "Parta do estoque inicial 850.",
      "Subtraia as 275 retiradas: 850 − 275.",
      "Some as 120 recebidas ao resultado anterior.",
      "O valor final é o estoque após as duas operações, nessa ordem."
    ],
  },
  {
    id: 65,
    block: 'G',
    statement: "Um material é consumido à razão de 18 unidades por dia. Para 12 dias, sem estoque de segurança, serão necessárias:",
    options: {
      A: "180 unidades",
      B: "196 unidades",
      C: "216 unidades",
      D: "230 unidades",
      E: "240 unidades"
    },
    correct: 'C',
    explanation: [
      "Necessidade = consumo diário · dias.",
      "18 · 12 = 216 unidades."
    ],
  },
  {
    id: 66,
    block: 'G',
    statement: "Uma caixa contém 24 luvas. Para montar 15 kits com uma caixa por kit, serão necessárias:",
    options: {
      A: "15 luvas",
      B: "24 luvas",
      C: "39 luvas",
      D: "240 luvas",
      E: "360 luvas"
    },
    correct: 'E',
    explanation: [
      "Cada kit leva 1 caixa = 24 luvas.",
      "15 kits: 15 · 24 = 360 luvas."
    ],
  },
  {
    id: 67,
    block: 'G',
    statement: "Um estoque de 500 máscaras teve redução de 8%. A quantidade retirada foi:",
    options: {
      A: "8",
      B: "20",
      C: "32",
      D: "40",
      E: "80"
    },
    correct: 'D',
    explanation: [
      "8% de 500 = 0,08 · 500.",
      "0,08 · 500 = 40 máscaras retiradas."
    ],
  },
  {
    id: 68,
    block: 'G',
    statement: "Em uma rota, um ACS percorre 2,5 km pela manhã e 3,75 km à tarde. A distância total é:",
    options: {
      A: "5,25 km",
      B: "5,75 km",
      C: "6,00 km",
      D: "6,25 km",
      E: "6,75 km"
    },
    correct: 'D',
    explanation: [
      "Some as distâncias: 2,5 + 3,75.",
      "2,50 + 3,75 = 6,25 km."
    ],
  },
  {
    id: 69,
    block: 'G',
    statement: "Um almoxarife recebeu 7 fardos com 36 unidades cada. Após distribuir 95 unidades, restaram:",
    options: {
      A: "157",
      B: "162",
      C: "252",
      D: "347",
      E: "357"
    },
    correct: 'E',
    explanation: [
      "Multiplique fardos pela quantidade de cada um: 7 · 36.",
      "Do total obtido, subtraia as 95 unidades distribuídas.",
      "O que sobra é o estoque restante."
    ],
  },
  {
    id: 70,
    block: 'G',
    statement: "Uma equipe deve distribuir 480 folhetos igualmente entre 6 microáreas. Cada microárea receberá:",
    options: {
      A: "60",
      B: "70",
      C: "80",
      D: "90",
      E: "120"
    },
    correct: 'C',
    explanation: [
      "Divisão igual: 480 ÷ 6.",
      "480 ÷ 6 = 80 folhetos por microárea."
    ],
  },
]


export function questionsByBlock(block: Question['block']): Question[] {
  return questions.filter((q) => q.block === block)
}
