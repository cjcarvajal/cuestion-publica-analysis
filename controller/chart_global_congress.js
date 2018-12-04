
  var width = 600, height = 600
  var senado = 108
  var camara = 171
  var enviado = 29
  var entregaron = 14 // 9S 5C
  var valido = 11
  var analizable = 8

  var numNodes = 279
  var stepfunctions = []
  var stepTextInfo = []
  var step = 0 
  var nodes = d3.range(numNodes).map(function(d) {
      while(senado){
        while(enviado>14){
          while(entregaron>5){
            while(valido>3){
              while(analizable>3){
                analizable--;
                valido --;
                entregaron--;
                enviado--;
                senado--;
                return{
                  senado:1,
                  enviado:1,
                  entregaron:1,
                  valido:1,
                  analizable:1,
                  radius:5
                };
              }
            valido--;
            entregaron--;
            enviado--;
            senado--;
              return{
                senado:1,
                enviado:1,
                entregaron:1,
                valido:1,
                analizable:0,
                radius:5
              };
            }
          entregaron--;
          enviado--;
          senado--;
          return{
            senado:1,
            enviado:1,
            entregaron:1,
            valido:0,
            analizable:0,
            radius:5
              };    
          }
        enviado--;
        senado--;
          return{
            senado:1,
            enviado:1,
            entregaron:0,
            valido:0,
            analizable:0,
            radius:5
            };  
        }
        senado--;
        return{
            senado:1,
            enviado:0,
            entregaron:0,
            valido:0,
            analizable:0,
            radius:5
            };   
      }
      while(camara){
        while(enviado){
          while(entregaron){
            while(valido){
              while(analizable){
                analizable--;
                valido --;
                entregaron--;
                enviado--;
                camara--;
                return{
                  senado:0,
                  enviado:1,
                  entregaron:1,
                  valido:1,
                  analizable:1,
                  radius:5
                };
              }
            valido--;
            entregaron--;
            enviado--;
            camara--;
              return{
                senado:0,
                enviado:1,
                entregaron:1,
                valido:1,
                analizable:0,
                radius:5
              };
            }
          entregaron--;
          enviado--;
          camara--;
          return{
            senado:0,
            enviado:1,
            entregaron:1,
            valido:0,
            analizable:0,
            radius:5
              };    
          }
        enviado--;
        camara--;
          return{
            senado:0,
            enviado:1,
            entregaron:0,
            valido:0,
            analizable:0,
            radius:5
            };  
        }
        camara--;
        return{
            senado:0,
            enviado:0,
            entregaron:0,
            valido:0,
            analizable:0,
            radius:5
            };   
      }

  });

    stepTextInfo[0] = "Hoy el congreso lo componen en total <span class=\"red_text\"><b>279</b></span> personas.";
    stepTextInfo[1] = "De estos, <span class=\"red_text\"><b>108</b></span> pertenecen al Senado, lo que representa el <span class=\"red_text\"><b>39%</b></span> del congreso.";
    stepTextInfo[2] = "<span class=\"red_text\"><b>171</b></span> pertenecen a la Cámara de Representantes, lo que representa el <span class=\"red_text\"><b>61%</b></span> del congreso.";
    stepTextInfo[3] = "Cuestión Pública le envió tutelas a <span class=\"red_text\"><b>29</b></span> congresistas, es decir al <span class=\"red_text\"><b>10%</b></span> del congreso";
    stepTextInfo[4] = "Pero en total solo <span class=\"red_text\"><b>14</b></span> entregaron alguna información... lo que representa solo el <span class=\"red_text\"><b>5%</b></span> del congreso";
    stepTextInfo[5] = "Solo <span class=\"red_text\"><b>11</b></span> entregaron la información que se les pidió... estos representan el <span class=\"red_text\"><b>4%</b></span> del congreso";
    stepTextInfo[6] = "Pero solo <span class=\"red_text\"><b>8</b></span> entregaron información completa y coherente que se pueda usar para analizar... es decir  solo el <span class=\"red_text\"><b>3%</b></span> del congreso";
    stepTextInfo[7] = "Esto significa que a hoy ,dado que no existe nada que obligue a los congresistas a entregar esta información, falta conocer, investigar y analizar la información de <span class=\"red_text\"><b>268</b></span> congresistas... En otras palabras, a pesar de todo el esfuerzo que ha hecho Cuestión Publica, aún falta por investigar el <span class=\"red_text\"><b>96%</b></span> del congreso. <span class=\"red_text\"><b>Después de todo ya no parece tan mala idea lo que buscaba la consulta anticorrupción ¿No?</b></span>";

var textsvg = d3.select('#textinfo');

  var textsvg = d3.select('#textinfo');

  text = textsvg
  .node()
  .innerHTML= stepTextInfo[0];
  

  var svg = d3.select("#vis4");
  var g = svg.append("g");
  var simulation = d3.forceSimulation(nodes)
      .force('charge', d3.forceManyBody().strength(5))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(function(d) {
        return 13
      }));

      d3.timeout(function() {
      // See https://github.com/d3/d3-force/blob/master/README.md#simulation_tick
     for (var i = 0, n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay())); i < n; ++i) {
       simulation.tick();
     }

      var im = g.selectAll('image')
        .data(nodes);

        im.enter()
        .append('image')
        .attr('xlink:href','https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg')
        .attr('width', function(d) {
          return 40
        })
        .attr('height', function(d) {
          return 40
        })
        .attr('x', function(d) {
          return d.x
        })
        .attr('y', function(d) {
          return d.y
        });




    });

    function showWhole(){
      var im = g.selectAll('image')
        .data(nodes);

        im.transition()
        .duration(1000)
        .attr('opacity',function(d){
          return "1";});
        //im.exit().remove();   
    };     

    function showSenado(){
      var im = g.selectAll('image')
        .data(nodes);

        im.transition()
        .duration(1000)
        .attr('opacity',function(d){
          return d.senado? "1":"0.1";});
        //im.exit().remove();   
    };
    function showCamara(){
      var im = g.selectAll('image')
        .data(nodes);

        im.transition()
        .duration(1000)
        .attr('opacity',function(d){
          return d.senado? "0.1":"1";});
        //im.exit().remove();   
    };
    function showEnviado(){
      var im = g.selectAll('image')
        .data(nodes);

        im.transition()
        .duration(1000)
        .attr('opacity',function(d){
          return d.enviado? "1":"0.1";});
        //im.exit().remove();   
    };
    function showEntregaron(){
      var im = g.selectAll('image')
        .data(nodes);

        im.transition()
        .duration(1000)
        .attr('opacity',function(d){
          return d.entregaron? "1":"0.1";});
        //im.exit().remove();   
    };
    function showValido(){
      var im = g.selectAll('image')
        .data(nodes);

        im.transition()
        .duration(1000)
        .attr('opacity',function(d){
          return d.valido? "1":"0.1";});
        //im.exit().remove();   
    };
    function showAnalizable(){
      var im = g.selectAll('image')
        .data(nodes);

        im.transition()
        .duration(1000)
        .attr('opacity',function(d){
          return d.analizable? "1":"0.1";});
        //im.exit().remove();   
    };
    function showLoqueFalta(){
      var im = g.selectAll('image')
        .data(nodes);

        im.transition()
        .duration(1000)
        .attr('opacity',function(d){
          return d.valido? "0.1":"1";});
        //im.exit().remove();   
    };

      stepfunctions[0] = showWhole;
      stepfunctions[1] = showSenado;
      stepfunctions[2] = showCamara;
      stepfunctions[3] = showEnviado;
      stepfunctions[4] = showEntregaron;
      stepfunctions[5] = showValido;
      stepfunctions[6] = showAnalizable;
      stepfunctions[7] = showLoqueFalta; 

    function showNext(){
      console.log("next");
      step++;
      if(step > 7) step = 7;

      stepfunctions[step]();
      updateText(step);
    }
    function showPrevious(){
      step--;
      if(step <= 0) step = 0;
      stepfunctions[step]();
      updateText(step);

    }
    function updateText(step){
    var text = textsvg
    .transition()
    .duration(1000)
    .node().innerHTML =stepTextInfo[step];
    }



