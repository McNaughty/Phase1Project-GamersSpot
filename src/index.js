$(document).ready(function () {
  jQuery.noConflict(); //To prevent conflict between javascript variables using $ and jQuery
  $('li>a[id$="Container"]').click(function (event) {
    event.preventDefault();
    var href = $(this).attr("href");
    //alert("Loading " + href)
    $("#container").load(href);
    return false;
  });
});

// fetch game data

// fetch("http://localhost:3000/games")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (gameData) {
//     let placeholder = document.querySelector("#data-output");
//     let output = "";
//     // console.log(gameData);
//     window.gameList = gameData;
//     for (let game of gameData) {
//       output += `
//         <tr>
//         <td>${game.ID}</td>
//         <td><img src='${game.Poster}'></td>
//         <td>${game.Title}</td>
//         <td>${game.Genre}</td>
//         <td>${game.Publisher}</td>
//         <td>${game.Status}</td>
//         <td>${game.Steamurl}</td>

//         </tr>

//         `;

//         //colUniqueVal(gameData);
//     }

//     placeholder.innerHTML = output;
//   });

// Get unique values for the columns being filtered

function colUniqueVal() {
  let unique_col_val_obj = {};
  allFilters = document.querySelectorAll(".tableFilter");
  allFilters.forEach((filterElement) => {
    let column_index = filterElement.parentElement.getAttribute("col-index");
    //console.log(column_index);
    window.specificColumnIndex = column_index;
    window.filterElementItem = filterElement;

    rows = document.querySelectorAll("#gameTable > tbody > tr");
    //pass each row with its respective child
    rows.forEach((row) => {
      //console.log(row.querySelector("td:nth-child("+column_index+")").innerHTML);
      rowContent = row.querySelector(
        "td:nth-child(" + column_index + ")"
      ).innerHTML;
      //console.log(rowContent);
      //For splitting columns that have multiple string options e.g. genre types.
      let indivContent = rowContent.split(",");
      // console.log(indivContent)

      //Pick each split element from indivContent array and store as item on its own
      for (i = 0; i < indivContent.length; i++) {
        let storedContent = indivContent[i];
        //console.log(storedContent);

        //  Check if the column index already exists in our col_val_obj object
        if (column_index in unique_col_val_obj) {
          //check if the cell value does not exist in the array using ! to negate the include method
          if (!unique_col_val_obj[column_index].includes(storedContent)) {
            unique_col_val_obj[column_index].push(storedContent);
          }
        } else {
          unique_col_val_obj[column_index] = new Array(storedContent);
        }
      }

      //   //  Check if the column index already exists in our col_val_obj object
      //     if (column_index in unique_col_val_obj){
      //         //check if the cell value exists
      //         if (unique_col_val_obj[column_index].includes(storedContent)){
      //             alert(rowContent + "already exists :" + unique_col_val_obj[column_index])
      //         }else{
      //             unique_col_val_obj[column_index].push(storedContent)
      //             alert("Array after adding the row content:" + unique_col_val_obj[column_index])
      //         }
      //     } else{
      //         unique_col_val_obj[column_index] = new Array(storedContent)
      //     }
    });
  });

//   for (i in unique_col_val_obj) {
//     alert( "column index:" + i + "has unique values: \n " + unique_col_val_obj[i]
//     );
//   }
  updateSelectOptions(unique_col_val_obj);
}

//Function to add the unique values to the <option> tags for the drop down

function updateSelectOptions(unique_col_val_obj){
    allFilters = document.querySelectorAll(".tableFilter")
    allFilters.forEach((filterE) => {
       let colmn_index = filterE.parentElement.getAttribute("col-index");
        console.log(unique_col_val_obj[colmn_index]);
 
        unique_col_val_obj[colmn_index].forEach((i) => {
            
        filterE.innerHTML = filterE.innerHTML + `\n<option value="${i}">${i}</option>`
       })
    })

   // filter_rows();
}

function filter_rows(){
  allFilters = document.querySelectorAll(".tableFilter")
  let filter_value_object = {}

  allFilters.forEach((filterElem) => {
    let column_indexx = filterElem.parentElement.getAttribute("col-index");

    value = filterElem.value
    console.log (value);
    if (value != "all"){
      filter_value_object[column_indexx] = value;
      
    }
  });

  let column_cell_value_dictionary = {};

  const filteredRows = document.querySelectorAll("#gameTable > tbody > tr");
  filteredRows.forEach((row) => {
    let displayRow = true;

    allFilters.forEach((filter_row) => {
      column_indexx = filter_row.parentElement.getAttribute("col-index");
      column_cell_value_dictionary[column_indexx] = row.querySelector("td:nth-child(" + column_indexx + ")"
      ).innerHTML;

      //console.log(column_cell_value_dictionary[column_indexx]);
    })

    for (let col_i in filter_value_object ){
      filter_value = filter_value_object[col_i];
      console.log(filter_value);
      
      rowCellValue = column_cell_value_dictionary[col_i]

      if (rowCellValue.indexOf(filter_value) == -1 && filter_value != "all"){
        displayRow = false;
        break;
      }
    }

    if (displayRow == true){
      row.style.display = "table-row"
    }else{
      row.style.display = "none"
    }

  })


}




document.addEventListener("DOMContentLoaded", () => {
  fetch("https://retoolapi.dev/sPoClF/games")
    .then(function (response) {
      return response.json();
    })
    .then(function (gameData) {
      let placeholder = document.querySelector("#data-output");
      let output = "";
      // console.log(gameData);
      window.gameList = gameData;
      for (let game of gameData) {
        output += `
        <tr>
        <td>${game.ID}</td>
        <td><img src='${game.Poster}'></td>
        <td>${game.Title}</td>
        <td>${game.Genre}</td>
        <td>${game.Publisher}</td>
        <td>${game.Status}</td>
        <td>${game.Steamurl}</td>
        
        </tr>
        
        `;

        //colUniqueVal(gameData);
      }

      placeholder.innerHTML = output;
      
      colUniqueVal();   
      //filter_rows();
    });

});
