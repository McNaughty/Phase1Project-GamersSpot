function test() {
  userData = {};

  let fName = document.getElementById("fName").value;
  let emailAd = document.getElementById("emailAd").value;
  let bornDay = document.getElementById("bDay").value;
  let streetAd = document.getElementById("streetAd").value;
  let psnusername = document.getElementById("psn").value;
  let city = document.getElementById("city").value;
  // let region = document.getElementById("region").value;
  let postalCode = document.getElementById("pcode").value;

  let selectElement = document.getElementById("country");
  let countryOutput = selectElement.value;

  userData.FullName = fName;
  userData.Email = emailAd;
  userData.Birthdate = bornDay;
  let getSelectedValue = document.querySelector('input[name="gender"]:checked');
  if (getSelectedValue != null) {
    let selectedGender = getSelectedValue.value;
    userData.Gender = selectedGender;
  }
  userData.StreetAddress = streetAd;
  userData.psnaccount = psnusername;
  userData.Country = countryOutput;
  userData.City = city;
  // userData.Region = region;
  userData.PostalCode = postalCode;

  //console.log(userData);

  regUser(userData);
}

function regUser(userData) {
  //console.log(userData);
  jsonData = { ...userData };

  fetch("https://retoolapi.dev/qu2Ysx/userdata", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  })
    .then((response) => response.json())
    .then((registeredUser) =>
      console.log("newUser registration", registeredUser)
    )
    .catch((err) => console.log(err));
  //console.log(jsonData);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("reguser").addEventListener("click", function (e) {
    e.preventDefault();

    test();

    // regUser(userData);
  });
});
