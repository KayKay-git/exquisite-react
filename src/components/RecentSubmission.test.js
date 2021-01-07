import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import RecentSubmission from './RecentSubmission';


describe('Wave 2:  RecentSubmission', () => {
  test('It renders with a submission and shows the text', () => {
    // Act
    render(<RecentSubmission submission={'The Most Recent Submission'} />);

    // Assert
    const textContainer = screen.getByText(/The Most Recent Submission/i);
    expect(textContainer).toBeInTheDocument();
  });
});
