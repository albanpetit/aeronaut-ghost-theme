# Aeronaut ghost theme

A minimalist, cardstyle, opensource Ghost Theme for optimal desktop and mobile experiences based on daisyUI.

# Project structure

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

This theme has lots of code comments to help explain what's going on just by reading the code. Once you feel comfortable with how everything works, we also have full [theme API documentation](https://ghost.org/docs/themes/) which explains every possible Handlebars helper and template.

**The main files are:**

- `default.hbs` - The parent template file, which includes your global header/footer
- `home.hbs` - The home page template with a short description of the website and short list ooh posts
- `index.hbs` - The main template to generate a list of posts
- `post.hbs` - The template used to render individual posts
- `page.hbs` - Used for individual pages
- `tag.hbs` - Used for tag archives, eg. "all posts tagged with `news`"
- `author.hbs` - Used for author archives, eg. "all posts written by Jamie"

One neat trick is that you can also create custom one-off templates by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for an `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-ali.hbs` - Custom template for `/author/ali/` archive

## Custom home page template 

This theme has a specific template for the home page which requires a change in the routes, for this **Ghost** supports this function directly in the administration interface `Admin console -> Settings -> Labs -> Upload file routes`. Below an example of configuration with the `home.hbs` template : 

```yaml
routes:
  /:     
    data: page.home
    template: home
    
collections:
  /blog/:
    permalink: /blog/{slug}/
    template: index

taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
```

## Local development guide

The Aeronaut theme provides a first-class development experience out of the box. 

### Setup

To see realtime changes during development, symlink the Starter theme folder to the `content/themes` folder in your local `Ghost` install. 

```bash
ln -s /path/to/starter /ghost/content/themes/starter
```

Restart Ghost and select the Starter theme from **Settings**.

From the theme's root directory, install the dependencies:

```bash
npm install
```

If `Node` isn't installed, follow the [official Node installation guide](https://nodejs.org/).

### Start development mode

From the Aeronaut theme folder, start development mode:

```bash
npm run dev
```

Changes you make to your styles, scripts, and Handlebars files will show up automatically in the browser. CSS and Javascript will be compiled and output to the `built` folder.

Press `ctrl + c` in the terminal to exit development mode.

### Build, zip, and test your theme

Compile your CSS and JavaScript assets for production with the following command:

```bash
npm run build
```

Create a zip archive:

```bash
npm run zip
```

Use `gscan` to test your theme for compatibility with Ghost:

```bash
npm run test
```

## Docker container development guide

Aeronaut support development though docker container, so if **Docker** isn't installed, follow the [official Docker installation guide](https://docs.docker.com/engine/install/).

With **Docker** in place, a simple command runs two development containers: the **Ghost official image** with a **MySQL** database. All the critical files of the containers are stored in a new folder: **container-content**. This backup is useful for transferring data between container rebuilds without a full manual reconfiguration.

## Devcontainer

The `Visual Studio Code Dev Containers extension`lets you use a container as a full-featured development environment. It allows you to open any folder inside (or mounted into) a container and take advantage of Visual Studio Code's full feature set.

Aeronaut support a devcontainer setup, so with a updated version of `Docker`, `VS Code` and the `Dev container` extension installed, just open the Aeronaut project main folder. VScode immediately offers you to build the containers necessary to develop and test Aeronaut within a `Docker` container.

# SVG Icons

Casper uses inline SVG icons, included via Handlebars partials. You can find all icons inside `/partials/icons`. To use an icon just include the name of the relevant file, eg. To include the SVG icon in `/partials/icons/rss.hbs` - use `{{> "icons/rss"}}`.

You can add your own SVG icons in the same manner.

# Copyright & License

Copyright (c) 2013-2023 Alban Petit - Released under the [MIT license](LICENSE).