# pages-ui-chatbot

A Large Language Model (LLM) chatbot User Interface (UI).

- **Frontend UI**: Static HTML deployed on Cloudflare Pages.
- **Backend**: [dls-ai.dlsdemo.com](https://dls-ai.dlsdemo.com/) deployed on Cloudflare [Workers](https://workers.cloudflare.com/), using [Workers AI](https://developers.cloudflare.com/workers-ai/), [Vectorize](https://developers.cloudflare.com/vectorize/), and [D1](https://developers.cloudflare.com/d1/).

## Limitations

- Maximum of 500 characters per `query`.
- Review [Workers Limits](https://developers.cloudflare.com/workers/platform/limits/).
- Review [Workers AI Limits](https://developers.cloudflare.com/workers-ai/platform/limits/).
- Review [Vectorize Limits](https://developers.cloudflare.com/vectorize/platform/limits/).
- Review [D1 Limits](https://developers.cloudflare.com/d1/platform/limits/).

# Disclaimer

Educational purposes only.

Inspired by the [Build a Retrieval Augmented Generation (RAG) AI](https://developers.cloudflare.com/workers-ai/tutorials/build-a-retrieval-augmented-generation-ai/) tutorial and [Cloudflare's built-in Workers AI embeddings with LangChain.js](https://js.langchain.com/docs/integrations/text_embedding/cloudflare_ai).
