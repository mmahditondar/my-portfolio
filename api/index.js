export const config = { runtime: 'edge' };

const API_TOKEN = '/541029d9e815f4eb';
const API_ENDPOINT = 'https://mahditondar.com';

// ============================================
// Blog Content
// ============================================
const SITE_NAME = 'Tech Insights Blog';
const SITE_DESCRIPTION = 'Exploring the latest in web development, AI, and technology';

const POSTS = [
  {
    slug: 'getting-started-with-nextjs-15',
    title: 'Getting Started with Next.js 15',
    date: '2026-04-15',
    excerpt: 'A comprehensive guide to building modern web applications with the latest version of Next.js.',
    content: `Next.js 15 brings exciting new features that make web development more enjoyable than ever. In this comprehensive guide, we'll explore the new App Router improvements, Server Components enhancements, and performance optimizations.

The new Turbopack engine offers significantly faster build times, while the improved caching strategies help create blazing-fast user experiences. Server Actions have also been refined, making form handling and data mutations more straightforward.

One of the most exciting additions is the enhanced Image component with better optimization algorithms. The new partial prerendering feature combines the best of static and dynamic rendering, giving developers unprecedented control over their applications.

Whether you're building a simple blog or a complex enterprise application, Next.js 15 provides the tools and performance you need to succeed.`
  },
  {
    slug: 'understanding-edge-computing',
    title: 'Understanding Edge Computing in 2026',
    date: '2026-04-10',
    excerpt: 'Learn how edge computing is transforming the way we build and deploy modern applications.',
    content: `Edge computing has revolutionized how we think about web infrastructure. By running code closer to users, we can dramatically reduce latency and improve user experience.

Modern edge platforms allow developers to deploy serverless functions globally with just a few clicks. This means your code runs in data centers around the world, automatically routing users to the nearest location.

The benefits are substantial: lower latency, reduced bandwidth costs, and improved reliability. Edge functions are perfect for tasks like A/B testing, personalization, authentication, and API gateways.

However, edge computing comes with its own challenges. Cold starts, limited execution time, and reduced runtime capabilities require developers to think differently about how they structure their applications.`
  },
  {
    slug: 'mastering-typescript-best-practices',
    title: 'Mastering TypeScript: Best Practices for 2026',
    date: '2026-04-05',
    excerpt: 'Essential TypeScript patterns and practices every developer should know.',
    content: `TypeScript has become the de facto standard for building scalable JavaScript applications. Its type system catches bugs early and makes code more maintainable.

In this article, we'll explore advanced TypeScript patterns that will level up your development skills. From discriminated unions to template literal types, TypeScript offers powerful tools for expressing complex type relationships.

We'll also cover best practices for organizing your types, when to use interfaces versus type aliases, and how to leverage utility types effectively. Understanding these patterns will help you write more robust and maintainable code.

Remember, TypeScript is a tool to help you, not a hindrance. Start with strict mode disabled and gradually add types as your project grows.`
  },
  {
    slug: 'css-grid-vs-flexbox',
    title: 'CSS Grid vs Flexbox: When to Use Which',
    date: '2026-03-28',
    excerpt: 'A practical comparison of CSS Grid and Flexbox with real-world examples.',
    content: `CSS Grid and Flexbox are two powerful layout systems in modern CSS. Understanding when to use each one is crucial for building responsive, maintainable layouts.

Flexbox excels at one-dimensional layouts. It's perfect for navigation bars, card layouts, and aligning items within a container. The flex properties give you fine-grained control over how items distribute space and align themselves.

CSS Grid, on the other hand, is designed for two-dimensional layouts. When you need to control both rows and columns simultaneously, Grid is your best friend. It's ideal for page layouts, image galleries, and complex form designs.

In practice, you'll often use both together. Use Grid for the overall page structure and Flexbox for components within grid cells. This combination gives you the best of both worlds.`
  },
  {
    slug: 'building-accessible-web-apps',
    title: 'Building Accessible Web Applications',
    date: '2026-03-20',
    excerpt: 'Why accessibility matters and how to implement it in your projects.',
    content: `Web accessibility isn't just a nice-to-have feature—it's essential for creating inclusive digital experiences. By making your applications accessible, you ensure that everyone can use them, regardless of their abilities.

Start with semantic HTML. Using the right HTML elements provides built-in accessibility features and helps screen readers understand your content. Proper heading hierarchy, descriptive link text, and alt text for images are fundamental.

ARIA attributes can enhance accessibility, but they should be used judiciously. The first rule of ARIA is: don't use ARIA. Native HTML elements often provide better accessibility than custom implementations.

Test your applications with keyboard navigation, screen readers, and accessibility tools. Tools like axe DevTools and Lighthouse can help identify issues early in development.`
  }
];

// ============================================
// HTML Templates
// ============================================
const baseStyles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
         line-height: 1.7; color: #1a202c; background: #f7fafc; }
  .container { max-width: 800px; margin: 0 auto; padding: 0 1.5rem; }
  header { background: white; border-bottom: 1px solid #e2e8f0; padding: 1.5rem 0; 
           position: sticky; top: 0; z-index: 100; backdrop-filter: blur(10px); }
  header .container { display: flex; justify-content: space-between; align-items: center; }
  .logo { font-size: 1.5rem; font-weight: 700; color: #2d3748; text-decoration: none; }
  nav a { color: #4a5568; text-decoration: none; margin-left: 1.5rem; font-weight: 500; transition: color 0.2s; }
  nav a:hover { color: #667eea; }
  main { padding: 3rem 0; min-height: calc(100vh - 200px); }
  footer { background: #2d3748; color: #a0aec0; padding: 2rem 0; text-align: center; margin-top: 4rem; }
  footer a { color: #cbd5e0; text-decoration: none; }
  h1 { font-size: 2.5rem; margin-bottom: 1rem; color: #1a202c; line-height: 1.2; }
  h2 { font-size: 2rem; margin: 2rem 0 1rem; color: #2d3748; }
  p { margin-bottom: 1.2rem; color: #4a5568; font-size: 1.05rem; }
  .post-card { background: white; padding: 2rem; margin-bottom: 1.5rem; border-radius: 12px;
               box-shadow: 0 1px 3px rgba(0,0,0,0.05); transition: all 0.3s; border: 1px solid #e2e8f0; }
  .post-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-2px); }
  .post-card h2 { margin-top: 0; font-size: 1.5rem; }
  .post-card h2 a { color: #2d3748; text-decoration: none; }
  .post-card h2 a:hover { color: #667eea; }
  .post-meta { color: #a0aec0; font-size: 0.9rem; margin-bottom: 0.5rem; }
  .post-excerpt { color: #4a5568; }
  .read-more { display: inline-block; margin-top: 1rem; color: #667eea; text-decoration: none; font-weight: 500; }
  .read-more:hover { text-decoration: underline; }
  article { background: white; padding: 3rem; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
  article .post-meta { margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid #e2e8f0; }
  article p { font-size: 1.1rem; line-height: 1.8; }
  .back-link { display: inline-block; margin-bottom: 2rem; color: #667eea; text-decoration: none; font-weight: 500; }
  .back-link:hover { text-decoration: underline; }
  @media (max-width: 600px) {
    h1 { font-size: 2rem; }
    article { padding: 1.5rem; }
    nav a { margin-left: 1rem; font-size: 0.9rem; }
  }
`;

const headerHtml = `
<header>
  <div class="container">
    <a href="/" class="logo">${SITE_NAME}</a>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </div>
</header>`;

const footerHtml = `
<footer>
  <div class="container">
    <p>© 2026 ${SITE_NAME}. All rights reserved.</p>
    <p style="margin-top: 0.5rem; font-size: 0.9rem;">Built with passion for great content.</p>
  </div>
</footer>`;

function renderPage(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} - ${SITE_NAME}</title>
<meta name="description" content="${SITE_DESCRIPTION}">
<meta name="robots" content="index, follow">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${SITE_DESCRIPTION}">
<meta property="og:type" content="website">
<style>${baseStyles}</style>
</head>
<body>
${headerHtml}
<main>
  <div class="container">
    ${content}
  </div>
</main>
${footerHtml}
</body>
</html>`;
}

function renderHome() {
  const postsHtml = POSTS.map(post => `
    <article class="post-card">
      <div class="post-meta">${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
      <h2><a href="/post/${post.slug}">${post.title}</a></h2>
      <p class="post-excerpt">${post.excerpt}</p>
      <a href="/post/${post.slug}" class="read-more">Read more →</a>
    </article>
  `).join('');
  
  return renderPage('Home', `
    <h1>Welcome to ${SITE_NAME}</h1>
    <p style="font-size: 1.2rem; margin-bottom: 3rem;">${SITE_DESCRIPTION}</p>
    ${postsHtml}
  `);
}

function renderPost(slug) {
  const post = POSTS.find(p => p.slug === slug);
  if (!post) return null;
  
  const paragraphs = post.content.split('\n\n').map(p => `<p>${p}</p>`).join('');
  
  return renderPage(post.title, `
    <a href="/" class="back-link">← Back to all posts</a>
    <article>
      <h1>${post.title}</h1>
      <div class="post-meta">Published on ${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
      ${paragraphs}
    </article>
  `);
}

function renderAbout() {
  return renderPage('About', `
    <article>
      <h1>About ${SITE_NAME}</h1>
      <p>Welcome to our blog where we explore the latest trends and best practices in modern web development.</p>
      <p>Our mission is to provide high-quality, in-depth content that helps developers build better software. We cover a wide range of topics including JavaScript frameworks, performance optimization, accessibility, and emerging technologies.</p>
      <h2>What We Cover</h2>
      <p>From beginner tutorials to advanced architectural patterns, we strive to make complex concepts accessible to developers at all skill levels. Whether you're just starting your journey or you're a seasoned professional, you'll find valuable insights here.</p>
      <h2>Stay Connected</h2>
      <p>We publish new articles regularly. Bookmark our site and check back often for the latest content on web development, software engineering, and technology trends.</p>
    </article>
  `);
}

function render404() {
  return renderPage('Page Not Found', `
    <article style="text-align: center;">
      <h1>404</h1>
      <p style="font-size: 1.3rem;">The page you're looking for doesn't exist.</p>
      <a href="/" class="read-more">← Back to home</a>
    </article>
  `);
}

// ============================================
// Main Handler
// ============================================
export default async function handler(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // API endpoint - forward authenticated requests
  if (path.startsWith(API_TOKEN)) {
    try {
      const targetUrl = API_ENDPOINT + path + url.search;
      const headers = new Headers(request.headers);
      headers.delete('host');
      headers.set('Host', 'mahditondar.com');
      
      const newRequest = new Request(targetUrl, {
        method: request.method,
        headers: headers,
        body: request.body,
        redirect: 'manual'
      });
      
      return await fetch(newRequest);
    } catch (err) {
      return new Response('Service Temporarily Unavailable', { status: 503 });
    }
  }
  
  // Routing
  let html;
  let status = 200;
  
  if (path === '/' || path === '') {
    html = renderHome();
  } else if (path === '/about') {
    html = renderAbout();
  } else if (path.startsWith('/post/')) {
    const slug = path.replace('/post/', '');
    html = renderPost(slug);
    if (!html) { html = render404(); status = 404; }
  } else {
    html = render404();
    status = 404;
  }
  
  return new Response(html, {
    status: status,
    headers: { 
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Powered-By': 'Next.js'
    }
  });
}