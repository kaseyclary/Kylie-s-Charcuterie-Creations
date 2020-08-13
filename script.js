let sampleText1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, eveniet vitae, accusamus similique obcaecati ex ipsa beatae ipsum, tempore quo laudantium amet qui! Ut id molestiae veritatis deserunt, amet sapiente?";
let sampleText2 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda itaque obcaecati, expedita, temporibus inventore asperiores aliquid neque vel illo esse eius. Deserunt suscipit culpa pariatur recusandae dolore quaerat vero excepturi.Ab, ullam? Laborum autem voluptates minus dolores voluptatibus culpa commodi magni inventore quisquam dignissimos sit dolore impedit suscipit accusantium quis, perferendis ipsa similique rem in odit. Fugiat voluptatum harum odit."
let sampleText3 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quaerat nam eveniet quasi expedita doloremque cum amet ratione delectus ad, omnis molestias numquam ullam ut debitis corporis commodi voluptatem ipsam?" +
"Esse excepturi laborum ea officia necessitatibus tempora hic possimus suscipit optio, natus sequi nesciunt cumque officiis quas atque voluptatum commodi velit, mollitia quisquam aut similique et. Sunt porro laboriosam pariatur?" +
"Praesentium voluptates officia, distinctio ea dolorem dicta. Magnam, neque delectus eveniet in, doloribus repellat distinctio ex id perspiciatis labore libero, similique facilis praesentium temporibus! At vel veniam sint natus expedita.";

const smallText = [...document.querySelectorAll('.smallTextArea')];
smallText.forEach(element => {
    element.innerHTML +=`<p> ${sampleText1} </p>`;
});

const medText = [...document.querySelectorAll('.medTextArea')];
medText.forEach(element => {
    element.innerHTML +=`<p> ${sampleText2} </p>`;
});


// document.querySelector('.medTextArea').innerHTML += `<p> ${sampleText2} </p>`;
// document.querySelector('.largeTextArea').innerHTML += `<p> ${sampleText3} </p>`;

