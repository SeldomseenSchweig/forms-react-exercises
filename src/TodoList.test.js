import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import TodoList from "./TodoList";


test("renders without crashing", function (){

    render(<TodoList />);
});

test("matches snapshot", function () {
    const {asFragment} = render(<TodoList />)
    expect (asFragment()).toMatchSnapshot();
});

test("should add new item", ()=>{

    const {queryByText, getByLabelText, queryByTestId} = render(<TodoList />)
    const input = getByLabelText('Todo')
    const button = queryByText('Submit')
    
    expect(queryByText('Walk Dogs')).not.toBeInTheDocument();
    fireEvent.change(input,{target:{value: "Walk Dogs"}});
    fireEvent.click(button);
    expect(queryByText('Walk Dogs')).toBeInTheDocument();
    


})
test("should add new item", ()=>{

    const {queryAllByText, queryByText} = render(<TodoList />)
    const remove = queryAllByText('X')
    expect(queryByText('Wash the car')).toBeInTheDocument();
    fireEvent.click(remove[0]);
    expect(queryByText('Wash the car')).not.toBeInTheDocument();
    


})