// App State
const state = {
    currentUser: null,
    currentFilter: 'all',
    currentType: 'all',
    currentSort: 'recent',
    currentPage: 1,
    itemsPerPage: 12,
    activeFilters: [],
    searchQuery: ''
};

// DOM Elements
const elements = {
    loading: document.getElementById('loading'),
    sidebar: document.getElementById('sidebar'),
    menuToggle: document.getElementById('menuToggle'),
    closeMenu: document.getElementById('closeMenu'),
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    loginBtn: document.getElementById('loginBtn'),
    loginModal: document.getElementById('loginModal'),
    loginForm: document.getElementById('loginForm'),
    closeModal: document.querySelector('.close-modal'),
    contentGrid: document.getElementById('contentGrid'),
    pageTitle: document.getElementById('pageTitle'),
    sortSelect: document.getElementById('sortSelect'),
    activeFilters: document.getElementById('activeFilters'),
    pagination: document.getElementById('pagination'),
    homeLogo: document.getElementById('homeLogo'),
    itemModal: document.getElementById('itemModal'),
    registerLink: document.getElementById('registerLink')
};

// البيانات الوهمية المعدلة
const sampleData = {
    games: [
        {
            id: 1,
            title: "لعبة الأكشن الحماسية",
            description: "لعبة أكشن ثلاثية الأبعاد مع جرافيك مذهل وقصة شيقة. استمتع بتجربة لعب سلسة مع مجموعة متنوعة من الأسلحة والمهام.",
            type: "games",
            category: "action",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
            rating: 4.5,
            downloads: "1.2M",
            size: "150MB",
            version: "2.1.5",
            platform: "Android",
            osVersion: "أندرويد 8.0+",
            developer: "Game Studio",
            lastUpdate: "2024-01-15",
            tags: ["أكشن", "ثلاثي الأبعاد", "متعدد اللاعبين", "جرافيك عالي"],
            downloadLinks: [
                { name: "رابط مباشر", url: "#", size: "150MB" },
                { name: "MediaFire", url: "#", size: "150MB" },
                { name: "Google Drive", url: "#", size: "150MB" }
            ],
            reviews: [
                { 
                    user: "أحمد", 
                    rating: 5, 
                    comment: "لعبة رائعة وجرافيك مذهل، أنصح الجميع بتجربتها", 
                    date: "2024-01-15",
                    avatar: "👤"
                },
                { 
                    user: "سارة", 
                    rating: 4, 
                    comment: "ممتازة ولكن تحتاج تحسين الأداء على الأجهزة المتوسطة", 
                    date: "2024-01-14",
                    avatar: "👩"
                }
            ]
        },
        {
            id: 2,
            title: "تحدي الألغاز الذهنية",
            description: "تحدي عقلك مع مجموعة متنوعة من الألغاز الممتعة والمسلية التي تناسب جميع الأعمار",
            type: "games",
            category: "puzzle",
            image: "https://images.unsplash.com/photo-1587654780298-8c6d6b2c8b2a?w=400&h=300&fit=crop",
            rating: 4.2,
            downloads: "850K",
            size: "80MB",
            version: "1.3.0",
            platform: "iOS/Android",
            osVersion: "أندرويد 7.0+ أو iOS 12+",
            developer: "Brain Games",
            lastUpdate: "2024-01-10",
            tags: ["ألغاز", "تفكير", "تعليمي", "عائلي"]
        },
        {
            id: 3,
            title: "سباقات السرعة القصوى",
            description: "استمتع بأسرع سباقات السيارات مع جرافيك واقعي وأكثر من 50 سيارة مختلفة",
            type: "games",
            category: "racing",
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w-400&h=300&fit=crop",
            rating: 4.8,
            downloads: "2.3M",
            size: "250MB",
            version: "3.0.1",
            platform: "Android",
            osVersion: "أندرويد 9.0+",
            developer: "Racing Studio",
            lastUpdate: "2024-01-12",
            tags: ["سباقات", "سرعة", "سيارات", "متعدد اللاعبين"]
        },
        {
            id: 4,
            title: "مغامرات الفضاء",
            description: "انطلق في رحلة عبر الفضاء واكتشف الكواكب الجديدة مع جرافيك مذهل",
            type: "games",
            category: "adventure",
            image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
            rating: 4.7,
            downloads: "1.8M",
            size: "300MB",
            version: "2.5.0",
            platform: "Android",
            osVersion: "أندرويد 10.0+",
            developer: "Space Games",
            lastUpdate: "2024-01-08",
            tags: ["مغامرات", "فضاء", "استكشاف", "جرافيك عالي"]
        },
        {
            id: 5,
            title: "بطولة كرة القدم 2024",
            description: "لعبة كرة القدم الأكثر واقعية لهذا العام مع جميع الفرق واللاعبين",
            type: "games",
            category: "sports",
            image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=300&fit=crop",
            rating: 4.4,
            downloads: "1.5M",
            size: "200MB",
            version: "2024.1",
            platform: "Android/iOS",
            osVersion: "أندرويد 8.0+ أو iOS 13+",
            developer: "Sports Games",
            lastUpdate: "2024-01-05",
            tags: ["رياضة", "كرة قدم", "متعدد اللاعبين", "واقعي"]
        },
        {
            id: 6,
            title: "لعبة APK خفيفة",
            description: "لعبة خفيفة لا تحتاج مساحة كبيرة مع أسلوب لعب ممتع",
            type: "games",
            category: "apk",
            image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=400&h=300&fit=crop",
            rating: 4.0,
            downloads: "500K",
            size: "50MB",
            version: "1.0.0",
            platform: "Android",
            osVersion: "أندرويد 6.0+",
            developer: "Light Games",
            lastUpdate: "2024-01-03",
            tags: ["خفيف", "بسيط", "ممتاز للجميع"]
        }
    ],
    apps: [
        {
            id: 101,
            title: "أداة تحرير الصور المتقدمة",
            description: "أداة متكاملة لتحرير الصور مع تأثيرات احترافية وأدوات متقدمة",
            type: "apps",
            category: "tools",
            image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=400&h=300&fit=crop",
            rating: 4.6,
            downloads: "950K",
            size: "45MB",
            version: "3.2.1",
            platform: "Android",
            osVersion: "أندرويد 8.0+",
            developer: "Photo Tools Inc",
            lastUpdate: "2024-01-14",
            tags: ["تصميم", "صور", "أدوات", "تحرير"]
        },
        {
            id: 102,
            title: "منصة التعلم الذكي",
            description: "تعلم اللغات والعلوم بطريقة تفاعلية مع دروس يومية",
            type: "apps",
            category: "education",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
            rating: 4.9,
            downloads: "1.1M",
            size: "120MB",
            version: "2.0.0",
            platform: "Android/iOS",
            osVersion: "أندرويد 7.0+ أو iOS 12+",
            developer: "Edu Tech",
            lastUpdate: "2024-01-13",
            tags: ["تعليم", "لغات", "تفاعلي", "دروس"]
        },
        {
            id: 103,
            title: "تطبيق التواصل الاجتماعي",
            description: "تواصل مع أصدقائك ومشاركة اللحظات المميزة",
            type: "apps",
            category: "social",
            image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop",
            rating: 4.3,
            downloads: "5.2M",
            size: "85MB",
            version: "10.5.0",
            platform: "Android/iOS",
            osVersion: "أندرويد 8.0+ أو iOS 13+",
            developer: "Social Media Co",
            lastUpdate: "2024-01-16",
            tags: ["تواصل", "اجتماعي", "مشاركة", "دردشة"]
        },
        {
            id: 104,
            title: "أداة إدارة المهام",
            description: "نظم مهامك اليومية وضاعف إنتاجيتك",
            type: "apps",
            category: "productivity",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            rating: 4.7,
            downloads: "750K",
            size: "30MB",
            version: "2.3.0",
            platform: "Android",
            osVersion: "أندرويد 7.0+",
            developer: "Productivity Tools",
            lastUpdate: "2024-01-11",
            tags: ["إنتاجية", "مهام", "تنظيم", "عمل"]
        }
    ],
    websites: [
        {
            id: 201,
            title: "مكتبة الكتب العربية",
            description: "أكبر مكتبة عربية للكتب المجانية بصيغة PDF تشمل جميع المجالات",
            type: "websites",
            category: "education",
            image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop",
            rating: 4.8,
            visits: "500K",
            features: [
                "آلاف الكتب العربية المجانية",
                "واجهة عربية سهلة الاستخدام",
                "تصنيفات متعددة",
                "تحميل مباشر بصيغة PDF",
                "لا يحتاج تسجيل دخول"
            ],
            benefits: [
                "قراءة كتب مجانية في جميع المجالات",
                "تحميل الكتب للقراءة بدون إنترنت",
                "تصفح حسب التصنيفات المفضلة",
                "البحث المتقدم عن الكتب"
            ],
            url: "https://example-library.com",
            tags: ["كتب", "تعليم", "قراءة", "مجاني"]
        },
        {
            id: 202,
            title: "منصة الأفلام العربية",
            description: "مشاهدة الأفلام والمسلسلات العربية مجاناً بجودة عالية",
            type: "websites",
            category: "entertainment",
            image: "https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?w=400&h=300&fit=crop",
            rating: 4.5,
            visits: "2.1M",
            features: [
                "أفلام ومسلسلات عربية",
                "جودة عالية HD",
                "واجهة مستخدم بسيطة",
                "ترتيب حسب السنة والتقييم",
                "مشاهدة بدون إعلانات"
            ],
            benefits: [
                "مشاهدة محتوى عربي مجاني",
                "دعم جميع الأجهزة",
                "مشاهدة بدون تنزيل",
                "تحديث يومي للمحتوى"
            ],
            url: "https://example-movies.com",
            tags: ["أفلام", "ترفيه", "مسلسلات", "عربي"]
        },
        {
            id: 203,
            title: "متجر التسوق الإلكتروني",
            description: "تسوق منتجات متنوعة بأسعار منافسة وتوصيل سريع",
            type: "websites",
            category: "shopping",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
            rating: 4.6,
            visits: "3.5M",
            features: [
                "منتجات متنوعة بأسعار منافسة",
                "توصيل سريع لكافة المناطق",
                "دفع آمن متعدد الخيارات",
                "دعم فني 24/7",
                "عروض وتخفيضات يومية"
            ],
            benefits: [
                "تسوق من المنزل بسهولة",
                "مقارنة الأسعار بين المنتجات",
                "تقييمات حقيقية من المشترين",
                "عروض حصرية للمستخدمين"
            ],
            url: "https://example-shop.com",
            tags: ["تسوق", "شراء", "عروض", "توصيل"]
        },
        {
            id: 204,
            title: "أدوات المطورين",
            description: "مجموعة من الأدوات المجانية للمبرمجين والمطورين",
            type: "websites",
            category: "tools",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
            rating: 4.9,
            visits: "850K",
            features: [
                "أدوات تحويل الصيغ",
                "محرر أكواد أونلاين",
                "أدوات تحليل البيانات",
                "مولدات API مجانية",
                "مكتبات وأطر عمل"
            ],
            benefits: [
                "تطوير سريع للمشاريع",
                "اختبار الأكواد أونلاين",
                "تحسين أداء التطبيقات",
                "تعلم تقنيات جديدة"
            ],
            url: "https://example-devtools.com",
            tags: ["برمجة", "أدوات", "تطوير", "مطورين"]
        }
    ]
};

// دالة إخفاء شاشة التحميل
function hideLoading() {
    setTimeout(() => {
        elements.loading.style.opacity = '0';
        setTimeout(() => {
            elements.loading.style.display = 'none';
        }, 300);
    }, 1000);
}

// تهيئة التطبيق
function initApp() {
    console.log('جاري تهيئة التطبيق...');
    
    // إخفاء شاشة التحميل
    hideLoading();
    
    // تحميل البيانات الأولية
    renderContent();
    
    // إضافة المستمعين للأحداث
    setupEventListeners();
    
    // فتح القائمة الجانبية تلقائياً على الشاشات الكبيرة
    if (window.innerWidth > 768) {
        elements.sidebar.classList.add('active');
    }
}

// إعداد المستمعين للأحداث
function setupEventListeners() {
    // زر القائمة الجانبية
    elements.menuToggle.addEventListener('click', () => {
        elements.sidebar.classList.toggle('active');
    });
    
    // زر إغلاق القائمة
    elements.closeMenu.addEventListener('click', () => {
        elements.sidebar.classList.remove('active');
    });
    
    // النقر على الشعار للرجوع للرئيسية
    elements.homeLogo.addEventListener('click', () => {
        state.currentType = 'all';
        state.currentFilter = 'all';
        state.activeFilters = [];
        state.searchQuery = '';
        state.currentPage = 1;
        elements.searchInput.value = '';
        renderContent();
        elements.sidebar.classList.remove('active');
    });
    
    // البحث
    elements.searchBtn.addEventListener('click', performSearch);
    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // تسجيل الدخول
    elements.loginBtn.addEventListener('click', () => {
        elements.loginModal.classList.add('active');
    });
    
    // إغلاق المودال
    elements.closeModal.addEventListener('click', () => {
        elements.loginModal.classList.remove('active');
    });
    
    // إغلاق المودال عند النقر خارج المحتوى
    elements.loginModal.addEventListener('click', (e) => {
        if (e.target === elements.loginModal) {
            elements.loginModal.classList.remove('active');
        }
    });
    
    // تسجيل الدخول
    elements.loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // محاكاة تسجيل الدخول
        state.currentUser = {
            name: "مستخدم",
            email: email
        };
        
        elements.loginBtn.innerHTML = '<i class="fas fa-user"></i> <span>حسابي</span>';
        elements.loginModal.classList.remove('active');
        showNotification('تم تسجيل الدخول بنجاح!', 'success');
    });
    
    // التسجيل
    elements.registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification('سيتم تفعيل التسجيل قريباً', 'info');
    });
    
    // التصنيف
    elements.sortSelect.addEventListener('change', (e) => {
        state.currentSort = e.target.value;
        renderContent();
    });
    
    // القائمة الجانبية
    document.querySelectorAll('.section-title').forEach(title => {
        title.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('data-target');
            const submenu = document.getElementById(targetId);
            const arrow = e.currentTarget.querySelector('.arrow');
            
            e.currentTarget.classList.toggle('active');
            submenu.classList.toggle('active');
            arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? '' : 'rotate(180deg)';
        });
    });
    
    // عناصر القائمة
    document.querySelectorAll('.submenu a, .quick-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const type = link.getAttribute('data-type');
            const filter = link.getAttribute('data-filter');
            
            if (type === 'popular' || type === 'recent' || type === 'top') {
                // معالجة الروابط السريعة
                state.currentSort = type;
                elements.sortSelect.value = type;
                renderContent();
            } else {
                // معالجة التصنيفات
                state.currentType = type || 'all';
                state.currentFilter = filter || 'all';
                state.activeFilters = [];
                state.currentPage = 1;
                
                // تحديث القائمة النشطة
                document.querySelectorAll('.submenu a').forEach(a => a.classList.remove('active'));
                link.classList.add('active');
                
                renderContent();
            }
            
            // إغلاق القائمة على الهاتف
            if (window.innerWidth <= 768) {
                elements.sidebar.classList.remove('active');
            }
        });
    });
}

// دالة البحث
function performSearch() {
    state.searchQuery = elements.searchInput.value.trim();
    state.currentPage = 1;
    renderContent();
    
    if (state.searchQuery) {
        showNotification(`نتائج البحث عن: "${state.searchQuery}"`, 'info');
    }
}

// تصفية وترتيب البيانات
function getFilteredData() {
    let allItems = [];
    
    // جمع جميع العناصر
    if (state.currentType === 'all' || state.currentType === 'games') {
        allItems = allItems.concat(sampleData.games);
    }
    if (state.currentType === 'all' || state.currentType === 'apps') {
        allItems = allItems.concat(sampleData.apps);
    }
    if (state.currentType === 'all' || state.currentType === 'websites') {
        allItems = allItems.concat(sampleData.websites);
    }
    
    // التصفية حسب النوع
    if (state.currentType !== 'all') {
        allItems = allItems.filter(item => item.type === state.currentType);
    }
    
    // التصفية حسب الفئة
    if (state.currentFilter !== 'all') {
        allItems = allItems.filter(item => item.category === state.currentFilter);
    }
    
    // التصفية حسب البحث
    if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        allItems = allItems.filter(item => 
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query)))
        );
    }
    
    // الترتيب
    switch (state.currentSort) {
        case 'recent':
            allItems.sort((a, b) => b.id - a.id);
            break;
        case 'popular':
            allItems.sort((a, b) => {
                const aDownloads = parseDownloads(a.downloads || a.visits);
                const bDownloads = parseDownloads(b.downloads || b.visits);
                return bDownloads - aDownloads;
            });
            break;
        case 'rating':
            allItems.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
            allItems.sort((a, b) => a.title.localeCompare(b.title, 'ar'));
            break;
    }
    
    return allItems;
}

// تحويل التحميلات إلى أرقام
function parseDownloads(downloadStr) {
    if (!downloadStr) return 0;
    const num = parseFloat(downloadStr);
    if (downloadStr.includes('M')) return num * 1000000;
    if (downloadStr.includes('K')) return num * 1000;
    return num;
}

// عرض المحتوى
function renderContent() {
    const allItems = getFilteredData();
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = startIndex + state.itemsPerPage;
    const currentItems = allItems.slice(startIndex, endIndex);
    
    // تحديث العنوان
    updatePageTitle(allItems.length);
    
    // عرض الفلاتر النشطة
    renderActiveFilters();
    
    // عرض العناصر
    renderItems(currentItems);
    
    // عرض الترقيم
    renderPagination(allItems.length);
}

// تحديث عنوان الصفحة
function updatePageTitle(totalItems) {
    let title = "جميع المحتويات";
    
    if (state.currentType === 'games') title = "الألعاب";
    else if (state.currentType === 'apps') title = "التطبيقات";
    else if (state.currentType === 'websites') title = "المواقع";
    
    if (state.currentFilter !== 'all') {
        const filterNames = {
            'action': 'أكشن',
            'adventure': 'مغامرات',
            'puzzle': 'ألغاز',
            'racing': 'سباقات',
            'sports': 'رياضة',
            'apk': 'APK',
            'tools': 'أدوات',
            'social': 'تواصل اجتماعي',
            'productivity': 'إنتاجية',
            'education': 'تعليم',
            'entertainment': 'ترفيه',
            'shopping': 'تسوق'
        };
        title += ` - ${filterNames[state.currentFilter] || state.currentFilter}`;
    }
    
    if (state.searchQuery) {
        title = `نتائج البحث: "${state.searchQuery}"`;
    }
    
    elements.pageTitle.innerHTML = `<h2>${title} <span class="count">(${totalItems})</span></h2>`;
}

// عرض الفلاتر النشطة
function renderActiveFilters() {
    let filtersHTML = '';
    
    if (state.currentType !== 'all') {
        const typeNames = {
            'games': 'الألعاب',
            'apps': 'التطبيقات',
            'websites': 'المواقع'
        };
        filtersHTML += `
            <div class="filter-tag">
                <span>${typeNames[state.currentType]}</span>
                <button onclick="removeFilter('type')">&times;</button>
            </div>
        `;
    }
    
    if (state.currentFilter !== 'all') {
        const filterNames = {
            'action': 'أكشن',
            'adventure': 'مغامرات',
            'puzzle': 'ألغاز',
            'racing': 'سباقات',
            'sports': 'رياضة',
            'apk': 'APK',
            'tools': 'أدوات',
            'social': 'تواصل',
            'productivity': 'إنتاجية',
            'education': 'تعليم',
            'entertainment': 'ترفيه',
            'shopping': 'تسوق'
        };
        filtersHTML += `
            <div class="filter-tag">
                <span>${filterNames[state.currentFilter] || state.currentFilter}</span>
                <button onclick="removeFilter('category')">&times;</button>
            </div>
        `;
    }
    
    if (state.searchQuery) {
        filtersHTML += `
            <div class="filter-tag">
                <span>بحث: "${state.searchQuery}"</span>
                <button onclick="removeFilter('search')">&times;</button>
            </div>
        `;
    }
    
    elements.activeFilters.innerHTML = filtersHTML;
}

// إزالة الفلتر
window.removeFilter = function(filterType) {
    switch (filterType) {
        case 'type':
            state.currentType = 'all';
            break;
        case 'category':
            state.currentFilter = 'all';
            break;
        case 'search':
            state.searchQuery = '';
            elements.searchInput.value = '';
            break;
    }
    state.currentPage = 1;
    renderContent();
};

// عرض العناصر
function renderItems(items) {
    if (items.length === 0) {
        elements.contentGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>لا توجد نتائج</h3>
                <p>حاول البحث بكلمات أخرى أو إزالة بعض الفلاتر</p>
            </div>
        `;
        return;
    }
    
    let itemsHTML = '';
    
    items.forEach(item => {
        const isGame = item.type === 'games';
        const isApp = item.type === 'apps';
        const isWebsite = item.type === 'websites';
        
        const categoryNames = {
            'action': 'أكشن',
            'adventure': 'مغامرات',
            'puzzle': 'ألغاز',
            'racing': 'سباقات',
            'sports': 'رياضة',
            'apk': 'APK',
            'tools': 'أدوات',
            'social': 'تواصل اجتماعي',
            'productivity': 'إنتاجية',
            'education': 'تعليم',
            'entertainment': 'ترفيه',
            'shopping': 'تسوق'
        };
        
        itemsHTML += `
            <div class="content-item" data-id="${item.id}" data-type="${item.type}">
                <img src="${item.image}" alt="${item.title}" class="item-image">
                <div class="item-info">
                    <h3 class="item-title">${item.title}</h3>
                    <div class="item-meta">
                        <div class="item-rating">
                            <i class="fas fa-star"></i>
                            <span>${item.rating}</span>
                        </div>
                        <div class="item-downloads">
                            <i class="fas fa-download"></i>
                            <span>${item.downloads || item.visits}</span>
                        </div>
                    </div>
                    <div class="item-description">
                        ${item.description.substring(0, 60)}...
                    </div>
                    <div class="item-type">
                        ${categoryNames[item.category] || item.category}
                    </div>
                    <div class="item-actions">
                        <button class="btn-details" onclick="showItemDetails(${item.id}, '${item.type}')">
                            <i class="fas fa-info-circle"></i> تفاصيل
                        </button>
                        <button class="btn-download" onclick="downloadItem(${item.id}, '${item.type}')">
                            <i class="fas fa-download"></i> ${isWebsite ? 'زيارة' : 'تحميل'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    elements.contentGrid.innerHTML = itemsHTML;
}

// عرض التفاصيل
window.showItemDetails = function(id, type) {
    const items = sampleData[type];
    const item = items.find(i => i.id === id);
    
    if (!item) return;
    
    let detailsHTML = `
        <div class="modal-header">
            <h2><i class="fas fa-info-circle"></i> تفاصيل ${type === 'games' ? 'اللعبة' : type === 'apps' ? 'التطبيق' : 'الموقع'}</h2>
            <button class="close-modal">&times;</button>
        </div>
        <div class="item-details-content">
            <div class="item-header">
                <img src="${item.image}" alt="${item.title}">
                <div>
                    <h2>${item.title}</h2>
                    <div class="item-rating-large">
                        ${generateStars(item.rating)}
                        <span>${item.rating}/5</span>
                    </div>
                </div>
            </div>
            
            <div class="item-stats">
                <div class="stat">
                    <i class="fas fa-download"></i>
                    <div class="stat-value">${item.downloads || item.visits}</div>
                    <div class="stat-label">${type === 'websites' ? 'زيارة' : 'تحميل'}</div>
                </div>
                ${item.size ? `
                <div class="stat">
                    <i class="fas fa-weight"></i>
                    <div class="stat-value">${item.size}</div>
                    <div class="stat-label">الحجم</div>
                </div>
                ` : ''}
                <div class="stat">
                    <i class="fas fa-mobile-alt"></i>
                    <div class="stat-value">${item.platform || 'ويب'}</div>
                    <div class="stat-label">النظام</div>
                </div>
                ${item.version ? `
                <div class="stat">
                    <i class="fas fa-code-branch"></i>
                    <div class="stat-value">${item.version}</div>
                    <div class="stat-label">الإصدار</div>
                </div>
                ` : ''}
            </div>
            
            <div class="item-info-section">
                <h3><i class="fas fa-align-right"></i> الوصف</h3>
                <p>${item.description}</p>
            </div>
            
            ${item.osVersion ? `
            <div class="item-info-section">
                <h3><i class="fas fa-cog"></i> متطلبات النظام</h3>
                <p>${item.osVersion}</p>
            </div>
            ` : ''}
            
            ${item.developer ? `
            <div class="item-info-section">
                <h3><i class="fas fa-user-tie"></i> المطور</h3>
                <p>${item.developer}</p>
            </div>
            ` : ''}
            
            ${item.features ? `
            <div class="item-info-section">
                <h3><i class="fas fa-check-circle"></i> مميزات ${type === 'websites' ? 'الموقع' : ''}</h3>
                <ul class="features-list">
                    ${item.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
            
            ${item.benefits ? `
            <div class="item-info-section">
                <h3><i class="fas fa-lightbulb"></i> ماذا تستفيد</h3>
                <ul class="benefits-list">
                    ${item.benefits.map(benefit => `<li><i class="fas fa-arrow-left"></i> ${benefit}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
            
            ${item.tags ? `
            <div class="item-info-section">
                <h3><i class="fas fa-tags"></i> التصنيفات</h3>
                <div class="item-tags">
                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            ` : ''}
            
            <div class="download-options">
                ${type === 'websites' ? `
                    <button class="btn-primary" onclick="visitWebsite('${item.url}')">
                        <i class="fas fa-external-link-alt"></i> الانتقال للموقع
                    </button>
                ` : `
                    <button class="btn-primary" onclick="downloadItem(${item.id}, '${item.type}')">
                        <i class="fas fa-download"></i> تحميل مباشر
                    </button>
                `}
                <button class="btn-secondary" onclick="addToFavorites(${item.id}, '${item.type}')">
                    <i class="fas fa-heart"></i> إضافة للمفضلة
                </button>
            </div>
            
            ${item.reviews ? `
            <div class="item-info-section">
                <h3><i class="fas fa-comments"></i> التعليقات (${item.reviews.length})</h3>
                <div class="reviews-list">
                    ${item.reviews.map(review => `
                        <div class="review-item">
                            <div class="review-header">
                                <span class="review-avatar">${review.avatar}</span>
                                <span class="review-user">${review.user}</span>
                                <span class="review-date">${review.date}</span>
                                <span class="review-rating">${generateStars(review.rating)}</span>
                            </div>
                            <p class="review-comment">${review.comment}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}
        </div>
    `;
    
    const modal = document.getElementById('itemModal');
    modal.querySelector('.item-details').innerHTML = detailsHTML;
    modal.classList.add('active');
    
    // إضافة مستمع لإغلاق المودال
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
};

// توليد النجوم للتقييم
