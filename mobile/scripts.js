const content = {
    en: {
        headerTitle: "Mobile App Development",
        transformTitle: "Transform Your Business",
        introParagraph: "At KRDXCS, we are passionate about crafting innovative and user-centric mobile applications that transform your ideas into reality. With our expert team of developers, designers, and strategists, we bring your vision to life in the digital realm. Whether you're a startup aiming to disrupt the market or an established business looking to enhance your mobile presence, we have the expertise to deliver exceptional mobile app solutions.",
        bulletList: [
            "iOS native apps experts/iOS native game experts",
            "Android native apps experts/Android native game experts",
            "UI/UX Design / Cross-Platform Development",
            "App Maintenance and Support"
        ],
        contactTitle: "Let's Build Something Great Together",
        contactParagraph: "Embark on your mobile app development journey with us. We're here to turn your concepts into feature-rich, user-friendly apps that make an impact. <a href='contact.html'>Contact us today</a> to discuss your project, and let's bring your vision to life in the world of mobile technology.",
        footerContactTitle: "Contact Us",
        footerContactInfo: "Ready to enhance your mobile presence? <a href='contact.html'>Get in touch with us</a> to start your mobile app development journey today!"
    },
    jp: {
        headerTitle: "モバイルアプリ開発",
        transformTitle: "ビジネスを変革する",
        introParagraph: "KRDXCSでは、革新的でユーザー中心のモバイルアプリケーションを作成することに情熱を注いでいます。私たちの専門家チームは、開発者、デザイナー、および戦略家で構成されており、デジタル領域であなたのビジョンを実現します。市場を変革することを目指すスタートアップであろうと、モバイルプレゼンスを向上させる既存の企業であろうと、私たちは優れたモバイルアプリソリューションを提供する専門知識を持っています。",
        bulletList: [
            "iOSネイティブアプリの専門家/iOSネイティブゲームの専門家",
            "Androidネイティブアプリの専門家/Androidネイティブゲームの専門家",
            "UI/UXデザイン/クロスプラットフォーム開発",
            "アプリの保守とサポート"
        ],
        contactTitle: "一緒に素晴らしいものを作りましょう",
        contactParagraph: "私たちと一緒にモバイルアプリ開発の旅を始めましょう。私たちはあなたの概念を機能豊富でユーザーフレンドリーなアプリに変えるためにここにいます。<a href='contact.html'>今すぐお問い合わせください</a> あなたのプロジェクトについて話し合い、モバイルテクノロジーの世界であなたのビジョンを実現しましょう。",
        footerContactTitle: "お問い合わせ",
        footerContactInfo: "モバイルプレゼンスを向上させる準備はできていますか？<a href='contact.html'>今すぐご連絡ください</a> あなたのモバイルアプリ開発の旅を始めましょう！"
    }
};

const languageSwitcher = document.getElementById("language-switcher");

const updateContent = (lang) => {
    document.getElementById("header-title").innerText = content[lang].headerTitle;
    document.getElementById("transform-title").innerText = content[lang].transformTitle;
    document.getElementById("intro-paragraph").innerText = content[lang].introParagraph;
    document.getElementById("contact-title").innerText = content[lang].contactTitle;
    document.getElementById("contact-paragraph").innerHTML = content[lang].contactParagraph;
    document.getElementById("footer-contact-title").innerText = content[lang].footerContactTitle;
    document.getElementById("footer-contact-info").innerHTML = content[lang].footerContactInfo;

    const bulletList = document.getElementById("bullet-list");
    bulletList.innerHTML = "";
    content[lang].bulletList.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<span class="checkmark">✔</span> ${item}`;
        bulletList.appendChild(li);
    });
};

languageSwitcher.addEventListener("change", (event) => {
    updateContent(event.target.value);
});

// Initialize the default content
updateContent(languageSwitcher.value);
