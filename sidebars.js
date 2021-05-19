module.exports = {
  componentsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: ['nativebase', 'installation', 'setup-provider'],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'style-props',
        'color-mode',
        'nativebase-factory',
        'responsive-style',
        'safe-area-view-props',
        'accessibility',
      ],
    },
    {
      type: 'category',
      label: 'Theme',
      collapsed: false,
      items: [
        'default-theme',
        'customizingTheme',
        'darkMode',
        'customizingComponents',
        'breakpoint',
        'theme',
      ],
    },
    {
      type: 'category',
      label: 'Layout',
      collapsed: false,
      items: [
        // 'aspectRatio',
        'box',
        'center',
        'container',
        'flex',
        'hStack',
        // 'simpleGrid',
        'stack',
        // 'view',
        'VStack',
        // 'wrap',
        'ZStack',
      ],
    },
    {
      type: 'category',
      label: 'Forms',
      collapsed: false,
      items: [
        'button',
        // 'cascader',
        'checkBox',
        // 'date-picker',
        'formControl',
        'iconButton',
        'input',
        // 'textField',
        // 'numberInput',
        'link',
        // 'pinInput',
        'radio',
        'select',
        'slider',
        'switch',
        'textArea',
        // 'typeAhead',
      ],
    },
    {
      type: 'category',
      label: 'Data Display',
      collapsed: false,
      items: [
        'badge',
        // 'closeButton',
        // 'code',
        'divider',
        // 'Kbd',
        'list',
        // 'stat',
        // 'swipable-list',
        // 'tag',
      ],
    },
    {
      type: 'category',
      label: 'Feedback',
      collapsed: false,
      items: [
        'alert',
        // 'circularProgress',
        'progress',
        // 'skeleton',
        // 'snackBar',
        'spinner',
        'toast',
      ],
    },
    {
      type: 'category',
      label: 'Typography',
      collapsed: false,
      items: ['text', 'heading'],
    },
    {
      type: 'category',
      label: 'Overlay',
      collapsed: false,
      items: [
        'alertDialog',
        'menu',
        'modal',
        //  'overlay'
        'popOver',
        'tooltip',
      ],
    },
    {
      type: 'category',
      label: 'Disclosure',
      collapsed: false,
      items: [
        // 'accordion',
        'actionSheet',
        // 'breadcrumb',
        // 'collapse',
        // 'pagination',
        // 'tabs',
      ],
    },
    {
      type: 'category',
      label: 'Media and Icons',
      collapsed: false,
      items: ['avatar', 'icon', 'image'],
    },
    {
      type: 'category',
      label: 'Others',
      collapsed: false,
      items: [
        // 'appBar',
        'FAB',
        'transition',
      ],
    },
    {
      type: 'category',
      label: 'Hooks',
      collapsed: false,
      items: [
        'use-disclosure',
        'use-popOver',
        'use-breakPoint-value',
        'use-clipboard',
        'use-media-query',
        'use-theme',
        'use-token',
        'use-color-mode',
        'use-color-mode-value',
        'use-contrast-text',
        'use-accessible-colors',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      collapsed: false,
      items: ['todo-example'],
    },
    {
      type: 'category',
      label: 'Community Integration',
      collapsed: false,
      items: ['react-hook-forms', 'nativebase-formik-ui'],
    },
    {
      type: 'category',
      label: 'Recipes',
      collapsed: false,
      items: [
        {
          Designs: ['buildingCard', 'buildingSearchBar'],
          Forms: ['form'],
          Layout: ['appDrawer'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Migration',
      collapsed: false,
      items: [
        {
          Components: [
            'migration/Accordion',
            'migration/Actionsheet',
            'migration/Badge',
            'migration/Button',
            'migration/Card',
            'migration/Checkbox',
            'migration/FABs',
            'migration/Footer Tab',
            'migration/Header',
            'migration/Icon',
            'migration/Layout',
            'migration/Picker',
            'migration/Radio Button',
            'migration/Searchbar',
            'migration/Spinner',
            'migration/Tabs',
            'migration/Thumbnail',
            'migration/Toast',
            'migration/Typography',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'More',
      collapsed: false,
      items: ['changelog', 'faq'],
    },
  ],
};
