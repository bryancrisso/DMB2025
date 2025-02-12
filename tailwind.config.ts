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
        'downing-magenta': '#a41966',
        'baby-blue': '#98bee2',
        'royal-purple': '#3E2C8B',
        'off-white': '#FFFEF2',
        'very-off-white': '#EEE6D9',
        'dark-gold': '#d4a307',
        'burnt-orange': '#ba6d29',
        'blush-pink': '#f4bfc3',
        'crimson': '#991722',
        'dark-red': '#6F0E1E',
        'darkest-red': '#2A0F0F',
      }
    },
    fontFamily: {
      'serif': ['"Pirata One"'],
      'medium': ['"Tex Gyre Bonum"'],
    },
  },

  plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
