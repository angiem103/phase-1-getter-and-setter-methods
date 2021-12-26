class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter() {
        return this.radius * 2
    }
    get circumference() {
        return Math.PI * this.diameter
    }
    get area() {
        return Math.PI * (this.radius * this.radius)
    }
    set diameter(newDiameter) {
        this.radius = newDiameter/2
 
    }
    set circumference(newCircumference) {
        let newDiameter = newCircumference/Math.PI
        this.radius = newDiameter/2
    }
    set area(newArea) {
        let radiusSquared = newArea / Math.PI
        this.radius = Math.sqrt(radiusSquared)
    }
}