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