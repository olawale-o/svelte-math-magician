
import { render, screen } from '@testing-library/svelte';
import Home from '../routes/Home.svelte';

describe('Home', () => {  
  test('it has a header Element', () => {
    render(Home);
    const headerEle = screen.getByRole('heading', {
      name: 'Welcome to our page!',
    });
  
    expect(headerEle).toBeTruthy();
  });
});
