const DEMO_AI_RESPONSES = [
  "সিনট্যাক্স হাইলাইটিং প্রদর্শনের জন্য এখানে একটি কোড উদাহরণ দেওয়া হলো:\n\n```typescript\nfunction calculateFibonacci(n: number): number {\n  if (n <= 1) return n;\n  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);\n}\nconsole.log(calculateFibonacci(10));\n```",
  "চলুন একটি গাণিতিক সূত্র দেখি! দ্বিঘাত সমীকরণটি এভাবে লেখা যেতে পারে:\n\n$$ x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} $$\n\nএটি KaTeX ব্যবহার করে খুব সুন্দরভাবে রেন্ডার হবে।",
  "এখানে একটি সাধারণ ব্যবহারকারী লগইন ফ্লো-এর ভিজ্যুয়াল ব্রেকডাউন দেওয়া হলো:\n\n```mermaid\ngraph TD\n  A[Enter Credentials] --> B{Valid?}\n  B -- Yes --> C[Login Successful]\n  B -- No --> D[Show Error Message]\n```",
  "হ্যালো! আমি অনেক ভাষায় সুন্দর টাইপোগ্রাফি রেন্ডার করতে পারি।\n\nযেমন জাপানি ভাষায়: 桜の花が美しく咲いています。(চেরি ফুলগুলো সুন্দরভাবে ফুটেছে।)\nএবং চীনা ভাষায়: 欢迎使用这款全新的人工智能助手！(এই নতুন এআই অ্যাসিস্ট্যান্ট-এ স্বাগতম!)",
  "আমি সবকিছু একসাথে মিশ্রিতও করতে পারি! এখানে আইনস্টাইনের বিখ্যাত সমীকরণ $E = mc^2$, একটি ছোট পাইথন স্ক্রিপ্ট:\n\n```python\nprint('হ্যালো বিশ্ব')\n```\n\nএবং একটি ছোট ডায়াগ্রাম:\n\n```mermaid\ngraph LR\n  AI --> User\n```"
];

export function getRandomAIResponse(): string {
  const randomIndex = Math.floor(Math.random() * DEMO_AI_RESPONSES.length);
  return DEMO_AI_RESPONSES[randomIndex];
}
