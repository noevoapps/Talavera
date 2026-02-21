import React, { useState, useEffect } from "react";
import {
  Menu,
  Star,
  MapPin,
  Clock,
  Phone,
  Instagram,
  Facebook,
  Utensils,
  ChevronRight,
  X,
  ExternalLink,
  ShoppingBag,
  Flame,
  ArrowLeft,
  Image as ImageIcon,
} from "lucide-react";

/**
 * TALAVERA TAQUERIA - IMAGE ENHANCED EDITION
 */

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onPopState = () => {
      const path = window.location.pathname.replace("/", "");
      setCurrentPage(path === "menu" ? "menu" : "home");
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    document.title =
      currentPage === "menu"
        ? "Menu | Talavera Taqueria"
        : "Talavera Taqueria | Authentic Mexican";
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (page, sectionId = null) => {
    setMobileMenuOpen(false);
    if (!sectionId) {
      if (page !== currentPage) {
        window.history.pushState({}, "", page === "home" ? "/" : `/${page}`);
        setCurrentPage(page);
        window.scrollTo(0, 0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const targetPageForSection =
      sectionId === "favorites" ||
      sectionId === "reviews" ||
      sectionId === "gallery"
        ? "home"
        : currentPage;
    if (targetPageForSection !== currentPage) {
      window.history.pushState(
        {},
        "",
        targetPageForSection === "home" ? "/" : `/${targetPageForSection}`,
      );
      setCurrentPage(targetPageForSection);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  // --- UPDATED DATA WITH IMAGES ---
  const fullMenu = [
    {
      category: "Tacos",
      items: [
        {
          name: "Tacos de Asada",
          price: "$15",
          desc: "Cilantro, onions & salsa verde",
          img: "/taco1.jpg",
        },
        {
          name: "Tacos Al Pastor",
          price: "$15",
          desc: "Spicy pork, onions, cilantro, pineapple & salsa verde",
          img: "/taco2.jpg",
        },
        {
          name: "Birria Tacos",
          price: "$16",
          desc: "Short beef, Mexican melted cheese, cilantro, onions, side consome dip",
          popular: true,
          img: "/taco3.jpg",
        },
        {
          name: "Tacos de Pollo",
          price: "$15",
          desc: "Cilantro, onions & salsa verde",
          img: "/taco4.jpg",
        },
        {
          name: "Tacos de Chorizo",
          price: "$16",
          desc: "Cilantro, onions & salsa verde",
          img: "/taco1.jpg",
        },
        {
          name: "Tacos de Pescado",
          price: "$16",
          desc: "Baja style, mixed cabbage, pico de gallo & chipotle aioli",
          img: "/taco2.jpg",
        },
        {
          name: "Tacos de Camaron",
          price: "$18",
          desc: "Red cabbage, pico de gallo, chipotle aioli, slice of avocado",
          img: "/taco2.jpg",
        },
      ],
    },
    {
      category: "Para Compartir",
      items: [
        {
          name: "Nachos Supreme",
          price: "$16",
          desc: "Black beans, Monterrey cheese, pico de gallo, lettuce, sour cream, cotija cheese, guacamole, jalapeños",
          img: "",
        },
        {
          name: "Queso Fundido",
          price: "$10",
          desc: "Mexican Cheese (Fundue Style). Add Chorizo +$4",
          img: "",
        },
        {
          name: "Empanadas",
          price: "$8-$10",
          desc: "Order of 2 served with side chipotle aioli. Chicken ($8) or Shrimp ($10)",
          img: "",
        },
        {
          name: "Coctel de Camarones",
          price: "$16",
          desc: "Shrimp cocktail sauce, onions, cilantro, tomatoes, avocado",
          img: "",
        },
        {
          name: "Classic Guacamole",
          price: "$12",
          desc: "Served with tortilla chips",
          img: "",
        },
        {
          name: "Guacamole w/ Chicharron",
          price: "$14",
          desc: "With fry pork skin",
          img: "",
        },
      ],
    },
    {
      category: "Burritos",
      items: [
        {
          name: "Classic Burritos",
          price: "$14",
          desc: "Choice of meat, rice, black beans, pico de gallo, sour cream, lettuce, Monterrey cheese. Served with chips.",
          img: "/burrito1.jpg",
        },
        {
          name: "Burrito Bowl",
          price: "$14",
          desc: "Choice of meat, rice, beans, Monterrey cheese, pico de gallo, lettuce, sour cream and guacamole.",
          img: "",
        },
      ],
    },
    {
      category: "Entrees",
      items: [
        {
          name: "Flautas",
          price: "$15",
          desc: "3 Flautas served with rice & black beans, topped with pico de gallo, sour cream and cheese.",
          img: "",
        },
        {
          name: "Enchiladas",
          price: "$18",
          desc: "Choice of meat, lettuce, onions, tomatoes, cheese, avocado & sour cream",
          img: "",
        },
        {
          name: "Fajitas",
          price: "$20-$24",
          desc: "Sautéed with onions, red & green peppers. Chicken ($20), Asada ($22), Shrimp ($24)",
          img: "",
        },
        {
          name: "Tortas",
          price: "$14",
          desc: "Choice of meat, lettuce, tomato, avocado, mayonnaise, black beans, Mexican cheese & jalapeños",
          img: "",
        },
      ],
    },
    {
      category: "Drinks",
      items: [
        {
          name: "Margaritas",
          price: "$10",
          desc: "Mango, Passion Fruit, Strawberry. Add flavor +$2",
          popular: true,
          img: "/drink1.jpg",
        },
        {
          name: "Mezcalitas",
          price: "$12",
          desc: "Peach, Mango, Passion Fruit, Pineapple",
          img: "/drink2.jpg",
        },
        {
          name: "Paloma",
          price: "$15",
          desc: "Tequila Silver, Grapefruit Soda, Lime Juice, Simple Syrup, Chamoy & Tajin Ring",
          img: "/drink1.jpg",
        },
        {
          name: "Aguas Frescas",
          price: "$5-$6",
          desc: "Horchata, Jamaica, Tamarind, Passion Fruit",
          img: "/drink2.jpg",
        },
      ],
    },
  ];

  const businessInfo = {
    name: "Talavera Taqueria",
    address: "1611 Bay Ridge Pkwy, Brooklyn, NY 11204",
    phone: "347-312-2781",
    hours: {
      weekdays: "Sun-Thu: 11:00 AM - 10:00 PM",
      weekends: "Fri-Sat: 11:00 AM - 11:00 PM",
    },
  };

  const menuCategories = [
    "Tacos",
    "Para Compartir",
    "Burritos",
    "Entrees",
    "Drinks",
  ];

  const reviews = [
    {
      name: "Sarah M.",
      text: "The Birria Tacos are absolutely incredible! Best Mexican food in Brooklyn hands down.",
      rating: 5,
    },
    {
      name: "David R.",
      text: "Loved the colorful vibe and the margaritas. Great happy hour deals!",
      rating: 5,
    },
    {
      name: "Jessica T.",
      text: "Authentic flavors, fast delivery, and the Guacamole with Chicharron is a must-try.",
      rating: 5,
    },
  ];

  // --- VISUAL COMPONENTS ---

  const TalaveraBorder = ({ height = "h-4" }) => (
    <div
      className={`w-full ${height}`}
      style={{
        background:
          "repeating-linear-gradient(45deg, #1e40af, #1e40af 20px, #ea580c 20px, #ea580c 40px, #facc15 40px, #facc15 60px, #16a34a 60px, #16a34a 80px, #dc2626 80px, #dc2626 100px, #fef3c7 100px, #fef3c7 120px)",
      }}
    />
  );

  const getTalaveraButtonStyle = (bgColor) => ({
    border: "4px solid transparent",
    borderRadius: "9999px",
    backgroundImage: `linear-gradient(${bgColor}, ${bgColor}), repeating-linear-gradient(45deg, #1e40af 0, #1e40af 5px, #ea580c 5px, #ea580c 10px, #facc15 10px, #facc15 15px, #16a34a 15px, #16a34a 20px, #dc2626 20px, #dc2626 25px, #fef3c7 25px, #fef3c7 30px)`,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
  });

  const SectionTitle = ({ title, subtitle, light = false }) => (
    <div className="text-center mb-16 relative z-10">
      <h2
        className={`text-4xl md:text-5xl font-bold font-serif mb-4 relative inline-block ${light ? "text-white" : "text-blue-900"}`}
      >
        {title}
        <div className="w-24 h-1 mt-4 bg-yellow-400 mx-auto rounded-full"></div>
      </h2>
      {subtitle && (
        <p
          className={`text-xl md:text-2xl mt-4 font-medium max-w-2xl mx-auto ${light ? "text-yellow-100" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );

  /**
   * UPDATED MenuItem Component
   * Features: Card layout, top image with hover zoom, top-right price pill, bottom outline tag
   */
  const MenuItem = ({ item }) => {
    // Beautiful default fallback image for items without pictures
    const placeholderImg =
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80";

    // Use the Vite environment variable as requested for GitHub Pages deployment
    const baseUrl = import.meta.env.BASE_URL;
    const imageSrc = item.img ? `${baseUrl}${item.img}` : placeholderImg;

    return (
      <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col group overflow-hidden h-full">
        {/* Top Image Section */}
        <div className="relative h-64 w-full overflow-hidden bg-gray-100 flex-shrink-0">
          <img
            src={imageSrc}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              // Automatically switch to placeholder if the local image path is broken
              e.target.onerror = null;
              e.target.src = placeholderImg;
            }}
          />
          {/* Price Badge (Styled like the reference image: dark pill, teal text) */}
          <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-sm text-[#2dd4bf] font-bold px-4 py-1.5 rounded-full text-sm z-10 shadow-lg tracking-wide border border-white/10">
            {item.price}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col flex-grow text-left">
          <h3 className="text-2xl font-bold text-gray-900 font-serif mb-2 leading-tight">
            {item.name}
          </h3>
          <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base mb-6 flex-grow">
            {item.desc}
          </p>

          {/* Bottom Badge (Styled like the '24G PROTEIN' outline button) */}
          <div className="mt-auto">
            <span className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-700 text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider bg-transparent">
              {item.popular ? (
                <>
                  <Flame size={14} className="text-red-500" />
                  Popular Choice
                </>
              ) : (
                <>
                  <Utensils size={14} className="text-gray-400" />
                  Classic
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const MobileNavLink = ({ children, onClick }) => (
    <button
      onClick={onClick}
      className="w-full text-left py-4 px-6 text-xl font-bold text-blue-900 border-b border-gray-100 hover:bg-yellow-50 active:bg-yellow-100 flex justify-between items-center group"
    >
      {children}
      <ChevronRight className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
    </button>
  );

  // --- VIEWS ---

  const HomeView = () => (
    <>
      <div className="relative bg-blue-900 text-white min-h-[600px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster={`${import.meta.env.BASE_URL}video_store_front.mp4`}
        >
          <source
            src={`${import.meta.env.BASE_URL}video_store_front.mp4`}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10"></div>
        <div className="container mx-auto px-4 relative z-20 text-center flex flex-col items-center pt-32 md:pt-40">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight font-serif text-white drop-shadow-xl">
            Talavera <br />{" "}
            <span className="text-5xl md:text-7xl text-yellow-400 drop-shadow-md">
              Taqueria
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-100 mb-16 max-w-2xl font-medium tracking-wide drop-shadow-md">
            Authentic Mexican flavor, inspired by tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg mx-auto pb-12">
            <button
              onClick={() => navigateTo("menu")}
              className="flex-1 text-white px-8 py-4 rounded-full font-bold text-xl transition shadow-lg hover:scale-105 hover:brightness-110 transform duration-200"
              style={getTalaveraButtonStyle("#dc2626")}
            >
              See Menu
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("order")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="flex-1 text-blue-900 px-8 py-4 rounded-full font-bold text-xl transition shadow-lg hover:scale-105 hover:brightness-95 transform duration-200"
              style={getTalaveraButtonStyle("#ffffff")}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

      <TalaveraBorder />

      <section id="about" className="py-24 bg-yellow-50 relative">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/stucco.png')",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Restaurant Vibe"
                className="rounded-2xl shadow-2xl relative border-4 border-white w-full"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <SectionTitle title="Our Story" />
              <p className="text-xl text-gray-700 mb-6 leading-relaxed font-medium">
                Inspired by the beautiful{" "}
                <span className="text-blue-900 font-bold">
                  Talavera pottery
                </span>{" "}
                of Mexico, we bring that same artistry and attention to detail
                to our food.
              </p>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                From our slow-cooked Birria to our hand-pressed tortillas, every
                dish is a celebration of authentic Mexican flavor and tradition.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-900">
                  <MapPin className="text-red-600 mb-2 h-8 w-8 mx-auto lg:mx-0" />
                  <p className="font-bold text-gray-800">Brooklyn, NY</p>
                  <p className="text-sm text-gray-500">1611 Bay Ridge Pkwy</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-400">
                  <Clock className="text-blue-900 mb-2 h-8 w-8 mx-auto lg:mx-0" />
                  <p className="font-bold text-gray-800">Open Daily</p>
                  <p className="text-sm text-gray-500">11am - 10pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full h-[50vh] bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center p-6 border-4 border-white/80 m-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white font-serif drop-shadow-lg tracking-wider">
            SABOR AUTÉNTICO
          </h2>
        </div>
      </section>

      <TalaveraBorder />

      <section className="py-24 relative bg-white" id="favorites">
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Local Favorites"
            subtitle="The dishes Brooklyn can't stop talking about."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullMenu
              .find((c) => c.category === "Tacos")
              .items.filter((i) => i.popular)
              .map((item, idx) => (
                <MenuItem key={`fav-${idx}`} item={item} />
              ))}
            {fullMenu
              .find((c) => c.category === "Drinks")
              .items.filter((i) => i.popular)
              .map((item, idx) => (
                <MenuItem key={`fav-drink-${idx}`} item={item} />
              ))}
          </div>
          <div className="text-center mt-16">
            <button
              onClick={() => navigateTo("menu")}
              className="text-white px-10 py-4 rounded-full font-bold text-xl transition shadow-md hover:scale-105 hover:brightness-110 inline-flex items-center gap-2 group"
              style={getTalaveraButtonStyle("#1e3a8a")}
            >
              View Full Menu{" "}
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <TalaveraBorder />

      <section id="reviews" className="py-24 bg-blue-900 text-white relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/stucco.png')",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Amigos Love Us"
            subtitle="Don't just take our word for it."
            light={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-blue-800/50 backdrop-blur-md p-8 rounded-2xl border border-blue-700 shadow-xl relative text-center"
              >
                <div className="flex text-yellow-400 mb-4 justify-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={20} />
                  ))}
                </div>
                <p className="text-xl italic mb-6 font-medium font-serif leading-relaxed opacity-90">
                  "{review.text}"
                </p>
                <div className="font-bold text-white text-lg">
                  - {review.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TalaveraBorder />

      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="La Galería"
            subtitle="A visual feast of our kitchen."
          />
          <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
            {[
              "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            ].map((src, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group relative border-4 border-white"
              >
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 z-10 transition"></div>
                <img
                  src={src}
                  className="w-full h-auto object-cover"
                  alt="Gallery Item"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const FullMenuView = () => (
    <div className="min-h-screen bg-yellow-50 animate-fade-in">
      <div className="relative h-[300px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-900">
          <img
            src="https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover opacity-40"
            alt="Menu Header"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white font-serif drop-shadow-lg mb-2">
            Our Menu
          </h1>
          <p className="text-yellow-400 text-xl font-medium tracking-wide">
            Handcrafted with love & spice.
          </p>
        </div>
      </div>
      <TalaveraBorder />
      <div className="relative pt-12 pb-20">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/stucco.png')",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <button
              onClick={() => navigateTo("home")}
              className="flex items-center gap-2 text-blue-900 font-bold hover:text-red-600 transition bg-white px-6 py-3 rounded-full shadow-md border border-gray-100 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <ArrowLeft size={20} /> Back to Home
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-6 py-3 rounded-full font-bold transition-all border-2 ${activeCategory === "All" ? "bg-blue-900 text-white border-blue-900 shadow-md" : "bg-white text-blue-900 border-blue-900 hover:bg-blue-50"}`}
            >
              All
            </button>
            {menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full font-bold transition-all border-2 ${activeCategory === cat ? "bg-blue-900 text-white border-blue-900 shadow-md" : "bg-white text-blue-900 border-blue-900 hover:bg-blue-50"}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="max-w-6xl mx-auto space-y-20">
            {fullMenu.map(
              (section) =>
                (activeCategory === "All" ||
                  activeCategory === section.category) && (
                  <div
                    key={section.category}
                    className="scroll-mt-32 animate-fade-in-up"
                    id={`category-${section.category}`}
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-px bg-blue-200 flex-1"></div>
                      <h3 className="text-4xl font-bold text-blue-900 font-serif uppercase tracking-widest text-center">
                        {section.category}
                      </h3>
                      <div className="h-px bg-blue-200 flex-1"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {section.items.map((item, idx) => (
                        <MenuItem key={idx} item={item} />
                      ))}
                    </div>
                  </div>
                ),
            )}
          </div>
          <div className="text-center mt-20 p-10 bg-white rounded-2xl border border-blue-200 shadow-lg max-w-3xl mx-auto relative z-10">
            <div className="inline-block p-4 bg-yellow-100 rounded-full mb-4 text-yellow-600">
              <Utensils size={32} />
            </div>
            <h3 className="text-3xl font-bold text-blue-900 mb-2 font-serif">
              Dietary Restrictions?
            </h3>
            <p className="text-gray-600 text-lg">
              Most of our tacos are naturally gluten-free (corn tortillas).
              Please ask our staff about vegetarian and vegan options!
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans text-gray-800 bg-yellow-50 min-h-screen flex flex-col overflow-x-hidden selection:bg-blue-900 selection:text-white relative">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none fixed"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/stucco.png')",
        }}
      ></div>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled || currentPage === "menu" ? "bg-white shadow-md py-1" : "bg-transparent py-4"}`}
      >
        <div className="absolute top-0 left-0 w-full h-3">
          <TalaveraBorder height="h-3" />
        </div>
        <div className="container mx-auto px-4 mt-3">
          <div className="flex justify-between items-center bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-md border border-gray-200">
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => navigateTo("home")}
            >
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center border-4 border-yellow-400 shadow-sm transition-transform">
                <span className="text-white font-serif font-bold text-2xl">
                  T
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-blue-900 font-serif leading-none tracking-tight">
                  TALAVERA
                </span>
                <span className="text-xs text-red-600 font-bold tracking-[0.2em] uppercase">
                  Taqueria
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => navigateTo("home")}
                className={`px-5 py-2 rounded-full font-bold transition-all ${currentPage === "home" ? "bg-blue-50 text-blue-900" : "text-gray-600 hover:text-blue-900"}`}
              >
                Home
              </button>
              <button
                onClick={() => navigateTo("menu")}
                className={`px-5 py-2 rounded-full font-bold transition-all ${currentPage === "menu" ? "bg-blue-50 text-blue-900" : "text-gray-600 hover:text-blue-900"}`}
              >
                Menu
              </button>
              <button
                onClick={() => navigateTo("home", "gallery")}
                className="px-5 py-2 font-bold text-gray-600 hover:text-blue-900 transition"
              >
                Gallery
              </button>
              <button
                onClick={() => navigateTo("home", "reviews")}
                className="px-5 py-2 font-bold text-gray-600 hover:text-blue-900 transition"
              >
                Reviews
              </button>
              <button
                onClick={() => navigateTo(currentPage, "order")}
                className="ml-4 bg-yellow-400 text-blue-900 px-6 py-2.5 rounded-full font-bold hover:bg-yellow-300 hover:shadow-md transition flex items-center gap-2 shadow-sm"
              >
                <ShoppingBag size={18} /> Order Online
              </button>
            </div>
            <button
              className="md:hidden text-blue-900 bg-blue-50 p-2 rounded-full"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-blue-900/50 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6 flex justify-between items-center border-b border-gray-100 bg-gray-50">
            <span className="text-2xl font-bold text-blue-900 font-serif">
              Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="bg-red-50 p-2 rounded-full text-red-600 hover:bg-red-100"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col">
            <MobileNavLink onClick={() => navigateTo("home")}>
              Home
            </MobileNavLink>
            <MobileNavLink onClick={() => navigateTo("menu")}>
              Full Menu
            </MobileNavLink>
            <MobileNavLink onClick={() => navigateTo("home", "gallery")}>
              Gallery
            </MobileNavLink>
            <MobileNavLink onClick={() => navigateTo("home", "reviews")}>
              Reviews
            </MobileNavLink>
            <div className="p-6 mt-4">
              <button
                onClick={() => navigateTo(currentPage, "order")}
                className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-xl shadow-lg flex justify-center items-center gap-2"
              >
                <Utensils /> Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        {currentPage === "home" ? <HomeView /> : <FullMenuView />}
      </main>

      <TalaveraBorder />

      {/* ORDER ONLINE SECTION (Common Footer) */}
      <section
        id="order"
        className="py-24 bg-yellow-50 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/stucco.png')",
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <SectionTitle
            title="Order for Delivery"
            subtitle="Craving tacos on your couch? We've got you covered."
          />
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "DoorDash",
                color: "text-red-500",
                border: "border-red-500",
                url: "https://www.doordash.com/store/taqueria-talavera-brooklyn-30510687/",
              },
              {
                name: "UberEats",
                color: "text-green-500",
                border: "border-green-500",
                url: "https://www.ubereats.com/store/taqueria-talavera/7n_QoIIFT5yBeLykRPGl6A",
              },
              {
                name: "GrubHub",
                color: "text-orange-500",
                border: "border-orange-500",
                url: "https://www.grubhub.com/restaurant/taqueria-talavera-1611-bay-ridge-pkwy-brooklyn/10273600",
              },
            ].map((app) => (
              <a
                key={app.name}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white flex-1 py-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all transform flex items-center justify-center gap-3 font-bold text-2xl border-b-4 ${app.border} active:border-b-0 active:translate-y-1 cursor-pointer`}
              >
                <span className={app.color}>{app.name}</span>
                <ExternalLink size={24} className="text-gray-400" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <TalaveraBorder />

      <footer className="bg-blue-900 text-white pt-24 pb-12 relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/stucco.png')",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div className="text-center md:text-left">
              <div className="inline-block p-4 bg-blue-800 rounded-xl border border-blue-700 mb-6">
                <h3 className="text-3xl font-bold font-serif text-yellow-400">
                  Talavera Taqueria
                </h3>
              </div>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed font-medium">
                Bringing the authentic taste of Mexico to Brooklyn with
                traditional recipes and warm hospitality.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="bg-blue-700 w-12 h-12 flex items-center justify-center rounded-full hover:bg-white hover:text-blue-900 transition shadow-md transform hover:scale-105"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="bg-blue-700 w-12 h-12 flex items-center justify-center rounded-full hover:bg-white hover:text-blue-900 transition shadow-md transform hover:scale-105"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white inline-block font-serif">
                Visit Us
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-blue-100 group">
                  <div className="bg-blue-800 p-3 rounded-lg group-hover:bg-red-600 transition-colors">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <span className="text-lg mt-1">{businessInfo.address}</span>
                </li>
                <li className="flex items-center gap-4 text-blue-100 group">
                  <div className="bg-blue-800 p-3 rounded-lg group-hover:bg-green-600 transition-colors">
                    <Phone className="text-white" size={24} />
                  </div>
                  <span className="text-2xl font-bold">
                    {businessInfo.phone}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white inline-block font-serif">
                Hours
              </h3>
              <div className="bg-blue-800 p-6 rounded-xl border border-blue-700 shadow-lg">
                <ul className="space-y-4">
                  <li className="flex justify-between text-blue-100 text-lg border-b border-blue-700 pb-2">
                    <span>Sun - Thu</span>
                    <span className="font-bold">11AM - 10PM</span>
                  </li>
                  <li className="flex justify-between text-yellow-400 text-lg font-bold">
                    <span>Fri & Sat</span>
                    <span>11AM - 11PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-blue-800 text-blue-300">
            <p>
              &copy; {new Date().getFullYear()} Talavera Taqueria. Hecho con ❤️
              en Brooklyn.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
