const products = [
    {
        "id": 0,
        "name": "phone",
        "price": 500,
        "quantity": 10,
        "memory": "128 gb",
        "color": "blue",
    },
    {
        "id": 1,
        "name": "tablet",
        "price": 200,
        "quantity": 2,
        "memory": "256 gb",
        "color": "black",
    },
    {
        "id": 2,
        "name": "laptop",
        "price": 700,
        "quantity": 14,
        "memory": "512 gb",
        "color": "white",
    }
]

const cart = []



class Catalog {
    constructor(array) {
        this.Catalog = array
    }
    render(selector) {
        const container = document.querySelector(selector)
        this.Catalog.forEach(element => {
            const product = new Product(element)
            container.append(product.render(element.id))
        })
    }
}
class Product {
    constructor(object) {
        this.id = object.id
        this.name = object.title
        this.image = object.image
        this.price = object.price
        this.description = object.description
        this.memory = object.memory
        this.color = object.color
    }
    //addToCart(id){
    //cart.push(id)

    //}
    render(id) {
        const container = document.createElement("div")
        container.className = "card"

        const image = document.createElement('img');
        image.className = "card-img-top";
        image.src = this.image;

        const containerBody = document.createElement('div');
        containerBody.className = "card-body";

        const name = document.createElement("h5")
        name.className = "card-title";
        name.textContent = this.name

        const price = document.createElement("h6")
        price.className = "card-subtitle mb-2 text-muted"
        price.textContent = this.price;

        const description = document.createElement("p")
        description.textContent = this.description;

        const button = document.createElement("a")
        button.className = "btn btn-primary"
        button.textContent = "Додати товар в корзину"
        containerBody.append(name, price, description, button);

        container.append(image, containerBody);
        return container
    }
}

class Basket {
    constructor(array) {
        this.basket = array
        this.counts = {}
        this.basket = array.forEach((element) => {
            this.counts[element] = this.counts[element] ? this.counts[element] + 1 : 1;

            const ContainerCard = document.querySelector(".CardClass")

            //console.log(element)
            //console.log(Basket)
            //ContainerCard.append(this.renderItem(currentProduct))
        })
        console.log(this.counts)
        const cartFinder = new Promise((resolve, reject) => {
            const cartid = Object.keys(this.counts)
            let productInfo
            cartid.forEach((id) => {
                productInfo = products.find((product) => {

                    if (id === product.id) {
                        return product
                    }
                })
            })
            console.log(productInfo)
        })
        cartFinder.then()
    }
    render(object) {
        const container = document.createElement("div")
        container.className = "bascket-item"
        const name = document.createElement("h1")
        name.textContent = object.name
        const price = document.createElement("h2")
        price.textContent = object.price * object.amount
        const amount = document.createElement("h3")
        amount.textContent = object.amount
        container.append(name, price, amount)
        return container
    }
}


fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((response) => {
        const newCatalog = new Catalog(response)
        newCatalog.render(".catalog")
        const loading = document.querySelector(".loading")
        loading.style.display = "none"
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })


const bascketButton = document.querySelector(".catalogButton")
bascketButton.addEventListener("click", () => {
    const objectBascket = new Basket(cart)
})