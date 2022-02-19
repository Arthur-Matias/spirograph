import p5 from "p5";

export default function Sketch(renderer: p5){
    
    let multiplierSlider: p5.Element
    let numOfPointsSlider: p5.Element

    let radius:number = 100;
    let numOfPoints: number = 10;
    let step: number = renderer.TAU / numOfPoints;
    let multiplier = 2;

    function setup(){
        renderer.createCanvas(renderer.windowWidth, renderer.windowHeight);
        renderer.angleMode(renderer.RADIANS);
        
        numOfPointsSlider = renderer.createSlider(10, 500, 10, 1);
        multiplierSlider = renderer.createSlider(2, 100, 2, 0.01);
    }
    
    function draw(){
        renderer.background(0);
        renderer.translate(renderer.width/2, renderer.height/2);
        
        renderer.noFill();
        renderer.strokeWeight(1);
        renderer.stroke(255);
        renderer.circle(0, 0, 2*radius);
        
        numOfPoints = Number(numOfPointsSlider.value());
        multiplier = Number(multiplierSlider.value());
        step = renderer.TAU / numOfPoints;
        
        drawText();
        drawPoints();
        drawConnections(multiplier);
    }
    function drawText(){
        let multiplierLabel = "Multiplier: " + multiplier;
        let numOfPointsLabel = "Total points: " + numOfPoints;
        
        numOfPointsSlider.position(100, 100)
        multiplierSlider.position(100, 130)

        renderer.translate(0,0)
        renderer.text(numOfPointsLabel, 100, 240)
        renderer.text(multiplierLabel, 100, 210)
    }
    function drawPoints(){
        for (let i = 0; i < numOfPoints; i++) {
            let x = radius * renderer.sin(step * i)
            let y = radius * renderer.cos(step * i)      

            renderer.stroke(255,0,0, 255)
            renderer.strokeWeight(4)
            renderer.point(x, y)
        }
    }
    function drawConnections(multiple: number){
        for (let i = 0; i < numOfPoints; i++) {
            let x = radius * renderer.sin(step * i)
            let y = radius * renderer.cos(step * i)         
            renderer.stroke(255, 10)
            renderer.strokeWeight(1)
            renderer.point(x, y)
            let nextPoint = i*multiple

            while(nextPoint>=numOfPoints){
                nextPoint-=numOfPoints
            }

            let connectTo = {
                x: radius * renderer.sin(step * nextPoint),
                y: radius * renderer.cos(step * nextPoint)
            }

            renderer.stroke(255, 0, 0, 100)
            renderer.strokeWeight(2)
            renderer.line(x, y, connectTo.x, connectTo.y)
        }
    }

    renderer.setup = setup;
    renderer.draw = draw;
}