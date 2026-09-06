import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import "../gfa-brand.css";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE_PRIMARY = { display: "0916 269 919", tel: "+84916269919" };
const PHONE_LANDLINE = { display: "024 3755 6677", tel: "+842437556677" };
const PHONE_SECOND = { display: "0919 191 996", tel: "+84919191996" };
const EMAIL_1 = "info.gfavietnam@gmail.com";
const EMAIL_2 = "datxe.gfavietnam@gmail.com";
const ZALO_URL = "https://zalo.me/0916919919";
const MESSENGER_URL = "https://www.facebook.com/messages/t/GFAVietnam.Company/";
const MAPS_PROFILE_URL =
  "https://www.google.com/maps/place/?q=place_id:ChIJs4Emz-hUNDERrX5Cjy0N6XI";
const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14894.3146215451!2d105.7532948!3d21.0495386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454e8cf2681b3%3A0x72e90d2d8f427ead!2sC%C3%B4ng%20Ty%20TNHH%20GFA%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1726729297404!5m2!1svi!2s";

const ADDRESS_1 =
  "Ô số E20 Khu E, khu đấu giá quyền sử dụng đất, khu đất 3ha, P. Phú Diễn, TP. Hà Nội";
const ADDRESS_2 =
  "Ô số B38 Khu B, khu đấu giá quyền sử dụng đất, khu đất 3ha, P. Phú Diễn, TP. Hà Nội";

function directionsUrl(address: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address + ", Hà Nội, Việt Nam",
  )}`;
}

const SERVICES = [
  { title: "Thuê xe dài hạn", desc: "Hợp đồng thuê xe theo tháng hoặc theo năm cho cá nhân, hộ gia đình và doanh nghiệp." },
  { title: "Xe sân bay", desc: "Đưa đón sân bay theo lịch trình của khách, đặt lịch trước qua hotline hoặc Zalo." },
  { title: "Xe cưới hỏi", desc: "Xe phục vụ đám cưới, rước dâu tại Hà Nội và các tỉnh lân cận." },
  { title: "Du lịch & lễ hội", desc: "Xe phục vụ các chuyến du lịch, lễ hội theo đoàn hoặc theo gia đình." },
  { title: "Ngoại tỉnh & xe công vụ", desc: "Xe đưa đón cán bộ, chuyên gia và các chuyến công tác liên tỉnh." },
  { title: "Xe tự lái & thuê tài xế", desc: "Lựa chọn tự lái hoặc thuê xe kèm tài xế theo nhu cầu sử dụng." },
];

const FLEET_BRANDS = [
  "Toyota", "Honda", "Ford", "Hyundai", "Mercedes", "BMW",
  "Lexus", "Nissan", "Mitsubishi", "Daewoo", "Porsche", "Jaguar",
];

function Index() {
  const skyRef = useRef<HTMLDivElement>(null);
  const skylineRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      videoRef.current?.pause();
      return;
    }

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const heroEl = heroSectionRef.current;
        if (heroEl) {
          const rect = heroEl.getBoundingClientRect();
          const progress = Math.min(1.4, Math.max(0, -rect.top / Math.max(1, rect.height)));
          if (skylineRef.current) skylineRef.current.style.transform = `translate3d(0, ${progress * 40}px, 0)`;
          if (roadRef.current) roadRef.current.style.transform = `translate3d(0, ${progress * 110}px, 0)`;
          if (skyRef.current) skyRef.current.style.transform = `translate3d(0, ${progress * 18}px, 0)`;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: "Công ty TNHH GFA Việt Nam",
    image: "https://gfa-vietnam.higgsfield.app/assets/og-image.jpg",
    telephone: PHONE_PRIMARY.tel,
    email: EMAIL_1,
    address: [
      { "@type": "PostalAddress", streetAddress: ADDRESS_1, addressLocality: "Hà Nội", addressCountry: "VN" },
      { "@type": "PostalAddress", streetAddress: ADDRESS_2, addressLocality: "Hà Nội", addressCountry: "VN" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 21.0495874, longitude: 105.7532885 },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "17:00",
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "6" },
  };

  return (
    <div className="gfa-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="gfa-nav">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-2">
            <img src="/assets/favicon-48.png" alt="GFA Việt Nam" width={32} height={32} />
            <span className="gfa-brand-word text-sm font-semibold tracking-wide">GFA VIỆT NAM</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="gfa-navlink">Giới thiệu</a>
            <a href="#services" className="gfa-navlink">Dịch vụ</a>
            <a href="#trust" className="gfa-navlink">Đánh giá</a>
            <a href="#location" className="gfa-navlink">Địa chỉ</a>
          </nav>
          <a href={`tel:${PHONE_PRIMARY.tel}`} className="gfa-call-pill px-4 py-2 text-sm">
            Gọi {PHONE_PRIMARY.display}
          </a>
        </div>
      </header>

      <section id="top" ref={heroSectionRef} className="gfa-hero">
        <div ref={skyRef} className="gfa-hero-layer gfa-hero-sky" />
        <div ref={skylineRef} className="gfa-hero-layer gfa-hero-video-wrap" aria-hidden="true">
          <video
            ref={videoRef}
            className="gfa-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/assets/poster.jpg"
          >
            <source src="/assets/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div ref={roadRef} className="gfa-hero-layer gfa-hero-glow" aria-hidden="true" />
        <div className="gfa-hero-vignette" />

        <div className="gfa-hero-content mx-auto max-w-6xl px-5">
          <p className="gfa-eyebrow gfa-reveal mb-4">GFA Việt Nam · Hà Nội</p>
          <h1 className="gfa-h1 gfa-reveal max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Thuê xe &amp; đưa đón<br /> chuyên nghiệp
          </h1>
          <p className="gfa-reveal mt-5 max-w-xl text-base text-[color:var(--gfa-mist)] sm:text-lg">
            Đội xe 4–45 chỗ phục vụ sân bay, cưới hỏi, du lịch và công tác — tại Hà Nội và các tỉnh lân cận.
          </p>
          <div className="gfa-reveal mt-8 flex flex-wrap items-center gap-3">
            <a href={`tel:${PHONE_PRIMARY.tel}`} className="gfa-btn-primary px-6 py-3 text-sm">
              Gọi hotline {PHONE_PRIMARY.display}
            </a>
            <a href={ZALO_URL} target="_blank" rel="noreferrer" className="gfa-btn-outline px-6 py-3 text-sm">Nhắn Zalo</a>
            <a href={directionsUrl(ADDRESS_1)} target="_blank" rel="noreferrer" className="gfa-btn-outline px-6 py-3 text-sm">
              Chỉ đường tới GFA
            </a>
          </div>
        </div>
        <div className="gfa-scrollcue" aria-hidden="true" />
      </section>

      <section id="about" className="gfa-section">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="gfa-eyebrow mb-3">Giới thiệu</p>
            <h2 className="gfa-h2 text-3xl font-semibold sm:text-4xl">Về GFA Việt Nam</h2>
            <p className="mt-5 text-[color:var(--gfa-mist)] leading-relaxed">
              Công ty TNHH GFA Việt Nam là đơn vị cho thuê xe có trụ sở tại phường Phú Diễn, Hà Nội.
              GFA cung cấp dịch vụ thuê xe dài hạn và thuê xe theo chuyến, với đội xe đa dạng từ 4 đến 45 chỗ,
              gồm các dòng xe Toyota, Honda, Ford, Hyundai, Mercedes, BMW, Lexus, Nissan, Mitsubishi, Porsche và Jaguar.
              Bên cạnh dịch vụ thuê xe, GFA còn vận hành GFA Auto và GFA Tour.
            </p>
          </div>
          <div className="gfa-card p-6">
            <p className="gfa-eyebrow mb-4">Liên hệ nhanh</p>
            <ul className="space-y-3 text-sm">
              <li><a href={`tel:${PHONE_PRIMARY.tel}`} className="gfa-navlink underline decoration-[color:var(--gfa-line)]">Hotline: {PHONE_PRIMARY.display}</a></li>
              <li><a href={`tel:${PHONE_LANDLINE.tel}`} className="gfa-navlink underline decoration-[color:var(--gfa-line)]">Điện thoại bàn: {PHONE_LANDLINE.display}</a></li>
              <li><a href={`mailto:${EMAIL_1}`} className="gfa-navlink underline decoration-[color:var(--gfa-line)]">{EMAIL_1}</a></li>
              <li className="text-[color:var(--gfa-mist)]">Giờ làm việc: Thứ 2 – Chủ nhật, 8:00 – 17:00</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="gfa-section gfa-section-alt">
        <div className="mx-auto max-w-6xl px-5">
          <p className="gfa-eyebrow mb-3">Dịch vụ</p>
          <h2 className="gfa-h2 max-w-xl text-3xl font-semibold sm:text-4xl">Thuê xe theo nhu cầu của bạn</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="gfa-card p-6">
                <div className="gfa-icon-ring mb-4 text-base">•</div>
                <h3 className="gfa-h3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--gfa-mist)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 overflow-hidden border-y border-[color:var(--gfa-line)] py-4">
          <div className="gfa-fleet-marquee gfa-eyebrow text-sm">
            {[...FLEET_BRANDS, ...FLEET_BRANDS].map((b, i) => (
              <span key={`${b}-${i}`}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="gfa-section">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="gfa-eyebrow mb-3">Được khách hàng đánh giá</p>
          <h2 className="gfa-h2 text-3xl font-semibold sm:text-4xl">4.7 trên Google</h2>
          <p className="mt-4 text-[color:var(--gfa-mist)]">Xếp hạng dựa trên đánh giá của khách hàng trên Google Maps.</p>
          <a href={MAPS_PROFILE_URL} target="_blank" rel="noreferrer" className="gfa-rating-badge mt-6">
            <span className="gfa-star" aria-hidden="true">★★★★★</span>
            <span className="text-sm">4.7 / 5 · Xem trên Google Maps</span>
          </a>
        </div>
      </section>

      <section id="location" className="gfa-section gfa-section-alt">
        <div className="mx-auto max-w-6xl px-5">
          <p className="gfa-eyebrow mb-3">Giờ làm việc &amp; Địa chỉ</p>
          <h2 className="gfa-h2 max-w-xl text-3xl font-semibold sm:text-4xl">Ghé thăm văn phòng GFA</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-5">
              <div className="gfa-card p-6">
                <h3 className="gfa-h3 text-base font-semibold">Giờ làm việc</h3>
                <p className="mt-2 text-sm text-[color:var(--gfa-mist)]">Thứ 2 – Chủ nhật: 8:00 – 17:00</p>
              </div>
              <div className="gfa-card p-6">
                <h3 className="gfa-h3 text-base font-semibold">Trụ sở — Khu E</h3>
                <p className="mt-2 text-sm text-[color:var(--gfa-mist)]">{ADDRESS_1}</p>
                <a href={directionsUrl(ADDRESS_1)} target="_blank" rel="noreferrer" className="gfa-btn-outline mt-4 inline-block px-4 py-2 text-xs">
                  Chỉ đường trên Google Maps
                </a>
              </div>
              <div className="gfa-card p-6">
                <h3 className="gfa-h3 text-base font-semibold">Chi nhánh — Khu B</h3>
                <p className="mt-2 text-sm text-[color:var(--gfa-mist)]">{ADDRESS_2}</p>
                <a href={directionsUrl(ADDRESS_2)} target="_blank" rel="noreferrer" className="gfa-btn-outline mt-4 inline-block px-4 py-2 text-xs">
                  Chỉ đường trên Google Maps
                </a>
              </div>
            </div>
            <div className="gfa-map-frame min-h-[320px]">
              <iframe
                title="Bản đồ GFA Việt Nam"
                src={MAP_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="gfa-footer">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2">
                <img src="/assets/favicon-48.png" alt="GFA Việt Nam" width={30} height={30} />
                <span className="gfa-brand-word text-sm font-semibold">CÔNG TY TNHH GFA VIỆT NAM</span>
              </div>
              <p className="mt-4 text-sm text-[color:var(--gfa-mist)] leading-relaxed">{ADDRESS_1}</p>
              <p className="mt-2 text-sm text-[color:var(--gfa-mist)] leading-relaxed">{ADDRESS_2}</p>
            </div>
            <div>
              <p className="gfa-eyebrow mb-3">Liên hệ</p>
              <ul className="space-y-2 text-sm">
                <li><a href={`tel:${PHONE_PRIMARY.tel}`} className="gfa-navlink">Hotline: {PHONE_PRIMARY.display}</a></li>
                <li><a href={`tel:${PHONE_SECOND.tel}`} className="gfa-navlink">{PHONE_SECOND.display}</a></li>
                <li><a href={`tel:${PHONE_LANDLINE.tel}`} className="gfa-navlink">{PHONE_LANDLINE.display}</a></li>
                <li><a href={`mailto:${EMAIL_1}`} className="gfa-navlink">{EMAIL_1}</a></li>
                <li><a href={`mailto:${EMAIL_2}`} className="gfa-navlink">{EMAIL_2}</a></li>
              </ul>
            </div>
            <div>
              <p className="gfa-eyebrow mb-3">Kênh khác</p>
              <ul className="space-y-2 text-sm">
                <li><a href={ZALO_URL} target="_blank" rel="noreferrer" className="gfa-navlink">Zalo</a></li>
                <li><a href={MESSENGER_URL} target="_blank" rel="noreferrer" className="gfa-navlink">Facebook Messenger</a></li>
                <li><a href={MAPS_PROFILE_URL} target="_blank" rel="noreferrer" className="gfa-navlink">Google Maps</a></li>
                <li><a href="https://gfavietnam.com.vn/" target="_blank" rel="noreferrer" className="gfa-navlink">gfavietnam.com.vn</a></li>
              </ul>
              <p className="mt-4 text-xs text-[color:var(--gfa-mist)]">Thứ 2 – Chủ nhật: 8:00 – 17:00</p>
            </div>
          </div>
          <div className="mt-10 border-t border-[color:var(--gfa-line)] pt-6 text-xs text-[color:var(--gfa-mist)]">
            © 2026 Công ty TNHH GFA Việt Nam.
          </div>
        </div>
      </footer>
    </div>
  );
}
