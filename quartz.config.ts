import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "✦ ribonotes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: false,
    locale: "en-US",
    baseUrl: "notes.ribo.zone",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    generateSocialImages: false,
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "Victor Mono",
        body: "Victor Mono",
        code: "Victor Mono",
      },
      colors: {
        lightMode: {
          light: "#eee",
          lightgray: "#fff",
          gray: "#8c99a6",
          darkgray: "#22465c",
          dark: "#22465c",
          secondary: "#11a983",
          tertiary: "#5F9EA0",
          highlight: "#fff",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#162020",
          lightgray: "#203030",
          gray: "#627373",
          darkgray: "#b8bfbd",
          dark: "#b8bfbd",
          secondary: "#9aae56",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
    analytics: null
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.HardLineBreaks(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      Plugin.CNAME(),
    ],
  },
}

export default config
