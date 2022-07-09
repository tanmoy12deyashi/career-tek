window.addEventListener("load", () => {
  return
  for(let x = 0.1; x < 1; x = x + 0.1) {
    console.log(x)
    document.querySelector("#overlayer").style.opacity = x;
    document.querySelector(".loader").style.opacity = x;
  }
 
  /*setTimeout(() => {
    document.querySelector("#overlayer").style.opacity = "0.6";
    document.querySelector(".loader").style.opacity = "0.6";
  }, 1000);
  setTimeout(() => {
    document.querySelector("#overlayer").style.opacity = "0.9";
    document.querySelector(".loader").style.opacity = "0.9";
  }, 1500);*/
  setTimeout(() => {
    document.querySelector("#overlayer").classList.add("d-none");
    document.querySelector(".loader").classList.add("d-none");
  }, 2000);
});