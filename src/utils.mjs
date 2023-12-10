async function loadTemplate(path){
    const result = await fetch(path);
    const template = result.text()
    return template
}
export async function loadHeaderFooter(){
    const headerTemplate = await loadTemplate("./templates/header.html")
    const footerTemplate = await loadTemplate("./templates/footer.html")
    const headerElement = querySelect("#main-header");
    const footerElement = querySelect("#main-footer");

    headerElement.insertAdjacentHTML("afterbegin", headerTemplate);
    footerElement.insertAdjacentHTML("afterbegin", footerTemplate);
}

export function querySelect (selector, parent = document){
    return parent.querySelector(selector);
}

export function getParams(params){
    const urlParam = window.location.search;
    const paramSearch = new URLSearchParams(urlParam);
    const paramGet = paramSearch.get(params);
    return paramGet;
}
export function templateMaker(template, element, list, position = "afterbegin", clear = false){
    const objectStrings = list.map(template)
    if (clear) {
        element.innerHTML = "";
    }
    element.insertAdjacentHTML(position, objectStrings.join(""))

}
export function toLocalStorage(category){
    localStorage.setItem("category",category)
}
export function getLocalStorage(category){
    if (localStorage.length !== 0) {
        return localStorage.getItem(category)
    }else{
        return {name: "error"}
    }
}

