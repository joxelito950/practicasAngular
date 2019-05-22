import { SumaPipe } from './suma.pipe';
let pipe: SumaPipe;

beforeEach(()=>{
  pipe = new SumaPipe();
});

describe('SumaPipe', () => {
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should sum 2 numbers', () => {
    let numbers=[1,2];
    expect(pipe.transform(numbers)).toBe(3);
  });
});
