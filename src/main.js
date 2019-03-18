import $ from 'jquery';
import * as d3 from 'd3';

$(document).ready(function() {
    'use strict';
    console.log('main js loaded');
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    // var c;
    // for (var x = 25; x < 400; x += 50) {
    //     for (var y = 25; y < 400; y += 50) {
    //         c = Shape.Circle(x, y, 10);
    //         c.fillColor = 'Black';
    //     }
    // }

    // var tool = new Tool();
    // tool.onMouseDown = function(event) {
    //     var c = Shape.Circle(event.point.x, event.point.y, 20);
    //     c.fillColor = 'green';
    // };

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    paper.view.draw();
});
