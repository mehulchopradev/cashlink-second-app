import { SepPipe } from './sep.pipe';

describe('Test suite to verify the working of the separator pipe', () => {
  let pipe: SepPipe;
  beforeEach(() => {
    pipe = new SepPipe();
  });

  it('return the elements of the array separated by the passed in separator argument to the pipe', () => {
    const actual: string = pipe.transform([5, 6, 3, 4, 1], '|');
    expect(actual).toBe('5|6|3|4|1');
  });

  it('return the elements of the array separated by default $ separator when no argument passed to the pipe', () => {
    const actual: string = pipe.transform([5, 6, 3, 4, 1]);
    expect(actual).toBe('5$6$3$4$1');
  });

  it('returns an empty string when an empty array is passed to this pipe', () => {
    const actual: string = pipe.transform([], '|');
    expect(actual).toBe('');
  });
});
