const list = [
  {
    icon: "/public/iconSidebar/dashboard.svg",
    nav: "Dashboard",
    navlink: "/",
    nestedLink: null,
  },
  {
    icon: "/public/iconSidebar/addpost.svg",
    nav: "Kelola Postingan",
    navlink: "/kelolaPostingan",
    nestedLink: {
      title: "Tambah Postingan ",
      href: "/tambahPostingan",
    },
  },
  {
    icon: "/public/iconSidebar/kategori.svg",
    nav: " Kategori",
    navlink: "/kategori",
    nestedLink: {
      title: "Tambah Kategori ",
      href: "/tambahKategori",
    },
  },
  {
    icon: "/public/iconSidebar/galeri.svg",
    nav: " Galeri",
    navlink: "/galeri",
    nestedLink: null,
  },
  {
    icon: "/public/iconSidebar/team.svg",
    nav: "Kelola Tim ",
    navlink: "/kelolaTim",
    nestedLink: {
      title: "Tambah Anggota ",
      href: "/tambahAnggota",
    },
  },
  {
    icon: "/public/iconSidebar/posisi.svg",
    nav: "Kelola Posisi ",
    navlink: "/kelolaPosisi",
    nestedLink: {
      title: "Tambah Posisi ",
      href: "/tambahPosisi",
    },
  },
];

export default list;
