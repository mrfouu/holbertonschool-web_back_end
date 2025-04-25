#!/usr/bin/env python3
"""
This module contains a function that returns the length of a list.
"""

from typing import Iterable, List, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Args:
        lst: The list to process.
    Returns:
        A list of tuples, where each tuple contains an element
        from the input list and its length.
    """
    return [(i, len(i)) for i in lst]
