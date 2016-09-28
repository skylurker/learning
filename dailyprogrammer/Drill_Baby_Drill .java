// JAVA 09/Sept/2016
// https://www.reddit.com/r/dailyprogrammer_ideas/comments/4d5ehh/easy_drill_baby_drill/
// Find all of the numbers from 1-1000 that are divisible by 7
// TODO clean up and extend range to 1..1000

import java.util.stream.*;

public class HelloWorld{

    //https://www.reddit.com/r/dailyprogrammer_ideas/comments/4d5ehh/easy_drill_baby_drill/
    // 09 Sept 2016
     // Find all of the numbers from 1-1000 that are divisible by 7

     // public static ArrayList<Integer> divisible(int begin, int end){
     public static void divisible(){
         // ArrayList<Integer> list = new ArrayList<Integer>;
         // http://www.deadcoderising.com/2015-05-19-java-8-replace-traditional-for-loops-with-intstreams/
         int[] arr = IntStream.rangeClosed(1, 21).filter(x -> x % 7 == 0).toArray();
        for (int n : arr){
            System.out.println(n);
        }
        //return arr;
     }

     public static void main(String []args){
        System.out.println("Hello World");
        divisible();
     }
}