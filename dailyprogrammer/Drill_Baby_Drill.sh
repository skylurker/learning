#!/bin/bash
# https://www.reddit.com/r/dailyprogrammer_ideas/comments/4d5ehh/easy_drill_baby_drill/
# BASH scripts

# This file contains several programs for the same challenge entry (since there are sub-challenges).
# These mini-programs should be executed separately.

# September 29, 2016
# Find all of the numbers from 1-1000 that are divisible by 7
COUNT=1
while [ $COUNT -le 1000 ]; do
    if [ $((COUNT%7)) -eq 0 ]; then
    	echo $COUNT
    fi
    COUNT=$((COUNT+1))
done