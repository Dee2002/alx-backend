# 0x01. Caching

This project covers the implementation of various caching algorithms in Python. Each class represents a different caching strategy and extends a base caching class, `BaseCaching`.

## Learning Objectives

By the end of this project, you should be able to explain:
- What a caching system is
- The purpose of a caching system
- The limitations of a caching system
- The different cache replacement policies: FIFO, LIFO, LRU, MRU, LFU

## Requirements

- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using Python 3.7
- All your files should end with a new line
- The first line of all your files should be exactly `#!/usr/bin/env python3`
- A `README.md` file at the root of the folder of the project is mandatory
- Your code should use the pycodestyle style (version 2.5)
- All your files must be executable
- The length of your files will be tested using `wc`
- All your modules should have a documentation (use `python3 -c 'print(__import__("my_module").__doc__)'`)
- All your classes should have a documentation (use `python3 -c 'print(__import__("my_module").MyClass.__doc__)'`)
- All your functions (inside and outside a class) should have a documentation (use `python3 -c 'print(__import__("my_module").my_function.__doc__)'` and `python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)'`)

## Installation

To get started with the project, clone the repository:

```sh
git clone https://github.com/your_username/alx-backend.git
cd alx-backend/0x01-caching

## Classes and Algorithms
### BasicCache

-    A basic caching system with no limit.

### FIFOCache

-    Implements the FIFO (First In, First Out) caching algorithm.

### LIFOCache

-    Implements the LIFO (Last In, First Out) caching algorithm.

### LRUCache

-    Implements the LRU (Least Recently Used) caching algorithm.

### MRUCache

-    Implements the MRU (Most Recently Used) caching algorithm.

### LFUCache

-    Implements the LFU (Least Frequently Used) caching algorithm.

Usage

You can test the caching classes using the provided main files (0-main.py, 1-main.py, etc.). For example:

sh

./0-main.py
./1-main.py
./2-main.py
./3-main.py
./4-main.py
./100-main.py

Each main file demonstrates the use of the corresponding cache replacement policy.
Example

Here is an example of how to use the BasicCache class:

python

#!/usr/bin/python3
""" 0-main """
BasicCache = __import__('0-basic_cache').BasicCache

my_cache = BasicCache()
my_cache.print_cache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.print_cache()
print(my_cache.get("A"))
print(my_cache.get("B"))
print(my_cache.get("C"))
print(my_cache.get("D"))
my_cache.print_cache()
my_cache.put("D", "School")
my_cache.put("E", "Battery")
my_cache.put("A", "Street")
my_cache.print_cache()
print(my_cache.get("A"))

This will produce the following output:

sh

Current cache:
Current cache:
A: Hello
B: World
C: Holberton
Hello
World
Holberton
None
Current cache:
A: Hello
B: World
C: Holberton
Current cache:
A: Street
B: World
C: Holberton
D: School
E: Battery
Street
