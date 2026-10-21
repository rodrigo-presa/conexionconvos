import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn(
    "[Supabase] Variables de entorno no configuradas. " +
    "Crea un archivo .env con VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY."
  );
}

export const supabase = createClient(
  SUPABASE_URL ?? "https://placeholder.supabase.co",
  SUPABASE_ANON_KEY ?? "placeholder-key"
);

/*
 * ESQUEMA SQL SUPABASE
 * ─────────────────────────────────────────────
 *
 * create table public.articles (
 *   id           uuid primary key default gen_random_uuid(),
 *   title        text not null,
 *   excerpt      text,
 *   category     text not null,
 *   author       text not null default 'Rodrigo Presa',
 *   date         date not null default now(),
 *   read_time    int default 5,
 *   image_url    text,
 *   image_alt    text,
 *   slug         text unique not null,
 *   content      text,
 *   featured     boolean default false,
 *   trending     boolean default false,
 *   published    boolean default true,
 *   created_at   timestamptz default now()
 * );
 *
 * -- Habilitar RLS
 * alter table public.articles enable row level security;
 *
 * -- Lectura pública para artículos publicados
 * create policy "Lectura pública" on public.articles
 *   for select using (published = true);
 *
 * -- Index para velocidad
 * create index on public.articles(category);
 * create index on public.articles(featured);
 * create index on public.articles(trending);
 * create index on public.articles(created_at desc);
 *
 * ─────────────────────────────────────────────
 */
