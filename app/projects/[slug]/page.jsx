import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectContent from "./ProjectContent";

const siteUrl = "";

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate dynamic metadata for each project
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    keywords: [
      project.title,
      ...project.tags,
      "Salaar Ahmad Project",
      "Project Management",
      "SAP Integration",
      "Enterprise Solutions",
    ],
    openGraph: {
      title: `${project.title} - Salaar Ahmad`,
      description: project.description,
      url: `${siteUrl}/projects/${project.slug}`,
      type: "article",
      images: [
        {
          url: `${siteUrl}${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Salaar Ahmad`,
      description: project.description,
      images: [`${siteUrl}${project.image}`],
    },
    alternates: {
      canonical: `${siteUrl}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // JSON-LD structured data for the project
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    image: `${siteUrl}${project.image}`,
    url: project.live !== "#" ? project.live : `${siteUrl}/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: "Salaar Ahmad",
      url: siteUrl,
    },
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectContent project={project} />
    </>
  );
}
