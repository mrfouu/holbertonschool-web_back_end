#!/usr/bin/env python3
"""
This module contains a function that converts a dictionary to a list of tuples.
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Convert a key-value pair to a tuple.
    Args:
        k: The key to convert.
        v: The value to convert.
    Returns:
        A tuple containing the key and the value.
    """
    return k, float(v ** 2)