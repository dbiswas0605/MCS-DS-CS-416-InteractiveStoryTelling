function DrawCoalToolTip(x,y)
{
    var tooltipCoal = d3.select('g')
    .append("g").attr('id','tooltipCoal')
    .attr("transform","translate(" + x + "," + y + ")");

    var leftTooltipBox = x;
    var topTooltipBox = y;


    tooltipCoal.append("rect")
    .attr("id","coaltooltipRect")
    .attr("x", leftTooltipBox-5)
    .attr("y", topTooltipBox)
    .attr('width',120)
    .attr("height",80)
    .style("fill", "red")
    .attr('opacity','0')
    .transition().duration(6000).attr('opacity','0.5');

    tooltipCoal.append('text')
    .attr('id','coalText')
    .style('font-size' , '10')
    .style('visibility', 'visible')
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

function DrawOilToolTip(x,y)
{
    var tooltipOil = d3.select('g')
    .append("g").attr('id','tooltipOil')
    .attr("transform","translate(" + x + "," + y + ")");

    var leftTooltipBox = x;
    var topTooltipBox = y;

    tooltipOil.append("rect")
    .attr("id","oiltooltipRect")
    .attr("x", -x)
    .attr("y", topTooltipBox)
    .attr('width',135)
    .attr("height",80)
    .style("fill", "pink")
    .attr('opacity','0.5')
    .transition().duration(2000).attr("x", leftTooltipBox - 5);

    tooltipOil.append('text')
    .attr('id','oilText')
    .style('font-size' , 10)
    .attr('x',leftTooltipBox)
    .attr('y','30')
    .append('tspan')
    .text("Since its discovery")

    .append('tspan')
    .text("in 1875. From then")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("petroleum has been used")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("to gernerate energy")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("and primary fuel for auto.")
    .attr('x',leftTooltipBox)
    .attr('dy','10') 
}

function DrawGasToolTip(x,y)
{
    var tooltipGas = d3.select('g')
    .append("g").attr('id','tooltipGas')
    .attr("transform","translate(" + x + "," + y + ")");

    var leftTooltipBox = x;
    var topTooltipBox = y;


    tooltipGas.append("rect")
    .attr("id","gastooltipRect")
    .attr("x", -x)
    .attr("y", topTooltipBox)
    .attr('width',150)
    .attr("height",80)
    .style("fill", "green")
    .attr('opacity','0.5')
    .transition().duration(2000).attr("x", leftTooltipBox - 5);

    tooltipGas.append('text')
    .attr('id','gasText')
    .style('font-size' , '10')
    .attr('x',leftTooltipBox)
    .attr('y',topTooltipBox + 20)
    .append('tspan')
    .text("Natuaral Gas has been")

    .append('tspan')
    .text("used to light the streets")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("in 1836 in Britain. Today it's")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("used in industrial, power")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("gereration and domestic use.")
    .attr('x',leftTooltipBox)
    .attr('dy','10') 
}

function CemetentToolTip(x,y)
{
    var tooltipCement = d3.select('g')
    .append("g").attr('id','tooltipCement')
    .attr("transform","translate(" + x + "," + y + ")");

    var leftTooltipBox = x;
    var topTooltipBox = y;


    tooltipCement.append("rect")
    .attr("id","cementtooltipRect")
    .attr("x", -x)
    .attr("y", topTooltipBox)
    .attr('width',150)
    .attr("height",80)
    .style("fill", "purple")
    .attr('opacity','0.5')
    .transition().duration(2000).attr("x", leftTooltipBox - 5);;

    tooltipCement.append('text')
    .attr('id','cementText')
    .style('font-size' , '10')
    .attr('x',leftTooltipBox)
    .attr('y',topTooltipBox + 20)
    .append('tspan')
    .text("Natuaral Gas has been")

    .append('tspan')
    .text("used to light the streets")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("in 1836 in Britain. Today it's")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("used in industrial, power")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("gereration and domestic use.")
    .attr('x',leftTooltipBox)
    .attr('dy','10') 
}

function CemetentToolTip(x,y)
{
    var tooltipCement = d3.select('g')
    .append("g").attr('id','tooltipCement')
    .attr("transform","translate(" + x + "," + y + ")");

    var leftTooltipBox = x;
    var topTooltipBox = y;


    tooltipCement.append("rect")
    .attr("id","cementtooltipRect")
    .attr("x", -x)
    .attr("y", topTooltipBox)
    .attr('width',150)
    .attr("height",80)
    .style("fill", "purple")
    .attr('opacity','0.5')
    .transition().duration(2000).attr("x", leftTooltipBox - 5);

    tooltipCement.append('text')
    .attr('id','cementText')
    .style('font-size' , '10')
    .attr('x',leftTooltipBox)
    .attr('y',topTooltipBox + 20)
    .append('tspan')
    .text("The cement industry is one")

    .append('tspan')
    .text("of the main producers of ")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("carbon dioxide. During 1900")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("we started realising its")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("effect on air pollution.")
    .attr('x',leftTooltipBox)
    .attr('dy','10') 
}

function FlareToolTip(x,y)
{
    var tooltipFlare = d3.select('g')
    .append("g").attr('id','tooltipFlare')
    .attr("transform","translate(" + x + "," + y + ")");

    var leftTooltipBox = x;
    var topTooltipBox = y;


    tooltipFlare.append("rect")
    .attr("id","flaretooltipRect")
    .attr("x", -x)
    .attr("y", topTooltipBox)
    .attr('width',170)
    .attr("height",80)
    .style("fill", "olive")
    .attr('opacity','0.5')
    .transition().duration(2000).attr("x", leftTooltipBox - 5);

    tooltipFlare.append('text')
    .attr('id','flareText')
    .style('font-size' , '10')
    .attr('x',leftTooltipBox)
    .attr('y',topTooltipBox + 20)
    .append('tspan')
    .text("Flares emit a host of air")

    .append('tspan')
    .text("pollutants, depending on the")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("chemical composition of the gas")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("being burnt. Flaring results in ")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("hydrogen sulfide emissions.")
    .attr('x',leftTooltipBox)
    .attr('dy','10') 
}

function OtherToolTip(x,y)
{
    var tooltipOther = d3.select('g')
    .append("g").attr('id','tooltipOther')
    .attr("transform","translate(" + x + "," + y + ")");

    var leftTooltipBox = x;
    var topTooltipBox = y;


    tooltipOther.append("rect")
    .attr("id","othertooltipRect")
    .attr("x", -x)
    .attr("y", topTooltipBox)
    .attr('width',175)
    .attr("height",75)
    .style("fill", "magenta")
    .attr('opacity','0.5')
    .transition().duration(2000).attr("x", leftTooltipBox - 5);;

    tooltipOther.append('text')
    .attr('id','otherText')
    .style('font-size' , '10')
    .attr('x',leftTooltipBox)
    .attr('y',topTooltipBox + 20)
    .append('tspan')
    .text("Other causeses air pollution")

    .append('tspan')
    .text("includes wildfires, chemicals")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("burning of garbage waste,")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("agricultural activities, ")
    .attr('x',leftTooltipBox)
    .attr('dy','10')

    .append('tspan')
    .text("chemical/synthetic products, etc.")
    .attr('x',leftTooltipBox)
    .attr('dy','10') 
}