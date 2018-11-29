[Back to main page](https://ereeq.github.io/proglangblog/)

### Exercise on TRSs (blog)

Choose a simple algorithm and formulate it as a rewriting system as in the exercise on sorting above. *Write a blog post about it.* Add in as much as you want and can of the material we learned so far, including the lectures on [TRSs](https://hackmd.io/s/BJLCzAKnQ).

What are the signature, variables and equations?
 - a Term Rewriting system is a system whose object are terms, and expressions are within nested sub-expressions.
 - it is basically a set of rules that makes 'l' into a 'r' (l->r).
  - $l$ reduces to $r$
 - it uses binary operators $\vee$ and $\wedge$ and the unary operator $\neg$.

 As in [Algorithms](https://ereeq.github.io/proglangblog/algorithms), I explained bubble sort. this becomes like this
`bubblesort(badc, 4) -> bubblesort(abdc, 3)`
`bubblesort(abdc, 3) -> bubblesort(abdc, 2)`
`bubblesort(abdc, 2) -> bubblesort(abcd, 1)`
