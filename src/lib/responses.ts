const DEMO_AI_RESPONSES = [
  "Here is a code example to demonstrate syntax highlighting:\n\n```typescript\nfunction calculateFibonacci(n: number): number {\n  if (n <= 1) return n;\n  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);\n}\nconsole.log(calculateFibonacci(10));\n```",
  "Let's look at a mathematical formula! The quadratic equation can be written as:\n\n$$ x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} $$\n\nThis will render beautifully using KaTeX.",
  "Here is a visual breakdown of a typical user login flow:\n\n```mermaid\ngraph TD\n  A[Enter Credentials] --> B{Valid?}\n  B -- Yes --> C[Login Successful]\n  B -- No --> D[Show Error Message]\n```",
  "Hello! I can render beautiful typography in many languages.\n\nHere is some Japanese: 桜の花が美しく咲いています。(The cherry blossoms are blooming beautifully.)\nAnd some Chinese: 欢迎使用这款全新的人工智能助手！(Welcome to this brand new AI assistant!)",
  "I can also mix everything together! Here's Einstein's famous equation $E = mc^2$, a quick Python snippet:\n\n```python\nprint('こんにちは世界')\n```\n\nAnd a tiny diagram:\n\n```mermaid\ngraph LR\n  AI --> User\n```"
];

export function getRandomAIResponse(): string {
  const randomIndex = Math.floor(Math.random() * DEMO_AI_RESPONSES.length);
  return DEMO_AI_RESPONSES[randomIndex];
}
