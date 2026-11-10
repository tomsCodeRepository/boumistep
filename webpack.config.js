const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore

    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    .copyFiles({
        from: './assets/images',
        
        // optional target path, relative to the output dir
        to: 'images/[path][name].[ext]',

        
        // if versioning is enabled, add the file hash too
        //to: 'images/[path][name].[hash:8].[ext]',
        
        // only copy files matching this pattern
        //pattern: /\.(png|jpg|jpeg)$/
             })
    .copyFiles({
        from: './assets/manifest',
        to: 'manifest/[path][name].[ext]',

    })




    // .copyFiles({
    //     from: './assets/sw.js',
    //     to: '[path][name].[ext]',
    //
    // })
        

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('/', './assets/app.js')
    .addEntry('app', './assets/app.js')
    .addEntry('home', './assets/js/home.js')
    .addEntry('menuPush', './assets/js/menuPush.js')
    .addEntry('contact', './assets/js/contact.js')
    .addEntry('gallery', './assets/js/gallery.js')
    .addEntry('flotte', './assets/js/flotte')
    //.addEntry('flotte', './assets/styles/flotte.scss')
    // .addEntry('sw', './assets/js/sw.js')

    //.addEntry('PhotoSwipe', '/node_modules/photoswipe/src/js/photoswipe.js')
    .addEntry('PhotoSwipeLightbox', '/node_modules/photoswipe/src/js/lightbox/lightbox.js')
    //.addEntry('photoswipe', '/node_modules/photoswipe/src/photoswipe.css')

    // .addEntry('umd', '/node_modules/photoswipe/dist/umd/photoswipe.umd.min.js')
    // .addEntry('lightbox', '/node_modules/photoswipe/dist/umd/photoswipe-lightbox.umd.min.js')
    // .addEntry('photoswipe', '/node_modules/photoswipe/src/photoswipe.css')



    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    .enableStimulusBridge('./assets/controllers.json')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())

    // enableVersioning() enables hashed filenames (e.g. app.abc123.css)
    //https://symfonycasts.com/screencast/webpack-encore-legacy/versioning#enabling-versioning
    //Configurer votre serveur Web pour définir un en-tête Expires de longue durée sur tous les fichiers du répertoire /build
    .enableVersioning() //.enableVersioning(Encore.isProduction())


    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // enables Sass/SCSS support
    .enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use React
    //.enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
