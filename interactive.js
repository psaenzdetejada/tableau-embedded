import {  FilterUpdateType } from 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';
  $(document).ready(() => {


function filterState() {
    let viz = document.getElementById("tableauViz2");
    console.log( viz);
    let sheet = viz.workbook.activeSheet;
    const saleMap = sheet.worksheets.find((ws) => ws.name == "Top marcas");
    saleMap.applyFilterAsync("COD_TIPO", ["Ambulancia"], FilterUpdateType.Replace);
};


function clearState() {
    let viz = document.getElementById("tableauViz2");
    console.log( viz);
    let sheet = viz.workbook.activeSheet;
    const saleMap = sheet.worksheets.find((ws) => ws.name == "SaleMap");
    saleMap.clearFilterAsync("State");
};

function unDo() {
    let viz = document.getElementById("tableauViz2");
    console.log( viz);
    viz.undoAsync();
};


$("#filterButton").click(() => {
    filterState();

});

$("#clearButton").click(() => {
    clearState();

});

$("#undoButton").click(() => {
    unDo();

});


})
