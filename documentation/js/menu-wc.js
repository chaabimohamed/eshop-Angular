'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">e-shop documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2d1b397ffeba79a8d15db67922f5e759bd72bc8488c03851498cbea89259dfcd961668b6e847bbcd035dac63855425cc84dbfe62640631c71abc575f91ed7a9d"' : 'data-target="#xs-components-links-module-AppModule-2d1b397ffeba79a8d15db67922f5e759bd72bc8488c03851498cbea89259dfcd961668b6e847bbcd035dac63855425cc84dbfe62640631c71abc575f91ed7a9d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2d1b397ffeba79a8d15db67922f5e759bd72bc8488c03851498cbea89259dfcd961668b6e847bbcd035dac63855425cc84dbfe62640631c71abc575f91ed7a9d"' :
                                            'id="xs-components-links-module-AppModule-2d1b397ffeba79a8d15db67922f5e759bd72bc8488c03851498cbea89259dfcd961668b6e847bbcd035dac63855425cc84dbfe62640631c71abc575f91ed7a9d"' }>
                                            <li class="link">
                                                <a href="components/AboutPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BrandsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrandsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KidsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KidsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KidsShopComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KidsShopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LatestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenShopComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenShopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RelatedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RelatedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServicesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServicesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SingleProdComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SingleProdComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SingleProductPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SingleProductPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WeareComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WeareComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WomenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WomenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WomenShopComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WomenShopComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FiltersFunctionService.html" data-type="entity-link" >FiltersFunctionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LatestService.html" data-type="entity-link" >LatestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SingleProdService.html" data-type="entity-link" >SingleProdService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});