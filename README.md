# mckl-microsites

```
Currently using *ParcelV1*
- .vue <style> have issue; move all styling for .vue to /scss/vue/*.scss
```

[leadform](https://docs.google.com/spreadsheets/d/1RTfHGUgFTJ1ut3GAfeNXCTP3o6nNXFF_ITNACk4qH4M/edit#gid=0)

## dev
```
parcel src/**/*.html

parcel src\html-acca\*.html
parcel src\html-digital\*.html
parcel src\html-openday\*.html
parcel src\html-scholarship\*.html
parcel src\html-udemy\*.html
parcel src\html-social\*.html
```

http://localhost:1234/html-acca/index.html
http://localhost:1234/html-digital/index.html
http://localhost:1234/html-openday/index.html
http://localhost:1234/html-scholarship/index.html
http://localhost:1234/html-udemy/index.html
http://localhost:1234/html-social/index.html

## build

```
parcel build src\html-acca\*.html --no-minify --public-url="./" --out-dir="build/acca"
parcel build src\html-digital\*.html --no-minify --public-url="./" --out-dir="build/digital-programme"
parcel build src\html-openday\*.html --no-minify --public-url="./" --out-dir="build/open-day"
parcel build src\html-scholarship\*.html --no-minify --public-url="./" --out-dir="build/scholarship"
parcel build src\html-udemy\*.html --no-minify --public-url="./" --out-dir="build/short-courses"
parcel build src\html-social\*.html --no-minify --public-url="./" --out-dir="build/social-work"
parcel build src\html-business\*.html --no-minify --public-url="./" --out-dir="build/busincess-programme"
```

```
parcel build src\\html-acca\\*.html --no-minify --public-url=./ --out-dir=build/acca && parcel build src\\html-digital\\*.html --no-minify --public-url=./ --out-dir=build/digital-programme && parcel build src\\html-openday\\*.html --no-minify --public-url=./ --out-dir=build/open-day && parcel build src\\html-scholarship\\*.html --no-minify --public-url=./ --out-dir=build/scholarship && parcel build src\\html-udemy\\*.html --no-minify --public-url=./ --out-dir=build/short-courses && parcel build src\\html-social\\*.html --no-minify --public-url=./ --out-dir=build/social-work
```

## staging_url
https://staging.fishermen-analytics.com/mckl/acca/
https://staging.fishermen-analytics.com/mckl/digital-programme/
https://staging.fishermen-analytics.com/mckl/open-day/
https://staging.fishermen-analytics.com/mckl/scholarship/
https://staging.fishermen-analytics.com/mckl/short-courses/
https://staging.fishermen-analytics.com/mckl/social-work/

## live_url
https://mckl.edu.my/acca/
https://mckl.edu.my/digital-programme
https://mckl.edu.my/open-day/
https://mckl.edu.my/scholarship/
https://mckl.edu.my/short-courses/
https://mckl.edu.my/social-work/

## log

### 211230
- build all microsites and determined the URL for staging

### 211229
- merged mckl-acca/digital/social/udemy into project; all hardcoded and still yet to dissect into template

### 211228
- merged mckl-scholarship together with mckl-openday

### 210622 revision
[Gslides](https://drive.google.com/file/d/1dVecDPY_B3gHUbNvzRtW-76X3LB1dCoY/view)
- Jun 22, 2021, 9:49 AM

### 210310 Feeback
[GSlides](https://docs.google.com/presentation/d/1tnzcgNDeC72siogIGJIwve2-nBc6xJfvA29l0q6WBgk/edit#slide=id.p1)

### 210305 Updates
1. Add animated arrow at the bottom of website_banner to indicate more content below
2. Change the website content order
3. Add Forum agenda; + new Tables
4. Add Meet the Speakers
5. Add for add new checkbox; change the copy
[GDrive](https://drive.google.com/drive/u/1/folders/175BSk0MTjKBOzwCa7_6j5CPVIFIhunx2)
