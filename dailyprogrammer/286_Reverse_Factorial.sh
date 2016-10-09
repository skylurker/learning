#!/bin/bash
#https://www.reddit.com/r/dailyprogrammer/comments/55nior/20161003_challenge_286_easy_reverse_factorial/
# [2016-10-03] Challenge #286 [Easy] Reverse Factorial
# Oct 4th 2016

# Here's the fixed version
# Used this comment as a ref
# https://www.reddit.com/r/dailyprogrammer/comments/55nior/20161003_challenge_286_easy_reverse_factorial/d8ca2ns
function reverseFact {
    INPUT=$1
    RESULT="$1"
    CNT=1
    while [ $(($INPUT % $CNT)) -eq 0 ]; do
        INPUT=$(($INPUT/$CNT))
        CNT=$(($CNT+1))
        #echo $INPUT
        #echo $CNT
    done
    if [ $(($CNT % $INPUT)) != 0 ]; then
        echo "$RESULT NONE"
    else
        CNT=$(($CNT-1))
        echo "$RESULT = ${CNT}!"
    fi
}
reverseFact 3628800
reverseFact 479001600
reverseFact 6
reverseFact 18
