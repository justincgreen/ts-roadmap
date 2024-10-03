interface Dog {
  breed: string;
  color: string;
}

interface Details extends Dog {
  hasCollar: boolean;
}

const myDog: Details = {
  breed: 'Beagle',
  color: 'mixed',
  hasCollar: true
}

console.log(myDog);