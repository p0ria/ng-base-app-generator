module.exports = {
  important: true,
  purge: {
    enabled: process.env.PURGE_TW === 'true',
    content: [
      'apps/**/*.html',
      'apps/**/*.ts',
      'libs/**/*.html',
      'libs/**/*.ts',
    ],
  },
  theme: {
    extend: {
      screens: {
        xs: '350px',
      },
      colors: {
        primary: 'var(--color-primary)',
      },
      textColor: {
        'oraanoos_black': '#323232',
      },
      padding: {
        '10/9': '93.125%',
        '1/1': '100%',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  }
};
