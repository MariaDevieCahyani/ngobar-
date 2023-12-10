const sidebar = document.querySelector("#sidebar");
const buttonToggler = document.querySelector(".navigation__toggler");
const buttonCloser = document.querySelector(".navigation__closer");

const valueProjectComplete = document.querySelector("#value-Project-Complete");
const valueProjectComplete2 = document.querySelector("#value-Project-Complete2");


/**
 * Untuk menampilkan sidebar ketika diklik
 * 
 * Cara baca: 
 * Button toggler ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * tambahkan class tambahan yaitu "show" dan buang class "hide"
 *  */
buttonToggler.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  sidebar.classList.remove("hide");
});

/**
 * Untuk menutup sidebar ketika diklik
 * 
 * Cara baca: 
 * Button closer ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * hapus class tambahan yaitu "hide" dan tambah class "show"
 *  */
buttonCloser.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar.classList.toggle("hide");
});


/**
 * inject value baru dari java script ke elemen dengan 
 
valueProjectComplete.append("containerValue.projectComplete");
valueProjectComplete2.append("containerValue.yearExperience");


const containerValue = {
  projectComplete : "420",
  yearExperience : "40", 1
  
},
{
  projectComplete: 450,
  yearExperience: "50+",
},


const a = undefined

console.log(containerValue);
*/

2