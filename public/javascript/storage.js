const save = document.querySelector(".save");
const saveData = () => {
  let username = document.getElementById("username");
  let gender = document.querySelector('input[name="gender"]:checked').value;
  if (
    username.value == undefined ||
    username.value == "" ||
    username.value == null
  )
    username.value = "Stranger";
  if (gender != "Male" || "Female") gender = "Male";
  username = localStorage.setItem("username", username.value);
  localStorage.setItem("sex", gender);
};

save.addEventListener("click", saveData);
