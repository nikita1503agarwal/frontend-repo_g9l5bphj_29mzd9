import React from 'react'
import {
  Stethoscope,
  Tooth,
  Calendar,
  Phone,
  Instagram,
  MapPin,
  Clock,
  MessageCircle,
  User
} from 'lucide-react'

function App() {
  const whatsappLink = 'https://wa.me/0000000000' // placeholder
  const instagramLink = 'https://instagram.com/rahayumedika' // placeholder

  return (
    <div className="min-h-screen bg-white text-slate-800 scroll-smooth">
      {/* Top Bar / Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-blue-600 flex items-center justify-center">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-slate-900">Klinik Pratama Rahayu Medika</p>
              <p className="text-xs text-slate-500">General & Dental Care</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-blue-700 text-slate-600">Tentang</a>
            <a href="#doctors" className="hover:text-blue-700 text-slate-600">Dokter</a>
            <a href="#services" className="hover:text-blue-700 text-slate-600">Layanan</a>
            <a href="#contact" className="hover:text-blue-700 text-slate-600">Kontak</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-3 py-2 rounded-md transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative isolate">
        <div
          className="absolute inset-0 -z-10 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-white/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-blue-800 bg-blue-50 ring-1 ring-blue-100 px-3 py-1 rounded-full text-xs font-medium">
              <Stethoscope className="h-3.5 w-3.5" /> Klinik Keluarga Terpercaya
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Klinik Rahayu – General & Dental Care Services
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl">
              Fast, friendly, and professional healthcare for your family.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md shadow-sm"
              >
                <Phone className="h-5 w-5" /> Chat via WhatsApp
              </a>
              <a
                href="#doctors"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-blue-700 font-semibold px-6 py-3 rounded-md ring-1 ring-slate-200"
              >
                <Calendar className="h-5 w-5" /> View Doctor Schedule
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Tentang Klinik</h2>
              <p className="mt-4 text-slate-600">
                Klinik Pratama Rahayu Medika memberikan layanan kesehatan umum dan gigi
                dengan pendekatan yang ramah, cepat, dan profesional. Kami berkomitmen
                menghadirkan pengalaman berobat yang nyaman bagi seluruh keluarga.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg ring-1 ring-slate-200 bg-white">
                  <h3 className="font-semibold text-slate-900">Visi</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Menjadi klinik pilihan utama masyarakat dengan pelayanan berkualitas
                    dan berintegritas tinggi.
                  </p>
                </div>
                <div className="p-6 rounded-lg ring-1 ring-slate-200 bg-white">
                  <h3 className="font-semibold text-slate-900">Misi</h3>
                  <ul className="mt-2 text-sm text-slate-600 list-disc list-inside space-y-1">
                    <li>Memberikan layanan cepat dan tepat.</li>
                    <li>Mengedepankan keselamatan dan kenyamanan pasien.</li>
                    <li>Menyediakan edukasi kesehatan yang berkelanjutan.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1580281657529-47e6ba083311?q=80&w=1200&auto=format&fit=crop"
                alt="Clinic room"
                className="h-40 sm:h-48 md:h-56 w-full object-cover rounded-lg ring-1 ring-slate-200"
              />
              <img
                src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=1200&auto=format&fit=crop"
                alt="Clinic reception"
                className="h-40 sm:h-48 md:h-56 w-full object-cover rounded-lg ring-1 ring-slate-200"
              />
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
                alt="Waiting area"
                className="h-40 sm:h-48 md:h-56 w-full object-cover rounded-lg ring-1 ring-slate-200"
              />
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop"
                alt="Dental room"
                className="h-40 sm:h-48 md:h-56 w-full object-cover rounded-lg ring-1 ring-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Dokter Kami</h2>
              <p className="mt-2 text-slate-600">Profesional dan berpengalaman di bidangnya.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Doctor A */}
            <DoctorCard
              name="Dr. A"
              title="General Practitioner"
              schedule="Senin–Rabu, 08.00–12.00"
              whatsappLink={whatsappLink}
            />
            {/* Doctor B */}
            <DoctorCard
              name="Dr. B"
              title="General Practitioner"
              schedule="Kamis–Jumat, 13.00–17.00"
              whatsappLink={whatsappLink}
            />
            {/* Doctor C */}
            <DoctorCard
              name="Dr. C"
              title="Dentist"
              schedule="Sabtu, 09.00–14.00"
              whatsappLink={whatsappLink}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Layanan Klinik</h2>
            <p className="mt-2 text-slate-600">Layanan utama yang tersedia untuk Anda dan keluarga.</p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Stethoscope className="h-6 w-6 text-blue-700" />}
              title="General Check-ups"
              desc="Pemeriksaan kesehatan umum dan evaluasi kondisi fisik."
            />
            <ServiceCard
              icon={<User className="h-6 w-6 text-blue-700" />}
              title="Health Consultation"
              desc="Konsultasi kesehatan dengan dokter umum berpengalaman."
            />
            <ServiceCard
              icon={<Tooth className="h-6 w-6 text-blue-700" />}
              title="Basic Dental Care"
              desc="Perawatan gigi dasar dan edukasi kebersihan mulut."
            />
            <ServiceCard
              icon={<Calendar className="h-6 w-6 text-blue-700" />}
              title="Minor Procedures"
              desc="Tindakan medis ringan sesuai kebutuhan pasien."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Kontak & Media Sosial</h2>
              <p className="mt-2 text-slate-600">Hubungi kami atau kunjungi akun media sosial klinik.</p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-3 rounded-md"
                >
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </a>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:brightness-95 text-white font-medium px-5 py-3 rounded-md"
                >
                  <Instagram className="h-5 w-5" /> Instagram
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-md bg-blue-50 ring-1 ring-blue-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Telepon</p>
                    <p className="font-semibold text-slate-900">(021) 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-md bg-blue-50 ring-1 ring-blue-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Jam Operasional</p>
                    <p className="font-semibold text-slate-900">Senin–Sabtu, 08.00–20.00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <div className="h-10 w-10 rounded-md bg-blue-50 ring-1 ring-blue-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Alamat</p>
                    <p className="font-semibold text-slate-900">Jl. Sehat No. 123, Jakarta</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="aspect-video w-full rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-slate-900 font-semibold">Google Maps Placeholder</p>
                  <p className="text-slate-500 text-sm mt-1">
                    Sematkan Google Maps di sini dengan iframe lokasi klinik Anda.
                  </p>
                  <div className="mt-4 text-xs text-slate-500">
                    Contoh iframe:
                    <div className="mt-1 p-2 bg-slate-50 rounded border border-slate-200 overflow-x-auto">
                      <code>{"<iframe src='https://www.google.com/maps/embed?...' class='w-full h-full' loading='lazy'></iframe>"}</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-blue-600 flex items-center justify-center">
                  <Stethoscope className="h-5 w-5 text-white" />
                </div>
                <p className="font-semibold text-slate-900">Klinik Pratama Rahayu Medika</p>
              </div>
              <p className="mt-3 text-sm text-slate-600 max-w-md">
                Layanan kesehatan umum dan gigi yang mengedepankan kenyamanan serta profesionalisme.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">Kontak</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Telepon: (021) 1234 5678</li>
                <li>Alamat: Jl. Sehat No. 123, Jakarta</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">Navigasi</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#about" className="text-slate-600 hover:text-blue-700">Tentang</a></li>
                <li><a href="#doctors" className="text-slate-600 hover:text-blue-700">Dokter</a></li>
                <li><a href="#services" className="text-slate-600 hover:text-blue-700">Layanan</a></li>
                <li><a href="#contact" className="text-slate-600 hover:text-blue-700">Kontak</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Klinik Pratama Rahayu Medika. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-blue-700"><MessageCircle className="h-3.5 w-3.5" /> WhatsApp</a>
              <a href={instagramLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-blue-700"><Instagram className="h-3.5 w-3.5" /> Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function DoctorCard({ name, title, schedule, whatsappLink }) {
  return (
    <div className="group bg-white rounded-xl ring-1 ring-slate-200 hover:ring-blue-200 transition-shadow shadow-sm hover:shadow-md p-6">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg bg-blue-50 ring-1 ring-blue-100 flex items-center justify-center">
          <User className="h-6 w-6 text-blue-700" />
        </div>
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-slate-600">{title}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
        <Calendar className="h-4 w-4 text-blue-700" />
        <p>{schedule}</p>
      </div>
      <div className="mt-6">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  )
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-xl p-6 ring-1 ring-slate-200 hover:ring-blue-200 transition-shadow shadow-sm hover:shadow-md">
      <div className="h-12 w-12 rounded-lg bg-blue-50 ring-1 ring-blue-100 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  )
}

export default App
