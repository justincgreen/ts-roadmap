interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'bob' | 'bill' | 'hank';

const cats: Record<CatName, CatInfo> = {
  bob: { age: 10, breed: 'Persian' },
  bill: { age: 5, breed: 'Cheshire' },
}