const submit = document.getElementById("submit");
submit.addEventListener("click", submitting);
function submitting(event) {
  event.preventDefault();
  const firstname = document.getElementById("first-name").value;
  const lastname = document.getElementById("last-name").value;
  const phonenumber = document.getElementById("phonenumber").value;
  const email = document.getElementById("email").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const foods = document.querySelectorAll(
    "#foodselected input[type='checkbox']:checked"
  );
  const selected = Array.from(foods).map((checkbox) => checkbox.value);
  const address = document.getElementById("address").value;
  const state = document.getElementById("statename").value;
  const country = document.getElementById("countryname").value;

  const name1 = document.getElementById("name1");
  const name2 = document.getElementById("name2");
  const name3 = document.getElementById("name3");
  const name4 = document.getElementById("name4");
  const name5 = document.getElementById("name5");
  const name6 = document.getElementById("name6");
  const name7 = document.getElementById("name7");
  const name8 = document.getElementById("name8");
  const name9 = document.getElementById("name9");
  name1.innerHTML = `${firstname}`;
  name2.innerHTML = `${lastname}`;
  name3.innerHTML = `${phonenumber}`;
  name4.innerHTML = `${email}`;
  name5.innerHTML = `${gender}`;
  name6.innerHTML = `${selected}`;
  name7.innerHTML = `${address}`;
  name8.innerHTML = `${state}`;
  name9.innerHTML = `${country}`;
}