import { screen, render, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import Calculator from '../routes/Calculator/index.svelte';

describe('Calculator', () => {
  test('Renders Calculator component and add 2 + 3 = 5', async () => {
    render(Calculator);
    await fireEvent.click(screen.getByText('2'));
    await fireEvent.click(screen.getByText('+'));
    await fireEvent.click(screen.getByText('3'));
    await fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('5'));
  });

  test('Renders Calculator component and multiply 10 * 3 = 30', async () => {
    render(Calculator);
    await fireEvent.click(screen.getByText('1'));
    await fireEvent.click(screen.getByText('0'));
    await fireEvent.click(screen.getByText('x'));
    await fireEvent.click(screen.getByText('3'));
    await fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('30'));
  });

  test('Renders Calculator component and divide 55 ÷ 5 = 11', async () => {
    render(Calculator);
    await fireEvent.click(screen.getByText('5'));
    await fireEvent.click(screen.getByText('5'));
    await fireEvent.click(screen.getByText('÷'));
    await fireEvent.click(screen.getByText('5'));
    await fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('11'));
  });

  test('Renders Calculator component and subtract 100 - 20 = 80', async () => {
    render(Calculator);
    await fireEvent.click(screen.getByText('1'));
    await fireEvent.click(screen.getByText('0'));
    await fireEvent.click(screen.getByText('0'));
    await fireEvent.click(screen.getByText('-'));
    await fireEvent.click(screen.getByText('2'));
    await fireEvent.click(screen.getByText('0'));
    await fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('80'));
  });

  test('Renders Calculator component and reset input = 0', async () => {
    render(Calculator);
    await fireEvent.click(screen.getByText('1'));
    await fireEvent.click(screen.getByText('0'));
    await fireEvent.click(screen.getByText('0'));
    await fireEvent.click(screen.getByText('-'));
    await fireEvent.click(screen.getByText('2'));
    await fireEvent.click(screen.getByText('0'));
    await fireEvent.click(screen.getByText('AC'));
    expect(screen.getByDisplayValue('0'));
  });

  test('Renders Calculator component and multiple -10 x 5 = -50', async () => {
    render(Calculator);
    await fireEvent.click(screen.getByText('1'));
    await fireEvent.click(screen.getByText('0'));
    await fireEvent.click(screen.getByText('+/-'));
    await fireEvent.click(screen.getByText('x'));
    await fireEvent.click(screen.getByText('5'));
    await fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('-50'));
  });

  test('Renders Calculator component and modulo of 7 % 5 = 2', async () => {
    render(Calculator);
    await fireEvent.click(screen.getByText('7'));
    await fireEvent.click(screen.getByText('%'));
    await fireEvent.click(screen.getByText('5'));
    await fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('2'));
  });

  test('Renders Calculator component and perform multiple operation 5 + 3 x 2 ÷ 4 % 3 = 1', async () => {
    render(Calculator);
    await fireEvent.click(screen.getByText('5'));
    await fireEvent.click(screen.getByText('+'));
    await fireEvent.click(screen.getByText('3'));
    await fireEvent.click(screen.getByText('x'));
    await fireEvent.click(screen.getByText('2'));
    await fireEvent.click(screen.getByText('÷'));
    await fireEvent.click(screen.getByText('4'));
    await fireEvent.click(screen.getByText('%'));
    await fireEvent.click(screen.getByText('3'));
    await fireEvent.click(screen.getByText('='));
    expect(screen.getByDisplayValue('1'));
  });
});