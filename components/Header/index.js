// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const headerDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const heading = document.createElement('h1');
    const tempSpan = document.createElement('span');

    headerDiv.classList.add('header');
    dateSpan.classList.add('date'); 
    tempSpan.classList.add('temp'); 

    dateSpan.textContent = "MARCH 28, 2019";
    heading.textContent = "Lambda Times";
    tempSpan.textContent = "98";

    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(heading);
    headerDiv.appendChild(tempSpan);

    return headerDiv;
}
