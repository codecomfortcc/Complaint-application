
export async function sheetsFetch(data) {
  const url= 'localhost:5000/sheets'
  const options={
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }
  const request =new Request(url,options)
  fetch(request)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Failed to submit data");
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      alert(e);
    });
}
