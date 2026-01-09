// البيانات الوهمية
const sampleData = {
    games: [
        {
            id: 1,
            title: "لعبة الأكشن الحماسية",
            description: "لعبة أكشن ثلاثية الأبعاد مع جرافيك مذهل وقصة شيقة",
            type: "games",
            category: "action",
            image: "https://picsum.photos/400/300?random=1",
            rating: 4.5,
            downloads: "1.2M",
            size: "150MB",
            version: "2.1.5",
            platform: "Android",
            tags: ["أكشن", "ثلاثي الأبعاد", "متعدد اللاعبين"],
            downloadLinks: [
                { name: "رابط مباشر", url: "#" },
                { name: "MediaFire", url: "#" },
                { name: "Google Drive", url: "#" }
            ],
            reviews: [
                { user: "أحمد", rating: 5, comment: "لعبة رائعة وجرافيك مذهل", date: "2024-01-15" },
                { user: "سارة", rating: 4, comment: "ممتازة ولكن تحتاج تحسين الأداء", date: "2024-01-14" }
            ]
        },
        {
            id: 2,
            title: "تحدي الألغاز الذهنية",
            description: "تحدي عقلك مع مجموعة متنوعة من الألغاز الممتعة",
            type: "games",
            category: "puzzle",
            image: "https://picsum.photos/400/300?random=2",
            rating: 4.2,
            downloads: "850K",
            size: "80MB",
            version: "1.3.0",
            platform: "iOS/Android",
            tags: ["ألغاز", "تفكير", "تعليمي"]
        },
        {
            id: 3,
            title: "سباقات السرعة القصوى",
            description: "استمتع بأسرع سباقات السيارات مع جرافيك واقعي",
            type: "games",
            category: "racing",
            image: "https://picsum.photos/400/300?random=3",
            rating: 4.8,
            downloads: "2.3M",
            size: "250MB",
            version: "3.0.1",
            platform: "Android",
            tags: ["سباقات", "سرعة", "سيارات"]
        },
        {
            id: 4,
            title: "مغامرات الفضاء",
            description: "انطلق في رحلة عبر الفضاء واكتشف الكواكب الجديدة",
            type: "games",
            category: "adventure",
            image: "https://picsum.photos/400/300?random=4",
            rating: 4.7,
            downloads: "1.8M",
            size: "300MB",
            version: "2.5.0",
            platform: "Android",
            tags: ["مغامرات", "فضاء", "استكشاف"]
        },
        {
            id: 5,
            title: "بطولة كرة القدم 2024",
            description: "لعبة كرة القدم الأكثر واقعية لهذا العام",
            type: "games",
            category: "sports",
            image: "https://picsum.photos/400/300?random=5",
            rating: 4.4,
            downloads: "1.5M",
            size: "200MB",
            version: "2024.1",
            platform: "Android/iOS",
            tags: ["رياضة", "كرة قدم", "متعدد اللاعبين"]
        }
    ],
    apps: [
        {
            id: 101,
            title: "أداة تحرير الصور المتقدمة",
            description: "أداة متكاملة لتحرير الصور مع تأثيرات احترافية",
            type: "apps",
            category: "tools",
            image: "https://picsum.photos/400/300?random=6",
            rating: 4.6,
            downloads: "950K",
            size: "45MB",
            version: "3.2.1",
            platform: "Android",
            tags: ["تصميم", "صور", "أدوات"]
        },
        {
            id: 102,
            title: "منصة التعلم الذكي",
            description: "تعلم اللغات والعلوم بطريقة تفاعلية",
            type: "apps",
            category: "education",
            image: "https://picsum.photos/400/300?random=7",
            rating: 4.9,
            downloads: "1.1M",
            size: "120MB",
            version: "2.0.0",
            platform: "Android/iOS",
            tags: ["تعليم", "لغات", "تفاعلي"]
        }
    ],
    websites: [
        {
            id: 201,
            title: "مكتبة الكتب العربية",
            description: "أكبر مكتبة عربية للكتب المجانية بصيغة PDF",
            type: "websites",
            category: "education",
            image: "https://picsum.photos/400/300?random=8",
            rating: 4.8,
            visits: "500K",
            features: [
                "آلاف الك
