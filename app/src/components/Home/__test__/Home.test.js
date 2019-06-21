import Home from '../Home';

describe('Component: Home', () => {
    it('Shallow Snapshot test', () => {
        const wrapper = shallowWithTheme(<Home/>);

        expect(wrapper).toMatchSnapshot();
    });
})