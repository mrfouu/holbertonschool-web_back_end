#!/usr/bin/env python3
"""
This module contains a function that returns a function,
that multiplies a float by a given multiplier.
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies a float by a given multiplier.
    Args:
        multiplier: The multiplier to use.
    Returns:
        A function that multiplies a float by the given multiplier.
    """
    return lambda x: x * multiplier