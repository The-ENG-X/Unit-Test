const fetchData = require("./fetchData");
const axios = require("axios");
jest.mock("axios");
test("fetches successfully data from an API", async () => {
    const data = { userId: 1, id: 1, title: "Test title" };
    axios.get.mockResolvedValue({ data });
    const result = await fetchData(
    "https://jsonplaceholder.typicode.com/todos/1"
    );
    expect(result).toEqual(data);
});
test("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";
    axios.get.mockRejectedValue(new Error(errorMessage));
    await expect(
    fetchData("https://jsonplaceholder.typicode.com/todos/1")
    ).rejects.toThrow(errorMessage);
});
