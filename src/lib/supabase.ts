import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://your-project.supabase.co'
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface ClientReview {
  id: string | number;
  name: string;
  location?: string;
  project_type: string;
  rating: number;
  comment: string;
  created_at?: string;
  is_verified?: boolean;
}

const LOCAL_STORAGE_KEY = 'vasantha_client_reviews';

export const defaultReviews: ClientReview[] = [
  {
    id: 'def-1',
    name: 'School Committee',
    location: 'B/Athalapitiya Primary School',
    project_type: 'Curved Canopy Roofing Project',
    rating: 5,
    comment: 'Vasantha Iron Works completed our school curved canopy roofing with outstanding structural steel strength and precise welding. The team was reliable, punctual, and delivered exceptional durability.',
    is_verified: true,
  },
  {
    id: 'def-2',
    name: 'Mr. Samantha Silva',
    location: 'Diyathalawa',
    project_type: 'Veranda Safety Railing & Gate',
    rating: 5,
    comment: 'Exceptional craftsmanship on our veranda safety railing and integrated gate. The 2×2 and ¾ box bar construction is solid, perfectly aligned, and the black matte finish looks modern and elegant.',
    is_verified: true,
  },
  {
    id: 'def-3',
    name: 'Mr. K. Perera',
    location: 'Bandarawela',
    project_type: 'Vehicle Parking Canopy & Grills',
    rating: 5,
    comment: 'Quick quotation, transparent pricing, and robust materials. They fabricated our vehicle parking canopy and window security grills with heavy gauge steel. Reliable and highly recommended in the area.',
    is_verified: true,
  },
];

export async function fetchReviews(): Promise<ClientReview[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        return data.map(r => ({
          id: r.id,
          name: r.name,
          location: r.location || '',
          project_type: r.project_type || 'Ironworks Fabrication',
          rating: r.rating || 5,
          comment: r.comment,
          created_at: r.created_at,
          is_verified: true,
        }));
      }
    } catch (err) {
      console.warn('Could not fetch from Supabase, falling back to local reviews', err);
    }
  }

  // Fallback to localStorage or default reviews
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    // Ignore storage parse error
  }

  return defaultReviews;
}

export async function submitReview(review: Omit<ClientReview, 'id' | 'created_at'>): Promise<ClientReview> {
  const newReview: ClientReview = {
    ...review,
    id: 'rev-' + Date.now(),
    created_at: new Date().toISOString(),
    is_verified: true,
  };

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .insert([
          {
            name: review.name,
            location: review.location || '',
            project_type: review.project_type,
            rating: review.rating,
            comment: review.comment,
          },
        ])
        .select()
        .single();

      if (!error && data) {
        return {
          id: data.id,
          name: data.name,
          location: data.location,
          project_type: data.project_type,
          rating: data.rating,
          comment: data.comment,
          created_at: data.created_at,
          is_verified: true,
        };
      }
    } catch (err) {
      console.warn('Supabase insert failed, caching locally', err);
    }
  }

  // Save to localStorage as well
  try {
    const current = await fetchReviews();
    const updated = [newReview, ...current.filter(r => r.id !== newReview.id)];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    // ignore
  }

  return newReview;
}
