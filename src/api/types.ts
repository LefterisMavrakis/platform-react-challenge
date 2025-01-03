import { Image } from "@thatapicompany/thecatapi/dist/types";
import { Breed as ApiBreed } from "@thatapicompany/thecatapi/dist";

export type Weight = {
  imperial: string;
  metric: string;
};

export type Breed = {
  weight: Weight;
  id: string;
  reference_image_id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  wikipedia_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  alt_names: string;
  indoor: number;
  lap: number;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  hypoallergenic: number;
  image: Image;
};

export type { Image, ApiBreed };
