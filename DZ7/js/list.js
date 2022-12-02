let purchases = [
    {
        name: "Яблоки",
        quantity: 2,       
        buy: false
    },
    {
        name: "Хлеб",
        quantity: 1,       
        buy: false
    },
    {
        name: "Молоко",
        quantity: 2,       
        buy: true
    },    
]

function getList(product, sort) {  
    if(sort) 
    {
        product.sort(p => p.buy ? 1 : -1); //сортируем список
    }    
    product.forEach(p => {        
        document.querySelector(".purchases").insertAdjacentHTML("beforeend", 
        `<li onclick=buyProduct('${p.name}') class="${p.buy ? "itsbuy": "notbuy"}">${p.name} - ${p.quantity} ${!p.buy ? `<button>Купить</button>`: ""}</li>`);
    });
}


getList(purchases, true);


function setProduct(products) {
    
    let product = document.getElementById("productV");
    
    products.push({
            name: product.value,
            quantity: 1,           
            buy: false
    })

    console.log(products);

    document.querySelector(".purchases").innerHTML = "";
    getList(products, true);    
   
}

document.getElementById("setProduct").addEventListener("click", ()=> { setProduct(purchases) })


function buyProduct(product) {
    let list = purchases;   

    list.forEach(p => {
        if(p.name == product) {
            p.buy = true;
        }
    });

    document.querySelector(".purchases").innerHTML = "";
    getList(list);
}