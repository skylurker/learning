-- This file contains several programs for the same challenge entry (since there are sub-challenges).
-- These mini-programs should be executed separately.

-- September 08-09, 2016


-- HASKELL
-- https://www.reddit.com/r/dailyprogrammer_ideas/comments/4d5ehh/easy_drill_baby_drill/
-- Find all of the numbers from 1-1000 that are divisible by 7

divisible = [ x | x <- [1..1000], x `mod` 7 == 0]

main = mapM_ print divisible

----------------------

-- HASKELL
-- https://www.reddit.com/r/dailyprogrammer_ideas/comments/4d5ehh/easy_drill_baby_drill/
-- Count the number of spaces in a string

-- spaces = length [ x | x <- "dsfj jhsdf jh jj dskj", x == ' ']
spaces str = length [ x | x <- str, x == ' ']

main = do
    input <- getLine
    print $ spaces input

-----------

-- HASKELL
-- https://www.reddit.com/r/dailyprogrammer_ideas/comments/4d5ehh/easy_drill_baby_drill/
-- Remove all of the vowels in a string

removed str = filter (`notElem` "aeiuo") str

main = do
    input <- getLine
    print $ removed input

--------

-- HASKELL
-- https://www.reddit.com/r/dailyprogrammer_ideas/comments/4d5ehh/easy_drill_baby_drill/
-- Find all of the words in a string that are less than 4 letters

less str = [ s | s <- words str, length s < 4]

main = do
    input <- getLine
    print $ less input

---------

-- HASKELL
-- https://www.reddit.com/r/dailyprogrammer_ideas/comments/4d5ehh/easy_drill_baby_drill/
-- Count the length of each word in a sentence.

cnt str = [ length s | s <- words str ]

main = do
    input <- getLine
    print $ cnt input

--------

-- HASKELL
-- https://www.reddit.com/r/dailyprogrammer_ideas/comments/4d5ehh/easy_drill_baby_drill/
-- Find all of the numbers from 1-1000 that have a 3 in them

hasThree n = '3' `elem` (show n)
haveThree = [x | x <- [1..1000], hasThree x == True]

main = mapM_ print haveThree


--------

-- HASKELL
-- https://www.reddit.com/r/dailyprogrammer_ideas/comments/4d5ehh/easy_drill_baby_drill/
-- NOT FINISHED
--Find all of the numbers from 1-1000 that are divisible by any single digit besides 1 (2-9)
divisibleBy n1 n2 = n1 `mod` n2 == 0
divisibleByRange = do ...............


areDivisible = [ x | x <- [1..1000], x `divisibleBy` [2..9] == True ]
-- what's this
main = print $ 15 `divisibleBy` 15