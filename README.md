# CSS
We are using tailwind. To set it up:
1. webpack needs a `postcss-loader`, which is added to `webpack.config.cjs`
This parses through all the css and builds and AST to open up a bunch of plugins to interact with the css.
2. Because the `postcss-loader`, we need a `postcss.config.cjs` file to allow tailwind to parse through the css AST.
3. We also need `tailwind.config.cjs` to configure tailwind. 
Note that the `content` section is important because tailwind looks through all your HTML/JSX to extract all the classnames to generate only the css relevant to your usage.
