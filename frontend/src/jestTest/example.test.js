
import Button from "frontend/src/components/Buttton.jsx"


afterEach(() => {
    cleanup(); 
})

describe("submit button", () => {
    const handleSubmit = jest.fn();
    render(<Button onClick={handleSubmit} btnTxt="Submit" />);
    const button = screen.getByTestId("btn green");
//test if button renders
    test("Button Rendering", () => {
        expect(button).toBeInTheDocument();
    })

  //test expected text
    test("Button Text", () => {
        expect(button).toHaveTextContent("submit");
    })

//test background color
    test('background color should be green', () => {
        render(<Button />);
        expect(screen.getByText('submit')).toHaveStyle('background-color: red');
    })
   //test if button clicks initiates handle submit function
    test("handle button click",()=>{
        const onClicklick = jest.fn();
        render();
       const ButtonElement = screen.getByText('Submit');
       fireEvent.click(ButtonElement);
       expect(onClicklick).toHaveBeenCalledTimes(1)
    })

})