import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ConnectedButton from './Button';
import { Button } from './Button';
import buttonApp from '../buttonAppReducer';

describe('Button Component', () => {
  it('renders correctly', () => {
    const store = createStore(buttonApp);
    const result = shallow(
      <Provider store={store}>
        <ConnectedButton/>
      </Provider>
    );
    expect(result).toMatchSnapshot();
  });

  it('handles a click event', () => {
    const handleClick = jest.fn();
    const result = shallow(
      <Button increment={handleClick}/>
    );
    result.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });

  it('updates the store value by 1 when clicked', () => {
    const store = createStore(buttonApp);
    const result = shallow(
      <ConnectedButton store={store}/>
    );
    result.dive().find('button').simulate('click');
    expect(store.getState()).toBe(1);
  });
});