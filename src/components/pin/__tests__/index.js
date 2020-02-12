import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Pin from '..';

describe('Pin', () => {
  test('should not show pop up by default', () => {
    const { container } = render(<Pin lng={123} lat={123} />);
    expect(container).toMatchSnapshot();
  });

  test('should toggle pop up when click on pin', () => {
    const { container, getByTestId } = render(<Pin lng={123} lat={123} />);

    const pin = getByTestId('pin');

    fireEvent.click(pin, {});
    expect(container).toMatchSnapshot();

    fireEvent.click(pin, {});
    expect(container).toMatchSnapshot();
  });

  test('should toggle pop up when click on popup', async () => {
    const { container, getByTestId } = render(<Pin lng={123} lat={123} />);

    const pin = getByTestId('pin');
    fireEvent.click(pin, {});

    const popup = getByTestId('pop_up');
    fireEvent.click(popup, {});
    expect(container).toMatchSnapshot();
  });
});
