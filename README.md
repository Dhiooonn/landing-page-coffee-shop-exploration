# ☕ Monkey Coffee — Landing Page

Landing page modern untuk kedai kopi **Monkey Coffee**, dibangun sebagai bagian dari *frontend challenge*. Dirancang dengan prinsip desain premium, responsif di semua ukuran layar, dan dioptimasi untuk performa serta SEO.

![Monkey Coffee Preview](/public/images/heroSection.webp)

---

## 🚀 Cara Instalasi & Menjalankan Project

### Prasyarat

Pastikan perangkat sudah terinstal:

- [Node.js](https://nodejs.org/) versi **18** atau lebih baru
- Package manager: `npm`, `yarn`, `pnpm`, atau `bun`

### Langkah Instalasi

**1. Clone repository**

```bash
git clone https://github.com/username/frontend-challenge.git
cd frontend-challenge
```

**2. Instal semua dependensi**

```bash
npm install
```

**3. Salin file environment (opsional)**

```bash
cp .env.example .env.local
```

> Isi `NEXT_PUBLIC_SITE_URL` dengan URL domain produksi kamu (digunakan untuk sitemap & OpenGraph).

**4. Jalankan server pengembangan**

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

### Perintah Lainnya

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Menjalankan server pengembangan |
| `npm run build` | Membuat bundle produksi yang teroptimasi |
| `npm run start` | Menjalankan server produksi setelah build |
| `npm run lint` | Memeriksa kualitas kode dengan ESLint |

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Versi | Fungsi |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.10 | Framework React dengan App Router, SSG, dan optimasi gambar |
| [React](https://react.dev/) | 19.2.4 | Library UI berbasis komponen |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Superset JavaScript untuk type safety |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Utility-first CSS framework |
| [Lucide React](https://lucide.dev/) | ^1.25 | Library ikon SVG yang ringan dan konsisten |
| [next/font](https://nextjs.org/docs/app/api-reference/components/font) | — | Optimasi font Google (Inter & Playfair Display) tanpa layout shift |

### Struktur Proyek

```
app/
├── (seo)/               # Route group untuk file SEO
│   ├── sitemap.ts       # Auto-generate /sitemap.xml
│   └── robots.ts        # Auto-generate /robots.txt
├── components/
│   ├── layouts/
│   │   ├── Footer.tsx   # Komponen footer global
│   │   ├── Navbar.tsx   # Komponen navigasi global
│   │   └── MainLayout.tsx
│   └── ui/
│       ├── Button.tsx   # Komponen tombol reusable
│       ├── MenuCard.tsx # Kartu item menu
│       ├── FeatureCard.tsx  # Kartu fitur layanan
│       └── AmbienceCard.tsx # Kartu galeri suasana
├── pages/
│   └── homepage/
│       ├── heroSection.tsx
│       ├── socialProofSection.tsx
│       ├── menuSection.tsx
│       ├── serveSection.tsx
│       ├── ambienceSection.tsx
│       ├── aboutSection.tsx
│       └── visitUsSection.tsx
├── globals.css          # CSS global & konfigurasi tema warna
├── layout.tsx           # Root layout (metadata, font, viewport)
└── page.tsx             # Halaman utama (/)
```

---

## 💡 Mengatasi Hydration Issue saat Cart Persistence di Next.js

### Masalah

Saat membangun fitur **keranjang belanja** (*cart*) yang disimpan di `localStorage`, kamu akan sering menemui error seperti ini di Next.js App Router:

```
Error: Hydration failed because the server-rendered HTML did not match the client
```

**Mengapa ini terjadi?**

Next.js melakukan **Server-Side Rendering (SSR)** terlebih dahulu di server. Server tidak punya akses ke `localStorage` (yang hanya ada di browser/client). Akibatnya, server merender komponen dengan state awal *kosong*, sedangkan client merender dengan data dari `localStorage` — keduanya tidak cocok, dan React melempar error hydration.

### Solusi

Terdapat tiga pendekatan untuk mengatasinya:

---

#### ✅ Solusi 1: `useEffect` + `useState` (Paling Direkomendasikan)

Simpan state cart hanya setelah komponen ter-mount di client. Gunakan flag `isMounted` untuk mencegah render yang tidak cocok.

```tsx
"use client";

import { useState, useEffect } from "react";

interface CartItem {
  id: string;
  name: string;
  qty: number;
}

export function useCart() {
  const [isMounted, setIsMounted] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Baca localStorage hanya setelah komponen ter-mount di client
  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem("monkey-cart");
      if (saved) setCart(JSON.parse(saved));
    } catch {
      // Abaikan error jika localStorage tidak tersedia
    }
  }, []);

  // Simpan ke localStorage setiap kali cart berubah
  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem("monkey-cart", JSON.stringify(cart));
  }, [cart, isMounted]);

  const addItem = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // Kembalikan null saat server rendering untuk menghindari mismatch
  if (!isMounted) return { cart: [], addItem, removeItem, isMounted: false };

  return { cart, addItem, removeItem, isMounted: true };
}
```

---

#### ✅ Solusi 2: Pisahkan Komponen Cart dengan `dynamic` Import (`ssr: false`)

Jika komponen cart berdiri sendiri, impor secara dinamis dan nonaktifkan SSR:

```tsx
// app/components/CartDrawer.tsx
"use client";

export default function CartDrawer() {
  // Aman karena komponen ini tidak pernah dirender di server
  const savedCart = localStorage.getItem("monkey-cart");
  // ...
}
```

```tsx
// app/layout.tsx atau page yang membutuhkan cart
import dynamic from "next/dynamic";

const CartDrawer = dynamic(() => import("../components/CartDrawer"), {
  ssr: false, // Nonaktifkan server-side rendering untuk komponen ini
  loading: () => <div>Loading cart...</div>,
});
```

> **Kapan digunakan?** Ketika komponen cart memiliki interaksi kompleks dan **tidak perlu** diindeks mesin pencari.

---

#### ✅ Solusi 3: `suppressHydrationWarning` (Pilihan Terakhir)

Jika nilai yang berbeda antara server dan client tidak mempengaruhi tampilan visual secara signifikan, kamu bisa menekan peringatan hydration dengan atribut `suppressHydrationWarning`:

```tsx
// Gunakan hanya pada elemen yang nilainya memang berbeda di server & client
<span suppressHydrationWarning>
  {isMounted ? cart.length : 0} item
</span>
```

> ⚠️ **Gunakan dengan hati-hati.** Ini menyembunyikan error, bukan memperbaiki akar masalahnya.

---

### Perbandingan Solusi

| Solusi | Kompleksitas | Dampak SEO | Kasus Penggunaan |
|---|---|---|---|
| `useEffect` + `isMounted` | Rendah | Tidak ada | Cara terbaik dan paling umum |
| `dynamic` + `ssr: false` | Sedang | ⚠️ Komponen tidak terindeks | Komponen UI berat yang tidak butuh SEO |
| `suppressHydrationWarning` | Rendah | Tidak ada | Hanya untuk nilai kecil/non-kritis |

---

## 📄 Lisensi

MIT License — bebas digunakan untuk keperluan pembelajaran dan pengembangan.
