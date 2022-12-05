class HtmlElement {
    //имя элемента
    name = ''
    //самозакрывающийся тег или нет;
    close = true;
    //текстовое содержимое;
    text = '';
    //массив атрибутов;
    atributs = [
        {
            name: "",
            value: "",
        },
    ];
    //массив стилей;
    style = [{
        name: "",
        value: "",
    }];
    //массив вложенных таких же тегов;
    tags = [{}];

    constructor(name, close, text, atributs, style, tags) {
        this.name = name;
        this.close = close;
        this.text = text;
        this.atributs = atributs;
        this.style = style;
        this.tags = tags;
    }

    //метод для установки атрибута;
    addAtribut(atr) {       
        if(atr) {
            return atr.map((a)=> a.name + "=" + a.value).join(" ");
        }
        return "";
    }
    //метод для установки стиля;
    addStyle(style) {
        if(style) {                  
            return style.map((s)=> s.name + ":" + s.value + ";").join(" ");        
        }
        return "";
    }
    //метод для добавления вложенного элемента в конец текущего элемента;
    addEnd(tags) {        
        if(tags){
            return tags.map((tag)=>`<${tag.name} style="${this.addStyle(tag.style)}" ${this.addAtribut(tag.atributs)}">${tag.text}</${tag.name}>`).join("");
        }
        
        return;
    }

    //возвращает html код в виде строки
    getHtml(){
           
        let children = this.tags;
        let getchild = "";
        if(children) {
            children.forEach(c => {
                let child = new HtmlElement(c.name, c.close, c.text, c.atributs, c.style, c.tags); //name, close, text, atributs, style, tags                
                if(child.tags) {                                    
                    for(let i=0; i<child.tags.length; i++) {
                        let tags = new HtmlElement(child.tags[i].name, child.tags[i].close, child.tags[i].text, child.tags[i].atributs, child.tags[i].style, child.tags[i].atributs);                                     
                        getchild += `<${tags.name} style='${this.addStyle(tags.style)}' ${this.addAtribut(tags.atributs)}>${tags.text}</${tags.name}>`
                    }
                }
            });
        }      
  

        let template = `
            ${this.close 
                ? 
                `<${this.name} ${this.addAtribut(this.atributs)} 
                               style='${this.addStyle(this.style)}'>
                        ${this.text}  
                        ${this.addEnd(this.tags)}
                        ${getchild}                        
                </${this.name}>`
                : `<${this.name}  ${this.addAtribut(this.atributs)}  style='${this.addStyle(this.style)}/>`}
        `        
        return template;
       
    }

}

let wrapper = document.getElementById("wrapper");

let text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda exercitationem reiciendis aspernatur adipisci nobis nisi rem deleniti eveniet. Saepe commodi tempora amet eius, perferendis autem.";


let h3 = new HtmlElement("h3", true, "Lorem ipsum dolor sit.", "", "");
let img = new HtmlElement("img", false, "", [{name: "src", value: "https://loremflickr.com/300/240"}, {name: "alt", value: "Lorem Ipsum"}]);
let img_1 = new HtmlElement("img", false, "", [{name: "src", value: "https://loremflickr.com/300/240/dog"}, {name: "alt", value: "Lorem Ipsum"}]);
let href = new HtmlElement("a", true, "More..", [{name: "href", value: "https://loremflickr.com/300/240/dog/"}, {name: "target", value: "_blank"}], "");
let p = new HtmlElement("p", true, text, "", [{name: "text-align", value: "justify"}], [href]);
let div = new HtmlElement("div", true, "", "", [{name: "width", value: "300px"}, {name: "margin", value: "10px"}], [h3, img, p]);
let div2 = new HtmlElement("div", true, "", "", [{name: "width", value: "300px"}, {name: "margin", value: "10px"}], [h3, img_1, p]);

let html = new HtmlElement("div", true, "", "", "", [div, div2]);

wrapper.innerHTML = div.getHtml(wrapper) + div2.getHtml(wrapper);

//console.log(wrapper.querySelectorAll("div"));

//html.addEnd(html.tags, wrapper);