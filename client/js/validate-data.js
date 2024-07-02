
export async function validateData() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const streetAddress = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const pinCode = document.getElementById("pinCode").value;
  const file = document.getElementById("file").value;
  const comment = document.getElementById("comment").value;
  const formattedAddress = `${name} \n ${phone}\n${email}\n${date}\n${streetAddress}\n${city}, ${state} ${pinCode}\n${file}\n${comment}`;
  if (
    name === "" ||
    phone === "" ||
    email === "" ||
    streetAddress === "" ||
    city === "" ||
    state === "" ||
    pinCode === "" ||
    comment === ""
  ) {
    alert("Please fill in all fields.");
    return new Error("Please fill in all fields.");
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return new Error("Please enter a valid email address.");
  }
  if (phone.length !== 10) {
    alert("Please enter a valid phone number.");
    return new Error("Please enter a valid phone number.");
  }
  if (pinCode.length !== 6) {
    alert("Please enter a valid pin code.");
    return new Error("Please enter a valid pin code.");
  }
  return {
    name,
    phone,
    email,
    date,
    streetAddress,
    formattedAddress,
    city,
    state,
    pinCode,
    file,
    comment,
  };
}
