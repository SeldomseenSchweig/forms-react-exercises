import React from "react";
import { render, fireEvent, queryByTestId, queryAllByTestId } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import BoxList from "./BoxList";


test("renders without crashing", function (){

    render(<BoxList />);
});

test("matches snapshot", function () {
    const {asFragment} = render(<BoxList />)
    expect (asFragment()).toMatchSnapshot();
});

test("should add new item", ()=>{

    const {queryByText, getByLabelText, queryByTestId} = render(<BoxList />)
    const input = getByLabelText('Color')
    const button = queryByText('Submit')
    expect(queryByTestId('purple')).not.toBeInTheDocument();
    fireEvent.change(input,{target:{value: "purple"}});
    fireEvent.click(button);
    expect(queryByTestId('purple')).toBeInTheDocument();

})


