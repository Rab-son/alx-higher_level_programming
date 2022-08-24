#!/usr/bin/python3
"""Print the alphabet in lowercase, not followed by a new line."""

for ch in range(97, 123):
    print("{:c}".format(ch), end='')
