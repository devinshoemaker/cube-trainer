import Dot from '../components/two-look-oll/Dot';

const algorithms = [
  Dot
];

function getTwoLookOll() {
  return algorithms[Math.floor(Math.random() * algorithms.length)];
}

export default getTwoLookOll;
