// const newLocal = "3156";

// const express = require('express');

// const cors = require('cors');

// const app = express();



// const ProductList = require('products.json');
// const { query } = require('express');




// app.use(cors());
// app.use(express.json());

// function filterProducts(queryList,queryName){
//     if(queryList[queryName]){
//         switch(queryName){
//             case "min":
//             return ProductList.map((product) => {
//                 if(product.Price >= queryList.min){
//                     return product
//                 }   
//             })
//         }
//     }
// }

// app.get('api/products' , (req,res) => {
//     let filterProducts = [];
//     if(req.query){
//         filterProducts = [...filterProducts(req.query,"max"), ...filterProducts];
//         filterProducts = [...filterProducts(req.query,"min"), ...filterProducts];
//         filterProducts = [...filterProducts(req.query,"color"), ...filterProducts]
//         res.json(filterProducts)
//     }

//     res.json(ProductList)
//     //Можемо зробити фільтри 
// })

// app.get('api/products:id' , (req,res) => {
//     const currentId = req.params.id;
//     const findProducts = ProductList.filter((product) => {
//         if(currentId == product.id){
//             return product
//         }
//     })
//     if(findProducts){
//         res.json(findProducts)
//     }else{
//         res.status(440).send();
//     }
// })

// app.listen(PORT , () => {
//     console.log("final project https://localhost:" + PORT)
// })




function tab(but_tab, hidden_block_tab) {
    /*проверяем на событие нажатия на кнопку которыю вы передаёте в качестве параметра*/
  but_tab.addEventListener("click", function() {
        /*если у блока с контентом есть класс "hidden_block"*/
      if(hidden_block_tab.classList.contains('hidden_block')) {
            /*удаляем класс "hidden_block"*/
          hidden_block_tab.classList.remove('hidden_block');
            /*ставим класс "visible_block"*/
          hidden_block_tab.classList.add('visible_block');
      }
        /*если у блока с контентом есть класс "visible_block"*/
      else if(hidden_block_tab.classList.contains('visible_block')) {
          hidden_block_tab.classList.remove('visible_block');
          hidden_block_tab.classList.add('hidden_block');
      }
  }); 
}

/*находим элемент кнопку*/
var download_more = document.querySelector('.container_for_tab .but_for_tab');
/*находим элемент блока со скрытым контентом*/
var hidden_list = document.querySelector('.container_for_tab .tab_content');

/*запускаем функцию и передаём в неё параметры*/
tab(download_more, hidden_list);

  













// const services = [{
//   id: 1,
//   Type: "",
//   Size: "L",
//   Color: "Red"
// },
// {
//   id: 2,
//   Type: "Apple",
//   Size: "S",
//   Color: "Black"
// },
// {
//   id: 3,
//   Type: "Window",
//   Size: "M",
//   Color: "Black"
// },
// {
//   id: 4,
//   Type: "Linux",
//   Size: "M",
//   Color: "White"
// },
// {
//   id: 5,
//   Type: "Linux",
//   Size: "S",
//   Color: "Red"
// },
// {
//   id: 6,
//   Type: "Windows",
//   Size: "S",
//   Color: "Red"
// },
// ]

// const findServices = (filters) => {
// let answer = [...services];

// for (const filter in filters) {
//   const filterSet = filters[filter];
 
//   answer = answer.filter(
//     item => filterSet.size === 0 ||  filterSet.has(item[filter])
//   );
// }

// document.querySelector('#selected').innerHTML = answer.map(item => `<p>${item.Type} ${item.Size} ${item.Color}</p>`).join('');

// return answer;
// }

// const checkboxes = document.querySelectorAll('#form [type="checkbox"]');

// const filters = {
//   Type: new Set(),
//   Size: new Set(),
//   Color: new Set(),
// };

// checkboxes.forEach(checkbox => {
// checkbox.addEventListener('change', (e) => {
//   console.clear();
  
//   const target = e.target;
//   const [prop, value] = target.name.split('-');

//   filters[prop][target.checked ? 'add' : 'delete']('' + value);

//   findServices(filters);
// })
// })

// document.onload = findServices(filters);
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});





// GenerateGenres();

function filterGames(genre) {
  var games = document.getElementsByClassName("game");
  if (genre == "all") genre = "";
  for (var i = 0; i < games.length; i++) {
      games[i].style.display = "none";
      if (games[i].className.indexOf(genre) > -1) games[i].style.display = "block";
  }
}
filterGames("all");




const genre = {
  name: 'Sports',
  img: './img/bg-image-6.png'
}

const button = document.createElement('button')
button.addEventListener('click', () => {
  const basket = localStorage.getItem('shop-basket');

  if(basket) {
      const JSONBasket = JSON.parse(basket);
      JSONBasket.push(genre);

      localStorage.setItem('shop-basket', JSON.stringify(JSONBasket))
  } else {
      const arrBasket = [];

      arrBasket.push(genre);

      localStorage.setItem('shop-basket', JSON.stringify(arrBasket))
  }

  // при натисканні у вас вже може бути корзин
  // при натисканні корзини може не бути

})
button.textContent = "BUY";

const basket = JSON.parse(localStorage.getItem('shop-basket'));