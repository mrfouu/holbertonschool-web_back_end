#!/usr/bin/env python3
"""the function async generator"""
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """the function"""
    return [i async for i in async_generator()]
