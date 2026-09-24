import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articlesData } from "@/data/articles";
import { Metadata } from "next";

export function generateStaticParams() {
  return articlesData.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  
  return {
    title: `${article.title} | Deep Nap Guide`,
    description: article.excerpt,
  };
}

// Very simple custom parser to handle markdown paragraphs, headers, and our custom <pullquote> tags.
function renderContent(content: string) {
  const blocks = content.split('\n\n').filter(b => b.trim() !== '');
  
  return blocks.map((block, index) => {
    const trimmed = block.trim();
    
    // Handle H2
    if (trimmed.startsWith('## ')) {
      return <h2 key={index} className="font-display-md text-primary text-3xl mt-12 mb-6">{trimmed.replace('## ', '')}</h2>;
    }
    
    // Handle H3
    if (trimmed.startsWith('### ')) {
      return <h3 key={index} className="font-title-card text-primary text-xl mt-8 mb-4">{trimmed.replace('### ', '')}</h3>;
    }
    
    // Handle Custom Pullquote
    if (trimmed.startsWith('<pullquote>') && trimmed.endsWith('</pullquote>')) {
      const quoteText = trimmed.replace('<pullquote>', '').replace('</pullquote>', '');
      return (
        <blockquote key={index} className="my-12 pl-6 border-l-4 border-[#DCA544] py-2">
          <p className="font-display-md text-primary text-[26px] leading-[1.4]">
            "{quoteText}"
          </p>
        </blockquote>
      );
    }
    
    // Handle Bullet points
    if (trimmed.startsWith('* ') || trimmed.startsWith('1. ')) {
      const listItems = trimmed.split('\n').map((item, i) => {
        // Very rough bold parsing for lists
        const boldParsed = item.replace(/^\* |^\d+\. /, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return <li key={i} className="mb-2" dangerouslySetInnerHTML={{ __html: boldParsed }} />;
      });
      
      if (trimmed.startsWith('* ')) {
        return <ul key={index} className="list-disc pl-6 mb-6 text-slate">{listItems}</ul>;
      } else {
        return <ol key={index} className="list-decimal pl-6 mb-6 text-slate">{listItems}</ol>;
      }
    }
    
    // Normal paragraph with rough bold parsing
    const boldParsed = trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-primary">$1</strong>').replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
    
    return <p key={index} className="mb-6 text-slate" dangerouslySetInnerHTML={{ __html: boldParsed }} />;
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);
  
  if (!article) {
    notFound();
  }

  // Get two random related articles
  const relatedArticles = articlesData
    .filter(a => a.id !== article.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  return (
    <main className="w-full bg-surface-white min-h-screen relative">
      
      {/* MOBILE STICKY WHATSAPP CHIP */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <a 
          href="https://wa.me/919600889334"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto shadow-lg bg-[#25D366] text-surface-white font-label-nav rounded-full px-6 py-3 flex items-center gap-2 hover:bg-[#1EBE5A] transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
          Ask us on WhatsApp
        </a>
      </div>

      <article className="max-w-[720px] mx-auto px-gutter md:px-0 pt-16 lg:pt-24 pb-20">
        
        {/* HERO SECTION */}
        <header className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <span className="font-label-nav text-xs uppercase tracking-wider text-[#DCA544]">
              {article.category}
            </span>
            <span className="text-slate/40">•</span>
            <span className="font-caption text-slate">{article.readTime}</span>
          </div>
          
          <h1 className="font-display-lg text-primary text-[40px] md:text-[52px] leading-[1.1] mb-6">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-center md:justify-start gap-4 mb-10 border-t border-b border-hairline py-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[20px]">psychiatry</span>
            </div>
            <div className="text-left">
              <div className="font-label-nav text-primary">{article.author}</div>
              <div className="font-caption text-slate">{article.date}</div>
            </div>
          </div>
        </header>

        {/* HERO IMAGE */}
        <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden bg-surface-container mb-12">
          <Image 
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* CONTENT BODY */}
        {/* The prompt requested a generous 19px body type and 1.7 line height for readability */}
        <div className="font-body-regular text-[19px] leading-[1.7]">
          {renderContent(article.content)}
        </div>

      </article>

      {/* FOOTER: PRODUCT REC & RELATED */}
      <div className="bg-[#F8F4ED] border-t border-hairline py-20 px-gutter md:px-gutter-tablet">
        <div className="max-w-[720px] mx-auto">
          
          {/* PRODUCT RECOMMENDATION BLOCK */}
          <div className="bg-surface-white p-8 rounded-2xl border border-hairline shadow-sm flex flex-col sm:flex-row gap-8 items-center mb-16">
            <div className="w-32 h-32 bg-[#EFE5D7] rounded-xl relative flex-shrink-0">
              <Image src="https://images.unsplash.com/photo-1634546592231-15582fcc978a?auto=format&fit=crop&q=80&w=800" alt="Mattress" fill className="object-cover rounded-xl" />
            </div>
            <div>
              <div className="font-label-nav text-xs text-[#DCA544] uppercase tracking-wider mb-2">Recommended for you</div>
              <h4 className="font-display-md text-primary text-2xl mb-2">Premium Made-to-Order Mattress</h4>
              <p className="font-body-regular text-slate text-sm mb-4">Crafted with the materials discussed in this article, built exactly for your body.</p>
              <Link href="/custom-size" className="font-label-nav text-primary hover:text-[#DCA544] flex items-center gap-1 transition-colors">
                Configure yours <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
          
          {/* RELATED ARTICLES */}
          <h3 className="font-display-md text-primary text-2xl mb-6 border-b border-hairline pb-4">Keep reading</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map(rel => (
              <Link key={rel.id} href={`/guide/${rel.slug}`} className="group bg-surface-white p-5 rounded-2xl border border-hairline hover:shadow-md transition-all">
                <span className="font-label-nav text-[10px] uppercase tracking-wider text-[#DCA544] bg-[#DCA544]/10 px-2 py-1 rounded-md mb-3 inline-block">
                  {rel.category}
                </span>
                <h4 className="font-title-card text-primary mb-2 group-hover:text-[#DCA544] transition-colors">{rel.title}</h4>
                <div className="font-caption text-slate">{rel.readTime}</div>
              </Link>
            ))}
          </div>

        </div>
      </div>

    </main>
  );
}
