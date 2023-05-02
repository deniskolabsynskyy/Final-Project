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

  
