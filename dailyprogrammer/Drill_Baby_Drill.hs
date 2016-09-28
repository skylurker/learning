-- September 08-09, 2016


-- HASKELL
-- https://www.reddit.com/r/dailyprogrammer_ideas/comments/4d5ehh/easy_drill_baby_drill/
-- Find all of the numbers from 1-1000 that are divisible by 7

divisible = [ x | x <- [1..1000], x `mod` 7 == 0]

main = mapM_ print divisible
