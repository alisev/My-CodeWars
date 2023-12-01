--Clock shows h hours, m minutes and s seconds after midnight.
--Your task is to write a function which returns the time since midnight in milliseconds.

SELECT s * 1000 + m * 60000 + h * 3600000 AS res
FROM past

SELECT (s + m * 60 + h * 3600) * 1000 AS res
FROM past
