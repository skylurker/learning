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

------------
-- LISTS
------------

-- a list stores several elements of the same type

-- the 'let' keyword is used to define a name in GHCI.
-- Doing let a = 1 inside GHCI is the equivalent of 
-- writing a = 1 in a script and then loading it. 

lostNumbers = [4,8,15,16,23,42]

-- strings are lists of characters
-- "hello" is just syntactic sugar for ['h','e','l','l','o']

-- concatenation is done using the ++ operator
-- [1, 2] ++ [3, 4]
-- "hello" ++ " " ++ "world"
-- ['w', 'o'] ++ ['o', 't']

-- When you put together two lists (even if you append a singleton 
-- list to a list, for instance: [1,2,3] ++ [4]), 
-- internally, Haskell has to walk through the whole list on the 
-- left side of ++

-- However, putting something at the beginning of a list using 
-- the : operator (also called the cons operator) is instantaneous. 
-- 'A':" SMALL CAT" 
-- 5:[1,2,3,4,5]

-- Notice how : takes a number and a list of numbers or a character 
-- and a list of characters, whereas ++ takes two lists. Even if you're 
-- adding an element to the end of a list with ++, you have to surround 
-- it with square brackets so it becomes a list. 

-- [1,2,3] is actually just syntactic sugar for 1:2:3:[]. 
-- Note: [], [[]] and[[],[],[]] are all different things.

-- get an element out of a list by index
-- "Steve Buscemi" !! 6
-- [9.4,33.2,96.2,11.2,23.25] !! 1  

b = [[1,2,3,4],[5,3,3,3],[1,2,2,3,4],[1,2,3]]
-- b ++ [[1,1,1,1]]
-- [6,6,6]:b
-- b !! 2

--The lists within a list can be of different 
-- lengths but they can't be of different types

-- Lists can be compared if the stuff they contain can be compared. 
-- When using <, <=, > and >= to compare lists, they are 
-- compared in lexicographical order.

--     ghci> [3,2,1] > [2,1,0]  
--    True  
--    ghci> [3,2,1] > [2,10,100]  
--    True  
--    ghci> [3,4,2] > [3,4]  
--   True  
--   ghci> [3,4,2] > [2,4]  
--    True  
--    ghci> [3,4,2] == [3,4,2]  
--    True  

-- other operations on the lists:
-- head: returns first element
-- tail: returns the list without head
-- last: returns last element
-- init: returns the list without last element
-- These don't work on empty lists!
-- length
-- null: checks if the list is empty; Use this function instead of xs == []
-- reverse
-- take: takes that many elements from the beginning of the list
-- drop: the same, but drops the number of elements from the beginning of a list
-- maximum: takes a list of stuff that can be put in some kind of order and returns the biggest element
-- minimum: returns the smallest
-- sum: takes a list of numbers and returns their sum
-- product: takes a list of numbers and returns their product
-- elem:  takes a thing and a list of things and tells us if that thing is an element of the list
-- (infix variant: 4 `elem` [3,4,5,6] returns True)