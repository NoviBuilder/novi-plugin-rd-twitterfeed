
export function validTwitterElement(element){
    if (!element) return false;
    let userName = getUserName(element);
    return userName !== null;
}

function getUserName(element){
    return novi.element.getAttribute(element, 'data-twitter-username');
}