# 0x00. Pagination

This project is part of the `alx-backend` repository. It focuses on implementing pagination techniques to handle large datasets efficiently in a REST API.

## Learning Objectives

By the end of this project, you should be able to explain:

1. How to paginate a dataset with simple `page` and `page_size` parameters.
2. How to paginate a dataset with hypermedia metadata.
3. How to paginate in a deletion-resilient manner.

## Setup

1. Ensure you have the necessary CSV file (`Popular_Baby_Names.csv`) in this directory.
2. The project uses Python 3.7+, so ensure it is installed.

## Files

- `0-simple_helper_function.py`: Contains the `index_range` function to calculate start and end indices for pagination.
- `1-simple_pagination.py`: Implements basic pagination using the `Server` class.
- `2-hypermedia_pagination.py`: Adds hypermedia pagination capabilities.
- `3-hypermedia_del_pagination.py`: Implements deletion-resilient pagination.

## Usage

1. Run the provided main files to test the functionality:

    ```bash
    ./0-main.py
    ./1-main.py
    ./2-main.py
    ./3-main.py
    ```

## Requirements

- All your files should end with a new line.
- The first line of all your files should be exactly `#!/usr/bin/env python3`.
- Your code should use the `pycodestyle` style (version 2.5.*).
- The length of your files will be tested using `wc`.
- All your modules should have a documentation string.
- All your functions should have a documentation string.
- All your functions and coroutines must be type-annotated.

## Testing

To test your implementations, you can run the provided main files. Each main file corresponds to a specific task:

```bash
python 0-main.py
python 1-main.py
python 2-main.py
python 3-main.py
