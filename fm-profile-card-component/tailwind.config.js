module.exports = {
  purge: {
    enabled: true,
    content: ["./public/**/*.html"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'kumbh' : ['"Kumbh sans"', 'sans-serif']
      },
      colors: {
        'darkCyan' : 'hsl(185, 75%, 39%)',
        'darkBlue' : 'hsl(229, 23%, 23%)',
        'grayBlue' : 'hsl(227, 10%, 46%)',
        'darkGray' : 'hsl(0, 0%, 59%)'
      },
      minWidth: {
        '80' : '20rem'
      },
      maxWidth: {
        '88' : '22rem',
      },
      width: {
        '26' : '6.8rem',
      },
      height: {
        '34' : '8.5rem',
        '26' : '6.8rem',
      },
      backgroundPosition: {
        'patternPosition' : 'right 45vw bottom 45vh, left 40vw top 40vh',
        'patternPosition-lg' : 'right 52vw bottom 34.5vh, left 48vw top 52vh'
      },
      backgroundImage: theme => ({
        'pattern' : "url('../image/bg-pattern-top.svg'), url('../image/bg-pattern-bottom.svg')"
      }),
      borderWidth: {
        '6' : '6px'
      },
      fontSize: {
        '2xs' : '0.65rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
