# Quizify 🕹️

A simple quiz application built with Next.js that demonstrates security first development practices.

## 🛡️ Security First Approach

While it may sound silly (security for trivia game), but if you want to be a successful dev you should always keep security in mind while building apps. Now it's quiz app; tomorrow it could be a payment gateway([you can watch this drama](https://www.youtube.com/watch?v=Sa7y_9GGbxs)).

**Problem**  
 Consumes external API, and the `Response` contains a secret which in our case `correct_answer`

- case 1: fetch on client(page is client component)  
  **>>** User can see the correct answers in the network tab of dev tools
- case 2: fetch on server and pass data to client components  
  **>>** User can still see the data we pass to client components in the dev tool (Next.js serializes server props into the HTML so the client component can hydrate them.)

**Solution**

  1. Fetch on server -> save each question with its correct answer(in this example we save in server memory which is not recommended, but it's just to demonstrate, normally you would use Redis or even a database if you want to save history)
  2. Shuffle the `correct_answer` with `incorrect_answers` in one array -> then we pass to the client components
  3. when the user chooses, we send question or question ID with chosen answer to the server -> verify on the server if it's right or wrong -> return TRUE/FALSE

## 🚀 Getting Started

### Prerequisites

- Node.js 20.9+
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start.
