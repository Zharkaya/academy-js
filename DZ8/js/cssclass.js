class CssClass {
    name = "";
    style = {};   
    
    constructor(name, style) {
        this.name = name;
        this.style = style;        
    }
    addStyle(name, style){
        if(style && style!="undefined"){   
            let adstyle = style.map((s)=>  Object.keys(s) + ":" + Object.values(s) + ";").join("");       
            let template = `.${name}{${adstyle}}`
            return template;
        }
        return "";
    }
    getCss() {        
        let template = 
        `${this.addStyle(this.name, this.style)}`  
        return template;
    }
}

class HtmlElement {
    name = "";
    _class= {name: "", style: [{}]};
    text = "";
    atributs = [
        {
            name: "",
            value: "",
        },
    ];
    
    constructor(name, class_name, text, atributs) {
        this.name = name;
        this._class = class_name;
        this.text = text;
        this.atributs = atributs;        
    }

    addAtribut(atr) {       
        if(atr) {
            return atr.map((a)=> a.name + "=" + a.value).join(" ");
        }
        return "";
    }

    getHtml() {
        let style = new CssClass(this._class.name, this._class.style);  
        let styleBlock = document.querySelector("style");
        if(!styleBlock){
            document.body.insertAdjacentHTML("afterbegin", `<style>${style.getCss()}</style>`);
        } 
        else {            
            let hasClas = styleBlock.innerText.split(".").join(" ").includes(this._class.name);
            if(!hasClas) {
                styleBlock.insertAdjacentHTML("beforeend", `${style.getCss()}`);
            }            
        }
        let template = `<${this.name} class="${this._class.name}" ${this.addAtribut(this.atributs)}>${this.text}</${this.name}>`
        return template;
    }
}

let text = {
    name: "text",
    style: [{"text-align" : "justify"}]
}

let wrapper = {
    name: "wrapper",
    style:[{"display": "flex"}]
}

let block = {
    name: "block",
    style: [{"width":"300px"},
            {"margin": "10px"}]
}

let img = {
    name: "img",
    style: [{"width": "100%"}]
}

let text_template = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nulla sapiente nisi veritatis alias autem, dolorem eaque doloremque, aliquid a aliquam eligendi eius delectus optio?";

let wrap = new HtmlElement("div", wrapper, "");

let app = document.getElementById("app");

app.insertAdjacentHTML("beforeend", wrap.getHtml());

wrap = document.querySelector(".wrapper");

let div = new HtmlElement("div", block, "")

wrap.insertAdjacentHTML("beforeend", div.getHtml());
wrap.insertAdjacentHTML("beforeend", div.getHtml());
wrap.insertAdjacentHTML("beforeend", div.getHtml());

let h3 = new HtmlElement("h3", "", "Lorem ipsum dolor sit.");
let p = new HtmlElement("p", text, text_template);
let a = new HtmlElement("a", "", "More..", [{name: "href", value: "https://loremflickr.com/320/240"}])
let pic = new HtmlElement("img", img, "", [{name: "src", value: "https://loremflickr.com/320/240"}])

div = document.querySelectorAll(".block");

div.forEach(d => {    
    d.insertAdjacentHTML("beforeend", h3.getHtml());
    d.insertAdjacentHTML("beforeend", pic.getHtml());
    d.insertAdjacentHTML("beforeend", p.getHtml());
    d.insertAdjacentHTML("beforeend", a.getHtml());
});