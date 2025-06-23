import React, { useState, createContext, useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ExamplePrompts from './components/ExamplePrompts';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

// Language Context
interface LanguageContextType {
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translations
const translations = {
  uz: {
    // Hero
    aiPoweredFitness: 'AI Fitness Platformasi',
    transformYourFitness: 'Fitness safaringizni',
    fitnessJourney: 'Fitness safaringizni',
    withAI: 'AI bilan',
    aiFitnessAssistant: 'AI fitness yordamchisi mukammal zallarni topadi, shaxsiy dietalarni yaratadi va samarali mashg\'ulot rejalarini soniyalar ichida tuzadi.',
    noDownloads: 'Yuklab olish yo\'q • Chalkashlik yo\'q • Faqat natijalar',
    findGyms: 'Zallarni topish',
    nearYou: 'Sizga yaqin, byudjetda',
    getDietPlan: 'Dieta rejasini olish',
    personalizedNutrition: 'Shaxsiy oziqlanish',
    workoutPlan: 'Mashg\'ulot rejasi',
    homeOrGym: 'Uy yoki zal mashg\'ulotlari',
    startTransformation: 'O\'zgarishni boshlash',
    instantResults: 'Darhol natijalar',
    
    // Features
    unleashYourPotential: 'Potensialingizni oching',
    everythingYouNeed: 'Muvaffaqiyat uchun kerakli hamma narsa',
    succeed: 'Muvaffaqiyat',
    aiPlatformProvides: 'Bizning AI platformasi tanangiz va hayotingizni o\'zgartiradigan shaxsiy tavsiyalar beradi.',
    findPerfectGyms: 'Mukammal zallarni topish',
    gymDescription: 'Bizning AI minglab zallarni skanerlaydi va byudjetingiz, joylashuvingiz va maqsadlaringiz uchun mukammal moslikni topadi. Endi o\'rtacha zallarda vaqtni behuda sarflamang.',
    lightningFast: 'Yorqin tez joylashuvga asoslangan qidiruv',
    budgetFriendly: 'Pulni tejaydigan byudjetga mos filtrlash',
    realReviews: 'Haqiqiy zal a\'zolaridan haqiqiy foydalanuvchi sharhlari',
    equipmentComparison: 'Jihozlar va qulayliklarni taqqoslash vositasi',
    findMyGym: 'Zalimni topish',
    personalizedDietPlans: 'Shaxsiy dieta rejalari',
    dietDescription: 'Haqiqatda ishlaydigan shaxsiy oziqlanish rejalarini oling! Og\'irligingiz, byudjetingiz va maqsadlaringizga asoslangan - endi nima yeyishni taxmin qilish shart emas.',
    customMealPlans: 'Sizning maxsus maqsadlaringiz uchun maxsus ovqatlanish rejalari',
    smartGroceryLists: 'Byudjetingizga mos aqlli oziq-ovqat ro\'yxatlari',
    localFoodAvailability: 'Mahalliy oziq-ovqat mavjudligini hisobga olish',
    perfectNutritionalBalance: 'Mukammal oziqlanish balansini optimallashtirish',
    getMyDietPlan: 'Dieta rejamni olish',
    smartWorkoutGenerator: 'Aqlli mashg\'ulot generatori',
    workoutDescription: '20 daqiqa yoki 2 soat bo\'lsin, uyda yoki zaldada - bizning AI maksimal natijalar uchun mukammal mashg\'ulot rejasini yaratadi.',
    timeOptimized: 'Gainsni maksimallashtiradigan vaqtga moslashtirilgan rutinlar',
    homeOrGymOptions: 'Uy yoki zalga asoslangan mashq variantlari',
    experienceLevelAdaptation: 'Tajriba darajasi moslashish tizimi',
    progressiveDifficulty: 'O\'sish uchun progressiv qiyinchilik miqyosi',
    buildMyWorkout: 'Mashg\'ulotimni tuzish',
    transformations: 'O\'zgarishlar',
    partnerGyms: 'Hamkor zallar',
    successRate: 'Muvaffaqiyat darajasi',
    aiSupport: 'AI yordami',
    howOurAI: 'Bizning AI platformasi qanday ishlaydi',
    aiPlatform: 'AI Platformasi',
    works: 'Ishlaydi',
    simpleSmart: 'Oddiy, aqlli va samarali - faqat 3 qadamda boshlang.',
    tellUsYourGoals: 'Maqsadlaringizni ayting',
    goalsDescription: 'Fitness orzularingizni, tajriba darajangizni, vaqt mavjudligingizni va sizni nima ruhlantirishini baham ko\'ring.',
    aiAnalyzes: 'AI tahlil qiladi va rejalashtiradi',
    analyzesDescription: 'Bizning aqlli AI ma\'lumotlaringizni qayta ishlaydi va shaxsiy tavsiyalar yaratadi.',
    getYourPlan: 'Rejangizni oling',
    planDescription: 'Maxsus zal tavsiyalari, dieta rejalari va mashg\'ulot rutinlarini darhol oling.',
    transformationProcess: 'O\'zgarish jarayoni',
    
    // Examples
    realUserExamples: 'Haqiqiy foydalanuvchi misollari',
    seeTheAI: 'AI mo\'jizasini ko\'ring',
    aiMagic: 'AI mo\'jizasi',
    inAction: 'Harakatda',
    getInspired: 'Ushbu samarali promptlar bilan ilhomlaning va bizning AI qanday hayotlarni o\'zgartirishini ko\'ring.',
    gymHunting: 'ZAL QIDIRISH',
    showMeQuality: 'Angren yaqinida $50/oydan kam, Olimpiya og\'irliklari va to\'xtash joyi bo\'lgan sifatli zallarni ko\'rsating.',
    dietPlanning: 'DIETA REJALASH',
    createMealPlan: '75kg odam uchun $100/oy byudjet bilan mushak yaratish uchun ovqatlanish rejasini yarating.',
    workoutPlans: 'MASHG\'ULOT REJALARI',
    have30Minutes: 'Kundalik 30 daqiqam bor, o\'rta daraja, yog\' yoqish uchun samarali uy mashg\'ulotlari kerak.',
    tryThisPrompt: 'Ushbu promptni sinab ko\'ring',
    realConversations: 'Haqiqiy suhbatlar',
    actualAI: 'Haqiqiy AI suhbatlari',
    seeHowAI: 'Bizning AI haqiqiy foydalanuvchi savollarini qanday hal qilishini ko\'ring.',
    beginner25: 'Men boshlang\'ichman, 25 yoshda, 3 oyda 10kg yo\'qotmoqchi va fit bo\'lmoqchiman.',
    perfectComprehensive: 'Mukammal! Kardio mashg\'ulotlari, kuch mashg\'ulotlari jadvali va maqsadlaringizga erishishga yordam beradigan kaloriya tanqisligi ovqatlanish rejasi bilan keng qamrovli reja yarataman.',
    findGymsDowntown: 'Shahar markazida $80/oydan kam suv havzalari bo\'lgan zallarni toping.',
    hereAre5: 'Suv havzalari, a\'zolik xarajatlari, qulayliklar va eng yaxshi tanlov qilishga yordam beradigan foydalanuvchi sharhlari bilan hududingizdagi 5 ta sifatli zal.',
    workNightShifts: 'Tungi smenada ishlayman, jadvalimga mos keladigan moslashuvchan mashg\'ulot rutini kerak.',
    noProblemFlexible: 'Muammo yo\'q! Uyqulash rejimingizga mos keladigan moslashuvchan jadval yarataman, uy mashg\'ulotlari va 24/7 zal tavsiyalarini o\'z ichiga olgan.',
    vegetarianDiet: 'Mushak yaratish uchun vegetarian dieta rejasi, $120 byudjet.',
    highProteinVegetarian: 'Samarali mushak yaratish uchun oziq-ovqat ro\'yxatlari, tayyorlash maslahatlari va qo\'shimcha tavsiyalar bilan yuqori proteinli vegetarian ovqatlanish rejasi.',
    startYourTransformation: 'O\'zgarishingizni boshlang',
    joinFitnessRevolution: 'Fitness inqilobiga qo\'shiling! Maqsadlaringizni saqlash, taraqqiyotingizni kuzatish va o\'zgarishingiz bilan rivojlanadigan shaxsiy tavsiyalar olish uchun hisob yarating.',
    startMyTransformation: 'O\'zgarishimni boshlash',
    
    // Footer
    aiPoweredFitnessPlatform: 'Sifatli zallarni topish, shaxsiy dieta rejalarini yaratish va hayotingizni o\'zgartiradigan samarali mashg\'ulot rutinlarini yaratish uchun AI bilan ishlaydigan fitness platformasi.',
    madeWith: 'Yaratilgan',
    forFitnessEnthusiasts: 'fitness muxlislari uchun',
    quickLinks: 'Tezkor havolalar',
    support: 'Yordam',
    helpCenter: 'Yordam markazi',
    privacyPolicy: 'Maxfiylik siyosati',
    termsOfService: 'Xizmat ko\'rsatish shartlari',
    allRightsReserved: 'Barcha huquqlar himoyalangan.',
    empoweringFitness: 'AI texnologiyasi bilan fitness safaringizni kuchaytirish.',
    rating: 'reyting',
    
    // Header
    features: 'Xususiyatlar',
    examples: 'Misollar',
    about: 'Haqida',
    login: 'Kirish',
    getStarted: 'Boshlash',
  },
  en: {
    // Hero
    aiPoweredFitness: 'AI Fitness Platform',
    transformYourFitness: 'Transform Your',
    fitnessJourney: 'Fitness Journey',
    withAI: 'with AI',
    aiFitnessAssistant: 'Your AI fitness assistant finds perfect gyms, creates personalized diets, and builds effective workout plans in seconds.',
    noDownloads: 'No downloads • No confusion • Just results',
    findGyms: 'Find Gyms',
    nearYou: 'Near you, under budget',
    getDietPlan: 'Get Diet Plan',
    personalizedNutrition: 'Personalized nutrition',
    workoutPlan: 'Workout Plan',
    homeOrGym: 'Home or gym routines',
    startTransformation: 'Start Your Transformation',
    instantResults: 'Instant Results',
    
    // Features
    unleashYourPotential: 'Unleash Your Potential',
    everythingYouNeed: 'Everything You Need to',
    succeed: 'Succeed',
    aiPlatformProvides: 'Our AI-powered platform provides personalized recommendations that will transform your body and life.',
    findPerfectGyms: 'Find Perfect Gyms',
    gymDescription: 'Our AI scans thousands of gyms to find the perfect match for your budget, location, and goals. No more wasting time on mediocre gyms.',
    lightningFast: 'Lightning-fast location-based search',
    budgetFriendly: 'Budget-friendly filtering that saves you money',
    realReviews: 'Real user reviews from actual gym members',
    equipmentComparison: 'Equipment & amenities comparison tool',
    findMyGym: 'Find My Gym',
    personalizedDietPlans: 'Personalized Diet Plans',
    dietDescription: 'Get personalized nutrition plans that actually work! Based on your weight, budget, and goals - no more guessing what to eat.',
    customMealPlans: 'Custom meal plans for your specific goals',
    smartGroceryLists: 'Smart grocery lists that fit your budget',
    localFoodAvailability: 'Local food availability consideration',
    perfectNutritionalBalance: 'Perfect nutritional balance optimization',
    getMyDietPlan: 'Get My Diet Plan',
    smartWorkoutGenerator: 'Smart Workout Generator',
    workoutDescription: 'Whether you have 20 minutes or 2 hours, at home or in the gym - our AI creates the perfect workout plan for maximum results.',
    timeOptimized: 'Time-optimized routines that maximize gains',
    homeOrGymOptions: 'Home or gym-based exercise options',
    experienceLevelAdaptation: 'Experience level adaptation system',
    progressiveDifficulty: 'Progressive difficulty scaling for growth',
    buildMyWorkout: 'Build My Workout',
    transformations: 'Transformations',
    partnerGyms: 'Partner Gyms',
    successRate: 'Success Rate',
    aiSupport: 'AI Support',
    howOurAI: 'How Our AI Platform Works',
    aiPlatform: 'AI Platform',
    works: 'Works',
    simpleSmart: 'Simple, smart, and effective - get started in just 3 steps.',
    tellUsYourGoals: 'Tell Us Your Goals',
    goalsDescription: 'Share your fitness dreams, experience level, time availability, and what motivates you.',
    aiAnalyzes: 'AI Analyzes & Plans',
    analyzesDescription: 'Our intelligent AI processes your information and creates personalized recommendations.',
    getYourPlan: 'Get Your Plan',
    planDescription: 'Receive customized gym suggestions, diet plans, and workout routines instantly.',
    transformationProcess: 'Transformation Process',
    
    // Examples
    realUserExamples: 'Real User Examples',
    seeTheAI: 'See the AI Magic in Action',
    aiMagic: 'AI Magic',
    inAction: 'in Action',
    getInspired: 'Get inspired by these effective prompts and see how our AI transforms lives.',
    gymHunting: 'GYM HUNTING',
    showMeQuality: 'Show me quality gyms near Angren under $50/month with Olympic weights and parking.',
    dietPlanning: 'DIET PLANNING',
    createMealPlan: 'Create a meal plan for 75kg person with $100/month budget for muscle building.',
    workoutPlans: 'WORKOUT PLANS',
    have30Minutes: 'I have 30 minutes daily, intermediate level, need effective home workouts for fat burning.',
    tryThisPrompt: 'Try This Prompt',
    realConversations: 'Real Conversations',
    actualAI: 'Actual AI Conversations',
    seeHowAI: 'See how our AI handles real user questions.',
    beginner25: 'I\'m a beginner, 25 years old, want to lose 10kg in 3 months and get fit.',
    perfectComprehensive: 'Perfect! I\'ll create a comprehensive plan with cardio workouts, strength training schedule, and a calorie-deficit meal plan that will help you achieve your goals.',
    findGymsDowntown: 'Find gyms in downtown with swimming pools under $80/month.',
    hereAre5: 'Here are 5 quality gyms in your area with swimming pools, membership costs, amenities, and user reviews to help you make the best choice.',
    workNightShifts: 'I work night shifts, need a flexible workout routine that fits my schedule.',
    noProblemFlexible: 'No problem! I\'ll design a flexible schedule that works with your sleep pattern, including home workouts and 24/7 gym recommendations.',
    vegetarianDiet: 'Vegetarian diet plan for muscle building, $120 budget.',
    highProteinVegetarian: 'Here\'s a high-protein vegetarian meal plan with shopping lists, prep tips, and supplement recommendations for effective muscle building.',
    startYourTransformation: 'Start Your Transformation',
    joinFitnessRevolution: 'Join the fitness revolution! Create an account to save your goals, track your progress, and get personalized recommendations that evolve with your transformation.',
    startMyTransformation: 'Start My Transformation',
    
    // Footer
    aiPoweredFitnessPlatform: 'Your AI-powered fitness platform for finding quality gyms, creating personalized diet plans, and generating effective workout routines that will transform your life.',
    madeWith: 'Made with',
    forFitnessEnthusiasts: 'for fitness enthusiasts',
    quickLinks: 'Quick Links',
    support: 'Support',
    helpCenter: 'Help Center',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    allRightsReserved: 'All rights reserved.',
    empoweringFitness: 'Empowering your fitness journey with AI technology.',
    rating: 'rating',
    
    // Header
    features: 'Features',
    examples: 'Examples',
    about: 'About',
    login: 'Login',
    getStarted: 'Get Started',
  },
  ru: {
    // Hero
    aiPoweredFitness: 'AI Фитнес Платформа',
    transformYourFitness: 'Преобразуйте свое',
    fitnessJourney: 'Фитнес Путешествие',
    withAI: 'с ИИ',
    aiFitnessAssistant: 'Ваш ИИ-помощник по фитнесу находит идеальные залы, создает персонализированные диеты и строит эффективные планы тренировок за секунды.',
    noDownloads: 'Без загрузок • Без путаницы • Только результаты',
    findGyms: 'Найти залы',
    nearYou: 'Рядом с вами, в рамках бюджета',
    getDietPlan: 'Получить план диеты',
    personalizedNutrition: 'Персонализированное питание',
    workoutPlan: 'План тренировок',
    homeOrGym: 'Домашние или зальные тренировки',
    startTransformation: 'Начать трансформацию',
    instantResults: 'Мгновенные результаты',
    
    // Features
    unleashYourPotential: 'Раскройте свой потенциал',
    everythingYouNeed: 'Все, что вам нужно для',
    succeed: 'успеха',
    aiPlatformProvides: 'Наша платформа на базе ИИ предоставляет персонализированные рекомендации, которые преобразуют ваше тело и жизнь.',
    findPerfectGyms: 'Найти идеальные залы',
    gymDescription: 'Наш ИИ сканирует тысячи залов, чтобы найти идеальное соответствие вашему бюджету, местоположению и целям. Больше никакой траты времени на посредственные залы.',
    lightningFast: 'Молниеносный поиск по местоположению',
    budgetFriendly: 'Фильтрация по бюджету, которая экономит ваши деньги',
    realReviews: 'Реальные отзывы от настоящих членов зала',
    equipmentComparison: 'Инструмент сравнения оборудования и удобств',
    findMyGym: 'Найти мой зал',
    personalizedDietPlans: 'Персонализированные планы диет',
    dietDescription: 'Получите персонализированные планы питания, которые действительно работают! Основываясь на вашем весе, бюджете и целях - больше никаких догадок о том, что есть.',
    customMealPlans: 'Индивидуальные планы питания для ваших конкретных целей',
    smartGroceryLists: 'Умные списки покупок, которые соответствуют вашему бюджету',
    localFoodAvailability: 'Учет доступности местной еды',
    perfectNutritionalBalance: 'Оптимизация идеального питательного баланса',
    getMyDietPlan: 'Получить мой план диеты',
    smartWorkoutGenerator: 'Умный генератор тренировок',
    workoutDescription: 'Будь у вас 20 минут или 2 часа, дома или в зале - наш ИИ создает идеальный план тренировок для максимальных результатов.',
    timeOptimized: 'Оптимизированные по времени рутины, которые максимизируют результаты',
    homeOrGymOptions: 'Варианты упражнений дома или в зале',
    experienceLevelAdaptation: 'Система адаптации к уровню опыта',
    progressiveDifficulty: 'Прогрессивное увеличение сложности для роста',
    buildMyWorkout: 'Создать мою тренировку',
    transformations: 'Трансформации',
    partnerGyms: 'Партнерские залы',
    successRate: 'Уровень успеха',
    aiSupport: 'Поддержка ИИ',
    howOurAI: 'Как работает наша ИИ платформа',
    aiPlatform: 'ИИ Платформа',
    works: 'Работает',
    simpleSmart: 'Просто, умно и эффективно - начните всего за 3 шага.',
    tellUsYourGoals: 'Расскажите нам о своих целях',
    goalsDescription: 'Поделитесь своими фитнес-мечтами, уровнем опыта, доступностью времени и тем, что вас мотивирует.',
    aiAnalyzes: 'ИИ анализирует и планирует',
    analyzesDescription: 'Наш интеллектуальный ИИ обрабатывает вашу информацию и создает персонализированные рекомендации.',
    getYourPlan: 'Получить ваш план',
    planDescription: 'Получите персонализированные предложения залов, планы диет и рутины тренировок мгновенно.',
    transformationProcess: 'Процесс трансформации',
    
    // Examples
    realUserExamples: 'Реальные примеры пользователей',
    seeTheAI: 'Увидеть магию ИИ в действии',
    aiMagic: 'Магия ИИ',
    inAction: 'в действии',
    getInspired: 'Вдохновитесь этими эффективными промптами и увидите, как наш ИИ преобразует жизни.',
    gymHunting: 'ПОИСК ЗАЛА',
    showMeQuality: 'Покажите мне качественные залы рядом с Ангреном до $50/месяц с олимпийскими весами и парковкой.',
    dietPlanning: 'ПЛАНИРОВАНИЕ ДИЕТЫ',
    createMealPlan: 'Создайте план питания для человека 75кг с бюджетом $100/месяц для наращивания мышц.',
    workoutPlans: 'ПЛАНЫ ТРЕНИРОВОК',
    have30Minutes: 'У меня есть 30 минут ежедневно, средний уровень, нужны эффективные домашние тренировки для сжигания жира.',
    tryThisPrompt: 'Попробовать этот промпт',
    realConversations: 'Реальные разговоры',
    actualAI: 'Реальные разговоры с ИИ',
    seeHowAI: 'Посмотрите, как наш ИИ обрабатывает реальные вопросы пользователей.',
    beginner25: 'Я новичок, 25 лет, хочу сбросить 10кг за 3 месяца и стать подтянутым.',
    perfectComprehensive: 'Отлично! Я создам комплексный план с кардио тренировками, графиком силовых тренировок и планом питания с дефицитом калорий, который поможет вам достичь целей.',
    findGymsDowntown: 'Найдите залы в центре города с бассейнами до $80/месяц.',
    hereAre5: 'Вот 5 качественных залов в вашем районе с бассейнами, стоимостью членства, удобствами и отзывами пользователей, чтобы помочь вам сделать лучший выбор.',
    workNightShifts: 'Мен түнгі ауысымда жұмыс істеймін, кестеге сәйкес келетін икемді жаттығу рутины қажет.',
    noProblemFlexible: 'Нет проблем! Я разработаю гибкий график, который работает с вашим режимом сна, включая домашние тренировки и рекомендации залов 24/7.',
    vegetarianDiet: 'План вегетарианской диеты для наращивания мышц, бюджет $120.',
    highProteinVegetarian: 'Вот высокопротеиновый вегетарианский план питания со списками покупок, советами по приготовлению и рекомендациями по добавкам для эффективного наращивания мышц.',
    startYourTransformation: 'Начать вашу трансформацию',
    joinFitnessRevolution: 'Присоединяйтесь к фитнес-революции! Создайте аккаунт, чтобы сохранить свои цели, отслеживать прогресс и получать персонализированные рекомендации, которые развиваются вместе с вашей трансформацией.',
    startMyTransformation: 'Начать мою трансформацию',
    
    // Footer
    aiPoweredFitnessPlatform: 'Ваша платформа фитнеса на базе ИИ для поиска качественных залов, создания персонализированных планов диет и генерации эффективных рутин тренировок, которые преобразуют вашу жизнь.',
    madeWith: 'Сделано с',
    forFitnessEnthusiasts: 'для энтузиастов фитнеса',
    quickLinks: 'Быстрые ссылки',
    support: 'Поддержка',
    helpCenter: 'Центр помощи',
    privacyPolicy: 'Құпиялылық саясаты',
    termsOfService: 'Қызмет көрсету шарттары',
    allRightsReserved: 'Барлық құқықтар қорғалған.',
    empoweringFitness: 'Усиление вашего фитнес-путешествия с помощью технологии ИИ.',
    rating: 'рейтинг',
    
    // Header
    features: 'Возможности',
    examples: 'Примеры',
    about: 'О нас',
    login: 'Войти',
    getStarted: 'Начать',
  },
  kk: {
    // Hero
    aiPoweredFitness: 'AI Фитнес Платформасы',
    transformYourFitness: 'Фитнес сапарыңызды',
    fitnessJourney: 'Фитнес сапарыңызды',
    withAI: 'AI арқылы',
    aiFitnessAssistant: 'Сіздің AI фитнес көмекшісіңіз керемет залдарды табады, жеке диеталар жасайды және тиімді жаттығу жоспарларын секундтар ішінде құрады.',
    noDownloads: 'Жүктеу жоқ • Шатасу жоқ • Тек нәтижелер',
    findGyms: 'Залдарды табу',
    nearYou: 'Сізге жақын, бюджет шегінде',
    getDietPlan: 'Диета жоспарын алу',
    personalizedNutrition: 'Жеке тамақтану',
    workoutPlan: 'Жаттығу жоспары',
    homeOrGym: 'Үй немесе зал жаттығулары',
    startTransformation: 'Өзгерісті бастау',
    instantResults: 'Дереу нәтижелер',
    
    // Features
    unleashYourPotential: 'Өзіңіздің әлеуетіңізді ашыңыз',
    everythingYouNeed: 'Сәттілікке қажетті барлығы',
    succeed: 'сәттілік',
    aiPlatformProvides: 'Біздің AI платформасы дененізді және өміріңізді өзгертетін жеке ұсыныстар береді.',
    findPerfectGyms: 'Керемет залдарды табу',
    gymDescription: 'Біздің AI мыңдаған залдарды сканерлейді және сіздің бюджетіңіз, орналасуыңыз және мақсаттарыңыз үшін керемет сәйкестікті табады. Енді орташа залдарда уақытты ысырап етпеңіз.',
    lightningFast: 'Жарық жылдам орналасуға негізделген іздеу',
    budgetFriendly: 'Ақшаңызды үнемдейтін бюджетке сәйкес сүзгілеу',
    realReviews: 'Нағыз зал мүшелерінен нағыз пайдаланушы пікірлері',
    equipmentComparison: 'Жабдықтар мен ыңғайлылықтарды салыстыру құралы',
    findMyGym: 'Залымды табу',
    personalizedDietPlans: 'Жеке диета жоспарлары',
    dietDescription: 'Шынында жұмыс істейтін жеке тамақтану жоспарларын алыңыз! Сіздің салмағыңыз, бюджетіңіз және мақсаттарыңызға негізделген - енді не жеу керектігін болжау қажет емес.',
    customMealPlans: 'Сіздің нақты мақсаттарыңыз үшін арнайы тамақтану жоспарлары',
    smartGroceryLists: 'Бюджетіңізге сәйкес ақылды азық-түлік тізімдері',
    localFoodAvailability: 'Жергілікті азық-түлік қолжетімділігін ескеру',
    perfectNutritionalBalance: 'Керемет тамақтану балансын оңтайландыру',
    getMyDietPlan: 'Диета жоспарымды алу',
    smartWorkoutGenerator: 'Ақылды жаттығу генераторы',
    workoutDescription: '20 минут немесе 2 сағат болсын, үйде немесе залда - біздің AI максималды нәтижелер үшін керемет жаттығу жоспарын жасайды.',
    timeOptimized: 'Нәтижелерді максимизациялайтын уақытқа оңтайландырылған рутиналар',
    homeOrGymOptions: 'Үй немесе залға негізделген жаттығу опциялары',
    experienceLevelAdaptation: 'Тәжірибе деңгейіне бейімделу жүйесі',
    progressiveDifficulty: 'Өсу үшін прогрессивті қиындық масштабы',
    buildMyWorkout: 'Жаттығуымды құру',
    transformations: 'Өзгерістер',
    partnerGyms: 'Серіктес залдар',
    successRate: 'Сәттілік деңгейі',
    aiSupport: 'AI қолдауы',
    howOurAI: 'Біздің AI платформасы қалай жұмыс істейді',
    aiPlatform: 'AI Платформасы',
    works: 'Жұмыс істейді',
    simpleSmart: 'Қарапайым, ақылды және тиімді - тек 3 қадамда бастаңыз.',
    tellUsYourGoals: 'Мақсаттарыңызды айтыңыз',
    goalsDescription: 'Фитнес армандарыңызды, тәжірибе деңгейіңізді, уақыт қолжетімділігіңізді және сізді не рухтандыратынын бөлісіңіз.',
    aiAnalyzes: 'AI талдайды және жоспарлайды',
    analyzesDescription: 'Біздің ақылды AI сіздің ақпаратыңызды өңдейді және жеке ұсыныстар жасайды.',
    getYourPlan: 'Жоспарыңызды алу',
    planDescription: 'Жеке зал ұсыныстарын, диета жоспарларын және жаттығу рутиналарын дереу алыңыз.',
    transformationProcess: 'Өзгеру процесі',
    
    // Examples
    realUserExamples: 'Нағыз пайдаланушы мысалдары',
    seeTheAI: 'AI сиқырын іс-әрекетте көріңіз',
    aiMagic: 'AI сиқыры',
    inAction: 'іс-әрекетте',
    getInspired: 'Осы тиімді промпттармен рухтандырылыңыз және біздің AI қалай өмірлерді өзгертетінін көріңіз.',
    gymHunting: 'ЗАЛ ІЗДЕУ',
    showMeQuality: 'Ангрен маңында $50/айдан аз, Олимпиада салмақтары және тұрақ орындары бар сапалы залдарды көрсетіңіз.',
    dietPlanning: 'ДИЕТА ЖОСПАРЛАУ',
    createMealPlan: '75кг адам үшін $100/ай бюджетпен бұлшық ет жасау үшін тамақтану жоспарын жасаңыз.',
    workoutPlans: 'ЖАТТЫҒУ ЖОСПАРЛАРЫ',
    have30Minutes: 'Күнделікті 30 минутым бар, орта деңгей, май жағу үшін тиімді үй жаттығулары қажет.',
    tryThisPrompt: 'Бұл промптты қолданып көріңіз',
    realConversations: 'Нағыз әңгімелер',
    actualAI: 'Нағыз AI әңгімелері',
    seeHowAI: 'Біздің AI нағыз пайдаланушы сұрақтарын қалай шешетінін көріңіз.',
    beginner25: 'Мен бастаушымын, 25 жаста, 3 айда 10кг жоғалтқым келеді және фитнес болғым келеді.',
    perfectComprehensive: 'Керемет! Кардио жаттығулары, күш жаттығулары кестесі және мақсаттарыңызға жетуге көмектесетін калория тапшылығы тамақтану жоспарымен кешенді жоспар жасаймын.',
    findGymsDowntown: 'Қала орталығында $80/айдан аз бассейндері бар залдарды табыңыз.',
    hereAre5: 'Бассейндері, мүшелік құны, ыңғайлылықтары және ең жақсы таңдау жасауға көмектесетін пайдаланушы пікірлері бар ауданыңыздағы 5 сапалы зал.',
    workNightShifts: 'Мен түнгі ауысымда жұмыс істеймін, кестеге сәйкес келетін икемді жаттығу рутины қажет.',
    noProblemFlexible: 'Мәселе жоқ! Ұйқы үлгіңізге сәйкес келетін икемді кесте жасаймын, үй жаттығуларын және 24/7 зал ұсыныстарын қоса алғанда.',
    vegetarianDiet: 'Бұлшық ет жасау үшін вегетариандық диета жоспары, $120 бюджет.',
    highProteinVegetarian: 'Тиімді бұлшық ет жасау үшін сатып алу тізімдері, дайындау кеңестері және қосымша ұсыныстармен жоғары протеинді вегетариандық тамақтану жоспары.',
    startYourTransformation: 'Өзгерісіңізді бастау',
    joinFitnessRevolution: 'Фитнес төңкерісіне қосылыңыз! Мақсаттарыңызды сақтау, прогрессіңізді бақылау және өзгерісіңізбен дамитын жеке ұсыныстар алу үшін есеп жасаңыз.',
    startMyTransformation: 'Өзгерісімді бастау',
    
    // Footer
    aiPoweredFitnessPlatform: 'Сапалы залдарды табу, жеке диета жоспарларын жасау және өміріңізді өзгертетін тиімді жаттығу рутиналарын жасау үшін AI қуатты фитнес платформасы.',
    madeWith: 'Жасалған',
    forFitnessEnthusiasts: 'фитнес әуесқойлары үшін',
    quickLinks: 'Жылдам сілтемелер',
    support: 'Қолдау',
    helpCenter: 'Көмек орталығы',
    privacyPolicy: 'Құпиялылық саясаты',
    termsOfService: 'Қызмет көрсету шарттары',
    allRightsReserved: 'Барлық құқықтар қорғалған.',
    empoweringFitness: 'AI технологиясымен фитнес сапарыңызды күшейту.',
    rating: 'рейтинг',
    
    // Header
    features: 'Мүмкіндіктер',
    examples: 'Мысалдар',
    about: 'Біз туралы',
    login: 'Кіру',
    getStarted: 'Бастау',
  }
};

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [currentLanguage, setCurrentLanguage] = useState('uz');

  const handleLoginClick = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  const handleStartChat = () => {
    // For now, we'll show the register modal
    // In a real app, this would start the chat interface
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAuthModalOpen(false);
  };

  const t = (key: string) => {
    return translations[currentLanguage as keyof typeof translations]?.[key as keyof typeof translations.uz] || key;
  };

  const languageContextValue: LanguageContextType = {
    currentLanguage,
    setCurrentLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={languageContextValue}>
      <div className="min-h-screen bg-white">
        <Header 
          onLoginClick={handleLoginClick}
          onRegisterClick={handleRegisterClick}
        />
        
        <main>
          <Hero onStartChat={handleStartChat} />
          <Features />
          <ExamplePrompts />
        </main>

        <Footer />

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={handleCloseModal}
          initialMode={authMode}
        />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;