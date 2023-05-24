
import { TableauViz } from "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.js";

// Initialization of the Tableau visualization via JavaScript. Learn more here:
// https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_configure.html
const viz = new TableauViz();

viz.src = "https://public.tableau.com/views/RegionalSampleWorkbook/Storms";
viz.toolbar = "hidden";

document.getElementById("tableauViz").appendChild(viz);