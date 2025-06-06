import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

// NeonCursor component
function NeonCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "neon-cursor";
    document.body.appendChild(cursor);
    
    const isInteractive = (el) => {
      if (!el) return false;
      return (
        el.tagName === "BUTTON" ||
        el.tagName === "A" ||
        el.tagName === "LABEL" ||
        el.tagName === "SELECT" ||
        el.tagName === "OPTION" ||
        el.getAttribute("role") === "button" ||
        el.closest("button, a, label, select, option, [role=button]")
      );
    };

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      // Check if hovering over a button or interactive element
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (isInteractive(el)) {
        cursor.classList.add("neon-cursor--active");
      } else {
        cursor.classList.remove("neon-cursor--active");
      }
    };
    document.addEventListener("mousemove", move);
    return () => {
      document.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
    };
  }, []);
  return null;
}

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Only two products: one discord bot, one website
  const products = [
    {
      id: 1,
      title: "بوت إدارة السيرفرات",
      category: "discord",
      image: "https://i.imgur.com/cuMaiZo.jpeg",
      tech: ["ديسكورد.js", "Node.js"],
      description: "بوت متكامل لإدارة السيرفرات على ديسكورد مع أوامر تلقائية وتكامل مع قواعد البيانات.",
      price: "$500"
    },
    {
      id: 2,
      title: "منصة FiveShops",
      category: "web",
      image: "https://i.imgur.com/sMgP1PC.jpeg",
      tech: ["ريأكت", "Next.js", "Tailwind CSS"],
      description: "متجر احترافي لسيرفرات فايف ام",
      price: "$1,200"
    },
    {
      id: 3,
      title: "لوحة تحكم إدارية",
      category: "web",
      image: "https://i.imgur.com/d82f8pH.jpeg",
      tech: ["ديسكورد بوت", "React", "OAuth2", "قاعدة بيانات"],
      description: "لوحة تحكم تقدر من خلالها تدير سيرفر الديسكورد حقك",
      price: "$40"
    }
  ];

  // Updated filter logic for new categories
  const filteredProducts = activeFilter === "all" 
    ? products 
    : products.filter(product => 
        (activeFilter === "discord" && product.category === "discord") ||
        (activeFilter === "web" && product.category === "web")
      );

  // Discord bot modal content from provided JSON
  const discordBotEmbeds = [
    {
      title: "🌟 استعراض بوت التذاكر المتميز",
      description: "بوت متطور لإدارة التذاكر في سيرفر الديسكورد الخاص بك 🔥",
      footer: { text: "Atlas - نظام التذاكر الاحترافي" },
      fields: [
        {
          name: "💡 المميزات الرئيسية",
          value: "• واجهة عصرية وسهلة الاستخدام\n• نظام تذاكر متكامل\n• إدارة فعّالة للطلبات"
        },
        {
          name: "⚙️ لوحة التحكم",
          value: "• تحكم كامل بنظام التذاكر\n• عرض التفاعلات والإحصائيات\n• خيارات متعددة للإدارة"
        }
      ]
    },
    {
      title: "الترحيب الآلي",
      description: "يرحب البوت بالأعضاء تلقائياً في روم الدعم الفني بصوت \"السلام عليكم مرحبا في سيرفر...\"",
      image: "https://i.imgur.com/ieLR7cp.png"
    },
    {
      title: "نظام التذاكر المتكامل",
      description: "خيارات متعددة للتذاكر تناسب جميع احتياجات السيرفر",
      image: "https://i.imgur.com/fb20Dk8.png"
    },
    {
      title: "التحديثات المرئية",
      description: "إمكانية إضافة تحديثات بتصاميم احترافية ومميزة",
      image: "https://i.imgur.com/z3LBmdS.png"
    },
    {
      image: "https://i.imgur.com/GGOqzwA.png"
    },
    {
      title: "عرض القوانين",
      description: "عرض قوانين السيرفر بشكل منظم ومرتب داخل نظام التذاكر",
      image: "https://i.imgur.com/GTG3bZZ.png"
    },
    {
      title: "نظام تسجيل الدخول والخروج",
      description: "تسجيل دخول وخروج الإدارة في روم الدعم الفني",
      image: "https://i.imgur.com/BpVaWNj.png"
    },
    {
      title: "سجلات التذاكر",
      description: "عرض سجل كامل للتفاعلات داخل التذكرة مع تحديد المستخدمين",
      image: "https://i.imgur.com/eKRh1qA.png"
    },
    {
      title: "إشعارات الدخول",
      description: "إشعارات فورية عند دخول أي عضو إلى روم الدعم الفني",
      image: "https://i.imgur.com/H6OqHyP.png"
    },
    {
      title: "واجهة متكاملة",
      description: "خيارات مخصصة للعضو والإدارة لسهولة التعامل مع التذاكر",
      image: "https://i.imgur.com/7GPwRAs.png"
    }
  ];
  const discordBotAvatar = "https://i.imgur.com/5zBdLjA.png";

  // Website product modal content from provided JSON
  const websiteEmbeds = [
    {
      title: "🌟 استعراض منصة FiveShops",
      description: "شوف بنفسك كيف راح يكون متجرك في فايف ام! هذي صور من متجر تجريبي سويناه 🔥",
      footer: { text: "FiveShops - متاجر فايف ام الاحترافية" },
      fields: [
        {
          name: "💡 الصفحة الرئيسية",
          value: "• واجهة عصرية وسهلة\n• عرض احترافي للسيارات\n• تصنيفات واضحة للمنتجات"
        },
        {
          name: "⚙️ لوحة التحكم",
          value: "• تحكم كامل بالمتجر\n• عرض الطلبات والمبيعات\n• إحصائيات مفصلة"
        }
      ]
    },
    {
      title: "الصفحة الرئيسية",
      description: "واجهة مستخدم جذابة لبدء رحلتك على المنصة",
      image: "https://i.imgur.com/pwVcnB7.png"
    },
    {
      title: "السيارات",
      description: "استعرض واختر السيارة التي تناسب احتياجاتك.",
      image: "https://i.imgur.com/iFFH8Rf.png"
    },
    {
      title: "الخطط",
      description: "استعرض واختر الخطة التي تناسب احتياجاتك.",
      image: "https://i.imgur.com/e5o3QDt.png"
    },
    {
      title: "صفحة المنتج",
      description: "تفاصيل شاملة عن المنتج الذي تريد شراءه",
      image: "https://i.imgur.com/5pXBXhs.png"
    },
    {
      title: "التحقق عبر رمز OTP",
      description: "نظام أمان متقدم للتحقق من الطلبات.",
      image: "https://i.imgur.com/Hhjo9s5.png"
    },
    {
      title: "صفحة النجاح",
      description: "إشعار نجاح العملية لضمان تجربة مستخدم مثالية",
      image: "https://i.imgur.com/GQ1kE68.png"
    },
    {
      title: "صفحة الدعم",
      description: "خدمة عملاء متميزة لتلبية استفساراتك",
      image: "https://i.imgur.com/2Xujh2r.png"
    },
    {
      title: "لوحة الإدارة - الصفحة الرئيسية",
      description: "إدارة شاملة للطلبات والمستخدمين",
      image: "https://i.imgur.com/eZu4wzc.png"
    },
    {
      title: "📱 تجربة المستخدم",
      description: "تصميم سهل وبسيط لعملائك",
      fields: [
        {
          name: "💳 نظام المدفوعات",
          value: "• طرق دفع متعددة\n• معاملات آمنة\n• تأكيد فوري"
        }
      ]
    }
  ];
  const websiteAvatar = "https://i.imgur.com/5zBdLjA.png";

  // Custom modal content for لوحة تحكم إدارية
  const magoCityEmbeds = [
    {
      description: `
وصف المشروع

تم تصميم نموذج مبدئي للوحة تحكم مخصصة لإدارة سيرفر ديسكورد، حيث يوفر هذا النموذج تصورًا واضحًا لشكل الموقع النهائي وآلية عمله، بهدف تسهيل التحكم الكامل في عناصر السيرفر من خلال واجهة رسومية سهلة الاستخدام.

المميزات

الصفحة الرئيسية تتضمن:

* عرض جميع الإداريين مع صورهم الشخصية.
* عرض الرتب الخاصة بكل إداري في السيرفر.
* حالة الاتصال (أونلاين، مشغول، أوفلاين).
* عرض رقم المعرف الخاص بكل إداري (Discord ID).
* إحصائيات سريعة تشمل:
  * عدد الإداريين.
  * عدد المتصلين حاليًا.

صفحة لوحة التحكم توفر الخصائص التالية:

* إمكانية إضافة أو إزالة الإداريين.
* تعديل الصلاحيات الممنوحة لكل إداري.
* البحث عن أي مستخدم داخل السيرفر.
* التحكم الكامل في نظام الرتب.

آلية العمل

* استخدام بوت ديسكورد مخصص للتحكم وإدارة السيرفر.
* تسجيل الدخول يتم عبر نظام Discord OAuth2.
* قاعدة بيانات مخصصة لحفظ جميع المعلومات والإعدادات.
* نظام تسجيل (Logs) لحفظ جميع التغييرات والإجراءات التي تتم عبر اللوحة.

التكلفة والمدة

* السعر: 40 دولار .
* مدة التنفيذ: 3 أيام.
* الدعم الفني: شهر دعم فني مجاني بعد التسليم.

المتطلبات

* توفير صلاحيات الإدارة الكاملة للسيرفر لتفعيل لوحة التحكم وربطها بالبوت.
`,
      image: "https://i.imgur.com/GTljUVs.png"
    }
  ];
  const magoCityAvatar = "https://i.imgur.com/5zBdLjA.png";

  return (
    <>
      <NeonCursor />
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Advanced gradient background with multiple blue glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-purple-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-indigo-500/10"></div>
      
      {/* Multiple floating glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-400/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        {/* Logo Section */}
          <section className="pt-16 pb-4 px-6">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 animate-fade-in">
                <div className="relative inline-block">
                  {/* Enhanced logo glow effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full blur-3xl opacity-60 scale-150 animate-pulse"></div>
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-40 scale-125"></div>
                  <img 
                    src="/lovable-uploads/d41e6162-2e5d-455b-8004-7b6b233c226a.png" 
                      alt="شعار فريق أطلس" 
                      className="h-64 w-64 mx-auto mb-6 relative z-10 drop-shadow-2xl filter brightness-110"
                  />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-fade-in drop-shadow-2xl">
                    فريق أطلس - حلول رقمية ترتقي بأعمالك
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
          <section className="pt-4 pb-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
                  منتجاتنا
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  استعرض حلولنا الرقمية المبتكرة في مجالات المواقع الإلكترونية وبوتات ديسكورد.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {[
                  { key: "all", label: "كل المنتجات" },
                  { key: "discord", label: "بوتات ديسكورد" },
                  { key: "web", label: "مواقع إلكترونية" }
                ].map((filter) => (
                <Button
                    key={filter.key}
                    variant={activeFilter === filter.key ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 backdrop-blur-sm border ${
                      activeFilter === filter.key 
                      ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white shadow-2xl shadow-blue-500/50 border-blue-400/50 glow-effect" 
                      : "border-blue-400/30 text-blue-300 hover:bg-blue-500/20 backdrop-blur-sm bg-gray-800/40 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20"
                  }`}
                >
                    {filter.label}
                </Button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-3 bg-gray-800/60 backdrop-blur-xl border border-blue-500/20 shadow-xl hover:border-blue-400/40 group">
                  <div className="relative overflow-hidden">
                    {product.category === "discord" ? (
                      <div className="w-full aspect-[2.225] bg-gray-900 rounded-t-xl overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-contain rounded-t-xl transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                        />
                      </div>
                    ) : (
                      <div className="w-full aspect-[2.225] bg-gray-900 rounded-t-xl overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                          className="w-full h-full object-contain rounded-t-xl transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                    />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">{product.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tech.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 backdrop-blur-sm border border-blue-500/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <Dialog
                        onOpenChange={(open) => {
                          if (!open) setSelectedProduct(null);
                        }}
                      >
                        <DialogTrigger asChild>
                          <Button
                            className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 text-white shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 border border-blue-400/30 hover:border-blue-300/50"
                            onClick={() => setSelectedProduct(product)}
                          >
                            عرض التفاصيل
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl w-full bg-gradient-to-br from-slate-900 via-gray-900 to-black border-blue-500/30 shadow-2xl shadow-blue-500/30 backdrop-blur-xl p-0 overflow-hidden">
                          <DialogClose asChild>
                            <button
                              aria-label="إغلاق"
                              className="absolute top-4 left-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 hover:bg-blue-700/80 text-blue-200 hover:text-white shadow-lg border border-blue-500/30 transition-all duration-200"
                            >
                              <span className="text-2xl font-bold">×</span>
                            </button>
                          </DialogClose>
                          {product.category === "discord" && product.title === "بوت إدارة السيرفرات" ? (
                            <div dir="rtl" className="relative w-full max-h-[80vh] overflow-y-auto flex flex-col themed-scrollbar text-right pt-20">
                              <div className="flex items-center gap-3 p-4 border-b border-blue-500/20 mb-2 bg-slate-900/60">
                                <img src={discordBotAvatar} alt="Avatar" className="w-12 h-12 rounded-full border-2 border-blue-400 shadow" />
                                <div>
                                  <DialogTitle className="text-2xl font-bold text-blue-300 mb-1">بوت التذاكر الاحترافي</DialogTitle>
                                  <DialogDescription className="text-gray-400 text-sm">نظام متكامل لإدارة تذاكر الدعم الفني في ديسكورد</DialogDescription>
                                </div>
                              </div>
                              <div className="px-4 pb-6 space-y-8">
                                {discordBotEmbeds.map((embed, idx) => (
                                  <div key={idx} className="mb-8 last:mb-0">
                                    {embed.title && <h3 className="text-lg font-bold text-blue-200 mb-2">{embed.title}</h3>}
                                    {embed.description && <p className="text-gray-300 mb-2 whitespace-pre-line">{embed.description}</p>}
                                    {embed.image && (
                                      <div className="flex justify-center my-4">
                                        <img src={embed.image} alt="" className="w-auto max-h-72 object-contain rounded-lg border-2 border-blue-500/20 shadow" />
                                      </div>
                                    )}
                                    {embed.fields && embed.fields.length > 0 && (
                                      <div className="mb-2">
                                        {embed.fields.map((field, fidx) => (
                                          <div key={fidx} className="mb-2">
                                            <div className="font-semibold text-blue-400">{field.name}</div>
                                            <div className="text-gray-200 whitespace-pre-line">{field.value}</div>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : product.category === "web" && product.title === "لوحة تحكم إدارية" ? (
                            <div dir="rtl" className="relative w-full max-h-[80vh] overflow-y-auto flex flex-col themed-scrollbar text-right pt-20">
                              <div className="flex items-center gap-3 p-4 border-b border-blue-500/20 mb-2 bg-slate-900/60">
                                <img src={magoCityAvatar} alt="Avatar" className="w-12 h-12 rounded-full border-2 border-blue-400 shadow" />
                                <div>
                                  <DialogTitle className="text-2xl font-bold text-blue-300 mb-1">لوحة تحكم إدارية</DialogTitle>
                                  <DialogDescription className="text-gray-400 text-sm">لوحة تحكم تقدر من خلالها تدير سيرفر الديسكورد حقك</DialogDescription>
                                </div>
                              </div>
                              <div className="px-4 pb-6 space-y-8">
                                {magoCityEmbeds.map((embed, idx) => (
                                  <div key={idx} className="mb-8 last:mb-0">
                                    {embed.description && (
                                      <div className="text-gray-300 mb-2 whitespace-pre-line">
                                        {embed.description.split(/\n{2,}/).map((block, i) => {
                                          if ([
                                            "وصف المشروع",
                                            "المميزات",
                                            "صفحة لوحة التحكم توفر الخصائص التالية:",
                                            "آلية العمل",
                                            "التكلفة والمدة",
                                            "المتطلبات"
                                          ].includes(block.trim())) {
                                            return (<div key={i} className="text-blue-200 font-bold text-lg mb-2 mt-4">{block.trim()}</div>);
                                          } else {
                                            return (<div key={i}>{block}</div>);
                                          }
                                        })}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : product.category === "web" ? (
                            <div dir="rtl" className="relative w-full max-h-[80vh] overflow-y-auto flex flex-col themed-scrollbar text-right pt-20">
                              <div className="flex items-center gap-3 p-4 border-b border-blue-500/20 mb-2 bg-slate-900/60">
                                <img src={websiteAvatar} alt="Avatar" className="w-12 h-12 rounded-full border-2 border-blue-400 shadow" />
                                <div>
                                  <DialogTitle className="text-2xl font-bold text-blue-300 mb-1">منصة FiveShops</DialogTitle>
                                  <DialogDescription className="text-gray-400 text-sm">حل احترافي لإنشاء متاجر فايف ام بسهولة</DialogDescription>
                                </div>
                              </div>
                              <div className="px-4 pb-6 space-y-8">
                                {websiteEmbeds.map((embed, idx) => (
                                  <div key={idx} className="mb-8 last:mb-0">
                                    {embed.title && <h3 className="text-lg font-bold text-blue-200 mb-2">{embed.title}</h3>}
                                    {embed.description && <p className="text-gray-300 mb-2 whitespace-pre-line">{embed.description}</p>}
                                    {embed.image && (
                                      <div className="flex justify-center my-4">
                                        <img src={embed.image} alt="" className="w-auto max-h-[350px] object-contain rounded-lg border-2 border-blue-500/20 shadow" />
                                      </div>
                                    )}
                                    {embed.fields && embed.fields.length > 0 && (
                                      <div className="mb-2">
                                        {embed.fields.map((field, fidx) => (
                                          <div key={fidx} className="mb-2">
                                            <div className="font-semibold text-blue-400">{field.name}</div>
                                            <div className="text-gray-200 whitespace-pre-line">{field.value}</div>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
        {/* Social Icons Bar */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-3 bg-gradient-to-r from-slate-800/90 via-blue-900/80 to-slate-800/90 px-4 py-2 rounded-2xl shadow-lg border border-blue-800/40 backdrop-blur-md items-center">
          <a href="https://discord.gg/Y6Uvf5wS" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 group">
            <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Discord_Logo_sans_texte.svg/1818px-Discord_Logo_sans_texte.svg.png" alt="Discord" className="w-10 h-10 object-contain group-hover:drop-shadow-[0_0_8px_#5865F2] transition-all duration-200" />
          </a>
          <a href="https://www.instagram.com/atlasteam.ma/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 group">
                          <img src="https://i.imgur.com/eAFykry.png" alt="Instagram" className="w-10 h-10 object-contain group-hover:drop-shadow-[0_0_8px_#ec4899] transition-all duration-200" />
          </a>
          <a href="https://github.com/Atlas-Assembly" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 hover:bg-blue-900/60 shadow transition-all duration-200 group">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-blue-400 drop-shadow group-hover:drop-shadow-[0_0_8px_#3b82f6] transition-all duration-200"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
      </div>
    </div>
    </>
  );
};

export default Index;
