#!/usr/bin/env python3
""" LFUCache module """

from base_caching import BaseCaching
from collections import defaultdict


class LFUCache(BaseCaching):
    """ LFUCache defines a LFU caching system """

    def __init__(self):
        """ Initialize the cache """
        super().__init__()
        self.frequency = defaultdict(int)
        self.use_order = {}

    def put(self, key, item):
        """ Add an item in the cache """
        if key is not None and item is not None:
            if key in self.cache_data:
                self.cache_data[key] = item
            else:
                if len(self.cache_data) >= self.MAX_ITEMS:
                    lfu_key = min(self.cache_data,
                                  key=lambda k: (self.frequency[k],
                                                 self.use_order[k]))
                    print("DISCARD:", lfu_key)
                    del self.cache_data[lfu_key]
                    del self.frequency[lfu_key]
                    del self.use_order[lfu_key]
                self.cache_data[key] = item
            self.frequency[key] += 1
            self.use_order[key] = len(self.use_order)

    def get(self, key):
        """ Get an item by key """
        if key in self.cache_data:
            self.frequency[key] += 1
            self.use_order[key] = len(self.use_order)
            return self.cache_data[key]
        return None
