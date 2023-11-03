function highlightWords(paragraph, colours) {
  const content = document.querySelector('#content');

  let parag = document.createElement("p");
  content.appendChild(parag);

  const selectList = document.createElement("select");
  colours.forEach(color => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    selectList.appendChild(option);
    
  });
  content.appendChild(selectList);

  paragraph.split(" ").forEach((word) => {
    const span = document.createElement("span");
    span.textContent = ` ${word} `;
    parag.appendChild(span);

    span.addEventListener("click", () => {
    const colorChoise = selectList.value;
    span.style.backgroundColor =
    colorChoise === "none" ? "white" : colorChoise;
      });
  });

  return content;

  
  
//   for (let i = 0; i < paragDropdown.length; i++) {
//     let option = document.createElement("option");
//     option.value = paragDropdown[i];
//     option.text = paragDropdown[i];
//     selectList.appendChild(option);
//     // span = document.createElement("span");
//     // span.innerHTML =  paragDropdown[i];
//     // option.addElement(span);
// }
  
// paragDropdown = document.querySelectorAll('span');

  
// document.getElementById('content').appendChild(span);
// document.getElementById("content").innerHTML= options;

  
  // Write your code here...
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
