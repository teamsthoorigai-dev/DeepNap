export type CotFinish = "Teak" | "Rubber wood" | "Sheesham" | "Ply and laminate" | "MDF";

export interface DiwanCotProduct {
  id: string;
  slug: string;
  name: string;
  finish: CotFinish;
  description: string;
  hasStorage: boolean;
  priceFrom: number;
  leadTime: string;
  installationCharge: number;
  isBestSeller?: boolean;
  image: string;
  warranty: string;
  sizes: string;
  materialDetails: string;
}

export const cots: DiwanCotProduct[] = [
  {
    id: "cot-01",
    slug: "classic-teak-diwan",
    name: "Classic Teak Diwan",
    finish: "Teak",
    description: "Solid CP Teak wood frame built for generations, with a natural matte finish.",
    hasStorage: false,
    priceFrom: 32000,
    leadTime: "12-15 days",
    installationCharge: 800,
    isBestSeller: true,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800", // We reuse the placeholder for now
    warranty: "10 years",
    sizes: "Custom sized to your exact mattress",
    materialDetails: "100% Solid CP Teak (Tectona grandis). Kiln-dried to 8-12% moisture content.",
  },
  {
    id: "cot-02",
    slug: "teak-storage-diwan",
    name: "Teak Storage Diwan",
    finish: "Teak",
    description: "Our signature teak frame with smooth hydraulic lift storage built in.",
    hasStorage: true,
    priceFrom: 45000,
    leadTime: "15-20 days",
    installationCharge: 1200,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",
    warranty: "10 years",
    sizes: "Custom sized to your exact mattress",
    materialDetails: "Solid CP Teak exterior with marine-grade plywood storage boxes.",
  },
  {
    id: "cot-03",
    slug: "minimal-rubberwood",
    name: "Minimalist Rubberwood Cot",
    finish: "Rubber wood",
    description: "Lightweight, sustainable rubberwood with a clean Scandinavian profile.",
    hasStorage: false,
    priceFrom: 18500,
    leadTime: "10-12 days",
    installationCharge: 600,
    isBestSeller: true,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",
    warranty: "5 years",
    sizes: "Standard or Custom",
    materialDetails: "Treated plantation rubberwood with a clear protective PU coat.",
  },
  {
    id: "cot-04",
    slug: "premium-ply-laminate",
    name: "Modern Laminate Diwan",
    finish: "Ply and laminate",
    description: "Heavy-duty BWR plywood finished with premium textured laminate.",
    hasStorage: true,
    priceFrom: 22000,
    leadTime: "8-10 days",
    installationCharge: 800,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",
    warranty: "5 years",
    sizes: "Custom built to inch",
    materialDetails: "18mm BWR grade plywood, 1mm Merino textured laminate.",
  },
  {
    id: "cot-05",
    slug: "essential-mdf-cot",
    name: "Essential MDF Platform",
    finish: "MDF",
    description: "An affordable, sturdy platform base for guest rooms or PG accommodations.",
    hasStorage: false,
    priceFrom: 11500,
    leadTime: "7-10 days",
    installationCharge: 500,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",
    warranty: "1 year",
    sizes: "Standard sizes only",
    materialDetails: "High-density MDF with a pre-laminated finish. Recommended for low-moisture areas.",
  },
];
