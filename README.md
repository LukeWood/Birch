# Birch
Birch is the hugo theme I used to generate my personal site,  https://LukeWood.dev.

Birch is lightweight, slick, and modern.  Out of the box birch scores 100/100 in all (web.dev)[https://web.dev/] audit categories (performance, accessibility, best practicies, and SEO).
Your users will rejoice as the page loads and becomes interactive within an instant.

Birch ships with a default list page to renders any generic list of content as well as a specialized projects page.
The projects page gracefully allows you to link users to relevant resources to show off your portfolio.

Birch ships by default with both a day and night mode.

Finally, Birch ships as a Progressive Web App.
This means users can download your personal site as an app on their desktop or phone.
*Coming Soon, offline site browsing*

# Setup
Setting up the theme is easy!

```
git submodule add -f https://github.com/lukewood/wood themes/birch
(cd themes/birch && npm install)
```

Next pick an icon and set a reference to it in theme.toml.
The icon must be stored in `assets/` as birch performs some processing on it.

- populate `content/projects/`
- populate `content/posts/`
- populate `content/about.md`

## config.toml
[params]
  [[params.social]]
    name = "github"
    url = "https://github.com/LukeWood"

[menu.main]
  name = "About"
  url = "/about"
  weight = 0

## Optional

[menu.header]
  name = "About"
  url = "/about"
  weight = 0

# Respects Due
The social media icons and svg template are taken from the [hermit hugo theme](https://github.com/Track3/hermit).  Huge shout out to Track3 for publishing those icons as open source.

Thanks to the hugo team for making this all possible.  hugo is an amazing static site generator.

# Want to thank me?
TODO tip jar
