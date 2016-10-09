#!/bin/bash
#https://www.reddit.com/r/dailyprogrammer/comments/55nior/20161003_challenge_286_easy_reverse_factorial/
# [2016-10-03] Challenge #286 [Easy] Reverse Factorial
# Oct 4th 2016
function reverseFact {
        INPUT=$1
    RESULT="$1"
    CNT=1
    while [ $INPUT -gt 1 ]; do
            INPUT=$(($INPUT/$CNT))
        CNT=$(($CNT+1))
        echo $INPUT
        echo $CNT
    done
    CNT=$(($CNT-1))
    echo "$RESULT = ${CNT}!"
}
reverseFact 6


# DOESN'T HANDLE if it's not a factorial (the NONE case)
