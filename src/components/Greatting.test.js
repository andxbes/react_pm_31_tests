import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {


    test('renders Hello World as a text', () => {
        render(<Greeting />);
        const linkElement = screen.getByText(/hello world/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('renders good to see you if the button was Not clicked', () => {
        render(<Greeting />);
        const outputElement = screen.getByText(/good to see you/i, { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('renders Changed! if the button was clicked', async () => {
        render(<Greeting />);
        const buttonElement = screen.getByRole('button');
        await userEvent.click(buttonElement);
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    });

    test('does not render "good to see you" if the button was clicked', async () => {
        render(<Greeting />);
        const buttonElement = screen.getByRole('button');
        await userEvent.click(buttonElement);
        const outputElement = screen.queryByText('good to see you', { exact: false });
        // expect(outputElement).not.toBeInTheDocument();
        expect(outputElement).toBeNull();
    });
});
