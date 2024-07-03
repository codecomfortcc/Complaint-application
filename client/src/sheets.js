export async function sheetsFetch(data) {
  const url = "http://localhost:4000/api/sheets";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const request = new Request(url, options);
  const response = await fetch(request);
  console.log(response)

}
