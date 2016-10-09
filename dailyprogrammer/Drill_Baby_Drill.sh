# This file contains several programs for the same challenge entry (since there are sub-challenges).
# These mini-programs should be executed separately.



#!/bin/bash
# https://www.reddit.com/r/dailyprogrammer_ideas/comments/4d5ehh/easy_drill_baby_drill/
# BASH scripts

# September 29, 2016
# Find all of the numbers from 1-1000 that are divisible by 7
COUNT=1
while [ $COUNT -le 1000 ]; do
    if [ $((COUNT%7)) -eq 0 ]; then
    	echo $COUNT
    fi
    COUNT=$((COUNT+1))
done

##########
# September 30 2016

#!/bin/bash
# https://www.reddit.com/r/dailyprogrammer_ideas/comments/4d5ehh/easy_drill_baby_drill/
# Find all of the numbers from 1-1000 that have a 3 in them
COUNT=1
SUBSTRING=3
until [ $COUNT -gt 1000 ]; do
    if [ `expr index "$COUNT" "$SUBSTRING"` -gt 0 ]; then
    	echo $COUNT
    fi
    COUNT=$((COUNT+1))
done

###########

#!/bin/bash
# Count the number of spaces in a string
S="to be be"
# bash only
# idea from
# http://www.cyberciti.biz/faq/unix-linux-appleosx-bsd-bash-count-characters-variables/
# replace all occurences of non-space character with an empty substring
spaces="${S//[^ ]}"
echo "${#spaces}"

# grep way
grep -o " " <<<"$S" | wc -l
# grep -o stands for -only-matching
# that means it prints only the words that match teh pattern,
# not the lines where an occurence was found
# wc -l counts lines (hence -l)
# I have no idea what <<< does though
# must be some input/output redirect stuff, I guess
# HEY found it, it's HERE STRING
# https://linux.die.net/abs-guide/x15683.html

##############

#!/bin/bash
# https://www.reddit.com/r/dailyprogrammer_ideas/comments/4d5ehh/easy_drill_baby_drill/
# Remove all of the vowels in a string
# Y is counted as consonant
S="believE and cArry on"
echo ${S//[aeiouAEIOU]}