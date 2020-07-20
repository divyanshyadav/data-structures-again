# Hash table
- key value pair implementation of dictionary ADT

## operations
- insert
- remove
- find

## Hash table techniques
- Direct addressing
    - Memory wastage
    - only support integer keys
- Open addressing

## Hash function
- Maps keys to indices of array
- Comprise of
    - Hash code map(use to convert key to integer value)
    - Compression map(use to compress the key value so that it lies in the hash table boundaries)

## A good hash function
- Quick to compute
- A good hash function distributes keys uniformly across the hash table
- Minimizes the probability of collision
- It should map same key to same index

## Hash-Code Maps (hashing techniques)
- Integer cast
    - For numeric types less than 32bits
    - If key is less than 32bits
- Component sum
    - For numeric types with more than 32 bits(eg long, double)
    - Bad for strings
        - As two strings can have the same characters
- Polynomial accumulation
    - For strings of a natural language, combine the character values(ASCII) a0,a1,a2...a(n-1) by viewing them as coefficient of a polynomial: a0 + a1*x + ... + x^n-1 * a(n-1)
    - Choices of x = 33, 37, 39 or 41 gives at most 6 collisions on a vocabulary of 50,000 english words

## Compression Maps
- Use the remainder
    - h(k) = k mod m, k is the key and m is the size of table
    - h(k) lies in between 0 and m - 1
    - Bad
        - if m is power of 2 let say e, then h(k) gives the e least significant bits of k
        - all keys with the same ending goes to the same place
    - Good
        - if m is prime and not too close to exact power of 2
        - helps ensure uniform distribution
- Use
    - h(k) = Floor(m(kA mod 1))
    - k is the key, m is the table size
    - 0 < A < 1
    - m can be size of 2^p
    - Optimal choice of A depends on the characteristics of the data
    - knuth says use 
        - Fibonacci hashing
        - Conjugate of the golder ratio
        - (under-root(5) - 1) / 2 
- Multiply, Add and Divide (MAD)
    - h(k) = | ak + b | mod N
    - k is the key, 
    - a should not be the multiple of N
    - Same formula use in (pseudo) random number generators

## Universal hashing
    - Choose random hash function from the set of multiple hash function at the init of the hash table

## Collision resolution techniques
- Chaining (using linked list)
- Open Addressing
    - All elements are stored in the table i.e n <= m
    - Each table entry can contains either an element or null
    - Linear probing
    - Double hashing

## Load factor
- Given hash table T with m slots holding n elements, the load factor is defined as a = n/m