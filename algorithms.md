[Back to main page](https://ereeq.github.io/proglangblog/)

# Recursive Bubble Sort

So I decided to make the bubble sort algorithm in the rewriting system. Bubble sort is simple, you just go through all the elements in a set of numbers and switch the two neighboring numbers if one's bigger than another.

In a high-level programming language, in its iterative form, its just a nested loop going through all the elements one at a time.
````java
void bubbleSort(int arr[])
    {
        int n = arr.length;
        for (int i = 0; i < n-1; i++)
            for (int j = 0; j < n-i-1; j++)
                if (arr[j] > arr[j+1])
                {
                    //switch
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
    }
````
In recursive format, it becomes this:
````java
void bubbleSort(int arr[], int n)
    {
        // Base case
        if (n == 1)
            return;
        // One pass of bubble sort. After
        // this pass, the largest element
        // is moved (or bubbled) to end.
        for (int i=0; i<n-1; i++)
            if (arr[i] > arr[i+1])
            {
                // swap arr[i], arr[i+1]
                int temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }

        // Largest element is fixed,
        // recur for remaining array
        bubbleSort(arr, n-1);
    }
````

simply,

````
bubblesort([n], 1) = [0]
bubblesort([n], m) = bubblesort([n*], m-1) //in this case, n* means its a modified version of the [n].
````
