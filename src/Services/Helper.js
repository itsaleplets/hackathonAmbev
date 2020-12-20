export const dataMock = [
  {
    title: 'Teor Alcoólico',
  },
  {
    title: 'Oxigênio'
  },
  {
    title: 'Gás Carbônico',
  },
  {
    title: 'Amargor',
  },
];

export const values = () => {
  let min = 0;
  let max = 5.5;
  return parseFloat(Math.random() * (max - min)).toFixed(1); 
}
