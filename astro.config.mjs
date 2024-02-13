import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  // site: 'https://blank-generation.github.io',
  // base: '/fgr-astro',
  integrations: [NetlifyCMS({
    config: {
      backend: {
        name: 'git-gateway',
        branch: 'main'
      },
      collections: [{
        name: 'FGR page',
        label: 'FGR page',
        folder: 'src/pages/fgr/content',
        fields: [{
          name: 'title',
          widget: 'string',
          label: 'Page Title'
        }, {
          name: 'image',
          widget: 'image',
          label: 'Image'
        }, {
          name: 'para1',
          widget: 'markdown',
          label: 'Paragraph 1'
        }, {
          name: 'para2',
          widget: 'markdown',
          label: 'Paragraph 2'
        }, {
          name: 'para3',
          widget: 'markdown',
          label: 'Paragraph 3'
        }]
      }, {
        name: 'Radio Shows',
        label: 'Radio Shows',
        folder: 'src/pages/radio/content',
        create: true,
        delete: true,
        fields: [{
          name: 'title',
          widget: 'string',
          label: 'Page Title'
        }, {
          name: 'img',
          widget: 'image',
          label: 'ArtWork'
        }, {
          name: 'date',
          widget: 'datetime',
          label: 'Date'
        }, {
          name: 'tags',
          widget: 'list',
          label: 'Tags',
          allow_add: true,
          allow_delete: true,
          field: {
            name: 'tag',
            widget: 'string'
          }
        }, {
          name: 'about',
          widget: 'markdown',
          label: 'About'
        }, {
          name: 'tracklist',
          widget: 'list',
          label: 'Tracklist',
          allow_add: true,
          allow_delete: true,
          field: {
            name: 'track',
            widget: 'string'
          }
        }, {
          name: 'link',
          widget: 'string',
          label: 'Mixcloud Link'
        }, {
          name: 'curator',
          widget: 'relation',
          label: 'Curator',
          collection: 'Curators',
          value_field: 'name',
          search_fields: ['name']
        }]
      }, {
        name: 'Curators',
        label: 'Curators',
        folder: 'src/pages/curators/content',
        identifier_field: 'name',
        create: true,
        delete: true,
        fields: [{
          name: 'name',
          widget: 'string',
          label: 'Name'
        }, {
          name: 'img',
          widget: 'image',
          label: 'Image'
        }, {
          name: 'bio',
          widget: 'markdown',
          label: 'Bio'
        }, {
          name: 'link',
          widget: 'string',
          label: 'Socials Link'
        }, {
          name: 'show',
          widget: 'relation',
          label: 'Show',
          collection: 'Radio Shows',
          value_field: 'title',
          search_fields: ['title']
        }]
      }, {
        name: 'Contact',
        label: 'Contact',
        folder: 'src/content/contact',
        fields: [{
          name: 'title',
          widget: 'string',
          label: 'Contact Title'
        }, {
          name: 'content',
          widget: 'markdown',
          label: 'Content'
        }, {
          name: 'email',
          widget: 'string',
          label: 'Email'
        }, {
          name: 'img',
          widget: 'image',
          label: 'Cover Image'
        }, {
          name: 'contactperson1',
          widget: 'object',
          label: 'Contact Person 1',
          fields: [{
            name: 'name',
            widget: 'string',
            label: 'Name'
          }, {
            name: 'email',
            widget: 'string',
            label: 'Email'
          }, {
            name: 'img',
            widget: 'image',
            label: 'Image'
          }, {
            name: 'phone',
            widget: 'string',
            label: 'Phone'
          }]
        }, {
          name: 'contactperson2',
          widget: 'object',
          label: 'Contact Person 2',
          fields: [{
            name: 'name',
            widget: 'string',
            label: 'Name'
          }, {
            name: 'email',
            widget: 'string',
            label: 'Email'
          }, {
            name: 'img',
            widget: 'image',
            label: 'Image'
          }, {
            name: 'phone',
            widget: 'string',
            label: 'Phone'
          }]
        }]
      }]
    }
  }), tailwind()]
});