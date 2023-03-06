import { render } from "@testing-library/react";
import SingleUser from "./SingleUser";

const mockUser = {
  _id: '1', 
  name: 'Juan', 
  lastName: 'Perez',
  email: 'a@test.com',
  birthDate: '10-03-1992',
  address: {
    street: 'Colon',
    city: 'Washington',
    country: 'USA',
    postalcode: '00000'
  }
}

describe(SingleUser, () => {
  it('Checks if show address works', () => {
    const { getByRole } = render(<SingleUser user={mockUser} handleDeleteUser={() => {}}/>);
    const showAddressBttn = getByRole("button", {name: 'Ver dirección'}); 
  });
  
})
