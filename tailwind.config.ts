import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        //        'bg-primary': '#a41966',
        'bg-primary': '#000000',
      }
    },
    fontFamily: {
      'serif': ['"Tex Gyre Bonum"'],
    }
  },

  plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
