let chek = [
    {
        name: "Хлеб",
        count: 2,
        price: 25
    },
    {
        name: "Молоко",
        count: 1,
        price: 45
    },
    {
        name: "Яблоко",
        count: 3,
        price: 145
    }
]

function getChek(p){
    let out = document.querySelector(".chek");
    p.forEach(p => {
        out.insertAdjacentHTML("beforeend", 
        `<li>${p.name} (${p.count} шт.) --------${p.price} руб за шт ----- Итого: ${p.price * p.count} руб</li>
        `);
    });
    out.insertAdjacentHTML("beforeend", `
        <p>Сумма к оплате: ${getSum(chek)} руб</p>
        <p>Самая дорогая покупка за ${getMax(chek)} руб</p>
        <p>Средняя цена продуктов в чеке ${getAvv(chek)} руб</p>
    `)
}

getChek(chek);

function getSum(chek){
    let sum = chek.map((p)=> (p.price * p.count));
    return sum.reduce((acc, num) => acc + num, 0);
}

function getMax(chek) {
    let sum = chek.map((p)=> (p.price * p.count));   
    return Math.max.apply(Math, sum);
}

function getAvv(chek) {
    let sum = chek.map((p)=> (p.price * p.count));
    return sum.reduce((acc, num) => acc + num, 0)/sum.length;
}

