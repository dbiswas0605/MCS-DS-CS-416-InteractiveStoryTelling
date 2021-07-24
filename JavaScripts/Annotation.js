function DrawCoalToopTip(x,y)
{
    var tooltipCoal = d3.select('g')
    .append("g").attr('id','tooltipCoal')
    .attr("transform","translate(" + x + "," + y + ")");

    var leftTooltipBox = x;
    var topTooltipBox = y;


    tooltipCoal.append("rect")
    .attr("id","coaltooltipRect")
    .attr("x", leftTooltipBox)
    .attr("y", topTooltipBox)
    .attr('width',120)
    .attr("height",80)
    .style("fill", "red")
    .attr('opacity','0.5');

    tooltipCoal.append('text')
    .attr('id','coalText')
    .style('font-size' , '10')
    .attr('x',leftTooltipBox)
    .attr('y','30')
    .append('tspan')
    .text("The coal has been")

    .append('tspan')
    .text("a primary source of")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("fuel since 1750. It's")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("still used to date")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("for power generation.")
    .attr('x',leftTooltipBox)
    .attr('dy','10') 
}