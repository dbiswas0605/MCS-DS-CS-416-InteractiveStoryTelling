function DrawCoalToopTip(x,y)
{
    d3.select("g")
    .append("g").attr('id','tooltipCoal')
    .attr("transform","translate(" + x + "," + y + ")")
    .append("rect")
    .attr("id","coaltooltip")
    .attr("x", x)
    .attr("y", y)
    .attr('width',30)
    .attr("height",50)
    .style("fill", "grey")
    .attr('opacity','0.5');


    d3.select('#tooltipCoal')
    .append("text")
    .attr("dx", 20)
    .attr("dy", 25)
    .text("The coal has been a primary source or fuel since 1750. \
    Its still used");


}