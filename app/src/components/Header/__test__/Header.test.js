import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';

describe('Component: Haeader', () => {
    it('Mount Snapshot Test', () => {
        const wrapper = mountWithThemeAndStore(<BrowserRouter><Header/></BrowserRouter>);

        expect(wrapper).toMatchSnapshot();
    });
});