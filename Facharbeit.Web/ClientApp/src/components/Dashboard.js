import React, { Component } from 'react';
import "../css/Dashboard.scss";

export class Dashboard extends Component {
    static displayName = Dashboard.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="basicLayout">
                <div className="netflix-sans-font-loaded">
                    <div className="our-story-desktop-framework adsplan-banner-enabled">
                        <div>
                            <div className="our-story-container" dir="ltr">
                                <div className="our-story-header-wrapper">
                                    <div className="our-story-header our-story-header--has-language-selector" data-uia-nmhp="our-story-header">
                                        <span className="svg-nfLogo our-story-logo nfLogo" data-uia="netflix-header-svg-logo-noclick">
                                            <svg viewBox="0 0 111 30" data-uia="netflix-logo" className="svg-icon svg-icon-netflix-logo" aria-hidden="true" focusable="false">
                                                <g id="netflix-logo">
                                                    <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14">
                                                    </path>
                                                </g>
                                            </svg>
                                            <span className="screen-reader-text">Netflix</span>
                                        </span>
                                        <div className="lang-selection-container" id="lang-switcher">
                                            <div data-uia="language-picker-header+container"
                                                 className="ui-select-wrapper"><label
                                                htmlFor="lang-switcher-header-select" className="ui-label"><span
                                                className="ui-label-text">Sprache auswählen</span></label>
                                                <div className="select-arrow medium prefix globe"><select
                                                    data-uia="language-picker-header" className="ui-select medium"
                                                    id="lang-switcher-header-select" tabIndex="0"
                                                    placeholder="lang-switcher" control-id="ControlID-5">
                                                    <option selected="" lang="de" value="/de/" data-language="de"
                                                            data-country="DE">Deutsch
                                                    </option>
                                                    <option lang="en" value="/de-en/" data-language="en"
                                                            data-country="DE">English
                                                    </option>
                                                </select></div>
                                            </div>
                                        </div>
                                        <a href="/browse" className="authLinks redButton"
                                           data-uia="header-login-link">Einloggen</a></div>
                                </div>
                                <div className="our-story-cards" data-uia-nmhp="our-story-cards">
                                    <div className="our-story-card hero-card hero_fuji vlv" data-uia-nmhp="hero_fuji" data-uia="our-story-card">
                                        <div className="our-story-card-background">
                                            <div className="concord-img-wrapper" data-uia="concord-img-wrapper" style={{height: "751.594px"}}>
                                                <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/8b23d436-5377-4634-a617-9979ce6ac76f/DE-de-20230116-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/8b23d436-5377-4634-a617-9979ce6ac76f/DE-de-20230116-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/8b23d436-5377-4634-a617-9979ce6ac76f/DE-de-20230116-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/8b23d436-5377-4634-a617-9979ce6ac76f/DE-de-20230116-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="" />
                                                <div className="concord-img-gradient">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="our-story-card-text">
                                            <h1 id="" className="our-story-card-title" data-uia="hero-title">
                                                Unbegrenzt Filme, Serien und mehr
                                            </h1>
                                            <h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">
                                                Genießen Sie Netflix, wo immer Sie möchten. Jederzeit kündbar.
                                            </h2>
                                            <form className="cta-form email-form" data-uia="email-form" method="GET">
                                                <h3 className="email-form-title">
                                                    Sind Sie startklar? Geben Sie Ihre E-Mail-Adresse ein, um Ihre Mitgliedschaft zu beginnen oder zu reaktivieren.
                                                </h3>
                                                <div className="email-form-lockup">
                                                    <ul className="simpleForm structural ui-grid">
                                                        <li data-uia="field-email+wrapper"
                                                            className="nfFormSpace field-email">
                                                            <div data-uia="field-email+container"
                                                                 className="nfInput nfInputResponsive">
                                                                <div className="nfInputPlacement">
                                                                    <label className="input_id" placeholder="email">
                                                                        <input type="email" data-uia="field-email" name="email" className="nfTextField" id="id_email_hero_fuji" value="" tabIndex="0" autoComplete="email" maxLength="50" minLength="5" dir="" placeholder="" control-id="ControlID-1" />
                                                                        <label htmlFor="id_email_hero_fuji" className="placeLabel">E-Mail-Adresse</label>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="our-story-cta-container cta-link-wrapper">
                                                        <button className="btn nmhp-cta btn-red nmhp-cta-extra-large btn-none btn-custom" type="submit" autocomplete="off" tabIndex="0" role="link" data-uia="our-story-cta-hero_fuji" control-id="ControlID-2">
                                                            <span id="" className="cta-btn-txt" data-uia="">Loslegen</span>
                                                            <span id="" className="chevron-right-arrow" data-uia="">
                                                                <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fillRule="evenodd"></path></svg>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="center-pixel" style={{position:"absolute"}}></div>
                                    </div>
                                    <div className="our-story-card animation-card watchOnTv" data-uia-nmhp="watchOnTv"
                                         data-uia="our-story-card">
                                        <div className="animation-card-container">
                                            <div className="our-story-card-text">
                                                <h1 id="" className="our-story-card-title" data-uia="animation-card-title">
                                                    Auf Ihrem Fernseher
                                                </h1>
                                                <h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">
                                                    Streamen Siemit Smart-TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray-Player u. v. m.
                                                </h2>
                                            </div>
                                            <div className="our-story-card-img-container">
                                                <div className="our-story-card-animation-container">
                                                    <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img" />
                                                    <div className="our-story-card-animation" data-uia="our-story-card-animation">
                                                        <video className="our-story-card-video" data-uia="our-story-card-video" autoPlay="" playsInline="" muted="" loop="">
                                                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                                                        </video>
                                                        <div className="our-story-card-animation-text"></div>
                                                        <div className="our-story-card-animation-custom"
                                                             data-uia="our-story-card-custom" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="center-pixel" style={{position:"absolute"}}></div>
                                        </div>
                                    </div>
                                    <div className="our-story-card animation-card watchOnDevice flipped"
                                         data-uia-nmhp="watchOnDevice" data-uia="our-story-card">
                                        <div className="animation-card-container">
                                            <div className="our-story-card-text">
                                                <h1 id="" className="our-story-card-title" data-uia="animation-card-title">
                                                    Auf allen Geräten
                                                </h1>
                                                <h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">
                                                    Sie können unbegrenzt Filme und Serien auf Ihrem Smartphone, Tablet, Laptop und Fernseher ansehen – ohne Extragebühren.
                                                </h2>
                                            </div>
                                            <div className="our-story-card-img-container">
                                                <div className="our-story-card-animation-container">
                                                    <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" data-uia="our-story-card-img" />
                                                    <div className="our-story-card-animation" data-uia="our-story-card-animation">
                                                        <video className="our-story-card-video" data-uia="our-story-card-video" autoPlay="" playsInline="" muted="" loop="" >
                                                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
                                                        </video>
                                                        <div className="our-story-card-animation-text"></div>
                                                        <div className="our-story-card-animation-custom" data-uia="our-story-card-custom" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="center-pixel" style={{position:"absolute"}}></div>
                                        </div>
                                    </div>
                                    <div className="our-story-card animation-card kidsValueProp"
                                         data-uia-nmhp="kidsValueProp" data-uia="our-story-card">
                                        <div className="animation-card-container">
                                            <div className="our-story-card-text">
                                                <h1 id="" className="our-story-card-title" data-uia="animation-card-title">
                                                    Profile für Kinder erstellen
                                                </h1>
                                                <h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">
                                                    Schicken Sie Kinder auf Abenteuer mit ihren Lieblingsfiguren in einem speziell auf ihre Bedürfnisse abgestimmten Kids-Bereich, der ohne Aufpreis in Ihrer Mitgliedschaft inbegriffen ist.
                                                </h2>
                                            </div>
                                            <div className="our-story-card-img-container">
                                                <div className="our-story-card-animation-container">
                                                    <img alt="" className="our-story-card-img" src="https://occ-0-1490-2773.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVQJAYnFD-7T5xVFXMD0XzHsQzMajxuCxBBV140Poh4PomimUtpx_DanZ0w-VlpsfROeQEroObAYl3zsLjwKBkq5PZ8eL5Rlb2rE.png?r=244" data-uia="our-story-card-img" />
                                                    <div className="our-story-card-animation" data-uia="our-story-card-animation">
                                                        <div className="our-story-card-animation-text"></div>
                                                        <div className="our-story-card-animation-custom" data-uia="our-story-card-custom" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="center-pixel" style={{position:"absolute"}}></div>
                                        </div>
                                    </div>
                                    <div className="our-story-card animation-card downloadAndWatch flipped"
                                         data-uia-nmhp="downloadAndWatch" data-uia="our-story-card">
                                        <div className="animation-card-container">
                                            <div className="our-story-card-text">
                                                <h1 id="" className="our-story-card-title" data-uia="animation-card-title">
                                                    Serien herunterladen und offline genießen
                                                </h1>
                                                <h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">
                                                    Bei sämtlichen Abos außer dem Basis-Abo mit Werbung inbegriffen.
                                                </h2>
                                            </div>
                                            <div className="our-story-card-img-container">
                                                <div className="our-story-card-animation-container">
                                                    <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="our-story-card-img" />
                                                    <div className="our-story-card-animation"
                                                         data-uia="our-story-card-animation">
                                                        <div className="our-story-card-animation-image">
                                                            <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                                                        </div>
                                                        <div className="our-story-card-animation-text">
                                                            <div id="" className="text-0" data-uia="">Stranger Things
                                                            </div>
                                                            <div id="" className="text-1" data-uia="">Download läuft …
                                                            </div>
                                                        </div>
                                                        <div className="our-story-card-animation-custom"
                                                             data-uia="our-story-card-custom" aria-hidden="true">
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="center-pixel" style={{position:"absolute"}}></div>
                                        </div>
                                    </div>
                                    <div className="our-story-card faq-card" data-uia-nmhp="faq"
                                         data-uia="our-story-card" id="faq">
                                        <div className="our-story-card-text">
                                            <h1 id="" className="our-story-card-title" data-uia="faq-title">
                                                Häufig gestellte Fragen
                                            </h1>
                                            <ul className="faq-list">
                                                <li className="faq-list-item" data-uia-nmhp="faq-list-item"
                                                    data-uia-faq="what_to_watch_originals_nft">
                                                    <button className="faq-question">
                                                        Welche Inhalte kann ich auf Netflix ansehen?
                                                        <svg id="thin-x" viewBox="0 0 26 26"
                                                             className="svg-icon svg-icon-thin-x svg-closed"
                                                             focusable="true">
                                                            <path
                                                                d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                                        </svg>
                                                    </button>
                                                    <div className="faq-answer closed"><span id="" data-uia="">Netflix bietet eine riesige Auswahl an Spielfilmen, Dokumentationen, Serien, Anime, preisgekrönten Netflix Originalen und mehr. Schauen Sie, so viel Sie möchten – so oft und wann immer Sie wollen.<br/><br/><a
                                                        href="https://www.netflix.com/de/browse/genre/839338">Schauen Sie sich eine kleine Auswahl unserer Titel an.</a>.</span>
                                                    </div>
                                                </li>
                                                <li className="faq-list-item" data-uia-nmhp="faq-list-item"
                                                    data-uia-faq="what_is_netflix_ad_plan">
                                                    <button className="faq-question">Was ist Netflix?
                                                        <svg id="thin-x" viewBox="0 0 26 26"
                                                             className="svg-icon svg-icon-thin-x svg-closed"
                                                             focusable="true">
                                                            <path
                                                                d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                                        </svg>
                                                    </button>
                                                    <div className="faq-answer closed">
                                                        <span id="" data-uia="">Netflix ist ein Streaming-Dienst, dessen Mitglieder ein vielseitiges Angebot von preisgekrönten Serien, Filmen, Dokumentationen und mehr auf Tausenden mit dem Internet verbundenen Geräten nutzen können.<br /><br />Sie können jederzeit und überall so viele Inhalte ansehen wie Sie möchten – für einen geringen monatlichen Pauschalbetrag. Es gibt immer etwas Neues zu entdecken und jede Woche kommen weitere Serien und Filme dazu.</span>
                                                    </div>
                                                </li>
                                                <li className="faq-list-item" data-uia-nmhp="faq-list-item"
                                                    data-uia-faq="cost">
                                                    <button className="faq-question">Wie viel kostet Netflix?
                                                        <svg id="thin-x" viewBox="0 0 26 26"
                                                             className="svg-icon svg-icon-thin-x svg-closed"
                                                             focusable="true">
                                                            <path
                                                                d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                                        </svg>
                                                    </button>
                                                    <div className="faq-answer closed"><span id="" data-uia="">Für einen monatlichen Pauschalbetrag können Sie Netflix auf Ihrem Smartphone, Tablet, Smart-TV, Laptop oder Streaming-Gerät genießen. Die Abos kosten 4,99&nbsp;€ bis 17,99&nbsp;€ pro Monat. Keine Extrakosten, keine Verträge.</span>
                                                    </div>
                                                </li>
                                                <li className="faq-list-item" data-uia-nmhp="faq-list-item"
                                                    data-uia-faq="netflix_with_ads">
                                                    <button className="faq-question">Was ist anders beim Basis-Abo mit
                                                        Werbung?
                                                        <svg id="thin-x" viewBox="0 0 26 26"
                                                             className="svg-icon svg-icon-thin-x svg-closed"
                                                             focusable="true">
                                                            <path
                                                                d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                                        </svg>
                                                    </button>
                                                    <div className="faq-answer closed"><span id="" data-uia="">Das Basis-Abo mit Werbung ist eine tolle Möglichkeit, Filme und Serien zu einem günstigeren Preis zu genießen. Sie können Ihre Lieblingstitel auf jedem beliebigen Endgerät mit begrenzten Werbeunterbrechungen streamen. Mit diesem Abo sind keine Downloads möglich und eine begrenzte Anzahl von Filmen und Serien ist aus Lizenzgründen nicht verfügbar. Es gelten auch einige Einschränkungen in Bezug auf Standort und Endgerät. <a
                                                        href="https://help.netflix.com/node/126831">Weitere Infos</a>.</span>
                                                    </div>
                                                </li>
                                                <li className="faq-list-item" data-uia-nmhp="faq-list-item"
                                                    data-uia-faq="where_to_watch">
                                                    <button className="faq-question">Wo kann ich Inhalte ansehen?
                                                        <svg id="thin-x" viewBox="0 0 26 26"
                                                             className="svg-icon svg-icon-thin-x svg-closed"
                                                             focusable="true">
                                                            <path
                                                                d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                                        </svg>
                                                    </button>
                                                    <div className="faq-answer closed"><span id="" data-uia="">Sie können unsere Inhalte überall und jederzeit ansehen. Loggen Sie sich mit Ihrem Netflix-Konto auf der Website unter netflix.com ein, um direkt auf Ihrem Computer Inhalte anzusehen. Sie können sich auch auf einem Gerät mit Internetverbindung einloggen, auf dem die Netflix-App installiert ist, zum Beispiel auf Smart-TVs, Smartphones, Tablets, Streaming-Playern und Spielkonsolen.<br/><br/>Darüber hinaus können Sie Ihre Lieblingsserien auch auf Ihr iOS- oder Android-Mobilgerät oder über Ihre Windows-10-App herunterladen. Mit Downloads können Sie Netflix auch ohne Internetverbindung überall genießen. Nehmen Sie Netflix einfach überall hin mit.</span>
                                                    </div>
                                                </li>
                                                <li className="faq-list-item" data-uia-nmhp="faq-list-item"
                                                    data-uia-faq="cancel">
                                                    <button className="faq-question">Wie kann ich kündigen?
                                                        <svg id="thin-x" viewBox="0 0 26 26"
                                                             className="svg-icon svg-icon-thin-x svg-closed"
                                                             focusable="true">
                                                            <path
                                                                d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                                        </svg>
                                                    </button>
                                                    <div className="faq-answer closed"><span id="" data-uia="">Mit Netflix sind Sie flexibel. Bei uns gibt es keine lästige Vertragsbindung oder Verpflichtung. Sie können Ihr Konto ganz leicht mit nur zwei Klicks online kündigen. Es gibt keine Kündigungsgebühren, die Mitgliedschaft kann jederzeit begonnen oder angehalten werden.</span>
                                                    </div>
                                                </li>
                                                <li className="faq-list-item" data-uia-nmhp="faq-list-item"
                                                    data-uia-faq="kids_value_prop">
                                                    <button className="faq-question">Ist Netflix gut für Kinder?
                                                        <svg id="thin-x" viewBox="0 0 26 26"
                                                             className="svg-icon svg-icon-thin-x svg-closed"
                                                             focusable="true">
                                                            <path
                                                                d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                                        </svg>
                                                    </button>
                                                    <div className="faq-answer closed"><span id="" data-uia="">Der Kids-Bereich von Netflix ist bereits in Ihrer Mitgliedschaft inbegriffen und gibt Eltern die Kontrolle über das Unterhaltungserlebnis ihrer Kinder, damit diese familienfreundliche Serien und Filme in einem eigens auf ihre Bedürfnisse abgestimmten Bereich genießen können.<br/><br/>Kinderprofile sind mit einer PIN-geschützten Kindersicherung versehen, mit der Sie die Altersfreigabe von Titeln einschränken können, die angezeigt werden, und bestimmte Titel für Kinder sperren können.</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <form className="cta-form email-form" data-uia="email-form" method="GET"><h3
                                                className="email-form-title">Sind Sie startklar? Geben Sie Ihre
                                                E-Mail-Adresse ein, um Ihre Mitgliedschaft zu beginnen oder zu
                                                reaktivieren.</h3>
                                                <div className="email-form-lockup">
                                                    <ul className="simpleForm structural ui-grid">
                                                        <li data-uia="field-email+wrapper"
                                                            className="nfFormSpace field-email">
                                                            <div data-uia="field-email+container"
                                                                 className="nfInput nfInputResponsive">
                                                                <div className="nfInputPlacement"><label
                                                                    className="input_id" placeholder="email"><input
                                                                    type="email" data-uia="field-email" name="email"
                                                                    className="nfTextField" id="id_email_faq" value=""
                                                                    tabIndex="0" autoComplete="email" maxLength="50"
                                                                    minLength="5" dir="" placeholder=""
                                                                    control-id="ControlID-3"/><label
                                                                    htmlFor="id_email_faq"
                                                                    className="placeLabel">E-Mail-Adresse</label></label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="our-story-cta-container cta-link-wrapper">
                                                        <button
                                                            className="btn nmhp-cta btn-red nmhp-cta-extra-large btn-none btn-custom"
                                                            type="submit" autocomplete="off" tabIndex="0" role="link"
                                                            data-uia="our-story-cta-faq" control-id="ControlID-4"><span
                                                            id="" className="cta-btn-txt"
                                                            data-uia="">Loslegen</span><span id=""
                                                                                             className="chevron-right-arrow"
                                                                                             data-uia=""><svg
                                                            viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path
                                                            d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                                                            fill="none" fillRule="evenodd"></path></svg></span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/common/transparent_1x1.png" aria-hidden="true" alt="" style={{position:"absolute"}} />
                                            <div className="center-pixel" style={{position:"absolute"}}></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
