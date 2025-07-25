// Functional Interface
@FunctionalInterface
interface Greeting {
    void sayHello(String name); // Single Abstract Method
}

// Main Class
public class FunctionalInterfaceDemo {
    public static void main(String[] args) {
        // Using Lambda Expression to implement the interface
        Greeting greet = (name) -> System.out.println("Hello, " + name + "!");

        // Calling the method
        greet.sayHello("Deepa");
    }
}
