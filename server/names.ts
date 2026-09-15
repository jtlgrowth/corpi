// Bot name generator — a curated local list beats a naming API: instant,
// offline, and every name is on-brand for Corpi (short, friendly, the kind of
// first name you would call across a Manila office). Picks avoid names already in use; when the pool is
// exhausted it falls back to "Name 2", "Name 3", …
const NAMES = [
  "Ria", "Ben", "Marco", "Cielo", "Tin", "Jun", "Lala", "Dre",
  "Nica", "Paolo", "Bea", "Migs", "Kai", "Dani", "Lio", "Maya",
  "Teo", "Ana", "Rafa", "Nina", "Gab", "Iya", "Zed", "Coco",
  "Ivy", "Sol", "Ely", "Pia", "Tomas", "Lena", "Jomar", "Aya",
  "Nash", "Vito", "Cris", "Mara", "Dino", "Yen", "Lou", "Ces",
];

export function pickBotName(taken: Iterable<string>): string {
  const used = new Set([...taken].map((n) => n.trim().toLowerCase()));
  const free = NAMES.filter((n) => !used.has(n.toLowerCase()));
  if (free.length > 0) return free[Math.floor(Math.random() * free.length)];
  // pool exhausted — number a random base name
  const base = NAMES[Math.floor(Math.random() * NAMES.length)];
  for (let i = 2; ; i++) {
    if (!used.has(`${base.toLowerCase()} ${i}`)) return `${base} ${i}`;
  }
}
