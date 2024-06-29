Comparison to check the UX improvement between streamed vs normal responses.

## Getting Started

1. Install the pakages

```
pnpm i
```

2. Create env file

```
touch .env.local
```

3. Add key in `.env.local` file

```
OPENAI_API_KEY=xxxxxxxxx
```

4. Run the server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About the repo

The repo has 4 branches: `main`, `structured-data`, `streamed-generation`,`compare`

1. `structured-data` branch - Has the code to check structured data example
2. `streamed-generation` branch - Has the code to check streamed generation example
3. `compare` branch - Has the code to check the UX improvement between streamed vs normal responses
4. `main` branch - Has the comparison example between streamed vs normal responses

## Learn more

To learn more about Next.js AI SDK features

- [Streaming object](https://sdk.vercel.ai/examples/next-app/basics/streaming-object-generation) - learn about streaming llm responses
- [Structured data generation](https://sdk.vercel.ai/examples/next-app/basics/generating-object) - check how to generate structured objects from LLMs
