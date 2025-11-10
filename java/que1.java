//1) create a class box with multiple constructors :  -n0-argment -one-argument -parameterized constructor 
class Box {
    double length;
    double width;
    double height;

    Box() {
        length = 1.0;
        width = 1.0;
        height = 1.0;
    }

    Box(double side) {
        length = side;
        width = side;
        height = side;
    }

    Box(double length, double width, double height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    double volume() {
        return length * width * height;
    }
}

public class que1 {
    public static void main(String[] args) {
        Box box1 = new Box();
        Box box2 = new Box(3.0);
        Box box3 = new Box(2.0, 3.0, 4.0);

        System.out.println("Volume of box1 (no-arg constructor): " + box1.volume());
        System.out.println("Volume of box2 (one-arg constructor): " + box2.volume());
        System.out.println("Volume of box3 (parameterized constructor): " + box3.volume());
    }
}