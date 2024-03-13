import NavbarComponent from "../../components/Navbar/NavbarComponent"
import FooterComponent from "../../components/Footer/FooterComponent"

import style from "./layanan.module.css"
const Layanan = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div className={style.layananBack} data-aos="fade-up" data-aos-duration="1000">
        <h1>Layanan Kami</h1>
      </div>
      <div className={style.layanan} data-aos="fade-up" data-aos-delay="300">
        <img src="/public/iconLayanan/layanan1.svg" alt="" />
        <h1>Litigasi & Non Litigasi</h1>
        <p>Fiable Law Office, didukung oleh tim pengacara yang berpengalaman, menyediakan layanan hukum yang komprehensif, meliputi konsultasi hukum, bantuan hukum, dan pendampingan hukum. Tim kami memiliki keahlian khusus dalam menangani beragam perkara, seperti Perdata (PMH & Wanprestasi), Pidana, Tata Usaha Negara, dan Hukum Keluarga. Kami juga mampu menyelesaikan sengketa tanah ulayat dan berbagai masalah hukum lainnya.</p>
        <p>Dengan pendekatan yang berfokus pada kebutuhan klien, kami berkomitmen untuk  memberikan solusi hukum yang tepat dan efektif. Setiap anggota tim kami memahami kompleksitas hukum dan siap memberikan pandangan yang mendalam untuk membantu Anda mengatasi tantangan hukum yang dihadapi. Di Fiable Law Office, kami bukan hanya menjadi pengacara, tetapi mitra yang peduli, siap membantu Anda mengamankan hak dan kepentingan Anda dengan penuh integritas.</p>
        <p>Kami mengundang Anda untuk menjelajahi berbagai layanan hukum kami dan mengalami pendekatan profesional kami yang berfokus pada kepuasan klien. Terpercaya, berpengalaman, dan berkomitmen - Fiable Law Office siap menjadi mitra hukum andal untuk membantu mewujudkan keadilan dan penyelesaian hukum yang memuaskan.</p>
      </div>
      <div className={style.layanan} data-aos="fade-up" data-aos-delay="100">
        <img src="/public/iconLayanan/layanan2.svg" alt="" />
        <h1>Corporat, Commercial & Compliance</h1>
        <p>Fiable Law Office memiliki tim legal consultant berlisensi pengacara yang menghadirkan keahlian dalam berbagai aspek hukum korporat, perdagangan, dan kepatuhan. Layanan kami meliputi:</p>
        <table className={style.num}>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Perancangan, Peninjauan, dan/atau Negosiasi Kontrak Bisnis (Contract Drafting): Kami menghadirkan keahlian dalam merancang, meninjau, dan bernegosiasi kontrak bisnis yang sesuai dengan kebutuhan dan kepentingan klien.</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Uji Tuntas dari Segi Hukum dan Penerbitan Opini Hukum (Legal Due Diligence & Legal Opinion): Menyediakan penelitian mendalam terhadap aspek hukum, serta memberikan opini hukum yang solid untuk memastikan keamanan dan kepatuhan terhadap peraturan yang berlaku.</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Perizinan Usaha Berbasis OSS-RBA dan Maintenance Kewajiban Pelaporan Instansi Terkait: Membantu klien dalam perizinan usaha berbasis OSS-RBA dan menjaga kewajiban pelaporan kepada instansi terkait untuk memastikan kelancaran operasional perusahaan.</td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Penunjukan sebagai Konsultan Hukum Tetap (Retainer Lawyer): Menyediakan layanan konsultasi hukum berkelanjutan, memastikan klien mendapatkan dukungan hukum yang konsisten dan tepat waktu.</td>
            </tr>
            <tr>
              <td>5.</td>
              <td>Corporate Restructuring seperti Merger, Consolidation, Acquisition, Split-Up, Spin-Off, dan Lain Sebagainya: Menyediakan panduan hukum dalam proses restrukturisasi perusahaan untuk memastikan kelangsungan dan keberlanjutan bisnis.</td>
            </tr>
          </tbody>
        </table>
        <p>Kami mengundang Anda untuk menjelajahi berbagai layanan hukum kami dan mengalami pendekatan profesional kami yang berfokus pada kepuasan klien. Terpercaya, berpengalaman, dan berkomitmen - Fiable Law Office siap menjadi mitra hukum andal untuk membantu mewujudkan keadilan dan penyelesaian hukum yang memuaskan.</p>
      </div>
      <div className={style.layanan} data-aos="fade-up" data-aos-delay="100">
        <img src="/public/iconLayanan/layanan3.svg" alt="" />
        <h1>Bisnis</h1>
        <p>Tim ahli kami siap memberikan konsultasi yang mendalam tentang berbagai aspek hukum yang relevan dengan bisnis Anda. Dari pembentukan perusahaan hingga kepatuhan regulasi, kami akan membantu Anda memahami risiko dan peluang yang ada.. Kami menyediakan layanan penyelesaian kontrak yang cermat dan efisien untuk melindungi kepentingan Anda dan meminimalkan risiko hukum. Apabila Anda menghadapi sengketa hukum, tim litigasi kami akan bekerja keras untuk melindungi hak-hak Anda di pengadilan. Kami juga ahli dalam mediasi dan arbitrase untuk mencapai penyelesaian yang menguntungkan.Kepatuhan hukum adalah kunci untuk menjaga reputasi dan integritas bisnis Anda. Kami akan membantu Anda menjaga kepatuhan terhadap semua regulasi yang berlaku dan melakukan audit yang terperinci untuk mengidentifikasi dan memperbaiki potensi masalah.</p>
        <p>Jangan biarkan masalah hukum menghambat pertumbuhan bisnis Anda. Hubungi Fiable Law Firm Office hari ini untuk mendapatkan solusi hukum yang tepat dan mengoptimalkan keberhasilan bisnis Anda!</p>
      </div>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default Layanan