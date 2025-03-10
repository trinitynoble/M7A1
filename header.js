document.addEventListener("DOMContentLoaded", function () {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "styles.css"; // Change to your CSS file's path
    document.head.appendChild(link);
    
    const atfDiv = document.createElement("div");
    atfDiv.classList.add("atf_36");

    const imgBGDiv = document.createElement("div");
    imgBGDiv.classList.add("imgBG");

    const bigContainer = document.createElement("div");
    bigContainer.classList.add("responsive-container-block", "big-container");

    const container = document.createElement("div");
    container.classList.add("responsive-container-block", "container");

    const heading = document.createElement("p");
    heading.classList.add("text-blk", "landing10-head");
    heading.textContent = "Innovative and Quality Assured Construction Service";

    const subheading = document.createElement("p");
    subheading.classList.add("text-blk", "landing10-subhead");
    subheading.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.";

    const inputBox = document.createElement("div");
    inputBox.classList.add("input-box");

    const buttonAnchor = document.createElement("a");
    buttonAnchor.classList.add("btn");

    const button = document.createElement("button");
    button.classList.add("landing-button");
    button.textContent = "Explore our Services";

    buttonAnchor.appendChild(button);
    inputBox.appendChild(buttonAnchor);

    container.appendChild(heading);
    container.appendChild(subheading);
    container.appendChild(inputBox);

    bigContainer.appendChild(container);

    const downArrowLink = document.createElement("a");
    downArrowLink.id = "iuy3u";

    const downArrowImg = document.createElement("img");
    downArrowImg.classList.add("downArrowImg");
    downArrowImg.src = "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw2.svg";

    downArrowLink.appendChild(downArrowImg);
    bigContainer.appendChild(downArrowLink);

    imgBGDiv.appendChild(bigContainer);
    atfDiv.appendChild(imgBGDiv);

    document.body.appendChild(atfDiv); // Append to the body or a specific element
});
