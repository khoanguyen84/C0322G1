// const h1 = document.createElement("h1");
// h1.innerText = "CodeGym Huế";

// document.querySelector("#root").appendChild(h1);

const div = document.createElement('div');
div.className = "post";
div.id="div_1";

const h2 = document.createElement("h2");
h2.className = "heading_2";
h2.innerText = "React JS";

const ol = document.createElement("ol");
const li_1 = document.createElement("li");
li_1.innerText = "useState()";
const li_2 = document.createElement("li");
li_2.innerText = "useEffect()";
const li_3 = document.createElement("li");
li_3.innerText = "useParams()";

ol.appendChild(li_1);
ol.appendChild(li_2);
ol.appendChild(li_3);

div.appendChild(h2);
div.appendChild(ol);


document.querySelector("#root").appendChild(div);