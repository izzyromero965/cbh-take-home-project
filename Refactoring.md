# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Added notes in the dpk file but here is my explanation:

1. Created a constants file so we can clean up a little. This function is small but if we had multiple hashing functions or wanted to change the type of hash / hex, we could define them in another file.
2. For larger projects we don't want to use relative paths as it may get messy / confusing when importing functions. Having a structure is important when working with a larger code base.
3. Created eventData variable so we can separate the events data from the candidate itself. This way we are not constantly reassigning what will be returned.
4. Broke the function down into multiple helpers. The hashing logic is being used twice in the function, we want to avoid repeting code if unnecesary. Also having multiple if statements in one function can get confusing, we want single purpose functions.
