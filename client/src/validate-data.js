
export function stepOneValidation() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  if (name.value === "") {
    name.classList.add("error");
  }
  if (email.value === "") {
    email.classList.add("error");
  }
  if (phone.value === "") {
    phone.classList.add("error");
  }
  if (!email.value.includes("@") || !email.value.includes(".")) {
    email.classList.add("error");
  }
  if (phone.value.length !== 10) {
    phone.classList.add("error");
  }
  return true;
}

export function stepTwoValidation() {
  const address = document.getElementById("address");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const zip = document.getElementById("pinCode");

  if (address.value === "") {
    address.classList.add("error");
  }
  if (city.value === "") {
    city.classList.add("error");
  }
  if (state.value === "") {
    state.classList.add("error");
  }
  if (zip.value === "") {
    zip.classList.add("error");
  }
  if (zip.value.length !== 6) {
    zip.classList.add("error");
  }
  return true;
  
}

export function stepThreeValidation() {
  // const file=document.getElementById('file');
  const comment = document.getElementById("comment");
  // if(file.value===''){
  //   file.classList.add('error');
  // }
  if (comment.value === "") {
    comment.classList.add("error");
  }
  return true;
}

export async function validateData() {
  if (stepOneValidation() && stepTwoValidation() && stepThreeValidation()) {
    return {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      zip: document.getElementById("pinCode").value,
      // file:document.getElementById('file').value,
      comment: document.getElementById("comment").value,
    };
  } else {
    throw new Error("Please fill all the fields");
  }
}
