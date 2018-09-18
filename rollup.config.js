import babel from 'rollup-plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'picker'
  },
  plugins: [
    babel({
      "presets": [[
        "env",
        {
          "modules": false
        } 
      ]]
    })
  ]
}