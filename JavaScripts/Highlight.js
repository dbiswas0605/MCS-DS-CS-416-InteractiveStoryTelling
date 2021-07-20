<!DOCTYPE html>
<meta charset="utf-8">

<!-- Load d3.js -->
<script src="https://d3js.org/d3.v4.js"></script>

<!-- Create a button to trigger the transition -->
<button onclick="myFunction()">Trigger transition2</button>

<!-- Create a div with just a rect in svg -->
<div>
  <svg width="960px" height="400px">
    <Circle
        id="my_cir" cx="100" cy="100" r="20"
        fill="none" stroke-width="1"/>

      <Circle
        id="my_cir2" cx="100" cy="100" r="10"
        fill="#5d1818" stroke-width="1"/>
  </svg>
</div>

<!-- this is a test -->
<script>
function HiglightPoint(){

  d3.select("#my_cir")

    // First, make the bar wider
    .transition()
    .duration(1000)
    .attr("r", "15")
    .style("fill", "orange")

    .transition()
    .duration(1000)
    .attr("r", "10")
    .style("fill", "#5d1818");    
}

function myFunction() {
  setInterval(HiglightPoint, 2500);
}

</script>
