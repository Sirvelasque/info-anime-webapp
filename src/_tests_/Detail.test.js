import { getDetails } from '../redux/details/detail'

jest.mock("axios");

describe("get details", () => {
  it("ID 1 serie should  be cowboy bebop", () => {
    const details = [
      {
        title: 'Cowboy Bebop',
        rank: 37,
        year: 1998,
      },
    ];
    const test = {
      type: 'ONEDETAILS',
      payload: details,
    }
    expect(getDetails(details)).toEqual(test);
  })
})