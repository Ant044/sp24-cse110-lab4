1) 3 is printed, because the for loop creates i (as a var so it stays in scope) as 0, and increments it until it reaches the length of the prices array that we inserted (3), then exits the loop and prints that variable.
2) 150 is printed. The variable discountedPrice is independently set every run of the loop to be an element of the prices array multiplied by (1 - discount). Because the last entry in prices is 300, the calculation for that particular price is retained after the for loop ends.
3) 150 is printed. finalPrice is the same as discountedPrice, except it is rounded to two decimal places. In this case that rounding changes nothing. 
4) This function returns the array [50, 100, 150]. For each element in the passed in prices array, the discount is "applied" to it and the new value is passed into a new array, which is then returned after all elements have been iterated through.
5) This causes an error. Because we are now declaring with let, the variable i is now exclusively within the scope of the for loop. Line 12 is outside the for loop, and cannot "see" i.
6) Error. discountedPrice is declared using "let" in a for loop, and line 13 is outside of the for loop, meaning that it is out of scope when called.
7) 150 is printed, for the same reason it did when we used var. Even though let was used, finalPrice was declared before the for loop and in the same block as line 14.
8) [50, 100, 150] is returned just like when we used var. Even though let is used, nothing is called out of scope so it functions the same way. 
9) There is an error because i is not in scope at line 11
10) 3 is returned, as that is the length of the array passed in. The const variable is created in the same scope as line 12.
11) the array [50, 100, 150] is returned. Because discountedPrice is declared in the for loop, despite being a const it can be run multiple times because it is repeatedly created and destroyed.
12) 
```
A - student.name
B - student["Grad Year"]
C - student.greeting()
D - student["Favorite Teacher"].name
E - student.courseLoad[0]
```
13) 
```
A - 32, int gets converted into a string and is concatenated
B - 1, because you can't negatively concatenate, the string is converted to int
C - 3, null is treated as 0 in mathematic operations
D - 3null, null is converted into a string and concatenated
E - 4, true is converted into 1 
F - 0, both false and null are numerically treated as 0
G - 3undefined, undefined is converted to a string then concatenated
H - NAN, undefined is converted to NaN and mathematical operations with NaN become NaN
```
14) 
```
A - true, 2 is converted into a number for comparison
B - false, string comparison is alphabetical (Based on ASCII)
C - true, '2' is converted to a number for comparison
D - false, triple equals also requires same type
E - false, true is converted to 1, which is != 2
F - true, Boolean(2) 
```
15) == allows for automatic type conversions before compairsons while === will return false if the variables are not the same type
17) The result is the array [2,4,6]. We get this because when the array [1,2,3] is passed in, modifyArray creates a new array, modifies each value of the old array using whatever function is passed into it, and puts the new value into the new array that it then returns. In this case, the passed in function just multiplies each number by 2.
19) This prints
```
1
4
3
2
```
as it prints 1 4 and 3 immediately, then prints 2 after the 1 second timer