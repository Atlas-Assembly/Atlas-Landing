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
      image: "https://media.discordapp.net/attachments/1379477716004245545/1379536398226428026/Sans_titre-13.jpg?ex=684098e3&is=683f4763&hm=866ef41daf7c353202b0b65d71e174bdd85627dd21d6ac9b37dff53274f7f37d&=&format=webp&width=1174&height=528",
      tech: ["ديسكورد.js", "Node.js"],
      description: "بوت متكامل لإدارة السيرفرات على ديسكورد مع أوامر تلقائية وتكامل مع قواعد البيانات.",
      price: "$500"
    },
    {
      id: 2,
      title: "منصة FiveShops",
      category: "web",
      image: "https://media.discordapp.net/attachments/1379477716004245545/1379537750218244096/Sans_titre-14.jpg?ex=68409a26&is=683f48a6&hm=c3b9d211db8cc24b7dde78ee52e2e87a0791714fc2343a66c56a09763418b715&=&format=webp&width=1174&height=528",
      tech: ["ريأكت", "Next.js", "Tailwind CSS"],
      description: "متجر احترافي لسيرفرات فايف ام",
      price: "$1,200"
    },
    {
      id: 3,
      title: "لوحة تحكم إدارية",
      category: "web",
      image: "https://media.discordapp.net/attachments/1379477716004245545/1379801744615149598/atlas-text-law7at-ta7akom.jpg?ex=68419003&is=68403e83&hm=3f8d31e30f7c3019cfd66cdaf63f5186e1c6da954b3ff93d84c4b5445fa53f2a&=&format=webp&width=1174&height=528",
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
      image: "https://media.discordapp.net/attachments/1378734685592485948/1379481195078881552/21.png?ex=6840657a&is=683f13fa&hm=879ed00f56e7eabac3e94f44040f0cfd2dfcae7052a873855bbc460eb522123f&=&format=webp&quality=lossless&width=206&height=67"
    },
    {
      title: "نظام التذاكر المتكامل",
      description: "خيارات متعددة للتذاكر تناسب جميع احتياجات السيرفر",
      image: "https://media.discordapp.net/attachments/1378734685592485948/1379481194751856640/22.png?ex=6840657a&is=683f13fa&hm=ab56cf4d96c7b3be5d67ca33b943189eb1f70f9984453777c0dd0257104971de&=&format=webp&quality=lossless&width=472&height=385"
    },
    {
      title: "التحديثات المرئية",
      description: "إمكانية إضافة تحديثات بتصاميم احترافية ومميزة",
      image: "https://media.discordapp.net/attachments/1378734685592485948/1379481194428760164/23.png?ex=6840657a&is=683f13fa&hm=057fe9f8ad0e15d7596169003d50c6d3148e1e45bb43cfa0e6903dbff192b3c9&=&format=webp&quality=lossless&width=270&height=92"
    },
    {
      image: "https://media.discordapp.net/attachments/1378734685592485948/1379481198052638778/24.png?ex=6840657b&is=683f13fb&hm=eb15e4eb8529b036c79d1c60a741787ce16409f883be2a605c851b1cda814d75&=&format=webp&quality=lossless&width=391&height=556"
    },
    {
      title: "عرض القوانين",
      description: "عرض قوانين السيرفر بشكل منظم ومرتب داخل نظام التذاكر",
      image: "https://media.discordapp.net/attachments/1378734685592485948/1379481197679214744/25.png?ex=6840657b&is=683f13fb&hm=85a32ea34a229d97b082144bc299167e3bb0f1500155b27d7cdee7ce660637f7&=&format=webp&quality=lossless&width=459&height=203"
    },
    {
      title: "نظام تسجيل الدخول والخروج",
      description: "تسجيل دخول وخروج الإدارة في روم الدعم الفني",
      image: "https://media.discordapp.net/attachments/1378734685592485948/1379481197163581561/26.png?ex=6840657a&is=683f13fa&hm=14241a6221fb34edf808a54df83154354ddff2f7799a1933f5b325a0e4c6603c&=&format=webp&quality=lossless&width=589&height=552"
    },
    {
      title: "سجلات التذاكر",
      description: "عرض سجل كامل للتفاعلات داخل التذكرة مع تحديد المستخدمين",
      image: "https://media.discordapp.net/attachments/1378734685592485948/1379481196563529838/27.png?ex=6840657a&is=683f13fa&hm=50c09d44bf8b51742f83c5b1dd681f2e58fb8857f51cad90cbeccfdff0451ff5&=&format=webp&quality=lossless&width=599&height=437"
    },
    {
      title: "إشعارات الدخول",
      description: "إشعارات فورية عند دخول أي عضو إلى روم الدعم الفني",
      image: "https://media.discordapp.net/attachments/1378734685592485948/1379481195384934491/28.png?ex=6840657a&is=683f13fa&hm=6b5aa5e0d51c20ef0f84d9c21266e16c0fffae2d2f7580fc27fc201dc4d10a6a&=&format=webp&quality=lossless&width=516&height=298"
    },
    {
      title: "واجهة متكاملة",
      description: "خيارات مخصصة للعضو والإدارة لسهولة التعامل مع التذاكر",
      image: "https://media.discordapp.net/attachments/1378734685592485948/1379481195884187758/29.png?ex=6840657a&is=683f13fa&hm=f372f9d666cd88a999242f386cd2acc454c964a82854ece25611096727977971&=&format=webp&quality=lossless&width=422&height=186"
    }
  ];
  const discordBotAvatar = "https://media.discordapp.net/attachments/1379477716004245545/1379483249369157693/generalbot.png?ex=68406764&is=683f15e4&hm=d1fda83e7c1c7d74779c7b93fda7f3a2363e454d9c8229ef5a07ff44e8a169d1&=&format=webp&quality=lossless&width=835&height=835";

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
      image: "https://cdn.discordapp.com/attachments/1378734685592485948/1379484050359713792/60.png?ex=68406823&is=683f16a3&hm=4893f3946d75deb655496550c59fddaf2753c477fe58e1888b31b1fba2947402&"
    },
    {
      title: "السيارات",
      description: "استعرض واختر السيارة التي تناسب احتياجاتك.",
      image: "https://media.discordapp.net/attachments/1378734685592485948/1379484049927835768/61.png?ex=68406823&is=683f16a3&hm=f318da4c1a743f8474d776e97b3e99b91ddc1711000f8e840eb53a7aa4c950f5&=&format=webp&quality=lossless&width=1081&height=588"
    },
    {
      title: "الخطط",
      description: "استعرض واختر الخطة التي تناسب احتياجاتك.",
      image: "https://media.discordapp.net/attachments/1378734685592485948/1379484049583771708/62.png?ex=68406822&is=683f16a2&hm=a3ccdc7c10e72bd34843b05ce015a4f5092f426f3eacca6f16fa3fccc583a2c5&=&format=webp&quality=lossless&width=1081&height=551"
    },
    {
      title: "صفحة المنتج",
      description: "تفاصيل شاملة عن المنتج الذي تريد شراءه",
      image: "https://media.discordapp.net/attachments/1378734685592485948/1379484049273520279/63.png?ex=68406822&is=683f16a2&hm=c1bf6d2959bf1e41fda9e7d0a97a45604f376b87c07e51010cdc94a7fec8f172&=&format=webp&quality=lossless&width=1081&height=537"
    },
    {
      title: "التحقق عبر رمز OTP",
      description: "نظام أمان متقدم للتحقق من الطلبات.",
      image: "https://media.discordapp.net/attachments/1378734685592485948/1379484051546833081/65.png?ex=68406823&is=683f16a3&hm=fcd8d3b4f7b89140b98d32aae2e09ebf1311a6f91c2514d91bd1ad0c3b7ac281&=&format=webp&quality=lossless&width=1081&height=537"
    },
    {
      title: "صفحة النجاح",
      description: "إشعار نجاح العملية لضمان تجربة مستخدم مثالية",
      image: "https://media.discordapp.net/attachments/1378734685592485948/1379484051299110974/66.png?ex=68406823&is=683f16a3&hm=64448778d97e5adc9a33d097cea8ebfa97113b85424f380ffda8a2e7666608da&=&format=webp&quality=lossless&width=1081&height=537"
    },
    {
      title: "صفحة الدعم",
      description: "خدمة عملاء متميزة لتلبية استفساراتك",
      image: "https://media.discordapp.net/attachments/1378734685592485948/1379484051022413894/67.png?ex=68406823&is=683f16a3&hm=367a8966acb2a3848fef7c5ca05570b386fa96ef572bbc3e4145c3d3ddd11453&=&format=webp&quality=lossless&width=1081&height=560"
    },
    {
      title: "لوحة الإدارة - الصفحة الرئيسية",
      description: "إدارة شاملة للطلبات والمستخدمين",
      image: "https://media.discordapp.net/attachments/1378734685592485948/1379484050699583661/68.png?ex=68406823&is=683f16a3&hm=752eaf9efc091d5c840fcabe8b7b6ac4ebe7a492447a5f37258dfc15ca5c4a87&=&format=webp&quality=lossless&width=1081&height=537"
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
  const websiteAvatar = "https://media.discordapp.net/attachments/1379477716004245545/1379483249369157693/generalbot.png?ex=68406764&is=683f15e4&hm=d1fda83e7c1c7d74779c7b93fda7f3a2363e454d9c8229ef5a07ff44e8a169d1&=&format=webp&quality=lossless&width=835&height=835";

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
      image: "https://media.discordapp.net/attachments/1379477716004245545/1379483249369157693/generalbot.png?ex=68411024&is=683fbea4&hm=fa5cccd3819465a3738637546ebbe8826ea935a6a903a9b21e4613a1f8b69cfc&=&format=webp&quality=lossless&width=865&height=865"
    }
  ];
  const magoCityAvatar = "https://media.discordapp.net/attachments/1379477716004245545/1379483249369157693/generalbot.png?ex=68411024&is=683fbea4&hm=fa5cccd3819465a3738637546ebbe8826ea935a6a903a9b21e4613a1f8b69cfc&=&format=webp&quality=lossless&width=865&height=865";

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
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 group">
            <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Discord_Logo_sans_texte.svg/1818px-Discord_Logo_sans_texte.svg.png" alt="Discord" className="w-10 h-10 object-contain group-hover:drop-shadow-[0_0_8px_#5865F2] transition-all duration-200" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 group">
            <img src="https://cdn.discordapp.com/attachments/1379477716004245545/1379510847784882226/instagram.png?ex=68408118&is=683f2f98&hm=6c6a4384707f6d8a7fabacdbd228bb3f8d2b0018daecef52d1dccfa3694c7c9b&" alt="Instagram" className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:drop-shadow-[0_0_8px_#ec4899] transition-all duration-200" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 hover:bg-blue-900/60 shadow transition-all duration-200 group">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-blue-400 drop-shadow group-hover:drop-shadow-[0_0_8px_#3b82f6] transition-all duration-200"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
      </div>
    </div>
    </>
  );
};

export default Index;
