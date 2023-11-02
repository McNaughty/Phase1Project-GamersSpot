// function test() {
//   //let selectedGender = "Prefer not to say"
//   userData = {};

//   let fName = document.getElementById("fName").value;
//   let emailAd = document.getElementById("emailAd").value;
//   let bornDay = document.getElementById("bDay").value;
//   let streetAd = document.getElementById("streetAd").value;
//   let streetAd2 = document.getElementById("streetAd2").value;
//   let city = document.getElementById("city").value;
//   let region = document.getElementById("region").value;
//   let postalCode = document.getElementById("pcode").value;

//   let selectElement = document.getElementById("country");
//   let countryOutput = selectElement.value;

//   userData.FullName = fName;
//   userData.Email = emailAd;
//   userData.Birthdate = bornDay;
//   let getSelectedValue = document.querySelector('input[name="gender"]:checked');
//   if (getSelectedValue != null) {
//     let selectedGender = getSelectedValue.value;
//     userData.Gender = selectedGender;
//   }
//   userData.StreetAddress = streetAd;
//   userData.StreetAddressTwo = streetAd2;
//   userData.Country = countryOutput;
//   userData.City = city;
//   userData.Region = region;
//   userData.PostalCode = postalCode;

//   //console.log(userData);

//   regUser(userData);
// }

// function regUser(userData) {
//   //console.log(userData);
//   //jsonData = { ...userData };

// //   newJsonD = JSON.stringify(jsonData);
// //   //userReg = JSON.parse({newJsonD});
// //   console.log(JSON.stringify(jsonData));

//   fetch("http://localhost:3000/users/", {

//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: jsonData
//   })
//     .then((response) => response.json())
//     .then((registeredUser) => console.log("newUser registration", registeredUser))
//     .catch((err) => console.log(err));
//   //console.log(jsonData);
// }

//document.addEventListener("DOMContentLoaded", () => {
  //   document.getElementById("reguser").addEventListener("click", function (e) {
  //     e.preventDefault();

  //     test();

  //     // regUser(userData);
  //   });

  let form = document.querySelector(".form");
  form.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    jsonData = JSON.stringify(data);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
    //   .then((response) => response.json())
    //   .then((registeredUser) => registeredUser)
    //     //console.log("newUser registration", registeredUser)
    //   )
    //   .catch((err) => console.log(err));
    // console.log(jsonData);
  }
//});
