#!/usr/bin/env python3
"""
Module 6-sum_mixed_list - Sum a list of mixed types
"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Sum a list of mixed types and return the result
    """
    return sum(mxd_lst)