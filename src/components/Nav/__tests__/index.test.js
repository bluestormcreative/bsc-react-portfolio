import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const selectedNavItem = 'About';
const mockSetSelectedNavItem = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
  it('renders', () => {
    render(
      <Nav
        selectedNavItem={selectedNavItem}
        setSelectedNavItem={mockSetSelectedNavItem}
      />
    );
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(
      <Nav
        selectedNavItem={selectedNavItem}
        setSelectedNavItem={mockSetSelectedNavItem}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('links are visible', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(
      <Nav
        selectedNavItem={selectedNavItem}
        setSelectedNavItem={mockSetSelectedNavItem}
      />
    );
    expect(getByTestId('portfolio')).toHaveTextContent('Portfolio');
    expect(getByTestId('about')).toHaveTextContent('About');
  });
});

describe('Click event sets active link', () => {
  it('sets classname nav-active on the clicked link', () => {
    const { getByTestId } = render(
      <Nav
        selectedNavItem={selectedNavItem}
        setSelectedNavItem={mockSetSelectedNavItem}
      />
    );
    fireEvent.click(getByTestId('about'));
    expect(getByTestId('about').classList.contains('nav-active')).toBe(true);
  });
});

describe('Click Event', () => {
  it('calls onClick handler and sets state', () => {
    const { getByTestId } = render(
      <Nav
        selectedNavItem={selectedNavItem}
        setSelectedNavItem={mockSetSelectedNavItem}
      />
    );
    fireEvent.click(getByTestId('portfolio'));
    expect(mockSetSelectedNavItem).toHaveBeenCalledTimes(1);
  });
})  
