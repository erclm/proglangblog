[Back to main page](https://ereeq.github.io/proglangblog/)

## Partial correcteness of while-loops

**Exercise:** What do the following two programs compute? What pre and postconditions can be used to formalise this? Find a loop invariant and use it to prove the partial correctness of this program.

1)

        while (i < 100 ) do
            y := y+x
            i := i+1  
        done

2)

        while  (i < k ) do
            i := i+1
            y := y*i
        done

### Exercise on Partial Correctness (blog)

Go back to your on termination of a while loop. In your blog, discuss the partial correctness from the point of the loop. (Or, alternatively, choose another program with a while loop.)
