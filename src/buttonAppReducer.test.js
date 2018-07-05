import buttonApp from './buttonAppReducer';
import { increment } from './actionCreators';

describe('Button Reducer', () => {
  it('should return state by default', () => {
    const unhandledAction = {
      type: 'NOT_A_VALID_TYPE',
    };
    const initialState = 0;
    const result = buttonApp(initialState, unhandledAction);
    expect(result).toBe(initialState);
  });

  it('should return an incremented value for state on action of type "INCREMENT"', () => {
    const currentState = 2;
    const result = buttonApp(currentState, increment());
    expect(result).toBe(3);
  });
});