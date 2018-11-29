[Back to main page](https://ereeq.github.io/proglangblog/)

## Partial correcteness of while-loops

**Exercise:** What do the following two programs compute? What pre and postconditions can be used to formalise this? Find a loop invariant and use it to prove the partial correctness of this program.

1)
````
        while (i < 100 ) do
            y := y+x
            i := i+1  
        done
````
This code will loop `100 - i` times, where x is added every time. This will result at the end, `y = y + (x*100)`. But since we do not know y and x, this program is only partially viable - it will terminate the while loop but y and x is unknown.
2)
````
        while  (i < k ) do
            i := i+1
            y := y*i
        done
````
This code will loop `k - i` times, and y will be some big number as it will multiply itself by i `k-i` times. This it incomplete because we do not know what the termination is because k is undefined.
### Exercise on Partial Correctness (blog)

Go back to your on termination of a while loop. In your blog, discuss the partial correctness from the point of the loop. (Or, alternatively, choose another program with a while loop.)
