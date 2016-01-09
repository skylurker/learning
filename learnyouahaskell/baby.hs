-- load functions from a file called myfunctions.hs
-- when GHCI is in the same folder:   :l myfunctions
-- reload: type the same OR :r for reloading the script

-- change "Prelude" to "ghci":
-- :set prompt "ghci> "

-- Boolean stuff: 
-- && AND
-- || OR
-- not NOT
-- True, False
-- == equals
-- /= does not equal

-- in stuff like   5 * 8,  * is an INFIX function
-- while in succ 8, succ is a PREFIX function

-- succ returns successor
-- min 
-- max 

-- if a function takes two parameters, we can call it as an infix one:
-- 92 `div` 10
-- instead of
-- div 92 10

-- Parentheses aka () denote function application:
-- if there is a function such as
-- bar (bar 3)
-- that means in C it would look like
-- bar (bar(3))

-- Baby's First functions
doubleMe x = x + x

-- doubleUs x y = x*2 + y*2
doubleUs x y = doubleMe x + doubleMe y

-- Functions in Haskell don't have to be in any particular order, 
-- so it doesn't matter if you define doubleMe first and then doubleUs 
-- or if you do it the other way around.

doubleSmallNumber x = if x > 100
						then x
						else x*2
-- else part is mandatory!

-- We usually use ' to either denote a strict version of a function 
-- (one that isn't lazy) or a slightly modified version of a function 
-- or a variable. Because ' is a valid character in functions, we can 
-- make a function like this. 

doubleSmallNumber' x = (if x > 100 then x else x*2) + 1
conanO'Brien = "It's a-me, Conan O'Brien!" -- it doesn't have parameters
-- that's a definition (or a name)

-- functions can't begin with uppercase letters