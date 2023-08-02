
window.addEventListener('resize', function () {
    let width = window.innerWidth;

    // Sample XPath, replace with your actual XPath
    var xpath = "/html/body/header/div[2]/div/div[2]/div";

    // Evaluate the XPath and retrieve the matching elements
    var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;


    // Change this to the width you want to add the class at
    if (width < 768) {
        element.classList.add('justify-content-center');
        element.classList.remove('justify-content-around');
    } else {
        element.classList.remove('justify-content-center');
        element.classList.add('justify-content-around');
    }
});
window.dispatchEvent(new Event('resize'));