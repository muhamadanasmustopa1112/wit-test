/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('articles').del()
  await knex('articles').insert([
    {
      title: 'Panduan Belajar JavaScript untuk Pemula',
      content: 'JavaScript adalah bahasa pemrograman yang sangat populer untuk membuat website interaktif. Dalam panduan ini, kita akan belajar dasar-dasar JavaScript, termasuk variabel, fungsi, dan manipulasi DOM.',
      slug: 'panduan-belajar-javascript',
      status: 'published',
      excerpt: 'Belajar JavaScript dari dasar hingga bisa membuat website interaktif.'
    },
    {
      title: 'Tips Produktivitas Saat Bekerja dari Rumah',
      content: 'Bekerja dari rumah bisa menantang karena banyak distraksi. Beberapa tips produktivitas termasuk membuat jadwal rutin, menyiapkan ruang kerja yang nyaman, dan menggunakan teknik Pomodoro untuk fokus.',
      slug: 'tips-produktivitas-wfh',
      status: 'draft',
      excerpt: 'Beberapa tips agar tetap produktif saat bekerja dari rumah.'
    },
    {
      title: 'Mengenal Node.js: Backend JavaScript',
      content: 'Node.js memungkinkan kita menjalankan JavaScript di server. Dengan Node.js, kita bisa membuat API, server, dan aplikasi backend lainnya. Ini adalah langkah awal menjadi fullstack developer.',
      slug: 'mengenal-nodejs',
      status: 'published',
      excerpt: 'Node.js memungkinkan JavaScript dijalankan di server untuk membuat backend aplikasi.'
    },
    {
      title: 'Belajar React: Komponen, State, dan Props',
      content: 'React adalah library populer untuk membangun UI interaktif. Pelajari cara membuat komponen, mengelola state, dan menggunakan props untuk mengirim data antar komponen.',
      slug: 'belajar-react-komponen-state-props',
      status: 'published',
      excerpt: 'Pelajari dasar React: komponen, state, dan props.'
    },
    {
      title: 'Membuat API dengan Koa.js untuk Pemula',
      content: 'Koa.js adalah framework minimalis untuk Node.js. Panduan ini akan mengajarkan cara membuat server sederhana dan endpoint API menggunakan Koa.js.',
      slug: 'membuat-api-dengan-koa',
      status: 'draft',
      excerpt: 'Membuat API menggunakan Koa.js dari dasar.'
    },
    {
      title: 'Dasar-dasar PostgreSQL untuk Developer',
      content: 'PostgreSQL adalah database relational open-source. Kita akan belajar membuat tabel, query data, dan relasi antar tabel untuk aplikasi web.',
      slug: 'dasar-postgresql-untuk-developer',
      status: 'published',
      excerpt: 'Belajar PostgreSQL: tabel, query, dan relasi dasar.'
    },
    {
      title: 'Membuat CMS Mini dengan Node.js dan Koa',
      content: 'Panduan membuat CMS sederhana menggunakan Node.js dan Koa, termasuk CRUD artikel dan manajemen user.',
      slug: 'cms-mini-nodejs-koa',
      status: 'draft',
      excerpt: 'CMS sederhana untuk belajar Node.js dan Koa.'
    },
    {
      title: 'Belajar Next.js 14: App Router dan SSR',
      content: 'Next.js 14 memperkenalkan App Router. Pelajari cara membuat halaman SSR, Server Components, dan data fetching di App Router.',
      slug: 'belajar-nextjs-14-ssr',
      status: 'published',
      excerpt: 'Panduan Next.js 14: App Router dan Server Side Rendering.'
    },
    {
      title: 'Membuat Website SEO Friendly dengan Next.js',
      content: 'SEO penting untuk website. Pelajari bagaimana membuat meta tag dinamis, sitemap, dan halaman yang SEO-friendly menggunakan Next.js.',
      slug: 'seo-friendly-nextjs',
      status: 'published',
      excerpt: 'Optimasi SEO di Next.js untuk halaman web.'
    },
    {
      title: 'Mengenal TypeScript untuk JavaScript Developer',
      content: 'TypeScript menambahkan tipe data ke JavaScript. Pelajari tipe dasar, interface, dan cara menggunakan TypeScript di proyek Node.js dan Next.js.',
      slug: 'mengenal-typescript',
      status: 'draft',
      excerpt: 'Belajar TypeScript untuk developer JavaScript.'
    },
    {
      title: 'Tips Debugging Node.js dan Koa',
      content: 'Debugging adalah skill penting. Pelajari cara menggunakan console, debugger, dan tools lain untuk menemukan bug di Node.js dan Koa.',
      slug: 'tips-debugging-nodejs-koa',
      status: 'published',
      excerpt: 'Tips debugging efektif untuk Node.js dan Koa.'
    },
    {
      title: 'Mengenal REST API dan Best Practice',
      content: 'REST API adalah standar komunikasi client-server. Pelajari prinsip REST, endpoint design, dan best practice untuk membangun API.',
      slug: 'mengenal-rest-api',
      status: 'published',
      excerpt: 'Belajar REST API dan best practice untuk backend.'
    },
    {
      title: 'Membuat Authentication JWT di Node.js',
      content: 'JWT digunakan untuk autentikasi stateless. Panduan ini mengajarkan cara membuat login dan token JWT di Node.js.',
      slug: 'authentication-jwt-nodejs',
      status: 'draft',
      excerpt: 'Autentikasi JWT di Node.js untuk keamanan API.'
    },
    {
      title: 'Belajar HTML dan CSS Dasar untuk Pemula',
      content: 'HTML dan CSS adalah dasar web. Pelajari struktur HTML, styling dengan CSS, dan layout dasar.',
      slug: 'html-css-dasar',
      status: 'published',
      excerpt: 'Dasar HTML dan CSS untuk pemula.'
    },
    {
      title: 'Mengenal Git dan Version Control',
      content: 'Git adalah sistem version control. Pelajari commit, branch, merge, dan workflow yang baik untuk proyek developer.',
      slug: 'mengenal-git-version-control',
      status: 'draft',
      excerpt: 'Belajar Git untuk version control proyek coding.'
    },
    {
      title: 'Membuat Dashboard Sederhana dengan React',
      content: 'Pelajari cara membuat dashboard interaktif menggunakan React, state management, dan komponen visual.',
      slug: 'dashboard-sederhana-react',
      status: 'published',
      excerpt: 'Dashboard interaktif sederhana menggunakan React.'
    },
    {
      title: 'Belajar Fetch API di JavaScript',
      content: 'Fetch API digunakan untuk request HTTP. Pelajari cara GET, POST, dan menangani response JSON di JavaScript.',
      slug: 'belajar-fetch-api',
      status: 'published',
      excerpt: 'Menggunakan Fetch API untuk HTTP request di JavaScript.'
    },
    {
      title: 'Mengenal WebSocket untuk Real-Time App',
      content: 'WebSocket memungkinkan komunikasi real-time antara client dan server. Pelajari dasar WebSocket dan contoh implementasi.',
      slug: 'mengenal-websocket',
      status: 'draft',
      excerpt: 'Dasar WebSocket untuk aplikasi real-time.'
    },
    {
      title: 'Tips Menulis Dokumentasi Kode yang Baik',
      content: 'Dokumentasi kode penting untuk maintainability. Pelajari tips menulis komentar, README, dan dokumentasi API yang jelas.',
      slug: 'tips-dokumentasi-kode',
      status: 'published',
      excerpt: 'Cara menulis dokumentasi kode yang baik dan jelas.'
    },
    {
      title: 'Mengenal Algoritma Dasar untuk Developer',
      content: 'Algoritma penting untuk menyelesaikan masalah coding. Pelajari algoritma sorting, searching, dan struktur data dasar.',
      slug: 'algoritma-dasar-developer',
      status: 'draft',
      excerpt: 'Belajar algoritma dasar untuk pengembangan aplikasi.'
    }
  ]);
};
