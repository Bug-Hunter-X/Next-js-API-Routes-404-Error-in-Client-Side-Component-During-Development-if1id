# Next.js API Routes 404 Error in Client-Side Component

This repository demonstrates a common issue in Next.js development where API routes return a 404 error when accessed from a client-side component during development.  The error arises from using an incorrect path when fetching data from the API route.

## Problem

The client-side component attempts to access the API route using a path starting with `/`, which causes a 404 error in development mode.

## Solution

The solution is to use the correct path `/api/data` when making requests to the API route. 

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the error in the browser's console.
5. Examine the corrected code in `bugSolution.js` to see how the problem is solved.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.