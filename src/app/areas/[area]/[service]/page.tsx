import ServiceLocationPage, {
  generateMetadata as generateServiceLocationMetadata,
  generateStaticParams as generateServiceLocationStaticParams,
} from "@/app/services/[service]/[area]/page";

interface PageProps {
  params: Promise<{ area: string; service: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { area, service } = await params;
  const baseMeta = await generateServiceLocationMetadata({ params: Promise.resolve({ service, area }) });
  return {
    ...baseMeta,
    robots: {
      index: false,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  const paramsList = await generateServiceLocationStaticParams();
  return paramsList.map((p) => ({
    area: p.area,
    service: p.service,
  }));
}

export default async function AreaServicePage({ params }: PageProps) {
  const { area, service } = await params;
  return <ServiceLocationPage params={Promise.resolve({ service, area })} />;
}
